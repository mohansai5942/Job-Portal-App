import React from 'react';
import { 
  X, 
  FileCheck2, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';

interface DocumentChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentChecklistModal: React.FC<DocumentChecklistModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const docGuides = [
    {
      title: "OBC Non-Creamy Layer (NCL) Certificate",
      importance: "Critical for Central Govt & Bank Exams",
      validity: "Must be issued within the current Financial Year (after April 1st of the notification year)",
      keyPoints: [
        "Must strictly be in the Government of India (Central) format, NOT merely state format",
        "Community must be listed in the Central List of OBCs published by NCBC (ncbc.nic.in)",
        "Must contain the non-creamy layer resolution clause confirming family income is below ₹8.00 Lakhs"
      ],
      authority: "Tahsildar / Sub-Divisional Magistrate (SDM) / District Magistrate (DM)"
    },
    {
      title: "Economically Weaker Section (EWS) Certificate",
      importance: "Required for 10% Central & State EWS Reservation",
      validity: "Valid for 1 Financial Year based on Gross Annual Income of the preceding year",
      keyPoints: [
        "Family income from all sources (salary, agriculture, business) must be below ₹8.00 Lakhs for the financial year prior to application",
        "Must not possess 5 acres of agricultural land, residential flat of 1000 sq ft or residential plot of 100 sq yards in notified municipalities",
        "Certificate must mention both the 'Valid Financial Year' and the 'Income Assessment Year'"
      ],
      authority: "Revenue Officer not below the rank of Tahsildar / SDM / DM"
    },
    {
      title: "SC / ST Caste Certificate",
      importance: "Required for Fee Exemption, Age Relaxation & Reservation",
      validity: "Permanent validity once issued in prescribed Constitutional Order format",
      keyPoints: [
        "Must specify the exact Presidential Order / Amendment Act under which the caste/tribe is scheduled",
        "Must be verified with original seal of the issuing revenue authority",
        "Several states (like Maharashtra) require an additional 'Caste Validity Certificate' from Scrutiny Committee"
      ],
      authority: "District Magistrate / Deputy Commissioner / Tahsildar"
    },
    {
      title: "Income Certificate for Scholarships & Free Coaching",
      importance: "Mandatory for Social Welfare Schemes & Coaching Grants",
      validity: "Valid for 6 to 12 months depending on State Revenue rules",
      keyPoints: [
        "Crucial for schemes like MSJE Free Coaching, UP Abhyudaya, and Rajasthan Anuprati",
        "Must reflect aggregate family income from all legal sources (parents + candidate)",
        "Always ensure your digital certificate barcode and digital signature are verifiable online"
      ],
      authority: "Tahsildar / Revenue Inspector / Citizen Service Center (CSC)"
    },
    {
      title: "Aadhaar Card & Bank Account Direct Benefit Transfer (DBT)",
      importance: "Required for All Cash Incentives & Stipends",
      validity: "Perpetual (ensure mobile number is linked for OTP verification)",
      keyPoints: [
        "Name spelling, father's name, and date of birth must match your Class 10th Board Certificate exactly",
        "Your bank savings account must be 'Aadhaar Seeded' via NPCI mapper to receive DBT stipends without bounce",
        "Avoid using Jan Dhan / basic savings accounts with monthly deposit capping for large grants"
      ],
      authority: "UIDAI & Bank Branch Manager"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Official Document Verification & Eligibility Guide
              </h2>
              <p className="text-xs text-slate-500">
                Prevent disqualification during Certificate Verification (DV) stages
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

        {/* Content */}
        <div className="p-6 space-y-6 text-sm text-slate-700">
          
          {/* Top Alert Banner */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <span className="font-bold">Crucial Warning:</span> Over 22% of competitive exam qualifiers in UPSC, SSC, and Banking face cancellation of candidature due to outdated Financial Year income certificates or state-format certificates instead of Central formats. Always verify your documents before the notification cut-off date!
            </div>
          </div>

          {/* Cards for each document */}
          <div className="space-y-4">
            {docGuides.map((guide, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3"
              >
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{guide.title}</h3>
                    <div className="text-xs text-blue-700 font-semibold">{guide.importance}</div>
                  </div>
                  <div className="text-xs text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                    Valid: {guide.validity}
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
                  <span className="text-xs font-semibold text-slate-700 block">Crucial Verification Checklist:</span>
                  {guide.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/60">
                  <span className="font-semibold text-slate-700">Issuing Authority:</span> {guide.authority}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};
