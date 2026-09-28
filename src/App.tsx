import React, { useState, useEffect } from 'react';
import { ALL_SCHEMES } from './data/schemesData';
import { ALL_JOBS } from './data/jobsData';
import { Scheme, JobVacancy, SavedItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { SchemesView } from './components/SchemesView';
import { JobsView } from './components/JobsView';
import { SmartMatcher } from './components/SmartMatcher';
import { SchemeCompareModal } from './components/SchemeCompareModal';
import { DocumentChecklistModal } from './components/DocumentChecklistModal';
import { SchemeDetailModal } from './components/SchemeDetailModal';
import { JobDetailModal } from './components/JobDetailModal';
import { AiExplanationModal } from './components/AiExplanationModal';
import { SavedTrackerView } from './components/SavedTrackerView';
import { 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Heart,
  FileCheck2
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('schemes');
  const [globalSearch, setGlobalSearch] = useState<string>('');
  
  // Selection modals
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);

  // Compare schemes (up to 3)
  const [comparedSchemeIds, setComparedSchemeIds] = useState<string[]>([]);
  const [compareModalOpen, setCompareModalOpen] = useState<boolean>(false);

  // Document checklist modal
  const [docModalOpen, setDocModalOpen] = useState<boolean>(false);

  // AI Explanation Modal state
  const [aiModal, setAiModal] = useState<{
    isOpen: boolean;
    title: string;
    type: 'scheme' | 'job';
    content: string;
    loading: boolean;
    portalUrl?: string;
  }>({
    isOpen: false,
    title: '',
    type: 'scheme',
    content: '',
    loading: false
  });

  // Saved items tracker (stored in localStorage)
  const [savedItems, setSavedItems] = useState<SavedItem[]>(() => {
    try {
      const stored = localStorage.getItem('scholarsync_saved_items');
      return stored ? JSON.parse(stored) : [
        {
          id: 'scheme-msje-free-coaching',
          type: 'scheme',
          savedAt: 'Today',
          status: 'Checking Eligibility',
          notes: 'Applying for UPSC coaching grant once notification releases.'
        },
        {
          id: 'job-ssc-cgl',
          type: 'job',
          savedAt: 'Today',
          status: 'Bookmarked',
          notes: 'Targeting Assistant Section Officer (ASO) in CSS.'
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('scholarsync_saved_items', JSON.stringify(savedItems));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [savedItems]);

  const savedSchemeIds = savedItems.filter(i => i.type === 'scheme').map(i => i.id);
  const savedJobIds = savedItems.filter(i => i.type === 'job').map(i => i.id);

  // Toggle Save Scheme
  const toggleSaveScheme = (schemeId: string) => {
    setSavedItems(prev => {
      const exists = prev.some(item => item.id === schemeId);
      if (exists) {
        return prev.filter(item => item.id !== schemeId);
      } else {
        return [
          ...prev,
          {
            id: schemeId,
            type: 'scheme',
            savedAt: 'Just now',
            status: 'Bookmarked'
          }
        ];
      }
    });
  };

  // Toggle Save Job
  const toggleSaveJob = (jobId: string) => {
    setSavedItems(prev => {
      const exists = prev.some(item => item.id === jobId);
      if (exists) {
        return prev.filter(item => item.id !== jobId);
      } else {
        return [
          ...prev,
          {
            id: jobId,
            type: 'job',
            savedAt: 'Just now',
            status: 'Bookmarked'
          }
        ];
      }
    });
  };

  const removeSavedItem = (id: string) => {
    setSavedItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItemStatus = (id: string, status: SavedItem['status']) => {
    setSavedItems(prev => prev.map(item => item.id === id ? { ...item, status } : item));
  };

  const updateItemNotes = (id: string, notes: string) => {
    setSavedItems(prev => prev.map(item => item.id === id ? { ...item, notes } : item));
  };

  // Toggle Compare
  const toggleCompare = (schemeId: string) => {
    setComparedSchemeIds(prev => {
      if (prev.includes(schemeId)) {
        return prev.filter(id => id !== schemeId);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 schemes at a time.');
          return prev;
        }
        return [...prev, schemeId];
      }
    });
  };

  // AI Explainer Trigger for Scheme
  const handleExplainScheme = async (scheme: Scheme) => {
    setAiModal({
      isOpen: true,
      title: scheme.name,
      type: 'scheme',
      content: '',
      loading: true,
      portalUrl: scheme.portalUrl
    });

    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scheme)
      });
      const data = await response.json();
      setAiModal(prev => ({
        ...prev,
        content: data.explanation || 'Explanation generated successfully.',
        loading: false
      }));
    } catch (err) {
      setAiModal(prev => ({
        ...prev,
        content: 'Unable to reach AI explanation service. Please consult the official scheme details.',
        loading: false
      }));
    }
  };

  // AI Strategy Trigger for Job
  const handleJobStrategy = async (job: JobVacancy) => {
    setAiModal({
      isOpen: true,
      title: `${job.title} — 6-Month Preparation Blueprint`,
      type: 'job',
      content: '',
      loading: true,
      portalUrl: job.applyUrl
    });

    try {
      const response = await fetch('/api/job-strategy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job)
      });
      const data = await response.json();
      setAiModal(prev => ({
        ...prev,
        content: data.strategy || 'Preparation strategy generated successfully.',
        loading: false
      }));
    } catch (err) {
      setAiModal(prev => ({
        ...prev,
        content: 'Unable to generate preparation roadmap. Please review standard textbooks and past question papers.',
        loading: false
      }));
    }
  };

  const handleSelectSchemeById = (schemeId: string) => {
    const s = ALL_SCHEMES.find(item => item.id === schemeId);
    if (s) {
      setSelectedScheme(s);
    }
  };

  // Total job vacancies count
  const totalJobVacancies = React.useMemo(() => {
    return ALL_JOBS.reduce((acc, curr) => acc + curr.totalVacancies, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Global Navigation Bar */}
      <Navbar 
        activeTab={activeTab === 'documents' ? 'schemes' : activeTab}
        setActiveTab={(tab) => {
          if (tab === 'documents') {
            setDocModalOpen(true);
          } else {
            setActiveTab(tab);
          }
        }}
        savedCount={savedItems.length}
        globalSearch={globalSearch}
        setGlobalSearch={setGlobalSearch}
      />

      {/* Hero Banner (Only shown on primary discovery tabs) */}
      {(activeTab === 'schemes' || activeTab === 'jobs') && (
        <HeroBanner
          onSearchSubmit={(q) => {
            setGlobalSearch(q);
            if (q.toLowerCase().includes('job') || q.toLowerCase().includes('recruitment') || q.toLowerCase().includes('vacancy')) {
              setActiveTab('jobs');
            }
          }}
          onExploreSchemes={() => setActiveTab('schemes')}
          onExploreJobs={() => setActiveTab('jobs')}
          onOpenMatcher={() => setActiveTab('matcher')}
          activeSchemesCount={ALL_SCHEMES.length}
          totalJobVacanciesCount={totalJobVacancies}
        />
      )}

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* TAB 1: Schemes Hub */}
        {activeTab === 'schemes' && (
          <SchemesView
            schemes={ALL_SCHEMES}
            onSelectScheme={(scheme) => setSelectedScheme(scheme)}
            onExplainScheme={handleExplainScheme}
            comparedSchemeIds={comparedSchemeIds}
            onToggleCompare={toggleCompare}
            savedSchemeIds={savedSchemeIds}
            onToggleSave={toggleSaveScheme}
            searchFilter={globalSearch}
            setSearchFilter={setGlobalSearch}
            onOpenCompareModal={() => setCompareModalOpen(true)}
          />
        )}

        {/* TAB 2: Job Search & Govt Exams */}
        {activeTab === 'jobs' && (
          <JobsView
            jobs={ALL_JOBS}
            allSchemes={ALL_SCHEMES}
            onSelectJob={(job) => setSelectedJob(job)}
            onJobStrategy={handleJobStrategy}
            onSelectSchemeById={handleSelectSchemeById}
            savedJobIds={savedJobIds}
            onToggleSaveJob={toggleSaveJob}
            searchFilter={globalSearch}
            setSearchFilter={setGlobalSearch}
          />
        )}

        {/* TAB 3: AI Smart Matcher */}
        {activeTab === 'matcher' && (
          <SmartMatcher
            allSchemes={ALL_SCHEMES}
            allJobs={ALL_JOBS}
            onSelectScheme={(scheme) => setSelectedScheme(scheme)}
            onSelectJob={(job) => setSelectedJob(job)}
          />
        )}

        {/* TAB 4: Compare Schemes */}
        {activeTab === 'compare' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Scheme Comparison Matrix
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Select 2 or 3 competitive exam schemes to compare benefits, income limits, and eligibility criteria side-by-side.
              </p>
            </div>

            {comparedSchemeIds.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
                <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-base font-semibold text-slate-800">
                  No schemes selected for comparison
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Go to the <strong>Exam Schemes & Grants</strong> tab and click the "Compare" checkbox on any scheme card.
                </p>
                <button
                  onClick={() => setActiveTab('schemes')}
                  className="mt-2 inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  Browse all schemes now
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {comparedSchemeIds.map((schemeId) => {
                  const scheme = ALL_SCHEMES.find(s => s.id === schemeId);
                  if (!scheme) return null;

                  return (
                    <div 
                      key={scheme.id}
                      className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="font-semibold text-blue-700">{scheme.provider}</span>
                          <button
                            onClick={() => toggleCompare(scheme.id)}
                            className="text-xs text-rose-600 hover:underline"
                          >
                            Remove
                          </button>
                        </div>

                        <h3 
                          onClick={() => setSelectedScheme(scheme)}
                          className="text-base font-bold text-slate-900 hover:text-blue-600 cursor-pointer mt-1"
                        >
                          {scheme.name}
                        </h3>

                        <div className="mt-3 p-3 bg-emerald-50 rounded-lg text-emerald-950 text-xs">
                          <div className="font-semibold uppercase text-emerald-700">Financial Aid:</div>
                          <div className="font-bold mt-0.5">{scheme.financialBenefit}</div>
                        </div>

                        <div className="mt-4 space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-3">
                          <div>
                            <span className="font-semibold text-slate-900 block">Family Income Limit:</span>
                            <span>{scheme.eligibility.incomeLimit}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900 block">Categories:</span>
                            <span>{scheme.eligibility.categoriesAllowed.join(', ')}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900 block">Domicile:</span>
                            <span>{scheme.eligibility.domicileRequirement || 'All India'}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900 block">Selection:</span>
                            <span>{scheme.selectionProcess}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                        <button
                          onClick={() => setSelectedScheme(scheme)}
                          className="flex-1 text-center py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
                        >
                          Full Details
                        </button>
                        <a
                          href={scheme.portalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-slate-300 rounded-lg text-slate-600 hover:text-slate-900"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: Saved & Application Tracker */}
        {activeTab === 'saved' && (
          <SavedTrackerView
            savedItems={savedItems}
            allSchemes={ALL_SCHEMES}
            allJobs={ALL_JOBS}
            onRemoveSaved={removeSavedItem}
            onUpdateStatus={updateItemStatus}
            onUpdateNotes={updateItemNotes}
            onSelectScheme={(scheme) => setSelectedScheme(scheme)}
            onSelectJob={(job) => setSelectedJob(job)}
            onExploreSchemes={() => setActiveTab('schemes')}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span>ScholarSync National Portal</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Empowering Indian students with comprehensive government schemes, scholarships, 
                free coaching entitlements, and public sector employment notifications.
              </p>
              <div className="text-[11px] text-slate-500 pt-2">
                All data compiled from official Gazettes, Ministry of Social Justice, UPSC, SSC, and Railway Recruitment Boards.
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Popular Schemes</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><button onClick={() => { setActiveTab('schemes'); setGlobalSearch('Abhyudaya'); }} className="hover:text-white">UP Abhyudaya Yojana</button></li>
                <li><button onClick={() => { setActiveTab('schemes'); setGlobalSearch('Free Coaching'); }} className="hover:text-white">MSJE Free Coaching</button></li>
                <li><button onClick={() => { setActiveTab('schemes'); setGlobalSearch('Anuprati'); }} className="hover:text-white">Rajasthan Anuprati</button></li>
                <li><button onClick={() => { setActiveTab('schemes'); setGlobalSearch('Bihar'); }} className="hover:text-white">Bihar Prelims ₹1 Lakh Grant</button></li>
                <li><button onClick={() => { setActiveTab('schemes'); setGlobalSearch('PMRF'); }} className="hover:text-white">PM Research Fellowship</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Major Job Exams</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><button onClick={() => { setActiveTab('jobs'); setGlobalSearch('SSC CGL'); }} className="hover:text-white">SSC CGL (17,700+ Posts)</button></li>
                <li><button onClick={() => { setActiveTab('jobs'); setGlobalSearch('UPSC'); }} className="hover:text-white">Civil Services (IAS/IPS)</button></li>
                <li><button onClick={() => { setActiveTab('jobs'); setGlobalSearch('Banking'); }} className="hover:text-white">IBPS & SBI PO / Clerk</button></li>
                <li><button onClick={() => { setActiveTab('jobs'); setGlobalSearch('Railway'); }} className="hover:text-white">RRB NTPC & ALP</button></li>
                <li><button onClick={() => { setActiveTab('jobs'); setGlobalSearch('Defense'); }} className="hover:text-white">Defense (NDA & CDS)</button></li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © 2026 ScholarSync. Built for student empowerment.
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setDocModalOpen(true)} className="hover:text-slate-300">
                Document Checklist
              </button>
              <span>·</span>
              <button onClick={() => setActiveTab('matcher')} className="hover:text-slate-300">
                AI Eligibility Matcher
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SchemeDetailModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
        onExplain={handleExplainScheme}
        isSaved={selectedScheme ? savedSchemeIds.includes(selectedScheme.id) : false}
        onToggleSave={toggleSaveScheme}
        isCompared={selectedScheme ? comparedSchemeIds.includes(selectedScheme.id) : false}
        onToggleCompare={toggleCompare}
      />

      <JobDetailModal
        job={selectedJob}
        allSchemes={ALL_SCHEMES}
        onClose={() => setSelectedJob(null)}
        onJobStrategy={handleJobStrategy}
        onSelectSchemeById={handleSelectSchemeById}
        isSaved={selectedJob ? savedJobIds.includes(selectedJob.id) : false}
        onToggleSave={toggleSaveJob}
      />

      {compareModalOpen && (
        <SchemeCompareModal
          schemeIds={comparedSchemeIds}
          allSchemes={ALL_SCHEMES}
          onClose={() => setCompareModalOpen(false)}
          onRemoveScheme={toggleCompare}
          onSelectScheme={(scheme) => {
            setCompareModalOpen(false);
            setSelectedScheme(scheme);
          }}
        />
      )}

      <DocumentChecklistModal
        isOpen={docModalOpen}
        onClose={() => setDocModalOpen(false)}
      />

      {aiModal.isOpen && (
        <AiExplanationModal
          title={aiModal.title}
          type={aiModal.type}
          content={aiModal.content}
          loading={aiModal.loading}
          portalUrl={aiModal.portalUrl}
          onClose={() => setAiModal(prev => ({ ...prev, isOpen: false }))}
        />
      )}

    </div>
  );
}
