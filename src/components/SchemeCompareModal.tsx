import React from 'react';
import { Scheme } from '../types';
import { 
  X, 
  Scale, 
  IndianRupee, 
  Building2, 
  GraduationCap, 
  ExternalLink, 
  CheckCircle2, 
  Trash2 
} from 'lucide-react';

interface SchemeCompareModalProps {
  schemeIds: string[];
  allSchemes: Scheme[];
  onClose: () => void;
  onRemoveScheme: (schemeId: string) => void;
  onSelectScheme: (scheme: Scheme) => void;
}

export const SchemeCompareModal: React.FC<SchemeCompareModalProps> = ({
  schemeIds,
  allSchemes,
  onClose,
  onRemoveScheme,
  onSelectScheme
}) => {
  const schemes = schemeIds.map(id => allSchemes.find(s => s.id === id)).filter(Boolean) as Scheme[];

  if (schemes.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Scheme Comparison Matrix
              </h2>
              <p className="text-xs text-slate-500">
                Evaluating {schemes.length} schemes side-by-side
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Matrix Table */}
        <div className="p-6 overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-w-[650px]">
            {schemes.map((scheme) => (
              <div 
                key={scheme.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4"
              >
                <div>
                  
                  {/* Remove & Provider */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-700">{scheme.provider}</span>
                    <button
                      onClick={() => onRemoveScheme(scheme.id)}
                      className="text-slate-400 hover:text-rose-600 p-1 rounded"
                      title="Remove from comparison"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => {
                      onClose();
                      onSelectScheme(scheme);
                    }}
                    className="text-base font-bold text-slate-900 hover:text-blue-600 cursor-pointer mt-1"
                  >
                    {scheme.name}
                  </h3>

                  {/* Financial Aid */}
                  <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
                    <div className="text-[11px] font-semibold uppercase text-emerald-700">Financial Aid</div>
                    <div className="text-xs sm:text-sm font-bold mt-0.5">{scheme.financialBenefit}</div>
                    <div className="text-[11px] text-emerald-700 mt-1">Duration: {scheme.duration}</div>
                  </div>

                  {/* Criteria comparisons */}
                  <div className="mt-4 space-y-3 text-xs text-slate-700 border-t border-slate-200 pt-3">
                    <div>
                      <span className="font-semibold text-slate-900 block">Family Income Limit:</span>
                      <span className="text-slate-600">{scheme.eligibility.incomeLimit}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-slate-900 block">Social Categories:</span>
                      <span className="text-slate-600">{scheme.eligibility.categoriesAllowed.join(', ')}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-slate-900 block">Domicile Condition:</span>
                      <span className="text-slate-600">{scheme.eligibility.domicileRequirement || 'All Indian Citizens'}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-slate-900 block">Selection Method:</span>
                      <span className="text-slate-600">{scheme.selectionProcess}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-slate-900 block">Target Exams:</span>
                      <span className="text-slate-600">{scheme.coveredExams.join(', ')}</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-slate-200">
                  <a
                    href={scheme.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Close Comparison
          </button>
        </div>

      </div>
    </div>
  );
};
