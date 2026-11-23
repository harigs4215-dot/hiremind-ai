/*
 HIREMIND AI - AI ENGINE
 Phase 3 - Step 1
 Secure-ready frontend utility layer
*/

// Resume text analysis
function analyzeResume(resumeText, requiredSkills) {
  if (!resumeText || !requiredSkills) {
    return {
      success: false,
      message: "Resume text and job skills are required."
    };
  }

  const text = resumeText.toLowerCase();

  const skills = requiredSkills
    .split(",")
    .map(skill => skill.trim().toLowerCase())
    .filter(Boolean);

  const matched = skills.filter(skill =>
    text.includes(skill)
  );

  const missing = skills.filter(skill =>
    !text.includes(skill)
  );

  const coverage = skills.length
    ? Math.round((matched.length / skills.length) * 100)
    : 0;

  return {
    success: true,
    coverage,
    matched,
    missing,
    reviewRequired: true,
    note: "Keyword coverage is not a measure of candidate quality. Human review is required."
  };
}

// Candidate skill comparison
function matchCandidate(candidateSkills, requiredSkills) {
  const candidate = candidateSkills
    .split(",")
    .map(x => x.trim().toLowerCase())
    .filter(Boolean);

  const required = requiredSkills
    .split(",")
    .map(x => x.trim().toLowerCase())
    .filter(Boolean);

  const matched = required.filter(x => candidate.includes(x));
  const missing = required.filter(x => !candidate.includes(x));

  return {
    coverage: required.length
      ? Math.round((matched.length / required.length) * 100)
      : 0,
    matched,
    missing
  };
}

// Job description template
function createJobDescription(title, skills, experience) {
  return {
    title,
    experience,
    skills: skills.split(",").map(x => x.trim()),
    summary: `We are looking for a ${title} to join our team.`,
    responsibilities: [
      "Complete role-related responsibilities.",
      "Collaborate with team members.",
      "Contribute to team goals."
    ],
    reviewRequired: true
  };
}

// Interview question generator
function createInterviewQuestions(role) {
  return [
    `What interests you about the ${role} position?`,
    "Describe a relevant project you have completed.",
    "How do you solve unfamiliar problems?",
    "How do you manage competing priorities?",
    "Describe a successful team collaboration.",
    "What skills would you like to develop?",
    "How do you respond to feedback?",
    "What questions do you have about this role?"
  ];
}

// Export functions for browser usage
window.HireMindAI = {
  analyzeResume,
  matchCandidate,
  createJobDescription,
  createInterviewQuestions
};
    
