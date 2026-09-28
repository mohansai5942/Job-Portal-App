import { Scheme } from '../types';

export const ALL_SCHEMES: Scheme[] = [
  {
    id: 'scheme-msje-free-coaching',
    name: 'Free Coaching Scheme for SC and OBC Students',
    shortName: 'MSJE Free Coaching',
    provider: 'Central Government',
    category: 'Civil Services & Administration',
    schemeType: 'Free Coaching & Mentorship',
    financialBenefit: '100% Tuition Fees Paid + ₹4,000/month Local or ₹6,000/month Outstation Stipend',
    benefitAmountVal: 72000,
    duration: 'Up to 12 months for Civil Services / 6 months for Banking & SSC',
    summary: 'Central sector scheme providing free coaching in empanelled premier institutes along with monthly living stipends for competitive exams.',
    fullDescription: 'Initiated by the Ministry of Social Justice and Empowerment (MoSJE), this scheme empowers Scheduled Caste (SC) and Other Backward Classes (OBC) candidates by funding full tuition fees at top-tier coaching centers for UPSC CSE, State PSCs, SSC, RRB, Banking, JEE, and NEET, plus a substantial monthly stipend to cover living expenses.',
    eligibility: {
      education: 'Graduation (final year or completed) for Civil Services/Banking, or 12th pass for Entrance Exams',
      incomeLimit: 'Family annual income must not exceed ₹8.00 Lakhs per annum',
      ageLimit: 'As per target exam criteria (usually 20 to 35 years)',
      categoriesAllowed: ['SC', 'OBC (Non-Creamy Layer)'],
      domicileRequirement: 'All Indian Citizens across all states and UTs',
      otherCriteria: [
        'Candidate can avail coaching benefit only twice in lifetime',
        'Attendance in coaching classes must remain above 75% for release of monthly stipend',
        'Selection through National Level Common Entrance Test or merit list'
      ]
    },
    keyBenefits: [
      'Full course tuition fees directly disbursed to coaching institute or student account',
      'Monthly stipend: ₹4,000 for local students, ₹6,000 for outstation students',
      'Covers UPSC CSE, State PSCs, SSC CGL, Banking (IBPS/SBI), Defense (CDS/NDA)',
      'Mentorship support and study material allowances'
    ],
    selectionProcess: 'Online merit application on coaching.dosje.gov.in portal based on graduation percentage or entrance exam.',
    documentsRequired: [
      'Valid Caste Certificate (SC or OBC-NCL)',
      'Income Certificate issued by competent revenue authority (Tahsildar/SDM)',
      '10th, 12th, and Degree Marksheets',
      'Aadhaar Card linked to active bank account',
      'Passport size photographs and signature'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://coaching.dosje.gov.in',
    deadlineText: 'Annual call usually opens in May-July',
    coveredExams: ['UPSC Civil Services', 'State PSC', 'SSC CGL', 'IBPS PO', 'CDS', 'NDA', 'NEET', 'JEE Main'],
    featured: true
  },
  {
    id: 'scheme-up-abhyudaya',
    name: 'Mukhyamantri Abhyudaya Yojana (Uttar Pradesh)',
    shortName: 'UP Abhyudaya',
    provider: 'State Government',
    state: 'Uttar Pradesh',
    category: 'Civil Services & Administration',
    schemeType: 'Free Coaching & Mentorship',
    financialBenefit: 'Free Physical & Virtual Coaching by IAS/IPS Officers + Free Tablet for Top Aspirants',
    benefitAmountVal: 45000,
    duration: 'Full exam preparation cycle (6 to 12 months)',
    summary: 'Uttar Pradesh government initiative providing high-caliber physical and online coaching centers in all 75 districts, spearheaded by serving civil servants.',
    fullDescription: 'Launched by the Government of Uttar Pradesh under the Social Welfare Department, the Abhyudaya scheme establishes free physical learning hubs at divisional and district levels. Serving IAS, IPS, PCS officers and senior educators conduct daily interactive classes, mock test series, and syllabus roadmaps.',
    eligibility: {
      education: 'Enrolled in 12th or pursuing Graduation / Graduate',
      incomeLimit: 'Open to all categories; preference given to economically underprivileged students',
      categoriesAllowed: ['General', 'OBC (Non-Creamy Layer)', 'SC', 'ST', 'EWS'],
      domicileRequirement: 'Must be a permanent resident of Uttar Pradesh',
      otherCriteria: [
        'Selection is conducted via state-wide Abhyudaya Online Screening Exam',
        'Merit rankers receive free digital tablets for online mock exams'
      ]
    },
    keyBenefits: [
      'In-person classroom coaching in every division and major district',
      'Direct masterclasses and interview guidance by working IAS, IPS, and PCS officers',
      'Free distribution of competitive exam tablets for top performers',
      'Comprehensive study materials, current affairs compendiums, and mock test portal'
    ],
    selectionProcess: 'Annual state online eligibility examination followed by divisional allocation.',
    documentsRequired: [
      'UP Domicile Certificate (Niwas Praman Patra)',
      'Aadhaar Card',
      'Educational certificates (10th/12th/Degree)',
      'Income Certificate if applying for tablet priority'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://abhyuday.up.gov.in',
    deadlineText: 'Registration usually opens around February-April',
    coveredExams: ['UPSC CSE', 'UPPSC PCS', 'NEET', 'JEE', 'NDA', 'CDS', 'UP Police SI'],
    featured: true
  },
  {
    id: 'scheme-delhi-jai-bhim',
    name: 'Jai Bhim Mukhyamantri Pratibha Vikas Yojana',
    shortName: 'Jai Bhim Pratibha Vikas',
    provider: 'State Government',
    state: 'Delhi',
    category: 'Civil Services & Administration',
    schemeType: 'Free Coaching & Mentorship',
    financialBenefit: 'Up to ₹1,40,000 Coaching Fee Reimbursement + ₹2,500/month Cash Stipend',
    benefitAmountVal: 140000,
    duration: '4 to 12 months depending on the competitive exam',
    summary: 'Delhi Government initiative funding complete tuition at renowned private coaching institutions in Delhi for disadvantaged students.',
    fullDescription: 'The Directorate of Welfare of SC/ST/OBC/Minorities in Delhi funds coaching fees for meritorious students attending empanelled premium coaching institutes in Mukherjee Nagar, Rajendra Nagar, and Kalu Sarai, while delivering a monthly allowance directly into their bank accounts.',
    eligibility: {
      education: 'Must have passed 10th and 12th from a school in Delhi',
      incomeLimit: 'Family annual income must not exceed ₹8.00 Lakhs per annum',
      categoriesAllowed: ['SC', 'ST', 'OBC (Non-Creamy Layer)', 'EWS', 'Minorities'],
      domicileRequirement: 'Resident of Delhi (with school education in Delhi)',
      otherCriteria: [
        '100% fee covered if income is up to ₹2.00 Lakh; 75% covered if income is between ₹2.00 - ₹8.00 Lakhs',
        'Can be availed for up to two competitive exams per candidate'
      ]
    },
    keyBenefits: [
      'Direct fee settlement up to ₹1.4 Lakh with top private coaching academies',
      'Monthly stipend of ₹2,500 deposited directly via DBT for travel and books',
      'Access to test series, interview guidance programs, and library facilities'
    ],
    selectionProcess: 'Direct admission through empanelled institutes or central Delhi Government welfare portal.',
    documentsRequired: [
      'Delhi Voter ID / Domicile / Ration Card',
      'Income Certificate from Delhi Revenue Department',
      'Caste or EWS Certificate',
      'Delhi School Passing Certificates (10th & 12th)',
      'Bank Account details'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://scstwelfare.delhigovt.nic.in',
    deadlineText: 'Phase-wise admissions throughout the academic year',
    coveredExams: ['UPSC CSE', 'DSSSB', 'SSC CGL', 'Banking Exams', 'Judicial Services', 'IIT JEE', 'NEET'],
    featured: true
  },
  {
    id: 'scheme-bihar-civil-protsahan',
    name: 'Mukhyamantri Civil Seva Protsahan Yojana (Bihar)',
    shortName: 'Bihar Civil Seva Protsahan',
    provider: 'State Government',
    state: 'Bihar',
    category: 'Civil Services & Administration',
    schemeType: 'Prelims / Stage Clearance Incentive',
    financialBenefit: '₹1,00,000 for clearing UPSC Prelims | ₹50,000 for clearing BPSC Prelims',
    benefitAmountVal: 100000,
    duration: 'One-time lump sum grant upon passing Preliminary Examination',
    summary: 'Direct monetary stimulus by the Bihar Government rewarding aspirants who clear the preliminary stage to prepare stress-free for Mains & Interview.',
    fullDescription: 'Administered under the Women & Child Welfare and SC/ST/BC/EBC Welfare departments of Bihar, this landmark scheme awards a direct cash transfer of ₹1,00,000 to candidates clearing the UPSC Civil Services Preliminary exam, and ₹50,000 to candidates clearing the BPSC Combined Competitive Prelims, ensuring financial constraints do not derail Mains preparation.',
    eligibility: {
      education: 'Must have successfully cleared UPSC CSE Prelims or BPSC Combined Competitive Prelims',
      incomeLimit: 'No income ceiling for SC/ST and Female candidates; income limits apply for EBC/BC variants',
      categoriesAllowed: ['SC', 'ST', 'OBC (Non-Creamy Layer)', 'EWS', 'Girls'],
      domicileRequirement: 'Permanent resident of Bihar',
      otherCriteria: [
        'Candidate must apply within 30-45 days of preliminary result declaration',
        'Can be claimed only once per exam level'
      ]
    },
    keyBenefits: [
      'Direct bank credit of ₹1,00,000 for UPSC Prelims cleared candidates',
      'Direct bank credit of ₹50,000 for BPSC Prelims cleared candidates',
      'Funds can be utilized for Mains test series, Delhi accommodation, or study resources'
    ],
    selectionProcess: 'Online verification of Preliminary Admit Card and Roll Number on official result sheet.',
    documentsRequired: [
      'Preliminary Exam Admit Card & Marksheet / Result PDF highlighting Roll No',
      'Bihar Permanent Residence Certificate (Awasiya Praman Patra)',
      'Category Certificate (SC/ST/EBC)',
      'Aadhaar Card and Cancelled Cheque / Bank Passbook'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://fts.bih.nic.in',
    deadlineText: 'Within 30-45 days following Prelims results',
    coveredExams: ['UPSC Civil Services', 'BPSC Combined Competitive Exam'],
    featured: true
  },
  {
    id: 'scheme-rajasthan-anuprati',
    name: 'Mukhyamantri Anuprati Coaching Yojana (Rajasthan)',
    shortName: 'Rajasthan Anuprati',
    provider: 'State Government',
    state: 'Rajasthan',
    category: 'Civil Services & Administration',
    schemeType: 'Free Coaching & Mentorship',
    financialBenefit: 'Free Coaching at Prestigious Institutes + ₹40,000/year Boarding Allowance',
    benefitAmountVal: 85000,
    duration: '1 to 2 years based on exam stream',
    summary: 'Empowering over 30,000 meritorious Rajasthan students every year with fully sponsored coaching and outstation residence allowance.',
    fullDescription: 'Executed by the Social Justice and Empowerment Department (SJED) of Rajasthan, Anuprati enables meritorious students from marginalized backgrounds to study at premier coaching hubs (Jaipur, Kota, Jodhpur, Delhi). Outstation students living in rented accommodations receive an additional ₹40,000 annual boarding stipend.',
    eligibility: {
      education: '10th, 12th or Graduate depending on target exam level',
      incomeLimit: 'Family annual income must be below ₹8.00 Lakhs per annum',
      categoriesAllowed: ['SC', 'ST', 'OBC (Non-Creamy Layer)', 'EWS', 'Minorities'],
      domicileRequirement: 'Must be a Bonafide resident of Rajasthan (Mool Niwas)',
      otherCriteria: [
        'Minimum percentage criteria: 50% to 60% in 10th/12th/Graduation based on category',
        'Seats partitioned across competitive exam verticals'
      ]
    },
    keyBenefits: [
      'Choice of premier empanelled institutions across Rajasthan and Delhi',
      '₹40,000 annual living and hostel allowance for students coaching away from home district',
      'Dedicated reservation for girl candidates (approx. 50% reservation in seats)'
    ],
    selectionProcess: 'Merit list generated automatically via SJED portal based on 10th/12th/Graduation marks.',
    documentsRequired: [
      'Rajasthan Bonafide Certificate (Mool Niwas Praman Patra)',
      'Jan Aadhaar Card',
      'Caste Certificate and Income Certificate',
      'Relevant marksheets'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://sje.rajasthan.gov.in',
    deadlineText: 'Applications invited biannually (June-July & December)',
    coveredExams: ['UPSC CSE', 'RPSC RAS', 'REET', 'Rajasthan Police Sub-Inspector', 'Patwari', 'IIT JEE', 'NEET'],
    featured: true
  },
  {
    id: 'scheme-barti-sarthi-mahajyoti',
    name: 'BARTI / SARTHI / MAHAJYOTI Fellowship & Coaching Scheme',
    shortName: 'Maharashtra Autonomous Institutes',
    provider: 'State Government',
    state: 'Maharashtra',
    category: 'Civil Services & Administration',
    schemeType: 'Monthly Stipend & Fellowship',
    financialBenefit: '₹10,000 to ₹13,000/month Monthly Stipend + ₹50,000 Delhi Coaching Grant',
    benefitAmountVal: 156000,
    duration: '10 to 12 months intensive program',
    summary: 'Autonomous institutions under the Government of Maharashtra providing top-bracket stipends and sponsored Delhi/Pune coaching for civil service aspirants.',
    fullDescription: 'BARTI (Babasaheb Ambedkar Research & Training Institute), SARTHI (Chhatrapati Shahu Maharaj Research, Training and Human Development Institute), and MAHAJYOTI provide specialized coaching, daily reading room access, and direct monthly cash stipends to support candidates from SC, Maratha/Kunbi, and OBC/VJNT/SBC communities respectively.',
    eligibility: {
      education: 'Graduate in any discipline from a recognized University',
      incomeLimit: 'Valid Non-Creamy Layer certificate or income below ₹8 Lakhs',
      categoriesAllowed: ['SC', 'OBC (Non-Creamy Layer)', 'EWS', 'General'],
      domicileRequirement: 'Maharashtra Domicile mandatory',
      otherCriteria: [
        'Selection via Common Entrance Test (CET) conducted by BARTI / SARTHI / MAHAJYOTI',
        'Minimum 75% biometric attendance required for monthly stipend disbursement'
      ]
    },
    keyBenefits: [
      'Monthly stipend of ₹10,000 (home state coaching) or ₹13,000 (Delhi coaching)',
      'One-time book grant of ₹12,000 for competitive exam study materials',
      'Comprehensive Mains mock evaluation and personality test mock panels'
    ],
    selectionProcess: 'Statewide competitive entrance test followed by document verification.',
    documentsRequired: [
      'Maharashtra Domicile Certificate',
      'Caste Certificate & Caste Validity Certificate (mandatory for BARTI/SARTHI)',
      'Non-Creamy Layer (NCL) certificate where applicable',
      'Graduation Degree Certificate'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://barti.maharashtra.gov.in',
    deadlineText: 'CET notification issued between August and October',
    coveredExams: ['UPSC Civil Services', 'MPSC State Services', 'MPSC Subordinate Services', 'IBPS PO'],
    featured: false
  },
  {
    id: 'scheme-pmrf',
    name: "Prime Minister's Research Fellowship (PMRF)",
    shortName: 'PMRF Fellowship',
    provider: 'Central Government',
    category: 'Research & Higher Education',
    schemeType: 'Monthly Stipend & Fellowship',
    financialBenefit: '₹70,000 to ₹80,000/month Stipend + ₹2,00,000/year Research Contingency Grant',
    benefitAmountVal: 960000,
    duration: 'Up to 5 years (Full Ph.D. duration)',
    summary: 'Indias most prestigious doctoral fellowship for students admitted to PhD programs at IISc, IITs, IISERs, and Central Universities.',
    fullDescription: 'Designed to attract the best talent into research in science and technology domains, PMRF provides unmatched financial security: ₹70,000/month for the first two years, ₹75,000/month in the third year, and ₹80,000/month in years 4 and 5, in addition to ₹2.00 Lakhs annually for travel, conferences, and equipment.',
    eligibility: {
      education: 'B.Tech / Integrated M.Tech / M.Sc with minimum CGPA 8.0 or qualifying GATE score',
      incomeLimit: 'No income ceiling (strictly merit and research caliber based)',
      categoriesAllowed: ['General', 'OBC (Non-Creamy Layer)', 'SC', 'ST', 'EWS'],
      domicileRequirement: 'Indian Nationals',
      otherCriteria: [
        'Candidate must be enrolled in or admitted to a PMRF Granting Institute',
        'Strong research proposal evaluated by National Screening Committee'
      ]
    },
    keyBenefits: [
      'Year 1 & 2: ₹70,000 per month; Year 3: ₹75,000 per month; Year 4 & 5: ₹80,000 per month',
      'Annual research contingency grant of ₹2,00,000 for lab consumables, national and international conferences',
      'Exemption from institutional teaching assistantship duties to focus 100% on high-impact research'
    ],
    selectionProcess: 'Internal nomination by PMRF granting institutes followed by rigorous national peer review.',
    documentsRequired: [
      'Academic Transcripts with CGPA verification',
      'GATE Score Card (if applicable)',
      'Detailed Research Proposal & Statement of Purpose (SOP)',
      'Letters of Recommendation from Academic Advisors'
    ],
    applicationMode: 'University Cell',
    portalUrl: 'https://pmrf.in',
    deadlineText: 'Direct & Lateral Entry cycles occur twice annually (May & December)',
    coveredExams: ['GATE', 'CSIR-UGC NET', 'Direct PhD Entrance'],
    featured: true
  },
  {
    id: 'scheme-csir-ugc-jrf',
    name: 'CSIR - UGC NET Junior Research Fellowship (JRF)',
    shortName: 'UGC-CSIR JRF',
    provider: 'Central Government',
    category: 'Research & Higher Education',
    schemeType: 'Monthly Stipend & Fellowship',
    financialBenefit: '₹37,000/month JRF + HRA (Upgraded to ₹42,000/month SRF after 2 years)',
    benefitAmountVal: 444000,
    duration: '5 years (2 years JRF + 3 years SRF)',
    summary: 'National fellowship enabling qualified post-graduates to pursue PhD and research positions with monthly stipends and institutional HRA.',
    fullDescription: 'Conducted by the National Testing Agency (NTA), clearing the Junior Research Fellowship cut-off awards candidates with financial freedom to research at any university, CSIR lab, or national research institute across India, alongside qualification for Assistant Professorship.',
    eligibility: {
      education: 'Post Graduate / Master degree with minimum 55% marks (50% for SC/ST/OBC-NCL/PwD)',
      incomeLimit: 'No income ceiling',
      ageLimit: 'Maximum 30 years for General (relaxed by 5 years for SC/ST/OBC/Women/PwD)',
      categoriesAllowed: ['General', 'OBC (Non-Creamy Layer)', 'SC', 'ST', 'EWS', 'Girls'],
      domicileRequirement: 'All Indian Citizens',
      otherCriteria: [
        'Valid for joining PhD within 3 years of result declaration'
      ]
    },
    keyBenefits: [
      '₹37,000 per month stipend for first 2 years, elevated to ₹42,000 per month for remaining 3 years',
      'House Rent Allowance (HRA) up to 27% as per city classification (X, Y, Z)',
      'Contingency grant of ₹20,000/year for humanities/social sciences or ₹25,000/year for sciences'
    ],
    selectionProcess: 'Computer Based Test (CBT) conducted biannually by NTA across subject specializations.',
    documentsRequired: [
      'Postgraduate Degree or Final Semester Enrollment Certificate',
      'Category Certificate where age/percentage relaxation is sought',
      'NTA CSIR-UGC NET Award Letter'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://ugcnet.nta.ac.in',
    deadlineText: 'Held twice a year (June & December cycles)',
    coveredExams: ['UGC NET', 'CSIR NET', 'Assistant Professor Recruitment'],
    featured: false
  },
  {
    id: 'scheme-gate-mtech-stipend',
    name: 'AICTE / MoE Post Graduate Scholarship for GATE Qualified Students',
    shortName: 'GATE M.Tech Stipend',
    provider: 'Central Government',
    category: 'Engineering & Technical',
    schemeType: 'Monthly Stipend & Fellowship',
    financialBenefit: '₹12,400 per month for 24 months (Total ₹2,97,600)',
    benefitAmountVal: 297600,
    duration: '24 months (Full M.E. / M.Tech / M.Des curriculum)',
    summary: 'Direct monthly stipend for every engineering graduate who qualifies GATE and secures admission to AICTE-approved postgraduate programs.',
    fullDescription: 'Administered by the Ministry of Education and AICTE, this scholarship guarantees that any student with a valid GATE score admitted to an AICTE-approved institution receives ₹12,400/month directly into their Aadhaar-seeded bank account for the entire 24-month duration of their master’s degree.',
    eligibility: {
      education: 'B.E. / B.Tech / B.Arch / B.Pharm with a valid qualifying GATE / CEED score card',
      incomeLimit: 'No income ceiling',
      categoriesAllowed: ['General', 'OBC (Non-Creamy Layer)', 'SC', 'ST', 'EWS'],
      domicileRequirement: 'All Indian Nationals',
      otherCriteria: [
        'Must be admitted in a regular full-time program at an AICTE approved college or university',
        'Required to dedicate 8-10 hours per week towards teaching/laboratory assistance'
      ]
    },
    keyBenefits: [
      'Guaranteed ₹12,400 monthly stipend credited via Direct Benefit Transfer (DBT)',
      'Financial independence during high-level technical specialization and thesis work',
      'Opportunity to prepare for PSU recruitments (ONGC, IOCL, NTPC) and IES while pursuing M.Tech'
    ],
    selectionProcess: 'Direct validation via the AICTE PG Scholarship Portal upon institute verification.',
    documentsRequired: [
      'Valid GATE / CEED Score Card',
      'College Admission Fee Receipt & Student ID',
      'Aadhaar-seeded savings bank account details'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://pgscholarship.aicte-india.org',
    deadlineText: 'Registration opens right after M.Tech admissions (August-November)',
    coveredExams: ['GATE', 'CEED', 'PSU Recruiter Exams'],
    featured: false
  },
  {
    id: 'scheme-aicte-pragati',
    name: 'AICTE Pragati Scholarship for Girl Students',
    shortName: 'AICTE Pragati',
    provider: 'Central Government',
    category: 'Engineering & Technical',
    schemeType: 'Girl Child / Minority Specific',
    financialBenefit: '₹50,000 per year for up to 4 years of Technical Degree / Diploma',
    benefitAmountVal: 200000,
    duration: 'Up to 4 years for Degree or 3 years for Diploma',
    summary: 'Empowering young women pursuing engineering and technical education with dedicated annual financial grants.',
    fullDescription: 'Pragati is an AICTE flagship scheme to assist female students in advancing into technical education. Up to 10,000 scholarships are awarded annually (₹50,000/annum) to cover college tuition, purchase of laptops, books, and competitive exam preparation resources.',
    eligibility: {
      education: 'Admitted to 1st year of Degree/Diploma or 2nd year via lateral entry in AICTE approved institution',
      incomeLimit: 'Family annual income must not exceed ₹8.00 Lakhs per annum',
      categoriesAllowed: ['Girls'],
      domicileRequirement: 'Indian Citizens across all States and UTs',
      otherCriteria: [
        'Maximum two girl children per family eligible'
      ]
    },
    keyBenefits: [
      '₹50,000 per annum lumpsum grant paid directly via DBT',
      'Can be utilized for purchasing computers, competitive test series, and exam fees',
      'All eligible applicants from 13 Northeast / Union Territory regions receive 100% award'
    ],
    selectionProcess: 'Merit list compiled on the National Scholarship Portal (NSP) based on qualifying exam marks.',
    documentsRequired: [
      '10th and 12th / Diploma Marksheet',
      'Family Income Certificate',
      'Institute Admission Letter & Fee Receipt',
      'Bonafide Certificate signed by Principal/Director'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://scholarships.gov.in',
    deadlineText: 'Annual NSP portal window open from August to December',
    coveredExams: ['GATE', 'JEE', 'Technical PSC Exams', 'SSC JE'],
    featured: false
  },
  {
    id: 'scheme-banking-pet',
    name: 'Pre-Exam Training (PET) Scheme for Banking Aspirants',
    shortName: 'IBPS / SBI PET',
    provider: 'Autonomous Body / PSU',
    category: 'Banking & Financial',
    schemeType: 'Free Coaching & Mentorship',
    financialBenefit: '100% Free Specialized Classroom / Virtual Coaching Sessions by Exam Boards',
    benefitAmountVal: 15000,
    duration: '6 to 10 days intensive pre-exam workshop',
    summary: 'Mandatory free pre-examination coaching conducted by IBPS and SBI for candidates from reserved categories prior to Prelims.',
    fullDescription: 'Conducted directly by the Institute of Banking Personnel Selection (IBPS) and State Bank of India (SBI) in compliance with government guidelines, candidates belonging to SC, ST, OBC, and Religious Minorities receive tailored training on speed calculation techniques, logical reasoning, and computer-based test strategies before PO and Clerk exams.',
    eligibility: {
      education: 'Graduate or 12th pass depending on post applied (Clerk / PO / SO)',
      incomeLimit: 'No income criteria',
      categoriesAllowed: ['SC', 'ST', 'OBC (Non-Creamy Layer)', 'Minorities'],
      domicileRequirement: 'All applicants who opt-in during online bank application',
      otherCriteria: [
        'Candidate must select "Yes" for Pre-Exam Training while filling out the IBPS/SBI application form'
      ]
    },
    keyBenefits: [
      'Specialized strategy lectures by seasoned bankers and recruitment evaluators',
      'Hands-on mock interface practice for the online exam platform',
      'High-speed arithmetic tricks, English grammar shortcuts, and reasoning shortcuts'
    ],
    selectionProcess: 'Automatic admit card issuance to all applicants who opt-in during IBPS / SBI registration.',
    documentsRequired: [
      'IBPS / SBI PET Call Letter',
      'Original Category Certificate (SC/ST/OBC/Minority declaration)',
      'Photo Identity Proof'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://www.ibps.in',
    deadlineText: 'Activated 2-3 weeks before IBPS / SBI Preliminary Exams',
    coveredExams: ['IBPS PO', 'IBPS Clerk', 'SBI PO', 'SBI Clerk', 'IBPS RRB Officer & Assistant'],
    featured: false
  },
  {
    id: 'scheme-tamilnadu-naan-mudhalvan',
    name: 'Tamil Nadu Naan Mudhalvan All India Civil Services Incentive',
    shortName: 'Naan Mudhalvan AICSCC',
    provider: 'State Government',
    state: 'Tamil Nadu',
    category: 'Civil Services & Administration',
    schemeType: 'Monthly Stipend & Fellowship',
    financialBenefit: '₹7,500/month for 10 months to Prelims Aspirants + ₹25,000 for Mains Cleared',
    benefitAmountVal: 100000,
    duration: '10 months stipend leading up to UPSC examination',
    summary: 'Pioneering Tamil Nadu government scheme providing 1,000 selected aspirants with ₹7,500 monthly stipend to focus on UPSC Civil Services preparation.',
    fullDescription: 'The Tamil Nadu Skill Development Corporation (TNSDC) under the Naan Mudhalvan initiative shortlists 1,000 committed civil services aspirants through a state screening test and funds ₹7,500 per month for 10 months. Furthermore, students who clear UPSC Prelims receive a lump sum of ₹25,000 for Mains preparation.',
    eligibility: {
      education: 'Degree in any discipline from a recognized University',
      incomeLimit: 'Open across income brackets (merit-based selection)',
      categoriesAllowed: ['General', 'OBC (Non-Creamy Layer)', 'SC', 'ST', 'EWS'],
      domicileRequirement: 'Tamil Nadu Domicile',
      otherCriteria: [
        'Selection via statewide Naan Mudhalvan UPSC Screening Examination'
      ]
    },
    keyBenefits: [
      '₹7,500 monthly financial aid credited for 10 months',
      'Free residential or non-residential coaching at Chennai AICSCC campus',
      'High-speed digital library access with all major journals and test series'
    ],
    selectionProcess: 'Screening test assessing General Studies, CSAT, and Current Affairs.',
    documentsRequired: [
      'Tamil Nadu Nativity / Domicile Certificate',
      'Degree Certificate',
      'Aadhaar Card and Bank Account details'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://www.naanmudhalvan.tn.gov.in',
    deadlineText: 'Annual screening notification published around July-August',
    coveredExams: ['UPSC Civil Services', 'TNPSC Group 1'],
    featured: false
  },
  {
    id: 'scheme-agnipath-seva-nidhi',
    name: 'Agnipath Seva Nidhi & Government Job Reservation Quota',
    shortName: 'Agniveer Seva Nidhi & Job Quota',
    provider: 'Central Government',
    category: 'Defense & Police',
    schemeType: 'Tuition & Exam Fee Waiver',
    financialBenefit: '₹11.71 Lakhs Tax-Free Seva Nidhi Package + 10% Reservation in CAPFs & State Police',
    benefitAmountVal: 1171000,
    duration: '4-year service contract followed by prioritized placement',
    summary: 'Comprehensive scheme offering financial corpus and horizontal reservation in Central Armed Police Forces (BSF, CISF, CRPF) and state police jobs.',
    fullDescription: 'Upon completion of the 4-year tenure in the Armed Forces, Agniveers receive an accumulated ₹11.71 Lakhs Seva Nidhi financial corpus to pursue higher education, entrepreneurship, or competitive exams, along with 10% vacancies reserved in CAPFs and age relaxations (up to 5 years for the first batch, 3 years thereafter).',
    eligibility: {
      education: '10th / 12th pass depending on Soldier General Duty / Clerk / Technical trade',
      incomeLimit: 'No income limits',
      ageLimit: '17.5 to 21 years at recruitment',
      categoriesAllowed: ['General', 'OBC (Non-Creamy Layer)', 'SC', 'ST', 'EWS'],
      domicileRequirement: 'All Indian Citizens',
      otherCriteria: [
        'Completion of 4 years honorable service with Agniveer certificate'
      ]
    },
    keyBenefits: [
      '₹11.71 Lakhs tax-free lump sum Seva Nidhi corpus upon completion',
      '10% direct reservation in Constable / SI vacancies in BSF, CISF, CRPF, ITBP, SSB, and Assam Rifles',
      'Exemption from Physical Efficiency Test (PET) in many CAPF & State police recruitment drives',
      'Age relaxation of 3 to 5 years for recruitment in Central Armed Police Forces'
    ],
    selectionProcess: 'Recruitment rallies, Common Entrance Exam (CEE), and fitness trials.',
    documentsRequired: [
      '10th / 12th Board Certificate',
      'Agniveer Completion Certificate & Discharge Book',
      'Aadhaar and Domicile Certificate'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://joinindianarmy.nic.in',
    deadlineText: 'Year-round zonal recruitment rallies',
    coveredExams: ['Agniveer Army / Navy / Airforce', 'SSC GD Constable', 'CAPF Recruitment'],
    featured: false
  },
  {
    id: 'scheme-karnataka-prabuddha',
    name: 'Karnataka Prabuddha & Competitive Exam Incentives',
    shortName: 'Karnataka Prabuddha',
    provider: 'State Government',
    state: 'Karnataka',
    category: 'Civil Services & Administration',
    schemeType: 'Prelims / Stage Clearance Incentive',
    financialBenefit: '₹1,00,000 for UPSC Prelims | ₹50,000 for KPSC Prelims + ₹10,000/mo Free Coaching',
    benefitAmountVal: 100000,
    duration: 'One-time incentive upon Prelims result + 9 months coaching sponsorship',
    summary: 'Karnataka Social Welfare Department grants for SC/ST and OBC students cracking Preliminary rounds of Central and State civil service exams.',
    fullDescription: 'Administered through the Karnataka Social Welfare & Backward Classes departments, eligible Karnataka candidates who qualify UPSC Civil Services Preliminary examination receive a direct financial aid of ₹1,00,000, while KPSC KAS Prelims qualifiers receive ₹50,000 to assist in Mains test series and study material procurement.',
    eligibility: {
      education: 'Graduate in any discipline',
      incomeLimit: 'Family income up to ₹6.00 Lakhs for full benefits',
      categoriesAllowed: ['SC', 'ST', 'OBC (Non-Creamy Layer)'],
      domicileRequirement: 'Permanent resident of Karnataka',
      otherCriteria: [
        'Must submit verification within prescribed timeframe from date of Prelims result'
      ]
    },
    keyBenefits: [
      '₹1,00,000 direct bank transfer for UPSC Prelims cleared candidates',
      '₹50,000 direct bank transfer for KPSC Gazetted Probationers Prelims cleared candidates',
      'Sponsored residential coaching in Bengaluru or New Delhi with living allowance'
    ],
    selectionProcess: 'Online application on Karnataka SWD portal verified against UPSC/KPSC results.',
    documentsRequired: [
      'Karnataka Domicile / RD Number Income & Caste Certificate',
      'Prelims Admit card and UPSC/KPSC result page',
      'Aadhaar linked bank account'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://sw.kar.nic.in',
    deadlineText: 'Within 4 weeks of Preliminary Exam results',
    coveredExams: ['UPSC Civil Services', 'KPSC KAS', 'SSC CGL'],
    featured: false
  },
  {
    id: 'scheme-dr-ambedkar-interest-subsidy',
    name: 'Dr. Ambedkar Central Sector Scheme of Interest Subsidy',
    shortName: 'Dr. Ambedkar Interest Subsidy',
    provider: 'Central Government',
    category: 'Staff Selection & State Exams',
    schemeType: 'Tuition & Exam Fee Waiver',
    financialBenefit: '100% Interest Subsidy on Educational Loans during Moratorium Period',
    benefitAmountVal: 120000,
    duration: 'Course duration + 1 year moratorium period',
    summary: 'Complete interest reimbursement on education loans taken by OBC and EBC students for higher professional and competitive studies.',
    fullDescription: 'To promote higher education among students belonging to Other Backward Classes (OBCs) and Economically Backward Classes (EBCs), the Ministry of Social Justice and Empowerment provides 100% interest subsidy during the moratorium period (i.e., course period plus one year) on education loans sanctioned under the IBA guidelines.',
    eligibility: {
      education: 'Admitted to Masters, M.Phil, or Ph.D. level courses in India or abroad',
      incomeLimit: 'Family income must not exceed ₹8.00 Lakhs for OBC and ₹2.50 Lakhs for EBC',
      categoriesAllowed: ['OBC (Non-Creamy Layer)', 'EWS'],
      domicileRequirement: 'Indian Citizens',
      otherCriteria: [
        'Loan must be disbursed by a Scheduled Commercial Bank registered under IBA'
      ]
    },
    keyBenefits: [
      'Govt pays entire interest accumulated during studies and 1-year grace period',
      'Prevents compounding loan burdens while preparing for competitive job exams',
      'Directly credited to loan account via Canara Bank nodal branch'
    ],
    selectionProcess: 'Processed directly through the lending bank via the Canara Bank Portal.',
    documentsRequired: [
      'Bank Loan Sanction Letter',
      'Caste (OBC-NCL) or Income Certificate',
      'Admission Letter of Higher Education Program'
    ],
    applicationMode: 'Online Portal',
    portalUrl: 'https://socialjustice.gov.in',
    deadlineText: 'Open throughout the financial year through banking channels',
    coveredExams: ['UGC NET', 'GATE', 'Civil Services', 'State Exams'],
    featured: false
  }
];
