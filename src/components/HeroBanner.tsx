import React from 'react';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  BadgePercent, 
  IndianRupee 
} from 'lucide-react';

interface HeroBannerProps {
  onSearchSubmit: (query: string) => void;
  onExploreSchemes: () => void;
  onExploreJobs: () => void;
  onOpenMatcher: () => void;
  activeSchemesCount: number;
  totalJobVacanciesCount: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onSearchSubmit,
  onExploreSchemes,
  onExploreJobs,
  onOpenMatcher,
  activeSchemesCount,
  totalJobVacanciesCount
}) => {
  const [searchInput, setSearchInput] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchSubmit(searchInput.trim());
    }
  };

  const domainPills = [
    { label: 'UPSC Civil Services', query: 'UPSC' },
    { label: 'SSC CGL & CHSL', query: 'SSC' },
    { label: 'Bank PO & Clerk', query: 'Banking' },
    { label: 'Railway NTPC & ALP', query: 'Railways' },
    { label: 'Defense (NDA / CDS)', query: 'Defense' },
    { label: 'GATE & Engineering PSUs', query: 'GATE' },
    { label: 'Free Coaching Schemes', query: 'Free Coaching' }
  ];

  return (
    <div className="bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 relative z-10">
        
        {/* Editorial Subheader & Main Title */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span>ScholarSync National Portal</span>
            <span aria-hidden="true">·</span>
            <span>Welfare & Recruitment Guide 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Find Schemes That Fund Your Prep, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
              Discover Jobs You Are Eligible For.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Never let coaching fees hold you back. Access 100% free coaching, monthly stipends up to ₹13,000, 
            prelims clearance rewards of ₹1,00,000, and verified government & PSU job vacancies matching your degree.
          </p>
        </div>

        {/* Live Search Form */}
        <div className="mt-8 max-w-2xl">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 bg-slate-800/90 p-2 rounded-xl border border-slate-700 shadow-xl">
            <div className="relative flex-1 flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search schemes (e.g., Abhyudaya, Prelims Cash) or Jobs (e.g., SSC CGL, Bank PO)..."
                className="w-full bg-transparent pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Domain Query Pills */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
            <span className="font-medium text-slate-400 mr-1">Popular:</span>
            {domainPills.map((pill, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSearchSubmit(pill.query)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-md transition-colors border border-slate-700/60"
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons & Key Metrics Grid */}
        <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div 
            onClick={onExploreSchemes}
            className="cursor-pointer p-4 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 transition-all group"
          >
            <div className="flex items-center justify-between text-blue-400 mb-1">
              <GraduationCap className="w-5 h-5" />
              <span className="text-xs text-slate-400 group-hover:text-blue-300 flex items-center gap-1">
                View <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">{activeSchemesCount}+</div>
            <div className="text-xs text-slate-400 mt-0.5">Government Schemes & Grants</div>
          </div>

          <div 
            onClick={onExploreJobs}
            className="cursor-pointer p-4 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 transition-all group"
          >
            <div className="flex items-center justify-between text-emerald-400 mb-1">
              <Briefcase className="w-5 h-5" />
              <span className="text-xs text-slate-400 group-hover:text-emerald-300 flex items-center gap-1">
                View <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">{totalJobVacanciesCount.toLocaleString()}+</div>
            <div className="text-xs text-slate-400 mt-0.5">Verified Job Vacancies</div>
          </div>

          <div 
            onClick={onOpenMatcher}
            className="cursor-pointer p-4 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 transition-all group"
          >
            <div className="flex items-center justify-between text-amber-400 mb-1">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs text-slate-400 group-hover:text-amber-300 flex items-center gap-1">
                Check <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">AI Smart Match</div>
            <div className="text-xs text-slate-400 mt-0.5">Instant Eligibility Report</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
            <div className="flex items-center justify-between text-purple-400 mb-1">
              <IndianRupee className="w-5 h-5" />
              <span className="text-xs text-purple-400 font-semibold">100% Free</span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">Up to ₹1.4L</div>
            <div className="text-xs text-slate-400 mt-0.5">Max Coaching Grant & Stipends</div>
          </div>

        </div>

      </div>
    </div>
  );
};
