
/*
 HIREMIND AI
 Professional HR AI Engine
 Version 1.0
*/

// 1. Resume Analyzer
function analyzeResume(resumeText, requiredSkills) {
  if (!resumeText || !requiredSkills) {
    return {
      success: false,
      message: "Resume and required skills are required."
    };
  }

  const resume = resumeText.toLowerCase();

  const skills = requiredSkills
    .split(",")
    .map(skill => skill.trim().toLowerCase())
    .filter(Boolean);

  const matched = skills.filter(skill =>
    resume.includes(skill)
  );

  const missing = skills.filter(skill =>
    !resume.includes(skill)
  );

  const score = skills.length
    ? Math.round((matched.length / skills.length) * 100)
    : 0;

  return {
    success: true,
    score,
    matchedSkills: matched,
    missingSkills: missing,
    totalSkills: skills.length,
    recommendation:
      score >= 75 ? "Strong Skills Match" :
      score >= 40 ? "Moderate Skills Match" :
      "Low Skills Match"
  };
}


// 2. Job Description Generator
function generateJobDescription(role, skills, experience) {
  if (!role || !skills || !experience) {
    return {
      success: false,
      message: "All job details are required."
    };
  }

  return {
    success: true,
    title: role,
    description: `
Job Title: ${role}

Experience: ${experience}

Required Skills:
${skills}

Responsibilities:
- Perform responsibilities related to ${role}.
- Collaborate with team members.
- Deliver quality work.
- Meet project objectives.

Qualifications:
- Relevant professional knowledge.
- Practical experience.
- Strong communication skills.
- Problem-solving abilities.
`
  };
}


// 3. Candidate Matching
function matchCandidate(resumeText, jobSkills) {
  const result = analyzeResume(resumeText, jobSkills);

  if (!result.success) {
    return result;
  }

  return {
    success: true,
    matchScore: result.score,
    matchedSkills: result.matchedSkills,
    missingSkills: result.missingSkills,
    message: result.recommendation
  };
}


// 4. Interview Question Generator
function generateInterviewQuestions(role, level) {
  if (!role || !level) {
    return {
      success: false,
      message: "Role and experience level are required."
    };
  }

  return {
    success: true,
    role,
    level,
    questions: [
      `Tell us about your experience related to ${role}.`,
      `What are your strongest skills for this position?`,
      `Describe a challenging project you completed.`,
      `How do you solve problems at work?`,
      `How do you collaborate with a team?`,
      `What would you like to achieve in this role?`,
      `How do you approach learning new technologies?`,
      `Describe how you handle changing priorities.`
    ]
  };
}


// 5. HR Assistant
function hrAssistant(question) {
  if (!question) {
    return {
      success: false,
      message: "Please enter a question."
    };
  }

  const q = question.toLowerCase();

  const responses = [
    {
      keywords: ["resume", "cv"],
      answer: "Review job-related skills, qualifications and relevant experience consistently."
    },
    {
      keywords: ["interview"],
      answer: "Use structured, job-related questions and consistent evaluation criteria."
    },
    {
      keywords: ["hiring", "recruitment"],
      answer: "Define role requirements, evaluate relevant evidence and maintain a fair hiring process."
    },
    {
      keywords: ["job description"],
      answer: "Include the role, responsibilities, qualifications and required skills."
    }
  ];

  const found = responses.find(item =>
    item.keywords.some(word => q.includes(word))
  );

  return {
    success: true,
    answer: found
      ? found.answer
      : "Please provide more details about your HR question."
  };
}


// 6. Engine Health Check
function checkEngine() {
  return {
    success: true,
    engine: "HIREMIND AI",
    version: "1.0",
    modules: [
      "Resume Analyzer",
      "Job Description Generator",
      "Candidate Matching",
      "Interview Assistant",
      "HR Assistant"
    ],
    status: "Ready"
  };
}
