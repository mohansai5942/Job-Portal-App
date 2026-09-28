import React, { useState, useMemo } from 'react';
import { JobVacancy, JobQualification, JobSector, Scheme } from '../types';
import { 
  Search, 
  Briefcase, 
  Building2, 
  IndianRupee, 
  GraduationCap, 
  Calendar, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  ExternalLink, 
  Users, 
  ShieldAlert, 
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface JobsViewProps {
  jobs: JobVacancy[];
  allSchemes: Scheme[];
  onSelectJob: (job: JobVacancy) => void;
  onJobStrategy: (job: JobVacancy) => void;
  onSelectSchemeById: (schemeId: string) => void;
  savedJobIds: string[];
  onToggleSaveJob: (jobId: string) => void;
  searchFilter: string;
  setSearchFilter: (term: string) => void;
}

export const JobsView: React.FC<JobsViewProps> = ({
  jobs,
  allSchemes,
  onSelectJob,
  onJobStrategy,
  onSelectSchemeById,
  savedJobIds,
  onToggleSaveJob,
  searchFilter,
  setSearchFilter
}) => {
  const [selectedQualification, setSelectedQualification] = useState<string>('All');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [userAge, setUserAge] = useState<string>('');
  const [sortBy, setSortBy] = useState<'vacancies' | 'salary' | 'deadline' | 'featured'>('featured');

  const qualificationsList = [
    'All',
    '10th Pass (Matric)',
    '12th Pass (Intermediate)',
    'Diploma',
    'Any Graduate (Degree)',
    'B.E. / B.Tech / Engineering',
    'Post Graduate / Masters'
  ];

  const sectorsList = [
    'All',
    'Central Government',
    'State Government',
    'Banking & PSU Banks',
    'Indian Railways',
    'Defense & Paramilitary',
    'Public Sector Undertaking (PSU)',
    'Scientific & Research'
  ];

  // Helper to map scheme ID to scheme object
  const getScheme = (id: string) => allSchemes.find(s => s.id === id);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // Search
      const searchLower = searchFilter.toLowerCase();
      const matchesSearch = 
        !searchFilter ||
        job.title.toLowerCase().includes(searchLower) ||
        job.organization.toLowerCase().includes(searchLower) ||
        job.department.toLowerCase().includes(searchLower) ||
        job.jobLocation.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower);

      // Qualification
      const matchesQual = selectedQualification === 'All' || job.minQualification === selectedQualification;

      // Sector
      const matchesSector = selectedSector === 'All' || job.sector === selectedSector;

      // Age check if user supplied age
      let matchesAge = true;
      if (userAge) {
        const ageNum = parseInt(userAge, 10);
        if (!isNaN(ageNum)) {
          // If age is less than minAge or greater than maxAge + 5 (considering typical category relaxations)
          matchesAge = ageNum >= job.minAge && ageNum <= (job.maxAgeGeneral + 5);
        }
      }

      return matchesSearch && matchesQual && matchesSector && matchesAge;
    }).sort((a, b) => {
      if (sortBy === 'vacancies') {
        return b.totalVacancies - a.totalVacancies;
      }
      if (sortBy === 'deadline') {
        return a.applicationDeadline.localeCompare(b.applicationDeadline);
      }
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [jobs, searchFilter, selectedQualification, selectedSector, userAge, sortBy]);

  const totalVacanciesVisible = useMemo(() => {
    return filteredJobs.reduce((acc, curr) => acc + curr.totalVacancies, 0);
  }, [filteredJobs]);

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Search Filter Box */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
        
        {/* Row 1: Search and Quick Filter Selectors */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          
          {/* Main Job Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search by job title (e.g. Inspector, Assistant Section Officer), organization, or exams..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
            {searchFilter && (
              <button 
                onClick={() => setSearchFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Age Eligibility Quick Input */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white">
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Your Age:</span>
              <input
                type="number"
                min="16"
                max="45"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                placeholder="e.g. 23"
                className="w-14 text-xs font-semibold text-slate-800 focus:outline-none"
              />
              {userAge && (
                <button 
                  onClick={() => setUserAge('')}
                  className="text-xs text-slate-400 hover:text-slate-600 ml-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sector Selector */}
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {sectorsList.map(s => (
                <option key={s} value={s}>{s === 'All' ? 'All Sectors' : s}</option>
              ))}
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="featured">Sort: Featured First</option>
              <option value="vacancies">Sort: Highest Vacancies</option>
              <option value="deadline">Sort: Application Window</option>
            </select>

          </div>
        </div>

        {/* Row 2: Minimum Qualification Segmented Control */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
          <span className="text-xs text-slate-400 font-medium mr-2 flex items-center gap-1">
            <GraduationCap className="w-3.5 h-3.5" /> Qualification:
          </span>
          {qualificationsList.map((qual) => (
            <button
              key={qual}
              onClick={() => setSelectedQualification(qual)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedQualification === qual
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {qual}
            </button>
          ))}
        </div>

      </div>

      {/* Stats Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <div>
          Showing <span className="font-semibold text-slate-900">{filteredJobs.length}</span> major recruitments 
          accounting for <span className="font-bold text-emerald-700">{totalVacanciesVisible.toLocaleString()}</span> active vacancies
        </div>
        <div className="hidden sm:block text-slate-400">
          Verified from Gazette notifications & official recruitment boards
        </div>
      </div>

      {/* Jobs Listing Grid */}
      {filteredJobs.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800">No jobs match your selected criteria</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Try adjusting your age filter, selecting "All Qualifications", or clearing the search query.
          </p>
          <button
            onClick={() => {
              setSearchFilter('');
              setSelectedQualification('All');
              setSelectedSector('All');
              setUserAge('');
            }}
            className="mt-4 inline-flex items-center text-xs font-semibold text-emerald-600 hover:text-emerald-800"
          >
            Reset all job filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const isSaved = savedJobIds.includes(job.id);

            return (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-5 sm:p-6 transition-all shadow-xs hover:shadow-md relative group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  
                  {/* Left Column: Job Info */}
                  <div className="flex-1 space-y-3">
                    
                    {/* Unboxed Metadata Line (Frontend Design Skill: No Pill Boxes) */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
                      <span className="font-semibold text-emerald-700">{job.organization}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-700">{job.sector}</span>
                      <span aria-hidden="true">·</span>
                      <span>Min Age: {job.minAge} - {job.maxAgeGeneral} Yrs</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-600">Fee: {job.applicationFee}</span>
                    </div>

                    {/* Job Title */}
                    <h3 
                      onClick={() => onSelectJob(job)}
                      className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors cursor-pointer leading-snug"
                    >
                      {job.title}
                    </h3>

                    {/* Quick highlights: Vacancies, Pay scale, Min Qualification */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700 pt-1">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div>
                          <span className="text-slate-400">Total Posts: </span>
                          <span className="font-bold text-slate-900">{job.totalVacancies.toLocaleString()} Vacancies</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <IndianRupee className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div className="truncate">
                          <span className="text-slate-400">Salary: </span>
                          <span className="font-semibold text-slate-900">{job.approxSalary}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div className="truncate">
                          <span className="text-slate-400">Requires: </span>
                          <span className="font-semibold text-slate-900">{job.minQualification}</span>
                        </div>
                      </div>
                    </div>

                    {/* Brief description & selection stages */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Linked Schemes (Crucial Value-Add!) */}
                    {job.relatedSchemes && job.relatedSchemes.length > 0 && (
                      <div className="pt-2 border-t border-slate-100 flex items-center gap-2 flex-wrap text-xs">
                        <span className="text-slate-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          <span>Schemes funding this exam:</span>
                        </span>
                        {job.relatedSchemes.map((schemeId) => {
                          const schemeObj = getScheme(schemeId);
                          if (!schemeObj) return null;
                          return (
                            <button
                              key={schemeId}
                              onClick={() => onSelectSchemeById(schemeId)}
                              className="text-blue-700 hover:text-blue-900 hover:underline font-medium text-xs flex items-center gap-1"
                            >
                              <span>{schemeObj.shortName}</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          );
                        })}
                      </div>
                    )}

                  </div>

                  {/* Right Column: Actions & Bookmark */}
                  <div className="flex lg:flex-col items-center lg:items-end justify-between gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 shrink-0">
                    
                    {/* Bookmark Button */}
                    <button
                      onClick={() => onToggleSaveJob(job.id)}
                      className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium ${
                        isSaved 
                          ? 'bg-emerald-50 text-emerald-700' 
                          : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                      }`}
                      title={isSaved ? "Saved in your tracker" : "Bookmark this job"}
                    >
                      {isSaved ? <BookmarkCheck className="w-4 h-4 fill-emerald-600 text-emerald-600" /> : <Bookmark className="w-4 h-4" />}
                      <span className="lg:hidden">{isSaved ? 'Saved' : 'Save'}</span>
                    </button>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        onClick={() => onJobStrategy(job)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Prep Strategy</span>
                      </button>

                      <button
                        onClick={() => onSelectJob(job)}
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                      >
                        <span>Exam Pattern</span>
                      </button>

                      <a
                        href={job.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-300 transition-colors"
                      >
                        <span>Apply</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
