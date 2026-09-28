import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Scale, 
  Bookmark, 
  FileCheck2, 
  Search 
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedCount: number;
  globalSearch: string;
  setGlobalSearch: (val: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  globalSearch,
  setGlobalSearch
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white">
      {/* Top Banner Notice */}
      <div className="bg-slate-950 text-slate-300 text-xs px-4 py-1.5 flex items-center justify-between border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Official Central & State Government Welfare Schemes & Job Notifications Portal</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span>Free Coaching Initiatives</span>
          <span>·</span>
          <span>Prelims Grants</span>
          <span>·</span>
          <span>Govt Job Alerts 2026-2027</span>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo & Title */}
          <div 
            onClick={() => setActiveTab('schemes')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">ScholarSync</span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-400 border border-blue-500/30 px-1.5 py-0.5 rounded">
                  Hub
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Exam Schemes & Student Job Finder</p>
            </div>
          </div>

          {/* Quick Search in Nav */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm relative items-center">
            <Search className="w-4 h-4 absolute left-3 text-slate-400 pointer-events-none" />
            <input 
              type="text"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Quick search schemes or jobs..."
              className="w-full bg-slate-800/90 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Saved Bookmarks & Documents quick actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('documents')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'documents' 
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span className="hidden lg:inline">Doc Checklist</span>
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'saved' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>Saved</span>
              {savedCount > 0 && (
                <span className="ml-1 bg-white/20 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {savedCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex overflow-x-auto no-scrollbar border-t border-slate-800/80 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <nav className="flex items-center space-x-1 sm:space-x-2 py-2">
            
            <button
              onClick={() => setActiveTab('schemes')}
              className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeTab === 'schemes'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Exam Schemes & Grants</span>
            </button>

            <button
              onClick={() => setActiveTab('jobs')}
              className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeTab === 'jobs'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Job Search & Govt Exams</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-1.5 py-0.5 rounded">
                60k+ Posts
              </span>
            </button>

            <button
              onClick={() => setActiveTab('matcher')}
              className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeTab === 'matcher'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>AI Eligibility Matcher</span>
            </button>

            <button
              onClick={() => setActiveTab('compare')}
              className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeTab === 'compare'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Scale className="w-4 h-4 text-purple-400" />
              <span>Compare Schemes</span>
            </button>

          </nav>
        </div>
      </div>
    </header>
  );
};
