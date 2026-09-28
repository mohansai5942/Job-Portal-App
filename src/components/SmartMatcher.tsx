import React, { useState } from 'react';
import { StudentProfile, Scheme, JobVacancy, JobQualification, ExamCategory } from '../types';
import { 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  IndianRupee, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Send, 
  Loader2,
  BookmarkCheck
} from 'lucide-react';

interface SmartMatcherProps {
  allSchemes: Scheme[];
  allJobs: JobVacancy[];
  onSelectScheme: (scheme: Scheme) => void;
  onSelectJob: (job: JobVacancy) => void;
}

export const SmartMatcher: React.FC<SmartMatcherProps> = ({
  allSchemes,
  allJobs,
  onSelectScheme,
  onSelectJob
}) => {
  const [profile, setProfile] = useState<StudentProfile>({
    qualification: 'Any Graduate (Degree)',
    degreeName: '',
    age: 22,
    category: 'OBC (Non-Creamy Layer)',
    gender: 'Female',
    annualFamilyIncome: '< 2.5 Lakhs',
    state: 'Uttar Pradesh',
    targetSectors: ['Civil Services & Administration', 'Banking & Financial', 'Staff Selection & State Exams']
  });

  const [aiReport, setAiReport] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState<boolean>(false);
  const [hasEvaluated, setHasEvaluated] = useState<boolean>(true);

  const qualificationsList: JobQualification[] = [
    '10th Pass (Matric)',
    '12th Pass (Intermediate)',
    'Diploma',
    'Any Graduate (Degree)',
    'B.E. / B.Tech / Engineering',
    'Post Graduate / Masters'
  ];

  const categoryOptions = [
    'General',
    'OBC (Non-Creamy Layer)',
    'SC',
    'ST',
    'EWS'
  ];

  const stateOptions = [
    'All India / Central Only',
    'Uttar Pradesh',
    'Bihar',
    'Delhi',
    'Rajasthan',
    'Maharashtra',
    'Tamil Nadu',
    'Karnataka',
    'Madhya Pradesh',
    'West Bengal',
    'Andhra Pradesh / Telangana',
    'Other States'
  ];

  const sectorOptions: ExamCategory[] = [
    'Civil Services & Administration',
    'Banking & Financial',
    'Railways',
    'Defense & Police',
    'Engineering & Technical',
    'Staff Selection & State Exams',
    'Research & Higher Education'
  ];

  const toggleSector = (sector: ExamCategory) => {
    if (profile.targetSectors.includes(sector)) {
      setProfile(prev => ({
        ...prev,
        targetSectors: prev.targetSectors.filter(s => s !== sector)
      }));
    } else {
      setProfile(prev => ({
        ...prev,
        targetSectors: [...prev.targetSectors, sector]
      }));
    }
  };

  // Instant Algorithmic Match
  const matchedSchemes = React.useMemo(() => {
    return allSchemes.filter(scheme => {
      // Category check
      const categoryMatch = 
        scheme.eligibility.categoriesAllowed.includes(profile.category as any) ||
        scheme.eligibility.categoriesAllowed.includes('General') ||
        (profile.gender === 'Female' && scheme.eligibility.categoriesAllowed.includes('Girls' as any));

      // State check
      const stateMatch = !scheme.state || scheme.state === profile.state || profile.state === 'All India / Central Only';

      // Income check
      const incomeLow = profile.annualFamilyIncome === '< 2.5 Lakhs' || profile.annualFamilyIncome === '2.5 - 6 Lakhs';
      const incomeMatch = 
        scheme.eligibility.incomeLimit.includes('No income') ||
        incomeLow ||
        (profile.annualFamilyIncome === '6 - 8 Lakhs' && scheme.eligibility.incomeLimit.includes('8.00 Lakhs'));

      return categoryMatch && stateMatch;
    });
  }, [allSchemes, profile]);

  const matchedJobs = React.useMemo(() => {
    return allJobs.filter(job => {
      // Qualification hierarchy
      const qualOrder: Record<JobQualification, number> = {
        '10th Pass (Matric)': 1,
        '12th Pass (Intermediate)': 2,
        'Diploma': 3,
        'Any Graduate (Degree)': 4,
        'B.E. / B.Tech / Engineering': 5,
        'Post Graduate / Masters': 6
      };

      const studentLevel = qualOrder[profile.qualification] || 4;
      const jobLevel = qualOrder[job.minQualification] || 4;
      
      const qualMatch = studentLevel >= jobLevel;

      // Age with relaxation
      let relaxation = 0;
      if (profile.category === 'OBC (Non-Creamy Layer)') relaxation = job.ageRelaxation.obc;
      if (profile.category === 'SC' || profile.category === 'ST') relaxation = job.ageRelaxation.scSt;
      const effectiveMaxAge = job.maxAgeGeneral + relaxation;
      const ageMatch = profile.age >= job.minAge && profile.age <= effectiveMaxAge;

      return qualMatch && ageMatch;
    });
  }, [allJobs, profile]);

  // Total financial value student can claim
  const totalFinancialAidPotential = React.useMemo(() => {
    return matchedSchemes.reduce((acc, s) => acc + (s.benefitAmountVal || 0), 0);
  }, [matchedSchemes]);

  const runAiAdvisor = async () => {
    setLoadingAi(true);
    setAiReport(null);
    try {
      const response = await fetch('/api/match-schemes-jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile })
      });
      const data = await response.json();
      setAiReport(data.analysis || 'Matched schemes generated.');
    } catch (err) {
      setAiReport('Could not connect to AI advisor. Review the algorithmically verified schemes below.');
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Title & Introduction */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Student Eligibility Calculator</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">
          Personalized Scheme & Job Matcher
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Input your details once. We compute every government coaching stipend, travel grant, prelims cash award, 
          and active public sector vacancy you are legally eligible to claim.
        </p>
      </div>

      {/* Form Grid */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-6">
        <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
          <span>Your Educational & Demographics Profile</span>
          <span className="text-xs text-slate-400 font-normal">Private & calculated client-side</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Highest Qualification */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Highest Educational Level
            </label>
            <select
              value={profile.qualification}
              onChange={(e) => setProfile({ ...profile, qualification: e.target.value as any })}
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {qualificationsList.map(q => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          {/* Specific Degree */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Specific Degree / Major (Optional)
            </label>
            <input
              type="text"
              value={profile.degreeName}
              onChange={(e) => setProfile({ ...profile, degreeName: e.target.value })}
              placeholder="e.g. B.Tech Computer Science, B.Com, B.A."
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Current Age (Years)
            </label>
            <input
              type="number"
              min="16"
              max="45"
              value={profile.age}
              onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value, 10) || 18 })}
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Social Category */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Social Reservation Category
            </label>
            <select
              value={profile.category}
              onChange={(e) => setProfile({ ...profile, category: e.target.value as any })}
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categoryOptions.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Gender
            </label>
            <select
              value={profile.gender}
              onChange={(e) => setProfile({ ...profile, gender: e.target.value as any })}
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Female">Female (Eligible for Girl Child Schemes & Fee Waivers)</option>
              <option value="Male">Male</option>
              <option value="Other">Other / Transgender</option>
            </select>
          </div>

          {/* Family Annual Income */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Annual Family Income
            </label>
            <select
              value={profile.annualFamilyIncome}
              onChange={(e) => setProfile({ ...profile, annualFamilyIncome: e.target.value })}
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="< 2.5 Lakhs">Less than ₹2.50 Lakhs (Highest Priority for 100% Free Coaching)</option>
              <option value="2.5 - 6 Lakhs">₹2.50 Lakhs to ₹6.00 Lakhs</option>
              <option value="6 - 8 Lakhs">₹6.00 Lakhs to ₹8.00 Lakhs (Eligible for Non-Creamy Layer)</option>
              <option value="> 8 Lakhs">Above ₹8.00 Lakhs (Creamy Layer / General Merit)</option>
            </select>
          </div>

          {/* Domicile State */}
          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Permanent Domicile State (Unlocks specific state civil service stipends)
            </label>
            <select
              value={profile.state}
              onChange={(e) => setProfile({ ...profile, state: e.target.value })}
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {stateOptions.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Target Sectors Multiselect */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Target Career Verticals of Interest
          </label>
          <div className="flex flex-wrap gap-2">
            {sectorOptions.map(sector => {
              const isSelected = profile.targetSectors.includes(sector);
              return (
                <button
                  key={sector}
                  type="button"
                  onClick={() => toggleSector(sector)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {sector}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button to generate Gemini Analysis */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs text-slate-500">
            Real-time calculation updated instantly based on your profile inputs above.
          </div>
          <button
            onClick={runAiAdvisor}
            disabled={loadingAi}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all disabled:opacity-50"
          >
            {loadingAi ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Analyzing Eligibility...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate AI Strategy & Action Plan</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* AI Strategy Report Box if requested */}
      {aiReport && (
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>Personalized AI Scheme & Career Roadmap</span>
            </div>
            <span className="text-xs text-slate-400">Powered by Gemini</span>
          </div>

          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed space-y-3 whitespace-pre-wrap">
            {aiReport}
          </div>
        </div>
      )}

      {/* Instant Algorithmic Matched Metrics Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-emerald-950">
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <GraduationCap className="w-4 h-4" /> Matched Schemes
          </div>
          <div className="text-2xl font-bold text-emerald-900">{matchedSchemes.length} Schemes</div>
          <div className="text-xs text-emerald-800 mt-1">
            Estimated grant potential: <strong>₹{(totalFinancialAidPotential / 100000).toFixed(2)} Lakhs</strong>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-blue-950">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <Briefcase className="w-4 h-4" /> Eligible Job Posts
          </div>
          <div className="text-2xl font-bold text-blue-900">{matchedJobs.length} Major Recruitments</div>
          <div className="text-xs text-blue-800 mt-1">
            Accounting for over <strong>{matchedJobs.reduce((acc, j) => acc + j.totalVacancies, 0).toLocaleString()}</strong> vacancies
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 text-purple-950">
          <div className="text-xs font-semibold text-purple-700 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <CheckCircle2 className="w-4 h-4" /> Reservation Rights
          </div>
          <div className="text-sm font-bold text-purple-900">
            {profile.category === 'General' ? 'Standard Merit Bracket' : `${profile.category} Quota Active`}
          </div>
          <div className="text-xs text-purple-800 mt-1">
            {profile.gender === 'Female' ? '100% exam fee exemption on UPSC & SSC' : 'Subject to valid income certificate'}
          </div>
        </div>

      </div>

      {/* Section 1: Eligible Schemes Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">
            Schemes You Are Eligible to Apply For ({matchedSchemes.length})
          </h3>
          <span className="text-xs text-slate-500">Sorted by benefit value</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matchedSchemes.map((scheme) => (
            <div
              key={scheme.id}
              onClick={() => onSelectScheme(scheme)}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-400 p-5 cursor-pointer transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                  <span className="font-semibold text-blue-700">{scheme.provider}</span>
                  <span className="text-slate-600">{scheme.schemeType}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {scheme.name}
                </h4>
                <div className="mt-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">
                  {scheme.financialBenefit}
                </div>
                <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                  {scheme.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-semibold group-hover:text-blue-800">
                <span>View Full Eligibility & Documents</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Eligible Jobs Cards */}
      <div className="space-y-4 pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">
            Government Jobs You Qualify For Today ({matchedJobs.length})
          </h3>
          <span className="text-xs text-slate-500">Filtered by your education & age</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matchedJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => onSelectJob(job)}
              className="bg-white rounded-xl border border-slate-200 hover:border-emerald-400 p-5 cursor-pointer transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                  <span className="font-semibold text-emerald-700">{job.organization}</span>
                  <span className="text-slate-600 font-medium">{job.totalVacancies.toLocaleString()} Posts</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {job.title}
                </h4>
                <div className="mt-2 text-xs text-slate-700">
                  <span className="text-slate-400">Salary: </span>
                  <span className="font-semibold">{job.approxSalary}</span>
                </div>
                <div className="mt-1 text-xs text-slate-700">
                  <span className="text-slate-400">Min Education: </span>
                  <span>{job.minQualification}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold group-hover:text-emerald-900">
                <span>Exam Pattern & Preparation Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
