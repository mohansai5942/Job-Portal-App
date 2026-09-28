import React from 'react';
import { JobVacancy, Scheme } from '../types';
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  IndianRupee, 
  Users, 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck, 
  Clock, 
  MapPin, 
  Building2,
  ArrowRight
} from 'lucide-react';

interface JobDetailModalProps {
  job: JobVacancy | null;
  allSchemes: Scheme[];
  onClose: () => void;
  onJobStrategy: (job: JobVacancy) => void;
  onSelectSchemeById: (schemeId: string) => void;
  isSaved: boolean;
  onToggleSave: (jobId: string) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  allSchemes,
  onClose,
  onJobStrategy,
  onSelectSchemeById,
  isSaved,
  onToggleSave
}) => {
  if (!job) return null;

  const getScheme = (id: string) => allSchemes.find(s => s.id === id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="text-emerald-700 font-semibold">{job.organization}</span>
              <span aria-hidden="true">·</span>
              <span>{job.sector}</span>
              <span aria-hidden="true">·</span>
              <span>{job.jobLocation}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-0.5">
              {job.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(job.id)}
              className={`p-2 rounded-lg transition-colors ${
                isSaved ? 'text-emerald-600 bg-emerald-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
              title={isSaved ? "Saved" : "Save Job"}
            >
              {isSaved ? <BookmarkCheck className="w-5 h-5 fill-emerald-600 text-emerald-600" /> : <Bookmark className="w-5 h-5" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 text-sm text-slate-700">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div>
              <div className="text-[11px] font-medium text-slate-400 uppercase">Total Vacancies</div>
              <div className="text-base font-bold text-emerald-800 mt-0.5">{job.totalVacancies.toLocaleString()} Posts</div>
            </div>
            <div>
              <div className="text-[11px] font-medium text-slate-400 uppercase">Starting Salary</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{job.approxSalary}</div>
            </div>
            <div>
              <div className="text-[11px] font-medium text-slate-400 uppercase">General Age Limit</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{job.minAge} to {job.maxAgeGeneral} Years</div>
            </div>
            <div>
              <div className="text-[11px] font-medium text-slate-400 uppercase">Application Fee</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">{job.applicationFee}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Role & Department Overview
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Educational Qualification */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4">
            <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <GraduationCap className="w-4 h-4 text-blue-700" /> Minimum Educational Qualification
            </div>
            <div className="text-sm font-bold text-blue-950">
              {job.minQualification}
            </div>
            {job.specificDegree && (
              <p className="text-xs text-blue-900 mt-1">
                {job.specificDegree}
              </p>
            )}
          </div>

          {/* Age Criteria & Category Relaxations */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Age Limits & Category Relaxations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-semibold text-slate-900">OBC (Non-Creamy Layer):</span>
                <p className="text-slate-600 mt-0.5">+{job.ageRelaxation.obc} Years Relaxation (Max: {job.maxAgeGeneral + job.ageRelaxation.obc} Yrs)</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-semibold text-slate-900">SC / ST Categories:</span>
                <p className="text-slate-600 mt-0.5">+{job.ageRelaxation.scSt} Years Relaxation (Max: {job.maxAgeGeneral + job.ageRelaxation.scSt} Yrs)</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-semibold text-slate-900">PwD / Divyangjan:</span>
                <p className="text-slate-600 mt-0.5">+{job.ageRelaxation.pwd} Years Relaxation (where eligible)</p>
              </div>
            </div>
          </div>

          {/* Selection Stages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Complete Selection Examination Stages
            </h3>
            <div className="space-y-2">
              {job.selectionStages.map((stage, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-xs sm:text-sm text-slate-800">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{stage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Linked Schemes (Crucial Feature) */}
          {job.relatedSchemes && job.relatedSchemes.length > 0 && (
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Government Schemes That Fund Coaching & Preparation for This Exam</span>
              </h3>
              <p className="text-xs text-indigo-950 mb-3">
                Do not pay heavy coaching fees out of pocket. You can prepare for {job.title} under these official welfare schemes:
              </p>
              <div className="space-y-2">
                {job.relatedSchemes.map((schemeId) => {
                  const schemeObj = getScheme(schemeId);
                  if (!schemeObj) return null;
                  return (
                    <div 
                      key={schemeId}
                      onClick={() => {
                        onClose();
                        onSelectSchemeById(schemeId);
                      }}
                      className="p-3 bg-white border border-indigo-200 rounded-lg flex items-center justify-between cursor-pointer hover:border-indigo-400 transition-colors group"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700">
                          {schemeObj.name}
                        </div>
                        <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                          {schemeObj.financialBenefit}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Dates & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-950">
              <span className="font-semibold flex items-center gap-1 mb-1">
                <Calendar className="w-4 h-4 text-amber-700" /> Notification & Application Window
              </span>
              <p>{job.applicationDeadline}</p>
            </div>
            <div className="p-3 bg-slate-100 border border-slate-200 rounded-lg text-slate-800">
              <span className="font-semibold flex items-center gap-1 mb-1">
                <Clock className="w-4 h-4 text-slate-700" /> Expected Exam Dates
              </span>
              <p>{job.examDates}</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between gap-3 flex-wrap">
          
          <button
            onClick={() => onJobStrategy(job)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/70 border border-emerald-300 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Generate 6-Month AI Prep Strategy</span>
          </button>

          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-sm"
          >
            <span>Apply on Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

        </div>

      </div>
    </div>
  );
};
