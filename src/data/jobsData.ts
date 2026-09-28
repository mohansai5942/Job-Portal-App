import { JobVacancy } from '../types';

export const ALL_JOBS: JobVacancy[] = [
  {
    id: 'job-ssc-cgl',
    title: 'Combined Graduate Level (SSC CGL) Examination',
    organization: 'Staff Selection Commission (SSC)',
    department: 'Central Ministries, CBI, Income Tax, Customs, Enforcement Directorate',
    sector: 'Central Government',
    examCategory: 'Staff Selection & State Exams',
    minQualification: 'Any Graduate (Degree)',
    specificDegree: 'Bachelor’s degree in any discipline from a recognized University',
    totalVacancies: 17727,
    approxSalary: '₹35,400 to ₹1,42,400 per month (Pay Level 4 to Level 7 + DA + HRA)',
    payLevel: 'Pay Level 4, 5, 6, 7 & 8 (Grade Pay ₹2400 to ₹4800)',
    minAge: 18,
    maxAgeGeneral: 30, // Some posts up to 32
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 10
    },
    selectionStages: [
      'Tier-I Computer Based Test (Reasoning, GA, Quantitative Aptitude, English)',
      'Tier-II Computer Based Examination (Mathematical Abilities, Reasoning, English, General Awareness, Computer Knowledge)',
      'Data Entry Speed Test (DEST) & Document Verification'
    ],
    applicationFee: '₹100 (Exempted for Women, SC, ST, PwD, and Ex-Servicemen)',
    applicationDeadline: 'Annual cycle: Notification released June/July',
    examDates: 'Tier-I in Sept-Oct | Tier-II in Dec-Jan',
    officialNotificationUrl: 'https://ssc.gov.in',
    applyUrl: 'https://ssc.gov.in',
    jobLocation: 'All India & Central Government HQs (New Delhi, Mumbai, Kolkata, etc.)',
    description: 'Premier gateway to coveted Group B and C gazetted/non-gazetted posts across Central Government ministries. Designations include Assistant Section Officer (ASO in CSS, MEA, IB), Inspector of Central Excise, Income Tax Inspector, and Sub-Inspector in CBI.',
    eligibilityHighlights: [
      'Any degree holder can apply; final year students can apply subject to passing cut-off date',
      'No minimum graduation percentage restriction (passing marks sufficient)',
      'Age between 18 to 30 years for most posts (up to 32 for Junior Statistical Officer)'
    ],
    relatedSchemes: ['scheme-msje-free-coaching', 'scheme-delhi-jai-bhim', 'scheme-rajasthan-anuprati'],
    featured: true
  },
  {
    id: 'job-upsc-cse',
    title: 'Civil Services Examination (IAS, IPS, IFS, IRS)',
    organization: 'Union Public Service Commission (UPSC)',
    department: 'Department of Personnel & Training (DoPT), Govt of India',
    sector: 'Central Government',
    examCategory: 'Civil Services & Administration',
    minQualification: 'Any Graduate (Degree)',
    specificDegree: 'Graduation degree in any subject from a recognized University',
    totalVacancies: 1056,
    approxSalary: '₹56,100 to ₹2,50,000 per month (Pay Level 10 to Level 18 + Perks & Residence)',
    payLevel: 'Pay Level 10 (Junior Time Scale) starting at Basic ₹56,100',
    minAge: 21,
    maxAgeGeneral: 32,
    ageRelaxation: {
      obc: 3, // up to 35 years & 9 attempts
      scSt: 5, // up to 37 years & unlimited attempts
      pwd: 10
    },
    selectionStages: [
      'Civil Services (Preliminary) Exam - GS Paper I & CSAT Qualifying',
      'Civil Services (Mains) Exam - 9 Descriptive Papers (Essay, GS I-IV, Optional I & II)',
      'Personality Test (Interview) at Dholpur House, New Delhi'
    ],
    applicationFee: '₹100 (Exempted for Female, SC, ST, and PwD candidates)',
    applicationDeadline: 'Notification issued in February annually',
    examDates: 'Prelims in May/June | Mains in September',
    officialNotificationUrl: 'https://upsc.gov.in',
    applyUrl: 'https://upsconline.nic.in',
    jobLocation: 'All India Cadre / Central Service postings',
    description: 'The pinnacle of public administrative careers in India. Recruits officers for Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), Indian Revenue Service (IRS), and 20+ Allied Services.',
    eligibilityHighlights: [
      'Candidate must hold a degree of any recognized University or deemed university',
      'Final year graduating students are eligible to sit for the Preliminary Examination',
      'Number of attempts: 6 for General/EWS, 9 for OBC, unlimited for SC/ST within age'
    ],
    relatedSchemes: ['scheme-bihar-civil-protsahan', 'scheme-msje-free-coaching', 'scheme-up-abhyudaya', 'scheme-tamilnadu-naan-mudhalvan', 'scheme-karnataka-prabuddha'],
    featured: true
  },
  {
    id: 'job-ibps-po',
    title: 'Probationary Officer (PO / MT) in Public Sector Banks',
    organization: 'Institute of Banking Personnel Selection (IBPS)',
    department: '11 Participating PSU Banks (PNB, BoB, Canara Bank, Union Bank, etc.)',
    sector: 'Banking & PSU Banks',
    examCategory: 'Banking & Financial',
    minQualification: 'Any Graduate (Degree)',
    specificDegree: 'Graduation in any discipline',
    totalVacancies: 4455,
    approxSalary: '₹52,000 to ₹58,000 per month gross starting salary + Leased Housing + Allowances',
    payLevel: 'Junior Management Grade Scale 1 (JMGS-I)',
    minAge: 20,
    maxAgeGeneral: 30,
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 10
    },
    selectionStages: [
      'Preliminary Examination (English Language, Quantitative Aptitude, Reasoning)',
      'Main Examination (Reasoning & Computer, General/Economy/Banking, English, Data Analysis & Descriptive Test)',
      'Common Interview conducted by participating Banks and coordinated by IBPS'
    ],
    applicationFee: '₹850 (₹175 for SC, ST, PwD candidates)',
    applicationDeadline: 'Notification released in August annually',
    examDates: 'Prelims in October | Mains in November | Interviews in Jan/Feb',
    officialNotificationUrl: 'https://www.ibps.in',
    applyUrl: 'https://ibpsonline.ibps.in',
    jobLocation: 'Branches and Regional Offices across India',
    description: 'Direct recruitment of Assistant Managers / Probationary Officers across major Nationalized Public Sector Banks. Rapid promotional tracks leading to Chief Manager, AGM, DGM, and Executive Director positions.',
    eligibilityHighlights: [
      'Degree (Graduation) in any discipline from a recognized University',
      'Operating and working knowledge in computer systems is mandatory',
      'Proficiency in the local official language of the state/UT is desirable'
    ],
    relatedSchemes: ['scheme-banking-pet', 'scheme-msje-free-coaching', 'scheme-rajasthan-anuprati'],
    featured: true
  },
  {
    id: 'job-rrb-ntpc',
    title: 'Non-Technical Popular Categories (RRB NTPC)',
    organization: 'Railway Recruitment Boards (RRB) / Ministry of Railways',
    department: '17 Zonal Railways & Production Units across India',
    sector: 'Indian Railways',
    examCategory: 'Railways',
    minQualification: '12th Pass (Intermediate)',
    specificDegree: '12th Pass for Undergraduate level posts | Degree for Graduate level posts',
    totalVacancies: 11558,
    approxSalary: '₹21,700 to ₹35,400 Basic + Free Railway Passes + Running/Medical Allowances',
    payLevel: 'Pay Level 2, 3 (Undergraduate) & Level 5, 6 (Graduate)',
    minAge: 18,
    maxAgeGeneral: 33, // Railway age relaxation applied
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 10
    },
    selectionStages: [
      '1st Stage Computer Based Test (CBT 1 - Screening)',
      '2nd Stage Computer Based Test (CBT 2 - Post-wise Merit)',
      'Computer Based Aptitude Test (CBAT for Station Master) / Typing Skill Test',
      'Document Verification and Medical Examination'
    ],
    applicationFee: '₹500 (₹400 refunded after appearing in CBT-1; ₹250 for SC/ST/Women/Minority fully refunded)',
    applicationDeadline: 'Announced via Railway Recruitment Boards portal',
    examDates: 'CBT 1 conducted across multiple shifts nationwide',
    officialNotificationUrl: 'https://www.rrbapply.gov.in',
    applyUrl: 'https://www.rrbapply.gov.in',
    jobLocation: 'Zonal Divisions across India',
    description: 'Massive recruitment for respected railway roles including Station Master, Goods Train Manager, Senior Commercial cum Ticket Clerk, Junior Accounts Assistant, and Commercial Apprentice.',
    eligibilityHighlights: [
      'Both 12th pass students and college graduates have dedicated post categories',
      'Generous medical standards and pass travel privileges for railway staff and family',
      'Exam question papers accessible in 15 regional languages'
    ],
    relatedSchemes: ['scheme-msje-free-coaching', 'scheme-up-abhyudaya'],
    featured: true
  },
  {
    id: 'job-ssc-chsl',
    title: 'Combined Higher Secondary (10+2) Level (SSC CHSL)',
    organization: 'Staff Selection Commission (SSC)',
    department: 'Central Ministries, Armed Forces HQs, Controller General of Accounts',
    sector: 'Central Government',
    examCategory: 'Staff Selection & State Exams',
    minQualification: '12th Pass (Intermediate)',
    specificDegree: 'Higher Secondary (10+2) pass from recognized Board or University',
    totalVacancies: 3712,
    approxSalary: '₹19,900 to ₹81,100 per month (Pay Level 2 & 4 + allowances)',
    payLevel: 'Pay Level 2 (LDC/JSA) & Pay Level 4 (DEO)',
    minAge: 18,
    maxAgeGeneral: 27,
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 10
    },
    selectionStages: [
      'Tier-I Computer Based Examination (Objective Multiple Choice)',
      'Tier-II Examination (Mathematical Abilities, Reasoning, English, General Awareness, Computer)',
      'Skill Test / Typing Test for LDC and DEO'
    ],
    applicationFee: '₹100 (Exempted for Female, SC, ST, PwD, and ESM)',
    applicationDeadline: 'Notification released April/May annually',
    examDates: 'Tier-I in June/July | Tier-II in October/November',
    officialNotificationUrl: 'https://ssc.gov.in',
    applyUrl: 'https://ssc.gov.in',
    jobLocation: 'Central Government offices across all states & UTs',
    description: 'Ideal starting career for 12th pass students looking for immediate central government employment with great job security. Posts include Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator (DEO).',
    eligibilityHighlights: [
      'Must have passed 12th Standard or equivalent exam from a recognized Board',
      'Typing speed requirement: 35 wpm in English or 30 wpm in Hindi',
      'Eligible for internal departmental promotions to Assistant Section Officer within 5-8 years'
    ],
    relatedSchemes: ['scheme-msje-free-coaching', 'scheme-delhi-jai-bhim'],
    featured: false
  },
  {
    id: 'job-upsc-cds',
    title: 'Combined Defence Services (CDS) Officer Examination',
    organization: 'Union Public Service Commission (UPSC)',
    department: 'Indian Army, Indian Navy, Indian Air Force',
    sector: 'Defense & Paramilitary',
    examCategory: 'Defense & Police',
    minQualification: 'Any Graduate (Degree)',
    specificDegree: 'Degree for IMA/OTA; Degree in Engineering for Naval Academy; Degree with Physics & Math or B.Tech for Air Force Academy',
    totalVacancies: 459,
    approxSalary: '₹56,100 basic (Level 10) + Military Service Pay (MSP ₹15,500) + Kit Maintenance + Free Messing',
    payLevel: 'Lieutenant rank / Sub-Lieutenant / Flying Officer (Pay Level 10)',
    minAge: 19,
    maxAgeGeneral: 24, // 25 for OTA
    ageRelaxation: {
      obc: 0, // No caste reservation in Defense Officer ranks
      scSt: 0,
      pwd: 0
    },
    selectionStages: [
      'UPSC Written Examination (English, General Knowledge, Elementary Mathematics)',
      'Services Selection Board (SSB) 5-Day Interview (Psychology, GTO, Personal Interview, Conference)',
      'Medical Board Examination at Military Hospitals'
    ],
    applicationFee: '₹200 (Exempted for Female and SC/ST candidates)',
    applicationDeadline: 'Conducted twice a year (CDS I in Jan, CDS II in May/June)',
    examDates: 'CDS I in April | CDS II in September',
    officialNotificationUrl: 'https://upsc.gov.in',
    applyUrl: 'https://upsconline.nic.in',
    jobLocation: 'Military stations & bases across India and UN Peacekeeping deployments',
    description: 'Commission as an officer in the prestigious Indian Armed Forces. Direct commission into Indian Military Academy (Dehradun), Officers Training Academy (Chennai), Indian Naval Academy (Ezhimala), or Air Force Academy (Dundigal).',
    eligibilityHighlights: [
      'Final year graduating students can appear for the exam',
      'Both men and women are eligible (Women through OTA Chennai stream)',
      'Unmatched lifestyle, free medical for family, pension, canteen (CSD) and adventurous postings'
    ],
    relatedSchemes: ['scheme-up-abhyudaya', 'scheme-agnipath-seva-nidhi'],
    featured: true
  },
  {
    id: 'job-upsc-nda',
    title: 'National Defence Academy & Naval Academy (NDA / NA)',
    organization: 'Union Public Service Commission (UPSC)',
    department: 'Joint Services Military Training Institution (Tri-Services)',
    sector: 'Defense & Paramilitary',
    examCategory: 'Defense & Police',
    minQualification: '12th Pass (Intermediate)',
    specificDegree: '12th Class pass of the 10+2 pattern of School Education (with Physics & Maths for Air Force/Navy)',
    totalVacancies: 400,
    approxSalary: '₹56,100/month training stipend (Level 10) + Commissioning allowances',
    payLevel: 'Pay Level 10 upon commissioning',
    minAge: 16.5 as any,
    maxAgeGeneral: 19.5 as any,
    ageRelaxation: {
      obc: 0,
      scSt: 0,
      pwd: 0
    },
    selectionStages: [
      'Mathematics (300 Marks) & General Ability Test (600 Marks) Written Exam',
      'Services Selection Board (SSB) 5-Day Psychological & Leadership Testing',
      'Comprehensive Medical Examination'
    ],
    applicationFee: '₹100 (Exempted for Female, SC, and ST candidates)',
    applicationDeadline: 'Twice a year (NDA I in Dec-Jan, NDA II in May-June)',
    examDates: 'NDA I in April | NDA II in September',
    officialNotificationUrl: 'https://upsc.gov.in',
    applyUrl: 'https://upsconline.nic.in',
    jobLocation: 'NDA Khadakwasla (Pune) followed by respective Service Academy',
    description: 'The world-famous premier joint training institution where cadets of Army, Navy, and Air Force train together before entering their specialized service academies. Both male and female cadets are eligible.',
    eligibilityHighlights: [
      'Open to students currently in Class 12 or who have cleared Class 12',
      'Earn a recognized B.A., B.Sc., or B.Tech degree from JNU during 3-year NDA training at zero personal cost',
      'All education, food, boarding, sports, and uniforms fully sponsored by Government of India'
    ],
    relatedSchemes: ['scheme-up-abhyudaya', 'scheme-msje-free-coaching'],
    featured: false
  },
  {
    id: 'job-isro-scientist',
    title: 'Scientist / Engineer ‘SC’ & Technical Assistant',
    organization: 'Indian Space Research Organisation (ISRO)',
    department: 'Department of Space, Govt of India',
    sector: 'Scientific & Research',
    examCategory: 'Engineering & Technical',
    minQualification: 'B.E. / B.Tech / Engineering',
    specificDegree: 'B.E. / B.Tech or equivalent in Electronics, Mechanical, Computer Science, Electrical with aggregate min 65% / 6.84 CGPA',
    totalVacancies: 380,
    approxSalary: '₹56,100 basic (Level 10) + Special allowances ~ ₹85,000 gross per month',
    payLevel: 'Pay Level 10 of Pay Matrix (7th CPC)',
    minAge: 21,
    maxAgeGeneral: 28,
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 10
    },
    selectionStages: [
      'Written Test (Core Engineering Disciplines + Technical Aptitude)',
      'Technical Interview with Eminent Space Scientists Panel'
    ],
    applicationFee: '₹250 (Full fee refund for candidates appearing in written test for reserved categories)',
    applicationDeadline: 'Recruitment notifications published throughout the year',
    examDates: 'Screening written exam conducted across major zonal centers',
    officialNotificationUrl: 'https://www.isro.gov.in/Careers.html',
    applyUrl: 'https://www.isro.gov.in',
    jobLocation: 'ISRO Centers: VSSC (Thiruvananthapuram), URSC (Bengaluru), SDSC SHAR (Sriharikota), SAC (Ahmedabad)',
    description: 'Work on cutting-edge space exploration missions including Gaganyaan, Chandrayaan, Aditya-L1, and interplanetary exploration as an ISRO Scientist.',
    eligibilityHighlights: [
      'Graduates with first-class engineering degrees in Mechanical, Electronics, Electrical, or Computer Science',
      'Direct contribution to national aerospace, satellite, and launch vehicle technologies',
      'Excellent residential townships with subsidized housing, schools, and medical facilities'
    ],
    relatedSchemes: ['scheme-gate-mtech-stipend', 'scheme-aicte-pragati', 'scheme-pmrf'],
    featured: true
  },
  {
    id: 'job-gate-psu-recruitment',
    title: 'Graduate Executive Trainee Recruitment through GATE (ONGC, IOCL, NTPC, BHEL, PowerGrid)',
    organization: 'Maharatna & Navratna PSUs',
    department: 'Energy, Oil & Gas, Power, and Heavy Engineering PSUs',
    sector: 'Public Sector Undertaking (PSU)',
    examCategory: 'Engineering & Technical',
    minQualification: 'B.E. / B.Tech / Engineering',
    specificDegree: 'B.E. / B.Tech in Mechanical, Civil, Electrical, Chemical, Instrumentation, CS/IT',
    totalVacancies: 2500,
    approxSalary: '₹60,000 to ₹1,80,000 basic pay (Annual CTC ₹14 to ₹22 Lakhs per annum)',
    payLevel: 'E-1 / E-2 Executive Grade',
    minAge: 21,
    maxAgeGeneral: 28, // 30 in some PSUs
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 10
    },
    selectionStages: [
      'Shortlisting strictly based on valid GATE Score Card',
      'Group Discussion (GD) and Group Task (GT)',
      'Personal Interview and Pre-Employment Medical Fitness'
    ],
    applicationFee: '₹300 to ₹500 depending on specific PSU portal',
    applicationDeadline: 'Applications open right after GATE result declaration (March-May)',
    examDates: 'GATE conducted in February annually by IITs/IISc',
    officialNotificationUrl: 'https://gate.iitk.ac.in',
    applyUrl: 'Directly on respective PSU career portals (ongcindia.com, iocl.com, ntpc.co.in)',
    jobLocation: 'Refineries, Power plants, Off-shore rigs, Transmission corridors, Corporate HQs',
    description: 'Among the highest-paying entry-level engineering jobs in India. Maharatna PSUs offer corporate perks, performance-linked incentives (PRP), medical benefits for life, and substantial retirement benefits.',
    eligibilityHighlights: [
      'Requires candidate to qualify Graduate Aptitude Test in Engineering (GATE)',
      'Minimum 60% or 65% aggregate marks in B.E./B.Tech',
      'Highest compensation package in the public sector for fresh engineers'
    ],
    relatedSchemes: ['scheme-gate-mtech-stipend', 'scheme-aicte-pragati', 'scheme-pmrf'],
    featured: true
  },
  {
    id: 'job-sbi-po',
    title: 'State Bank of India Probationary Officer (SBI PO)',
    organization: 'State Bank of India (SBI)',
    department: 'Central Recruitment & Promotion Department (CRPD)',
    sector: 'Banking & PSU Banks',
    examCategory: 'Banking & Financial',
    minQualification: 'Any Graduate (Degree)',
    specificDegree: 'Graduation in any discipline from a recognized University',
    totalVacancies: 2000,
    approxSalary: 'Starting Basic ₹41,960 with 4 advance increments (Gross ~ ₹65,000 to ₹72,000/mo + Lease)',
    payLevel: 'Junior Management Grade Scale 1 (JMGS-I) with 4 advance increments',
    minAge: 21,
    maxAgeGeneral: 30,
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 10
    },
    selectionStages: [
      'Phase-I: Preliminary Examination (Objective 100 marks)',
      'Phase-II: Main Examination (Objective 200 marks + Descriptive 50 marks)',
      'Phase-III: Psychometric Test, Group Exercise (20 marks) & Interview (30 marks)'
    ],
    applicationFee: '₹750 (Nil for SC, ST, and PwD candidates)',
    applicationDeadline: 'Notification issued September/October annually',
    examDates: 'Prelims in November | Mains in December/January',
    officialNotificationUrl: 'https://sbi.co.in/careers',
    applyUrl: 'https://bank.sbi/careers',
    jobLocation: 'All India SBI branch network & Foreign Representative Offices',
    description: 'The most prestigious banking recruitment in India. SBI PO offers higher pay than other commercial banks, rapid international posting opportunities, and accelerated promotions to Top Executive Grade (Chairman/MD).',
    eligibilityHighlights: [
      'Final year graduating candidates can apply provisionally',
      'No minimum graduation percentage requirement',
      'Number of chances: 4 for General/EWS, 7 for General (PwD)/OBC/OBC(PwD), no restriction for SC/ST'
    ],
    relatedSchemes: ['scheme-banking-pet', 'scheme-msje-free-coaching'],
    featured: false
  },
  {
    id: 'job-drdo-sta-b',
    title: 'DRDO Senior Technical Assistant (STA-B) & Technician',
    organization: 'Defence Research & Development Organisation (DRDO)',
    department: 'Centre for Personnel Talent Management (CEPTAM), Ministry of Defence',
    sector: 'Scientific & Research',
    examCategory: 'Engineering & Technical',
    minQualification: 'Diploma',
    specificDegree: 'Three-year Diploma in Engineering or B.Sc. in relevant science subjects',
    totalVacancies: 1901,
    approxSalary: '₹35,400 to ₹1,12,400 (Pay Level 6 + allowances)',
    payLevel: 'Pay Level 6 (Grade Pay ₹4200)',
    minAge: 18,
    maxAgeGeneral: 28,
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 10
    },
    selectionStages: [
      'Tier-I CBT (Screening Test - Quantitative, Reasoning, English, General Science)',
      'Tier-II CBT (Subject Specific Technical Knowledge Test)'
    ],
    applicationFee: '₹100 (Exempted for Women, SC, ST, and PwD candidates)',
    applicationDeadline: 'Recruitment announced via CEPTAM notification cycles',
    examDates: 'Nationwide computer based test in two phases',
    officialNotificationUrl: 'https://www.drdo.gov.in',
    applyUrl: 'https://www.drdo.gov.in/careers',
    jobLocation: 'DRDO Laboratories across India (ADE, DRDL, R&DE, DLRL, etc.)',
    description: 'Technical officer recruitment for premier defence research laboratories developing tactical missiles, radars, electronic warfare, naval systems, and combat vehicles for the armed forces.',
    eligibilityHighlights: [
      'Diploma holders and B.Sc. science graduates get equal direct recruitment opportunities',
      'Work alongside elite missile and defense scientists',
      'Eligible for internal assessment promotions under Flexible Complementing Scheme'
    ],
    relatedSchemes: ['scheme-gate-mtech-stipend', 'scheme-aicte-pragati'],
    featured: false
  },
  {
    id: 'job-state-psc-administrative',
    title: 'Combined State Civil Services Examination (State PSC / PCS / KAS / MPSC)',
    organization: 'State Public Service Commissions (UPPSC, BPSC, MPSC, KPSC, APPSC, TSPSC)',
    department: 'State Revenue, Police, Commercial Tax, Panchayati Raj Departments',
    sector: 'State Government',
    examCategory: 'Civil Services & Administration',
    minQualification: 'Any Graduate (Degree)',
    specificDegree: 'Graduation in any stream from a recognized University',
    totalVacancies: 850,
    approxSalary: '₹56,100 to ₹1,77,500 (Pay Level 10 / Grade Pay ₹5400 + DA + Vehicle / Perks)',
    payLevel: 'Group ‘A’ Gazetted & Group ‘B’ Executive (Level 9 to 10)',
    minAge: 21,
    maxAgeGeneral: 40, // 38-42 in many states like UP, Bihar, Rajasthan, MP
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 15
    },
    selectionStages: [
      'State Preliminary Examination (GS + CSAT / State GK)',
      'State Mains Examination (Descriptive Essay, GS Papers, Language & State History)',
      'State Personality Test / Viva-Voce'
    ],
    applicationFee: '₹100 to ₹250 (Reduced fees for State Domicile Reserved Categories)',
    applicationDeadline: 'Annual notifications published by respective State Commission',
    examDates: 'Staggered state exam cycles',
    officialNotificationUrl: 'https://uppsc.up.nic.in',
    applyUrl: 'https://uppsc.up.nic.in',
    jobLocation: 'Within the respective State boundaries',
    description: 'Highest state executive positions including Sub-Divisional Magistrate (SDM / Deputy Collector), Deputy Superintendent of Police (DSP), Assistant Commissioner Commercial Taxes, and Block Development Officer (BDO).',
    eligibilityHighlights: [
      'Higher upper age limit compared to Central UPSC (up to 40 years for General in several states)',
      'Heavy focus on State History, Geography, Culture, and Local Governance',
      'Eligible for state Prelims clearance cash incentives (₹50,000 to ₹1,00,000 direct bank grants)'
    ],
    relatedSchemes: ['scheme-bihar-civil-protsahan', 'scheme-up-abhyudaya', 'scheme-rajasthan-anuprati', 'scheme-barti-sarthi-mahajyoti', 'scheme-karnataka-prabuddha'],
    featured: true
  },
  {
    id: 'job-capf-assistant-commandant',
    title: 'Central Armed Police Forces (CAPF) Assistant Commandant',
    organization: 'Union Public Service Commission (UPSC)',
    department: 'BSF, CRPF, CISF, ITBP, and SSB (Ministry of Home Affairs)',
    sector: 'Defense & Paramilitary',
    examCategory: 'Defense & Police',
    minQualification: 'Any Graduate (Degree)',
    specificDegree: 'Bachelor’s degree from a recognized University',
    totalVacancies: 506,
    approxSalary: '₹56,100 Basic (Level 10) + Hard Area Allowance + Risk Allowance ~ ₹85,000 to ₹1,10,000/mo',
    payLevel: 'Pay Level 10 (Gazetted Group ‘A’ Officer)',
    minAge: 20,
    maxAgeGeneral: 25,
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 0 // PwD not applicable due to operational combat role
    },
    selectionStages: [
      'Written Examination (Paper I: General Ability & Intelligence; Paper II: General Studies, Essay & Comprehension)',
      'Physical Standards Test (PST) & Physical Efficiency Test (PET - 100m, 800m, Long Jump, Shot Put)',
      'Medical Standards Test and UPSC Interview / Personality Test'
    ],
    applicationFee: '₹200 (Exempted for Female, SC, and ST candidates)',
    applicationDeadline: 'Notification issued in April annually',
    examDates: 'Written Exam held in August',
    officialNotificationUrl: 'https://upsc.gov.in',
    applyUrl: 'https://upsconline.nic.in',
    jobLocation: 'Border regions, internal security grids, vital installations, airports & metro security',
    description: 'Command operational companies in border security and anti-insurgency operations. Promoted to Deputy Commandant, Commandant, DIG, and Inspector General in elite forces like BSF, CISF, and CRPF.',
    eligibilityHighlights: [
      'Group A Gazetted Officer uniform post under Ministry of Home Affairs',
      'Both Male and Female candidates are eligible across all forces',
      'Opportunity to serve on UN Peacekeeping and NSG Black Cat Commando deputations'
    ],
    relatedSchemes: ['scheme-up-abhyudaya', 'scheme-agnipath-seva-nidhi'],
    featured: false
  },
  {
    id: 'job-ssc-mts',
    title: 'Multi-Tasking (Non-Technical) Staff & Havaldar (CBIC / CBN)',
    organization: 'Staff Selection Commission (SSC)',
    department: 'All Central Government Ministries, Departments, Attached & Subordinate Offices',
    sector: 'Central Government',
    examCategory: 'Staff Selection & State Exams',
    minQualification: '10th Pass (Matric)',
    specificDegree: 'Matriculation (10th Class pass) from a recognized Board',
    totalVacancies: 9583,
    approxSalary: '₹18,000 to ₹56,900 (Pay Level 1 + DA + HRA + Transport Allowance)',
    payLevel: 'Pay Level 1 of 7th CPC Matrix (Grade Pay ₹1800)',
    minAge: 18,
    maxAgeGeneral: 25, // 27 for Havaldar in CBIC
    ageRelaxation: {
      obc: 3,
      scSt: 5,
      pwd: 10
    },
    selectionStages: [
      'Computer Based Examination (Session-I: Numerical & Math + Reasoning; Session-II: General Awareness & English)',
      'Physical Efficiency Test (PET / PST) only for Havaldar posts in CBIC/CBN',
      'Document Verification'
    ],
    applicationFee: '₹100 (Exempted for Women, SC, ST, PwD, and ESM)',
    applicationDeadline: 'Notification released in May/June annually',
    examDates: 'CBT in September/October',
    officialNotificationUrl: 'https://ssc.gov.in',
    applyUrl: 'https://ssc.gov.in',
    jobLocation: 'All State Capitals and District Central Offices across India',
    description: 'Massive gateway for 10th pass youth into permanent Central Government jobs. Stable income, medical benefits, and fast internal promotional exams to Lower Division Clerk and Assistant.',
    eligibilityHighlights: [
      'Requires only a 10th pass board certificate; no negative marking in Session-I of the exam',
      'Exam conducted in English, Hindi, and 13 regional Indian languages',
      'Guaranteed pension under NPS, medical cover for family, and government quarters eligibility'
    ],
    relatedSchemes: ['scheme-msje-free-coaching'],
    featured: false
  },
  {
    id: 'job-ugc-assistant-professor',
    title: 'Assistant Professor & Junior Research Fellow Recruitment',
    organization: 'University Grants Commission (UGC) & State Universities',
    department: 'Central Universities, State Govt Universities, Premier Autonomous Colleges',
    sector: 'Scientific & Research',
    examCategory: 'Research & Higher Education',
    minQualification: 'Post Graduate / Masters',
    specificDegree: 'Master’s degree with minimum 55% marks (50% for SC/ST/OBC-NCL/PwD) in relevant subject',
    totalVacancies: 3200,
    approxSalary: 'Academic Pay Level 10 (Entry Pay ₹57,700 to ₹1,82,400 + DA + Academic Allowance)',
    payLevel: 'UGC Academic Pay Level 10 (Starting gross ~ ₹80,000 to ₹95,000/mo)',
    minAge: 22,
    maxAgeGeneral: 30, // For JRF (relaxed to 35 for reserved); No upper age limit for Assistant Professor eligibility
    ageRelaxation: {
      obc: 5,
      scSt: 5,
      pwd: 5
    },
    selectionStages: [
      'UGC-NET / CSIR-NET Computer Based Exam (Paper 1 Teaching/Research Aptitude + Paper 2 Subject Specialization)',
      'Academic Record Screening (API score based on graduation, PG, PhD, publications)',
      'Institutional Selection Committee Interview'
    ],
    applicationFee: '₹1150 (₹600 for OBC-NCL/EWS; ₹325 for SC/ST/PwD/Third Gender)',
    applicationDeadline: 'Biannual exam cycle (June & December sessions)',
    examDates: 'Held in June & December',
    officialNotificationUrl: 'https://ugcnet.nta.ac.in',
    applyUrl: 'https://ugcnet.nta.ac.in',
    jobLocation: 'Universities and colleges nationwide',
    description: 'Tenured faculty positions at public universities and colleges. Combines teaching undergraduate and postgraduate scholars with high-level academic research, sabbatical grants, and consultation projects.',
    eligibilityHighlights: [
      'No upper age limit to qualify or be appointed as an Assistant Professor',
      'Eligible for UGC Junior Research Fellowship stipend (₹37,000/month) if qualified under JRF cutoff',
      'Highly respected academic career with 8 weeks summer vacation and research grants'
    ],
    relatedSchemes: ['scheme-csir-ugc-jrf', 'scheme-pmrf', 'scheme-dr-ambedkar-interest-subsidy'],
    featured: false
  }
];
