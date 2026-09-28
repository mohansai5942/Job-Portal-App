import React, { useState } from 'react';
import { SavedItem, Scheme, JobVacancy } from '../types';
import { 
  Bookmark, 
  Trash2, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  FileText 
} from 'lucide-react';

interface SavedTrackerViewProps {
  savedItems: SavedItem[];
  allSchemes: Scheme[];
  allJobs: JobVacancy[];
  onRemoveSaved: (id: string) => void;
  onUpdateStatus: (id: string, status: SavedItem['status']) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onSelectScheme: (scheme: Scheme) => void;
  onSelectJob: (job: JobVacancy) => void;
  onExploreSchemes: () => void;
}

export const SavedTrackerView: React.FC<SavedTrackerViewProps> = ({
  savedItems,
  allSchemes,
  allJobs,
  onRemoveSaved,
  onUpdateStatus,
  onUpdateNotes,
  onSelectScheme,
  onSelectJob,
  onExploreSchemes
}) => {
  const [filterType, setFilterType] = useState<'All' | 'scheme' | 'job'>('All');

  const filteredItems = savedItems.filter(item => {
    if (filterType === 'All') return true;
    return item.type === filterType;
  });

  const getScheme = (id: string) => allSchemes.find(s => s.id === id);
  const getJob = (id: string) => allJobs.find(j => j.id === id);

  const statusOptions: SavedItem['status'][] = [
    'Bookmarked',
    'Checking Eligibility',
    'Applied',
    'Preparing'
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            <Bookmark className="w-4 h-4" />
            <span>Personal Application Dashboard</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            My Saved Schemes & Job Tracker
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Keep track of your application milestones, registration IDs, and exam dates in one place.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setFilterType('All')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filterType === 'All' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({savedItems.length})
          </button>
          <button
            onClick={() => setFilterType('scheme')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filterType === 'scheme' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Schemes ({savedItems.filter(i => i.type === 'scheme').length})
          </button>
          <button
            onClick={() => setFilterType('job')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filterType === 'job' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Jobs ({savedItems.filter(i => i.type === 'job').length})
          </button>
        </div>
      </div>

      {/* Items List */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <Bookmark className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800">
            No items in your tracker yet
          </h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Click the bookmark icon on any scheme or job opportunity to save it here and track your application timeline.
          </p>
          <button
            onClick={onExploreSchemes}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors"
          >
            <span>Browse Schemes & Jobs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const isScheme = item.type === 'scheme';
            const scheme = isScheme ? getScheme(item.id) : null;
            const job = !isScheme ? getJob(item.id) : null;

            if (!scheme && !job) return null;

            const title = scheme ? scheme.name : job!.title;
            const subtitle = scheme ? `${scheme.provider} · ${scheme.schemeType}` : `${job!.organization} · ${job!.sector}`;
            const link = scheme ? scheme.portalUrl : job!.applyUrl;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  
                  {/* Left: Info */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      {isScheme ? (
                        <span className="flex items-center gap-1 text-blue-700 font-semibold">
                          <GraduationCap className="w-3.5 h-3.5" /> Scheme
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                          <Briefcase className="w-3.5 h-3.5" /> Job Opportunity
                        </span>
                      )}
                      <span aria-hidden="true">·</span>
                      <span>{subtitle}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-400">Saved {item.savedAt}</span>
                    </div>

                    <h3 
                      onClick={() => {
                        if (scheme) onSelectScheme(scheme);
                        if (job) onSelectJob(job);
                      }}
                      className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 cursor-pointer"
                    >
                      {title}
                    </h3>
                  </div>

                  {/* Right: Remove */}
                  <button
                    onClick={() => onRemoveSaved(item.id)}
                    className="self-end sm:self-start text-slate-400 hover:text-rose-600 p-1.5 rounded-lg transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                </div>

                {/* Status Selector & Notes Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs">
                  
                  {/* Status Dropdown */}
                  <div>
                    <label className="block text-slate-500 font-medium mb-1">
                      Current Application Status:
                    </label>
                    <select
                      value={item.status}
                      onChange={(e) => onUpdateStatus(item.id, e.target.value as any)}
                      className="w-full border border-slate-300 rounded-lg p-2 font-semibold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {statusOptions.map(st => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  {/* Notes Input */}
                  <div className="sm:col-span-2">
                    <label className="block text-slate-500 font-medium mb-1">
                      Application Notes (Roll No, Registration ID, Exam Center):
                    </label>
                    <input
                      type="text"
                      value={item.notes || ''}
                      onChange={(e) => onUpdateNotes(item.id, e.target.value)}
                      placeholder="e.g. Applied on 15th Aug, Reg ID: SSC-849204..."
                      className="w-full border border-slate-300 rounded-lg p-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-2 text-xs">
                  <button
                    onClick={() => {
                      if (scheme) onSelectScheme(scheme);
                      if (job) onSelectJob(job);
                    }}
                    className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>View Full Details & Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-slate-600 hover:text-slate-900"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
