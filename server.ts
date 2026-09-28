import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Initialize Gemini client safely
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Helper to generate content with fallback
async function generateGeminiContent(prompt: string, fallbackText: string): Promise<string> {
  if (!ai || !apiKey) {
    return fallbackText;
  }
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || fallbackText;
  } catch (error) {
    console.warn('Gemini API call failed, using high-quality fallback:', error);
    return fallbackText;
  }
}

// 1. Endpoint: Deep-dive Scheme Explanation
app.post('/api/explain', async (req, res) => {
  const { name, provider, financialBenefit, eligibility, keyBenefits, selectionProcess, documentsRequired } = req.body;
  
  const prompt = `You are a trusted, student-friendly government exam counselor and scheme mentor in India.
Explain this competitive exam scheme in an encouraging, practical, and highly clear format for a student:

Scheme Name: ${name}
Provider: ${provider}
Financial Benefit: ${financialBenefit}
Eligibility: ${JSON.stringify(eligibility)}
Key Benefits: ${JSON.stringify(keyBenefits)}
Selection Process: ${selectionProcess}
Required Documents: ${JSON.stringify(documentsRequired)}

Please structure your response into these concise, readable sections:
1. 💡 What This Scheme Really Means For You (Simple 2-3 sentence overview)
2. 🎯 Exact Eligibility Check (Income limits, caste/category criteria, qualifications in plain English)
3. 💰 Financial & Coaching Perks Breakdown (How much money/fee waiver you receive and when)
4. 📝 Step-by-Step How to Apply (Clear actionable steps from registration to verification)
5. ⚠️ Common Rejection Traps & Document Tips (Caste validity, income certificate FY validity, attendance requirements)

Keep the tone encouraging, factual, and strictly focused on student success.`;

  const fallback = `### 💡 What This Scheme Means For You
**${name}** is a flagship initiative funded by the ${provider} designed to remove financial hurdles from your competitive exam preparation. It guarantees you access to high-quality coaching resources, study material support, or direct financial stipends without draining your family's savings.

### 🎯 Exact Eligibility Check
- **Education:** Open to candidates preparing for or enrolled in competitive exam streams.
- **Financial Limit:** Adheres strictly to the government annual family income ceiling (usually ₹8.00 Lakhs or income thresholds specified in rules).
- **Target Groups:** Specially prioritized for meritorious candidates from reserved, minority, or economically weaker sections.

### 💰 Financial & Coaching Perks
- **Direct Grant:** ${financialBenefit || 'Tuition fee coverage and monthly maintenance stipends'}.
- **Living Allowances:** For outstation students, additional hostel/boarding allowances are frequently disbursed via Direct Benefit Transfer (DBT).

### 📝 Step-by-Step How to Apply
1. Register on the official portal using your Aadhaar number and active mobile phone.
2. Upload current financial year Income Certificate and Caste/Category Certificate.
3. Submit academic marksheets (10th, 12th, and Degree).
4. Verify application status with your local Social Welfare Office or institutional nodal officer.

### ⚠️ Common Rejection Traps
- **Outdated Income Certificate:** Make sure your income certificate is issued in the current financial year by a competent authority (Tahsildar or SDM).
- **Aadhaar Mismatch:** Name spelling on your Aadhaar must match your 10th marksheet exactly for DBT transfer.`;

  try {
    const explanation = await generateGeminiContent(prompt, fallback);
    res.json({ explanation });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process explanation', fallback });
  }
});

// 2. Endpoint: Job Preparation & Strategy Roadmap
app.post('/api/job-strategy', async (req, res) => {
  const { title, organization, minQualification, approxSalary, selectionStages, ageLimit } = req.body;
  
  const prompt = `You are an expert competitive exam coach in India.
Provide a high-impact, realistic preparation strategy roadmap for a student targeting:

Exam/Job: ${title}
Recruiting Body: ${organization}
Eligibility: ${minQualification} (Age criteria: ${ageLimit || 'standard'})
Salary / Pay Level: ${approxSalary}
Selection Stages: ${JSON.stringify(selectionStages)}

Structure your response with:
1. 🎯 Reality Check & Competition Matrix (Exam pattern, key scoring subjects)
2. 🗓️ 6-Month Preparation Blueprint (Phase 1: Syllabus Foundation, Phase 2: High-yield Revision, Phase 3: Mock Test Drill)
3. 📚 Must-Read Books & Free Resources (NCERTs, standard reference texts, current affairs sources)
4. 💡 Physical / Skill Test Nuances (Typing speed, PET standards, or Interview readiness if applicable)
5. 🛡️ Government Schemes that can fund your preparation for this exam`;

  const fallback = `### 🎯 Reality Check & Examination Matrix
Preparing for **${title}** under ${organization} requires consistency rather than 16-hour burnout days. The selection primarily hinges on speed, accuracy in objective tests, and depth of conceptual clarity.

### 🗓️ 6-Month Structured Preparation Blueprint
- **Months 1-2 (Foundation):** Finish core NCERT basics (History, Polity, Geography) and complete all fundamental arithmetic and reasoning chapters.
- **Months 3-4 (Topic Mastery & Speed):** Solve past 5 years question papers topic-by-topic. Maintain a dedicated error logbook.
- **Months 5-6 (Full-Length Testing):** Give 2 full mock tests per week under strict timed conditions. Analyze wrong answers and unattempted questions meticulously.

### 📚 Recommended Books & Free Resources
- **Quantitative Aptitude:** RS Aggarwal or Rakesh Yadav Class Notes.
- **Reasoning:** MK Pandey or previous years chapter-wise TCS papers.
- **General Awareness:** Lucent GK + Monthly current affairs compendiums + The Hindu / Indian Express editorials.
- **English:** SP Bakshi or Neetu Singh Volume 1.

### 💡 Secret to Cracking the Exam
Cut-offs are decided in the last 15 days by how calmly you handle negative marking. Always leave doubtful 50-50 questions unless you can logically eliminate at least two choices.`;

  try {
    const strategy = await generateGeminiContent(prompt, fallback);
    res.json({ strategy });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate strategy', fallback });
  }
});

// 3. Endpoint: AI Matcher & Student Eligibility Advisor
app.post('/api/match-schemes-jobs', async (req, res) => {
  const { profile } = req.body;
  
  const prompt = `Analyze this Indian student's profile for competitive exam schemes and job opportunities:
- Highest Qualification: ${profile.qualification} (${profile.degreeName || 'General stream'})
- Age: ${profile.age} years old
- Category: ${profile.category}
- Gender: ${profile.gender}
- Annual Family Income: ${profile.annualFamilyIncome}
- Domicile State: ${profile.state}
- Target Career Interests: ${(profile.targetSectors || []).join(', ')}

Provide a personalized student guidance report:
1. 🌟 Top 3 Schemes they MUST claim right now (focus on free coaching, stipends, or fee waivers)
2. 💼 Top 3 High-Probability Government Job Vacancies they are eligible for right now
3. ⚖️ Age & Category Relaxations they are entitled to
4. 🚀 An Actionable 30-Day Step-by-Step Roadmap for them to apply and start preparing`;

  const fallback = `### 🌟 Your Priority Schemes Summary
Based on your profile as a ${profile.category} candidate from ${profile.state} with a qualification of ${profile.qualification}, you are eligible for:
1. **Government Free Coaching Assistance:** Central Sector Free Coaching Scheme (MoSJE) or your state's flagship initiative (like UP Abhyudaya, Delhi Jai Bhim, or Rajasthan Anuprati).
2. **Pre-Exam Training:** Fully sponsored online and physical preparatory workshops conducted prior to Banking (IBPS/SBI) and SSC exams.
3. **Prelims Clearance Incentives:** State cash rewards (₹50,000 to ₹1,00,000) upon cracking Preliminary rounds of Civil Services.

### 💼 Top Recommended Job Openings
- **Staff Selection Commission (SSC CGL / CHSL):** Direct entry to Central Ministries with secure pay and predictable promotional ladders.
- **Banking Sector (IBPS / SBI PO & Clerical):** Quickest recruitment timeline in India (notification to joining in under 7 months).
- **State Public Service Commission & Railways:** Substantial vacancies with generous state domicile/age relaxations.

### ⚖️ Your Eligibility & Reservation Advantages
- Category relaxation: Standard upper-age relaxations apply (+3 years for OBC-NCL, +5 years for SC/ST, +10 years for PwD).
- Application fee waivers: Most UPSC, SSC, and State exams offer 100% application fee exemption for Female, SC, ST, and PwD candidates.`;

  try {
    const analysis = await generateGeminiContent(prompt, fallback);
    res.json({ analysis });
  } catch (error) {
    res.status(500).json({ error: 'Failed to match profile', fallback });
  }
});

// Start Server with Vite Middleware in Development or Static in Production
async function startServer() {
  const PORT = Number(process.env.PORT) || 3000;

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Mount Vite middleware in development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ScholarSync full-stack server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
