import React, { useState, useMemo } from 'react';
import { Scheme } from '../types';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Sparkles, 
  GraduationCap, 
  IndianRupee, 
  Bookmark, 
  BookmarkCheck, 
  Scale, 
  CheckCircle2, 
  Info, 
  Building2,
  Calendar
} from 'lucide-react';

interface SchemesViewProps {
  schemes: Scheme[];
  onSelectScheme: (scheme: Scheme) => void;
  onExplainScheme: (scheme: Scheme) => void;
  comparedSchemeIds: string[];
  onToggleCompare: (schemeId: string) => void;
  savedSchemeIds: string[];
  onToggleSave: (schemeId: string) => void;
  searchFilter: string;
  setSearchFilter: (term: string) => void;
  onOpenCompareModal: () => void;
}

export const SchemesView: React.FC<SchemesViewProps> = ({
  schemes,
  onSelectScheme,
  onExplainScheme,
  comparedSchemeIds,
  onToggleCompare,
  savedSchemeIds,
  onToggleSave,
  searchFilter,
  setSearchFilter,
  onOpenCompareModal
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedProvider, setSelectedProvider] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'benefit' | 'name'>('featured');

  // Filter schemes
  const filteredSchemes = useMemo(() => {
    return schemes.filter(scheme => {
      // Search
      const searchLower = searchFilter.toLowerCase();
      const matchesSearch = 
        !searchFilter ||
        scheme.name.toLowerCase().includes(searchLower) ||
        scheme.shortName.toLowerCase().includes(searchLower) ||
        scheme.summary.toLowerCase().includes(searchLower) ||
        scheme.coveredExams.some(e => e.toLowerCase().includes(searchLower)) ||
        (scheme.state && scheme.state.toLowerCase().includes(searchLower));

      // Type filter
      const matchesType = selectedType === 'All' || scheme.schemeType === selectedType;

      // Provider
      const matchesProvider = selectedProvider === 'All' || scheme.provider === selectedProvider;

      // Category
      const matchesCategory = 
        selectedCategory === 'All' || 
        scheme.eligibility.categoriesAllowed.some(c => c.toLowerCase().includes(selectedCategory.toLowerCase()));

      return matchesSearch && matchesType && matchesProvider && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'benefit') {
        return (b.benefitAmountVal || 0) - (a.benefitAmountVal || 0);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      // featured default
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [schemes, searchFilter, selectedType, selectedProvider, selectedCategory, sortBy]);

  const schemeTypes = [
    'All',
    'Free Coaching & Mentorship',
    'Prelims / Stage Clearance Incentive',
    'Monthly Stipend & Fellowship',
    'Tuition & Exam Fee Waiver',
    'Girl Child / Minority Specific'
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Filter and Search Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
        
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search by scheme name, exam (e.g. UPSC, NEET, Banking), or state..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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

          {/* Quick Selectors */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Provider Filter */}
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Providers (Central & State)</option>
              <option value="Central Government">Central Government</option>
              <option value="State Government">State Government</option>
              <option value="Autonomous Body / PSU">Autonomous / PSU</option>
            </select>

            {/* Social Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Social Categories</option>
              <option value="SC">SC (Scheduled Caste)</option>
              <option value="ST">ST (Scheduled Tribe)</option>
              <option value="OBC">OBC (Non-Creamy Layer)</option>
              <option value="EWS">EWS</option>
              <option value="General">General / Open</option>
              <option value="Girls">Girls / Women</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Sort: Featured First</option>
              <option value="benefit">Sort: Highest Financial Grant</option>
              <option value="name">Sort: Scheme Name A-Z</option>
            </select>

          </div>
        </div>

        {/* Scheme Type Segmented Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
          <span className="text-xs text-slate-400 font-medium mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Type:
          </span>
          {schemeTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedType === type
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

      </div>

      {/* Comparison Drawer Notification when items selected */}
      {comparedSchemeIds.length > 0 && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex items-center justify-between text-indigo-950">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Scale className="w-5 h-5 text-indigo-600" />
            <span>
              {comparedSchemeIds.length} {comparedSchemeIds.length === 1 ? 'scheme' : 'schemes'} selected for side-by-side comparison
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCompareModal}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors"
            >
              Compare Now
            </button>
            <button
              onClick={() => {
                comparedSchemeIds.forEach(id => onToggleCompare(id));
              }}
              className="text-xs text-indigo-700 hover:text-indigo-900 px-2 py-1 font-medium"
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <div>
          Showing <span className="font-semibold text-slate-900">{filteredSchemes.length}</span> verified exam schemes
          {searchFilter && <span> matching "{searchFilter}"</span>}
        </div>
        <div className="text-slate-400">
          Click any scheme for full eligibility & document checklist
        </div>
      </div>

      {/* Scheme Cards Grid */}
      {filteredSchemes.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800">No schemes found matching criteria</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Try resetting your filters or searching with a broader keyword like "UPSC", "Coaching", or "Stipend".
          </p>
          <button
            onClick={() => {
              setSearchFilter('');
              setSelectedType('All');
              setSelectedProvider('All');
              setSelectedCategory('All');
            }}
            className="mt-4 inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-800"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme) => {
            const isSaved = savedSchemeIds.includes(scheme.id);
            const isCompared = comparedSchemeIds.includes(scheme.id);

            return (
              <div 
                key={scheme.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between transition-all shadow-xs hover:shadow-md relative group"
              >
                <div>
                  
                  {/* Top Metadata Row (NO PILL BOXES: unboxed typographic metadata) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-semibold text-blue-700">{scheme.provider}</span>
                      {scheme.state && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-700 font-medium">{scheme.state}</span>
                        </>
                      )}
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-600">{scheme.schemeType}</span>
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => onToggleSave(scheme.id)}
                      title={isSaved ? "Remove from saved" : "Save scheme"}
                      className={`p-1.5 rounded-md transition-colors ${
                        isSaved 
                          ? 'text-blue-600 hover:bg-blue-50' 
                          : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {isSaved ? <BookmarkCheck className="w-4 h-4 fill-blue-600 text-blue-600" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onSelectScheme(scheme)}
                    className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer leading-snug"
                  >
                    {scheme.name}
                  </h3>

                  {/* Financial Benefit Highlight */}
                  <div className="mt-3 p-3 rounded-lg bg-emerald-50/70 border border-emerald-100 text-emerald-950">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                      <IndianRupee className="w-3.5 h-3.5" /> Direct Financial Benefit
                    </div>
                    <div className="text-sm font-bold text-emerald-900 mt-0.5">
                      {scheme.financialBenefit}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {scheme.summary}
                  </p>

                  {/* Eligibility & Exams Line */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-700">Income Limit:</span> {scheme.eligibility.incomeLimit}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Categories:</span> {scheme.eligibility.categoriesAllowed.join(', ')}
                    </div>
                    <div className="text-slate-500 truncate">
                      <span className="font-semibold text-slate-700">Exams Covered:</span> {scheme.coveredExams.join(', ')}
                    </div>
                  </div>

                </div>

                {/* Bottom Action Controls */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                  
                  {/* Compare Toggle */}
                  <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isCompared}
                      onChange={() => onToggleCompare(scheme.id)}
                      className="rounded text-blue-600 focus:ring-blue-500 border-slate-300 w-3.5 h-3.5"
                    />
                    <span>Compare</span>
                  </label>

                  {/* Primary Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onExplainScheme(scheme)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AI Explainer</span>
                    </button>

                    <button
                      onClick={() => onSelectScheme(scheme)}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                    >
                      <span>Full Details</span>
                    </button>
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
