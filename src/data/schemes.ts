export interface Scheme {
  id: string;
  name: string;
  examType: string;
  description: string;
  eligibility: string;
  benefits: string[];
  link: string;
  jobRoles: string[];
}

export const schemes: Scheme[] = [
  {
    id: '1',
    name: 'National Talent Search Examination (NTSE)',
    examType: 'School Level',
    description: 'A national level scholarship program for students studying in class X.',
    eligibility: 'Class X students',
    benefits: ['Monthly Scholarship', 'Fee waivers'],
    link: 'https://ncert.nic.in/ntse.php',
    jobRoles: ['Research', 'Academic'],
  },
  {
    id: '2',
    name: 'UPSC Civil Services Examination',
    examType: 'Competitive',
    description: 'The premier competitive examination for recruitment to various Civil Services of the Government of India.',
    eligibility: 'Graduates, age criteria apply',
    benefits: ['Prestige', 'Job Security', 'Career Growth'],
    link: 'https://upsc.gov.in',
    jobRoles: ['IAS', 'IPS', 'IFS', 'Revenue Service'],
  },
  {
    id: '3',
    name: 'Staff Selection Commission (SSC) CGL',
    examType: 'Competitive',
    description: 'Examination for recruitment to various posts in ministries, departments and organizations.',
    eligibility: 'Graduates',
    benefits: ['Job Security', 'Government Benefits'],
    link: 'https://ssc.nic.in',
    jobRoles: ['Inspector', 'Auditor', 'Accountant'],
  },
  {
    id: '4',
    name: 'IBPS PO (Probationary Officer)',
    examType: 'Competitive',
    description: 'Competitive exam for recruitment of Probationary Officers in Public Sector Banks.',
    eligibility: 'Graduates',
    benefits: ['Salary', 'Bank Perks'],
    link: 'https://ibps.in',
    jobRoles: ['Bank PO', 'Management Trainee'],
  },
];
