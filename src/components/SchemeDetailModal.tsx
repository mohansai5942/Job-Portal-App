import React from 'react';
import { Scheme } from '../types';
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  IndianRupee, 
  Building2, 
  GraduationCap, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  Bookmark,
  BookmarkCheck,
  Scale
} from 'lucide-react';

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  onClose: () => void;
  onExplain: (scheme: Scheme) => void;
  isSaved: boolean;
  onToggleSave: (schemeId: string) => void;
  isCompared: boolean;
  onToggleCompare: (schemeId: string) => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({
  scheme,
  onClose,
  onExplain,
  isSaved,
  onToggleSave,
  isCompared,
  onToggleCompare
}) => {
  if (!scheme) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="text-blue-700 font-semibold">{scheme.provider}</span>
              {scheme.state && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{scheme.state}</span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{scheme.schemeType}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-0.5">
              {scheme.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(scheme.id)}
              className={`p-2 rounded-lg transition-colors ${
                isSaved ? 'text-blue-600 bg-blue-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
              title={isSaved ? "Saved" : "Save Scheme"}
            >
              {isSaved ? <BookmarkCheck className="w-5 h-5 fill-blue-600 text-blue-600" /> : <Bookmark className="w-5 h-5" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-sm text-slate-700">
          
          {/* Financial Grant Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-950">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <IndianRupee className="w-4 h-4" /> Financial Grant & Living Stipends
            </div>
            <div className="text-base sm:text-lg font-bold text-emerald-900">
              {scheme.financialBenefit}
            </div>
            <div className="text-xs text-emerald-700 mt-1">
              Duration of Assistance: <strong>{scheme.duration}</strong>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Scheme Overview
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {scheme.fullDescription}
            </p>
          </div>

          {/* Key Benefits List */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Key Inclusions & Coaching Support
            </h3>
            <ul className="space-y-2">
              {scheme.keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility Criteria Matrix */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Strict Eligibility Criteria
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-slate-900">Minimum Education:</span>
                <p className="text-slate-600 mt-0.5">{scheme.eligibility.education}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Annual Family Income Ceiling:</span>
                <p className="text-slate-600 mt-0.5">{scheme.eligibility.incomeLimit}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Eligible Social Categories:</span>
                <p className="text-slate-600 mt-0.5">{scheme.eligibility.categoriesAllowed.join(', ')}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Domicile Requirements:</span>
                <p className="text-slate-600 mt-0.5">{scheme.eligibility.domicileRequirement || 'All India'}</p>
              </div>
            </div>

            {scheme.eligibility.otherCriteria && scheme.eligibility.otherCriteria.length > 0 && (
              <div className="pt-2 border-t border-slate-200">
                <span className="font-semibold text-slate-900 text-xs">Additional Rules:</span>
                <ul className="mt-1 space-y-1">
                  {scheme.eligibility.otherCriteria.map((crit, idx) => (
                    <li key={idx} className="text-xs text-slate-600 list-disc list-inside">
                      {crit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Required Documents Checklist */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Mandatory Documents to Keep Ready</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {scheme.documentsRequired.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200/80 rounded-lg text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selection & Application Process */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Selection Process & Portal
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {scheme.selectionProcess}
            </p>
            {scheme.deadlineText && (
              <div className="mt-2 text-xs text-amber-800 bg-amber-50 border border-amber-200 p-2.5 rounded-lg flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Application Cycle:</strong> {scheme.deadlineText}</span>
              </div>
            )}
          </div>

          {/* Exams Covered */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Competitive Exams Covered
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {scheme.coveredExams.map((exam, idx) => (
                <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                  {exam}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between gap-3 flex-wrap">
          
          <button
            onClick={() => onToggleCompare(scheme.id)}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
          >
            <Scale className="w-4 h-4" />
            <span>{isCompared ? 'Remove from Compare' : 'Add to Compare'}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onExplain(scheme);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explain with AI</span>
            </button>

            <a
              href={scheme.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
            >
              <span>Visit Official Scheme Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
