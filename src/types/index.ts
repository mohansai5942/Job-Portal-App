export type ExamCategory = 
  | 'All'
  | 'Civil Services & Administration'
  | 'Banking & Financial'
  | 'Railways'
  | 'Defense & Police'
  | 'Engineering & Technical'
  | 'Research & Higher Education'
  | 'Staff Selection & State Exams'
  | 'Medical & Allied';

export type SchemeType = 
  | 'Free Coaching & Mentorship'
  | 'Prelims / Stage Clearance Incentive'
  | 'Monthly Stipend & Fellowship'
  | 'Tuition & Exam Fee Waiver'
  | 'Hostel & Living Allowance'
  | 'Girl Child / Minority Specific';

export interface Scheme {
  id: string;
  name: string;
  shortName: string;
  provider: 'Central Government' | 'State Government' | 'Autonomous Body / PSU';
  state?: string;
  category: ExamCategory;
  schemeType: SchemeType;
  financialBenefit: string;
  benefitAmountVal?: number; // for sorting/filtering
  duration: string;
  summary: string;
  fullDescription: string;
  eligibility: {
    education: string;
    incomeLimit: string;
    ageLimit?: string;
    categoriesAllowed: string[]; // e.g. ['SC', 'ST', 'OBC', 'EWS', 'General', 'Minorities', 'Girls']
    domicileRequirement?: string;
    otherCriteria: string[];
  };
  keyBenefits: string[];
  selectionProcess: string;
  documentsRequired: string[];
  applicationMode: 'Online Portal' | 'State Social Welfare Office' | 'University Cell';
  portalUrl: string;
  deadlineText?: string;
  coveredExams: string[];
  featured?: boolean;
}

export type JobQualification = 
  | '10th Pass (Matric)'
  | '12th Pass (Intermediate)'
  | 'Diploma'
  | 'Any Graduate (Degree)'
  | 'B.E. / B.Tech / Engineering'
  | 'Post Graduate / Masters';

export type JobSector = 
  | 'Central Government'
  | 'State Government'
  | 'Banking & PSU Banks'
  | 'Defense & Paramilitary'
  | 'Indian Railways'
  | 'Public Sector Undertaking (PSU)'
  | 'Scientific & Research'
  | 'Police & Investigation';

export interface JobVacancy {
  id: string;
  title: string;
  organization: string;
  department: string;
  sector: JobSector;
  examCategory: ExamCategory;
  minQualification: JobQualification;
  specificDegree?: string;
  totalVacancies: number;
  approxSalary: string;
  payLevel: string; // e.g. "Level 7 (₹44,900 - ₹1,42,400)"
  minAge: number;
  maxAgeGeneral: number;
  ageRelaxation: {
    obc: number;
    scSt: number;
    pwd: number;
  };
  selectionStages: string[];
  applicationFee: string;
  applicationDeadline: string;
  examDates: string;
  officialNotificationUrl: string;
  applyUrl: string;
  jobLocation: string;
  description: string;
  eligibilityHighlights: string[];
  relatedSchemes: string[]; // Scheme IDs that help prepare for this job
  featured?: boolean;
}

export interface StudentProfile {
  qualification: JobQualification;
  degreeName: string;
  age: number;
  category: 'General' | 'OBC (Non-Creamy Layer)' | 'SC' | 'ST' | 'EWS';
  gender: 'Female' | 'Male' | 'Other';
  annualFamilyIncome: string; // e.g. "< 2.5 Lakhs", "2.5 - 6 Lakhs", "6 - 8 Lakhs", "> 8 Lakhs"
  state: string;
  targetSectors: ExamCategory[];
}

export interface MatchResult {
  eligibleSchemes: Scheme[];
  eligibleJobs: JobVacancy[];
  aiAnalysis?: string;
}

export interface SavedItem {
  id: string;
  type: 'scheme' | 'job';
  savedAt: string;
  status: 'Bookmarked' | 'Checking Eligibility' | 'Applied' | 'Preparing';
  notes?: string;
}
