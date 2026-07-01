const icon = (name) => `<svg aria-hidden="true"><use href="#icon-${name}"></use></svg>`;

const STORAGE_KEY = "mapuaPortfolioRegistry";
const DEFAULT_ADMIN_EMAIL = "coordinator@email.com";
const DEFAULT_ADMIN_PASSWORD = "mapua_foliocoordinator2026";
const ADMIN_LIST_LIMIT = 5;
const COURSE_FILTER_OPTIONS = ["Computer Science", "Data Science", "Information Systems", "Information Technology", "Media and Design", "SOIT courses"];
const SCHOOL_YEAR_OPTIONS = ["AY 2025 to 2026", "AY 2026 to 2027", "AY 2027 to 2028", "AY 2028 to 2029"];
const AVAILABILITY_COLORS = { open: "#2f8f5b", selective: "#d4a017", unavailable: "#b11116" };
const AVAILABILITY_LABELS = { open: "Ready for OJT", selective: "Open to select roles", unavailable: "Not available now" };
const AVAILABILITY_SHORT_LABELS = { open: "Ready", selective: "Select roles", unavailable: "Unavailable" };
const DEFAULT_CREDENTIAL_LABELS = ["Resume", "LinkedIn", "Portfolio", "Certifications"];

const studentSeeds = [
  ["ana-reyes", "Ana Sofia Reyes", "AS", "Data Analyst Intern", "Data Science", "BS Data Science", "3rd Year", "Makati", "open", true, ["Python", "SQL", "Power BI", "Statistics"], "Built a dashboard that reduced manual reporting time for a campus organization.", "Enrollment Insights", "Cleaned and visualized enrollment trend data.", "42% faster reporting"],
  ["marco-santos", "Marco Santos", "MS", "Backend Developer", "Computer Science", "BS Computer Science", "4th Year", "Makati", "selective", true, ["Node.js", "PostgreSQL", "APIs", "Docker"], "Focuses on reliable backend systems for student-facing tools.", "Queue API", "Designed a service for laboratory reservation queues.", "1.8s average response"],
  ["julia-lim", "Julia Lim", "JL", "UX Researcher", "Media and Design", "BS Multimedia Arts", "2nd Year", "Makati", "open", false, ["UX Research", "Figma", "Interviews", "Prototyping"], "Connects user research with clean interfaces for academic services.", "Advising Redesign", "Mapped the consultation flow for academic advising.", "31 student interviews"],
  ["paolo-cruz", "Paolo Cruz", "PC", "Cybersecurity Trainee", "Information Technology", "BS Information Technology", "3rd Year", "Makati", "open", true, ["Network Security", "Linux", "Python", "Risk Assessment"], "Interested in practical security hardening for small organizations.", "Lab Audit Kit", "Created a checklist for computer laboratory security reviews.", "18 risks classified"],
  ["mika-tan", "Mika Tan", "MT", "Frontend Developer", "Information Systems", "BS Information Systems", "2nd Year", "Makati", "open", false, ["React", "CSS", "Accessibility", "Testing"], "Builds accessible dashboards and workflow tools.", "Scholarship Tracker", "Prototype for tracking scholarship requirements.", "94 accessibility score"],
  ["gabriel-dizon", "Gabriel Dizon", "GD", "Machine Learning Student", "Data Science", "BS Data Science", "4th Year", "Makati", "selective", true, ["Machine Learning", "Pandas", "Scikit-learn", "Model Evaluation"], "Works on explainable models for student support use cases.", "Retention Signals", "Explored early indicators of academic risk.", "0.81 F1 score"],
  ["tricia-ong", "Tricia Ong", "TO", "Product Designer", "Media and Design", "BS Multimedia Arts", "3rd Year", "Makati", "open", false, ["Design Systems", "Figma", "Branding", "Usability"], "Designs polished, consistent interfaces for student communities.", "Org Brand Kit", "Created a reusable identity system for a student group.", "22 templates shipped"],
  ["nathan-yu", "Nathan Yu", "NY", "Software Engineer Intern", "Computer Science", "BS Computer Science", "Fresh Grad", "Makati", "open", true, ["Java", "Spring Boot", "MySQL", "Git"], "Fresh graduate focused on maintainable enterprise applications.", "Clinic Records", "Built a CRUD prototype for clinic appointment records.", "6 core modules"],
  ["bea-mendoza", "Bea Mendoza", "BM", "Business Systems Analyst", "Information Systems", "BS Information Systems", "4th Year", "Makati", "selective", false, ["Process Mapping", "SQL", "UML", "Documentation"], "Turns operational problems into clear system requirements.", "Inventory Flow", "Documented current and target inventory processes.", "14 workflows mapped"],
  ["enzo-ramos", "Enzo Ramos", "ER", "Cloud Support Trainee", "SOIT courses", "BS Computer Engineering", "3rd Year", "Makati", "open", false, ["AWS", "Linux", "Networking", "Scripting"], "Explores cloud infrastructure for reliable student applications.", "Deploy Playbook", "Wrote a static-site deployment guide for student teams.", "5 environments tested"],
  ["karen-villanueva", "Karen Villanueva", "KV", "Data Visualization Designer", "Data Science", "BS Data Science", "2nd Year", "Makati", "open", false, ["Tableau", "Storytelling", "R", "Data Cleaning"], "Uses visualization to make academic and community data understandable.", "Commute Dashboard", "Visualized student commute patterns and constraints.", "280 responses analyzed"],
  ["luis-bautista", "Luis Bautista", "LB", "Game Developer", "SOIT courses", "BS Entertainment and Multimedia Computing", "3rd Year", "Makati", "selective", true, ["Unity", "C#", "Game Design", "3D Assets"], "Creates interactive learning prototypes and game systems.", "Physics Quest", "Built a level-based learning game for physics review.", "12 playable levels"],
  ["isabel-garcia", "Isabel Garcia", "IG", "Mobile Developer", "Information Technology", "BS Information Technology", "4th Year", "Makati", "open", true, ["Flutter", "Firebase", "UI", "Testing"], "Builds mobile-first tools for student services.", "Cardinal Tasks", "Task tracker for OJT requirements and reminders.", "96 beta users"],
  ["rafael-co", "Rafael Co", "RC", "Database Developer", "Computer Science", "BS Computer Science", "2nd Year", "Makati", "open", false, ["PostgreSQL", "ERD", "Normalization", "SQL"], "Enjoys schema design, query tuning, and data integrity.", "Library Schema", "Normalized a borrowing and reservation database model.", "11 tables designed"],
  ["mae-fernandez", "Mae Fernandez", "MF", "Content Designer", "Media and Design", "BA Digital Film", "1st Year", "Makati", "unavailable", false, ["Writing", "Video Editing", "Storyboards", "Brand Voice"], "Builds stories that make technical work easier to understand.", "Student Reel", "Produced a short feature on student makers.", "7 interviews filmed"],
  ["daryl-aquino", "Daryl Aquino", "DA", "QA Tester", "Information Technology", "BS Information Technology", "2nd Year", "Makati", "open", false, ["Manual QA", "Test Cases", "Bug Reports", "Cypress"], "Documents defects clearly and validates user-facing workflows.", "Portal QA Pack", "Created regression tests for a mock enrollment portal.", "64 test cases"],
  ["nicole-chua", "Nicole Chua", "NC", "AI Prototype Builder", "Data Science", "BS Data Science", "3rd Year", "Makati", "selective", true, ["NLP", "Prompting", "Python", "Evaluation"], "Experiments with AI-assisted academic support prototypes.", "FAQ Assistant", "Designed and evaluated a campus information chatbot.", "88% answer accuracy"],
  ["samuel-lee", "Samuel Lee", "SL", "Full-stack Developer", "Computer Science", "BS Computer Science", "4th Year", "Makati", "open", true, ["TypeScript", "React", "Node.js", "MongoDB"], "Builds complete prototypes from data model to interface.", "Capstone Hub", "Portfolio and milestone tracker for capstone teams.", "9 teams onboarded"],
  ["angelica-torres", "Angelica Torres", "AT", "Interaction Designer", "Media and Design", "BS Multimedia Arts", "4th Year", "Makati", "open", false, ["Interaction Design", "Motion", "Figma", "Usability"], "Designs clear interaction flows for dense information products.", "Museum Guide", "Prototype for a self-guided exhibit companion.", "4.6 usability rating"],
  ["kevin-sy", "Kevin Sy", "KS", "IT Support Analyst", "Information Technology", "BS Information Technology", "1st Year", "Makati", "unavailable", false, ["Troubleshooting", "Networking", "Helpdesk", "Hardware"], "Learning support operations through practical ticket handling.", "Ticket Taxonomy", "Categorized common student IT support issues.", "38 issue types"],
  ["ella-morales", "Ella Morales", "EM", "Systems Analyst", "Information Systems", "BS Information Systems", "3rd Year", "Makati", "open", false, ["Requirements", "BPMN", "SQL", "Stakeholder Interviews"], "Clarifies messy workflows and writes implementation-ready specs.", "Clinic Intake", "Analyzed patient intake and notification requirements.", "17 requirements drafted"],
  ["joshua-ang", "Joshua Ang", "JA", "Robotics Programmer", "SOIT courses", "BS Robotics Engineering", "2nd Year", "Makati", "selective", false, ["Arduino", "Python", "Sensors", "Control Systems"], "Builds hardware prototypes with practical automation goals.", "Line Bot", "Programmed a line-following robot for lab demonstration.", "93% path completion"],
  ["sofia-del-rosario", "Sofia Del Rosario", "SD", "Marketing Analytics Student", "Data Science", "BS Data Science", "1st Year", "Makati", "unavailable", false, ["Excel", "Python", "Dashboards", "Survey Analysis"], "Explores analytics for communications and student engagement.", "Campaign Review", "Measured engagement from student campaign posts.", "3 channels compared"],
  ["miguel-velasco", "Miguel Velasco", "MV", "DevOps Learner", "Computer Science", "BS Computer Science", "3rd Year", "Makati", "open", false, ["CI/CD", "GitHub Actions", "Linux", "Docker"], "Improves development workflows through automation and documentation.", "Build Pipeline", "Configured automated checks for a student web app.", "7 checks automated"],
  ["camille-go", "Camille Go", "CG", "Information Architect", "Information Systems", "BS Information Systems", "2nd Year", "Makati", "open", false, ["Taxonomy", "Wireframes", "Research", "Notion"], "Organizes complex content into navigable digital services.", "Knowledge Base", "Structured a help center for freshmen FAQs.", "52 articles grouped"],
  ["andrei-lopez", "Andrei Lopez", "AL", "Computer Vision Student", "Data Science", "BS Data Science", "4th Year", "Makati", "selective", true, ["OpenCV", "Python", "Model Training", "Evaluation"], "Works on visual inspection and image processing prototypes.", "Lab Counter", "Detected equipment occupancy from sample lab images.", "86% detection rate"],
  ["princess-castro", "Princess Castro", "PC", "Graphic Designer", "Media and Design", "BS Multimedia Arts", "3rd Year", "Makati", "open", false, ["Layout", "Illustration", "Branding", "Adobe CC"], "Creates visual systems for campus events and student initiatives.", "Cardinal Posters", "Designed a modular poster kit for event promotions.", "30 assets delivered"],
  ["harvey-manalo", "Harvey Manalo", "HM", "Network Trainee", "Information Technology", "BS Information Technology", "4th Year", "Makati", "open", false, ["Cisco", "Subnetting", "Security", "Documentation"], "Documents and validates practical network configurations.", "Campus VLAN Lab", "Simulated segmented lab network configurations.", "4 VLANs validated"],
  ["ria-domingo", "Ria Domingo", "RD", "Analytics Engineer", "Data Science", "BS Data Science", "Fresh Grad", "Makati", "open", true, ["dbt", "SQL", "Python", "Data Modeling"], "Fresh graduate building dependable analytics datasets.", "Student Mart", "Modeled student activity tables for reporting.", "12 marts documented"],
  ["sean-padilla", "Sean Padilla", "SP", "AR Designer", "Media and Design", "BS Entertainment and Multimedia Computing", "2nd Year", "Makati", "selective", false, ["AR", "Unity", "3D", "UX"], "Combines spatial design and technical prototyping.", "AR Campus Map", "Prototype for location-based campus navigation.", "8 landmarks modeled"],
  ["lance-mercado", "Lance Mercado", "LM", "ERP Analyst Intern", "Information Systems", "BS Information Systems", "Fresh Grad", "Makati", "open", false, ["ERP", "Data Migration", "Excel", "User Training"], "Fresh graduate interested in enterprise workflows and training.", "Migration Checklist", "Prepared migration QA steps for mock student records.", "41 checks listed"],
  ["charmaine-nolasco", "Charmaine Nolasco", "CN", "Technical Writer", "SOIT courses", "BS Computer Engineering", "1st Year", "Makati", "unavailable", false, ["Documentation", "Diagrams", "Hardware", "Research"], "Explains technical systems through concise guides and diagrams.", "Sensor Guide", "Documented setup instructions for sensor lab kits.", "10 guides drafted"]
];

const seedStudents = studentSeeds.map((item, index) => ({
  id: item[0],
  name: item[1],
  initials: item[2],
  role: item[3],
  courseType: normalizeCourseType(item[4]),
  program: item[5],
  yearLevel: item[6],
  schoolYear: SCHOOL_YEAR_OPTIONS[index % SCHOOL_YEAR_OPTIONS.length],
  gradYearsSince: item[6] === "Fresh Grad" ? 1 : 0,
  location: campusForCourse(item[4], item[7]),
  availability: item[8],
  availabilityLabel: AVAILABILITY_LABELS[item[8]],
  featured: item[9],
  skills: item[10],
  bio: item[11],
  metrics: seedMetrics(item, index),
  projects: seedProjects(item, index),
  email: `${item[0]}@mymail.mapua.edu.ph`,
  portfolioUrl: `https://portfolio.mapua.example/${item[0]}`,
  linkedInUrl: `https://linkedin.com/in/${item[0]}`,
  resumeUrl: index % 3 === 0 ? `https://portfolio.mapua.example/${item[0]}/resume.pdf` : "",
  credentials: seedCredentials(item, index),
  credibilityHighlights: seedCredibilityHighlights(item, index),
  preferredRoles: seedPreferredRoles(item),
  status: "published",
  source: "seed"
}));

const defaultPendingSubmissions = [
  {
    id: "pending-janine-rivera",
    name: "Janine Rivera",
    initials: "JR",
    role: "Data Science Student",
    courseType: "Data Science",
    program: "BS Data Science",
    yearLevel: "3rd Year",
    schoolYear: "AY 2026 to 2027",
    gradYearsSince: 0,
    location: "Submitted profile",
    availability: "open",
    availabilityLabel: "Ready for OJT",
    featured: false,
    skills: ["Python", "Excel", "Survey Analysis", "Looker Studio"],
    bio: "Submitted an analytics portfolio focused on student survey dashboards and reporting workflows.",
    metrics: [{ value: "Pending", label: "admin review" }, { value: 4, label: "submitted skills" }],
    projects: [{ code: "01", category: "Submitted portfolio", title: "Student Survey Dashboard", summary: "Visitor-submitted profile awaiting admin validation.", result: "Needs project evidence review" }],
    email: "janine-rivera@mymail.mapua.edu.ph",
    portfolioUrl: "#pending-janine-rivera",
    linkedInUrl: "https://linkedin.com/in/janine-rivera",
    resumeUrl: "",
    credentials: [{ name: "Google Data Analytics Certificate", issuer: "Coursera", url: "https://coursera.org" }],
    reviewComments: "",
    status: "pending",
    source: "demo-pending"
  },
  {
    id: "pending-cedric-torres",
    name: "Cedric Torres",
    initials: "CT",
    role: "Frontend Developer Student",
    courseType: "Information Systems",
    program: "BS Information Systems",
    yearLevel: "2nd Year",
    schoolYear: "AY 2025 to 2026",
    gradYearsSince: 0,
    location: "Submitted profile",
    availability: "selective",
    availabilityLabel: "Open to select roles",
    featured: false,
    skills: ["React", "CSS", "Wireframes", "User Testing"],
    bio: "Submitted a portfolio for a student services interface prototype and usability test notes.",
    metrics: [{ value: "Returned", label: "needs revision" }, { value: 4, label: "submitted skills" }],
    projects: [{ code: "01", category: "Submitted portfolio", title: "Student Services Prototype", summary: "Returned for clearer project links and role description.", result: "Revision requested" }],
    email: "cedric-torres@mymail.mapua.edu.ph",
    portfolioUrl: "#pending-cedric-torres",
    linkedInUrl: "",
    resumeUrl: "",
    credentials: [],
    reviewComments: "Please add a working portfolio URL and clarify your role in the prototype.",
    status: "returned",
    source: "demo-pending"
  },
  {
    id: "pending-farah-castillo",
    name: "Farah Castillo",
    initials: "FC",
    role: "Cybersecurity Student",
    courseType: "Information Technology",
    program: "BS Information Technology",
    yearLevel: "4th Year",
    schoolYear: "AY 2027 to 2028",
    gradYearsSince: 0,
    location: "Submitted profile",
    availability: "open",
    availabilityLabel: "Ready for OJT",
    featured: false,
    skills: ["Linux", "Risk Assessment", "Networking", "Documentation"],
    bio: "Submitted a security checklist portfolio for small organization infrastructure reviews.",
    metrics: [{ value: "Pending", label: "admin review" }, { value: 4, label: "submitted skills" }],
    projects: [{ code: "01", category: "Submitted portfolio", title: "Small Office Security Checklist", summary: "Visitor-submitted profile awaiting admin validation.", result: "Needs admin validation" }],
    email: "farah-castillo@mymail.mapua.edu.ph",
    portfolioUrl: "#pending-farah-castillo",
    linkedInUrl: "https://linkedin.com/in/farah-castillo",
    resumeUrl: "",
    credentials: [{ name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", url: "https://skillsforall.com" }],
    reviewComments: "",
    status: "pending",
    source: "demo-pending"
  }
];

const state = loadState();
let activeEditorId = "";
let adminInsightPage = 0;
let adminInsightItems = [];
let activeTrajectoryView = "average";
let currentTrajectoryContext = { scored: [], includeStatus: true };
const adminListExpanded = { pending: false, published: false, removed: false };
const grid = document.querySelector("#student-grid");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const yearFilter = document.querySelector("#year-filter");
const schoolYearFilter = document.querySelector("#school-year-filter");
const courseFilter = document.querySelector("#course-filter");
const availabilityFilter = document.querySelector("#availability-filter");
const sortSelect = document.querySelector("#sort-select");
const publicSchoolYearFilter = document.querySelector("#public-school-year-filter");
const publicProgramFilter = document.querySelector("#public-program-filter");
const adminSchoolYearFilter = document.querySelector("#admin-school-year-filter");
const adminProgramFilter = document.querySelector("#admin-program-filter");
const adminTrajectoryCohort = document.querySelector("#admin-trajectory-cohort");
const detailPanel = document.querySelector("#detail-panel");
const detailBackdrop = document.querySelector("#detail-backdrop");
const toast = document.querySelector("#toast");
const analyticsSection = document.querySelector("#analytics");
const profileForm = document.querySelector("#profile-form");
const pendingList = document.querySelector("#pending-list");
const publishedList = document.querySelector("#published-list");
const removedList = document.querySelector("#removed-list");
const adminListControls = {
  pending: {
    search: document.querySelector("#pending-search"),
    filter: document.querySelector("#pending-filter"),
    schoolYear: document.querySelector("#pending-school-year-filter"),
    list: pendingList
  },
  published: {
    search: document.querySelector("#published-search"),
    filter: document.querySelector("#published-filter"),
    schoolYear: document.querySelector("#published-school-year-filter"),
    list: publishedList
  },
  removed: {
    search: document.querySelector("#removed-search"),
    filter: document.querySelector("#removed-filter"),
    schoolYear: document.querySelector("#removed-school-year-filter"),
    list: removedList
  }
};
const adminView = document.querySelector("#admin-view");
const publicHeader = document.querySelector(".site-header");
const publicMain = document.querySelector("#top");
const publicFooter = document.querySelector("#credits");
const loginPanel = document.querySelector("#login-panel");
const loginForm = document.querySelector("#login-form");
const loginError = document.querySelector("#login-error");
const accountForm = document.querySelector("#account-form");
const accountError = document.querySelector("#account-error");
const accountSuccess = document.querySelector("#account-success");
const accountCurrentEmail = document.querySelector("#account-current-email");
const adminDashboard = document.querySelector("#admin-dashboard");
const adminForm = document.querySelector("#admin-form");
const editorTitle = document.querySelector("#editor-title");
const adminActionPrev = document.querySelector("#admin-action-prev");
const adminActionNext = document.querySelector("#admin-action-next");
const adminTrajectoryList = document.querySelector("#admin-trajectory-list");

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed && Array.isArray(parsed.submissions) && Array.isArray(parsed.removedIds)) {
      return withDefaultPendingSubmissions({
        submissions: parsed.submissions,
        removedIds: parsed.removedIds,
        edits: parsed.edits || {},
        adminLoggedIn: Boolean(parsed.adminLoggedIn),
        adminAuth: parsed.adminAuth || null
      });
    }
  } catch (error) {
    console.warn("Unable to load CMS state", error);
  }
  return withDefaultPendingSubmissions({ submissions: [], removedIds: [], edits: {}, adminLoggedIn: false, adminAuth: null });
}

async function sha256Hex(text) {
  if (window.crypto && window.crypto.subtle) {
    const bytes = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return `fallback-${(hash >>> 0).toString(16)}`;
}

async function ensureAdminAuth() {
  if (state.adminAuth && state.adminAuth.passwordHash) return;
  state.adminAuth = { email: DEFAULT_ADMIN_EMAIL, passwordHash: await sha256Hex(DEFAULT_ADMIN_PASSWORD) };
  saveState();
}

function withDefaultPendingSubmissions(currentState) {
  const existingIds = new Set([...(currentState.submissions || []).map((student) => student.id), ...(currentState.removedIds || [])]);
  const missingDefaults = defaultPendingSubmissions.filter((student) => !existingIds.has(student.id));
  return {
    ...currentState,
    submissions: [...missingDefaults, ...(currentState.submissions || [])],
    removedIds: currentState.removedIds || [],
    edits: currentState.edits || {}
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function allStudents() {
  const editedSeeds = seedStudents.map((student) => applyEdit(student));
  const approved = state.submissions.filter((student) => student.status === "published").map((student) => applyEdit(student));
  return [...editedSeeds, ...approved].filter((student) => !state.removedIds.includes(student.id));
}

function pendingStudents() {
  return state.submissions
    .filter((student) => ["pending", "returned"].includes(student.status) && !state.removedIds.includes(student.id))
    .map((student) => applyEdit(student));
}

function removedStudents() {
  const seedArchived = seedStudents.filter((student) => state.removedIds.includes(student.id)).map((student) => ({ ...applyEdit(student), status: "removed" }));
  const submittedArchived = state.submissions.filter((student) => state.removedIds.includes(student.id) || student.status === "removed").map((student) => ({ ...applyEdit(student), status: "removed" }));
  return [...seedArchived, ...submittedArchived];
}

function applyEdit(student) {
  return normalizeStudent({ schoolYear: SCHOOL_YEAR_OPTIONS[0], ...student, ...(state.edits[student.id] || {}) });
}

function findEditableStudent(id) {
  return allStudents().find((student) => student.id === id) || pendingStudents().find((student) => student.id === id) || removedStudents().find((student) => student.id === id);
}

function initializeFilters() {
  ["1st Year", "2nd Year", "3rd Year", "4th Year", "Fresh Grad"].forEach((year) => yearFilter.add(new Option(year, year)));
  SCHOOL_YEAR_OPTIONS.forEach((schoolYear) => {
    schoolYearFilter.add(new Option(schoolYear, schoolYear));
    publicSchoolYearFilter.add(new Option(schoolYear, schoolYear));
    adminSchoolYearFilter.add(new Option(schoolYear, schoolYear));
  });
  COURSE_FILTER_OPTIONS.forEach((course) => {
    courseFilter.add(new Option(course, course));
    publicProgramFilter.add(new Option(course, course));
    adminProgramFilter.add(new Option(course, course));
  });
  Object.values(adminListControls).forEach((control) => {
    COURSE_FILTER_OPTIONS.forEach((course) => control.filter.add(new Option(course, course)));
    SCHOOL_YEAR_OPTIONS.forEach((schoolYear) => control.schoolYear.add(new Option(schoolYear, schoolYear)));
  });
}

function updateStats() {
  const students = allStudents();
  const courses = new Set(students.map((student) => student.courseType));
  const readyForOjt = students.filter((student) => student.availability === "open").length;
  const skillTags = new Set(students.flatMap((student) => student.skills));
  document.querySelector("#stat-students").textContent = String(readyForOjt).padStart(2, "0");
  document.querySelector("#stat-pending").textContent = String(pendingStudents().length).padStart(2, "0");
  document.querySelector("#stat-projects").textContent = String(skillTags.size).padStart(2, "0");
  document.querySelector("#stat-courses").textContent = String(courses.size).padStart(2, "0");
}

function countBy(records, key) {
  return records.reduce((acc, record) => {
    const value = typeof key === "function" ? key(record) : record[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function filteredBySchoolYear(records, selectedYear) {
  return selectedYear === "all" ? records : records.filter((student) => student.schoolYear === selectedYear);
}

function filteredByCourse(records, selectedCourse) {
  return selectedCourse === "all" ? records : records.filter((student) => student.courseType === selectedCourse);
}

function percent(value, total) {
  return total ? Math.round((value / total) * 100) : 0;
}

function trajectoryScore(student) {
  let score = 18;
  if (student.bio && student.bio.length > 80) score += 12;
  if ((student.skills || []).length >= 4) score += 12;
  if ((student.projects || []).length > 0) score += 16;
  if (student.resumeUrl) score += 8;
  if (student.linkedInUrl) score += 6;
  if ((student.credentials || []).length > 0) score += 10;
  if (student.status === "published") score += 14;
  if (student.availability === "open") score += 10;
  if (student.availability === "selective") score += 5;
  if (student.featured) score += 10;
  if ((student.projects || []).some((project) => /\d|%|score|rating|users|teams|responses|interviews|checks|risks|modules|templates|assets|levels/i.test(project.result || ""))) score += 8;
  if (student.status === "returned") score -= 8;
  if (student.status === "removed") score -= 20;
  return Math.max(5, Math.min(100, score));
}

function trajectoryStage(score) {
  if (score >= 82) return "Recruiter-ready";
  if (score >= 66) return "Strong evidence";
  if (score >= 48) return "Needs enrichment";
  return "Early profile";
}

function trajectoryBreakdown(student) {
  const parts = [
    ["Base profile", 18, true],
    ["Meaningful bio", 12, student.bio && student.bio.length > 80],
    ["4+ skills", 12, (student.skills || []).length >= 4],
    ["Project evidence", 16, (student.projects || []).length > 0],
    ["Resume link", 8, student.resumeUrl],
    ["LinkedIn link", 6, student.linkedInUrl],
    ["Credentials", 10, (student.credentials || []).length > 0],
    ["Published review", 14, student.status === "published"],
    ["Ready availability", 10, student.availability === "open"],
    ["Selective availability", 5, student.availability === "selective"],
    ["Featured", 10, student.featured],
    ["Measurable outcome", 8, (student.projects || []).some((project) => /\d|%|score|rating|users|teams|responses|interviews|checks|risks|modules|templates|assets|levels/i.test(project.result || ""))]
  ];
  const penalties = [
    ["Returned revision", -8, student.status === "returned"],
    ["Archived", -20, student.status === "removed"]
  ];
  return [...parts, ...penalties].filter(([, , applies]) => applies);
}

function averageScore(records) {
  return records.length ? Math.round(records.reduce((sum, student) => sum + trajectoryScore(student), 0) / records.length) : 0;
}

function shortSchoolYear(label) {
  return label.replace("AY ", "").replace(" to ", "-");
}

function trajectorySeries(records, cohortMode) {
  const groupSets = {
    schoolYear: SCHOOL_YEAR_OPTIONS.map((schoolYear) => [shortSchoolYear(schoolYear), records.filter((student) => student.schoolYear === schoolYear)]),
    yearLevel: ["1st Year", "2nd Year", "3rd Year", "4th Year", "Fresh Grad"].map((yearLevel) => [yearLevel === "Fresh Grad" ? "Post-grad" : yearLevel.replace(" Year", ""), records.filter((student) => student.yearLevel === yearLevel)]),
    program: COURSE_FILTER_OPTIONS.map((course) => [course.replace("Information ", "Info ").replace("Computer ", "Comp "), records.filter((student) => student.courseType === course)]),
    status: [["Pending", records.filter((student) => student.status === "pending")], ["Returned", records.filter((student) => student.status === "returned")], ["Published", records.filter((student) => student.status === "published")], ["Archived", records.filter((student) => student.status === "removed")]]
  };
  const groups = groupSets[cohortMode] || groupSets.schoolYear;
  return groups.map(([label, group]) => ({
    label,
    count: group.length,
    score: averageScore(group)
  }));
}

function lineChartMarkup(series) {
  const width = 520;
  const height = 210;
  const padding = 34;
  const points = series.map((item, index) => {
    const x = padding + (index * (width - padding * 2)) / Math.max(1, series.length - 1);
    const y = height - padding - (item.score / 100) * (height - padding * 2);
    return { ...item, x, y };
  });
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Average career trajectory score line">
      <path class="chart-grid-line" d="M ${padding} ${height - padding} H ${width - padding}"></path>
      <path class="trajectory-path" d="${path}"></path>
      ${points.map((point) => `<g class="trajectory-point" style="--delay:${points.indexOf(point) * 60}ms"><circle cx="${point.x}" cy="${point.y}" r="5"></circle><text x="${point.x}" y="${point.y - 12}">${point.score || "-"}</text><text class="axis-label" x="${point.x}" y="${height - 10}">${point.label}</text></g>`).join("")}
    </svg>`;
}

function renderTrajectoryPanel(records, lineSelector, listSelector, options = {}) {
  const { includeStatus = false, cohortMode = "schoolYear" } = options;
  const scored = records
    .map((student) => ({ ...student, trajectoryScore: trajectoryScore(student) }))
    .sort((a, b) => b.trajectoryScore - a.trajectoryScore || a.name.localeCompare(b.name));
  currentTrajectoryContext = { scored, includeStatus };
  const avg = averageScore(records);
  const ready = scored.filter((student) => student.trajectoryScore >= 82).length;
  const support = scored.filter((student) => student.trajectoryScore < 66).length;
  const submitted = records.length;
  document.querySelector(lineSelector).innerHTML = lineChartMarkup(trajectorySeries(records, cohortMode));
  document.querySelector(listSelector).innerHTML = `
    <div class="trajectory-summary">
      <button type="button" class="${activeTrajectoryView === "average" ? "active" : ""}" data-trajectory-view="average"><span>${avg}</span><strong>Average CTI</strong><p>Click to see what CTI means and how it is calculated.</p></button>
      <button type="button" class="${activeTrajectoryView === "ready" ? "active" : ""}" data-trajectory-view="ready"><span>${ready}</span><strong>Recruiter-ready</strong><p>Click to see who is ready and what admins can do next.</p></button>
      <button type="button" class="${activeTrajectoryView === "support" ? "active" : ""}" data-trajectory-view="support"><span>${support}</span><strong>Need support</strong><p>Click to see which submissions need richer evidence or revision.</p></button>
      <button type="button" class="${activeTrajectoryView === "tracked" ? "active" : ""}" data-trajectory-view="tracked"><span>${submitted}</span><strong>Profiles tracked</strong><p>Click to browse all matching records in this cohort.</p></button>
    </div>
    ${trajectoryDetailMarkup(activeTrajectoryView, scored, includeStatus)}`;
}

function trajectoryStudentCard(student, includeStatus = true) {
  return `
    <article class="trajectory-card">
      <div class="trajectory-score">${student.trajectoryScore}</div>
      <div>
        <strong>${student.name}</strong>
        <p>${trajectoryStage(student.trajectoryScore)}${includeStatus ? ` / ${student.status}` : ""}</p>
        <div class="trajectory-progress" style="--value:${student.trajectoryScore}%"><i></i></div>
        <small>${student.schoolYear} / ${student.courseType}</small>
      </div>
    </article>`;
}

function trajectoryDetailMarkup(view, scored, includeStatus) {
  const ready = scored.filter((student) => student.trajectoryScore >= 82);
  const support = scored.filter((student) => student.trajectoryScore < 66).sort((a, b) => a.trajectoryScore - b.trajectoryScore);
  const example = scored[0];
  if (view === "ready") {
    return `
      <div class="trajectory-detail"><span>Recruiter-ready means</span><p>These profiles have strong evidence, reviewed publication status, relevant skills, and clear availability. Admins can feature them, include them in recruiter shortlists, or prioritize outreach.</p></div>
      <div class="trajectory-snapshot">${(ready.length ? ready : scored.slice(0, 3)).slice(0, 6).map((student) => trajectoryStudentCard(student, includeStatus)).join("")}</div>`;
  }
  if (view === "support") {
    return `
      <div class="trajectory-detail"><span>Needs support means</span><p>These profiles need stronger project links, clearer role descriptions, measurable outcomes, skill evidence, or revision follow-up before they should be promoted.</p></div>
      <div class="trajectory-snapshot">${(support.length ? support : scored.slice(-3)).slice(0, 6).map((student) => trajectoryStudentCard(student, includeStatus)).join("")}</div>`;
  }
  if (view === "tracked") {
    return `
      <div class="trajectory-detail"><span>Profiles tracked means</span><p>This includes every matching record after the admin filters: published profiles, pending submissions, returned revisions, and archived records.</p></div>
      <div class="trajectory-snapshot">${scored.slice(0, 8).map((student) => trajectoryStudentCard(student, includeStatus)).join("")}</div>`;
  }
  const breakdown = example ? trajectoryBreakdown(example) : [];
  return `
    <div class="trajectory-detail">
      <span>Average CTI formula</span>
      <p>CTI is a 0-100 prototype readiness score. It starts with a base profile score, then adds evidence points for a meaningful bio, skills, project proof, published review, availability, featured status, and measurable outcomes. Returned or archived records subtract points.</p>
    </div>
    <div class="cti-breakdown">
      ${breakdown.map(([label, value]) => `<article><strong>${value > 0 ? "+" : ""}${value}</strong><span>${label}</span></article>`).join("")}
    </div>
    ${example ? `<div class="trajectory-detail muted-detail"><span>Example</span><p>${example.name} scores ${example.trajectoryScore}/100: ${trajectoryStage(example.trajectoryScore)}. The cohort average is calculated by averaging all matching student CTI scores.</p></div>` : ""}`;
}

function renderPublicAnalytics() {
  const records = filteredByCourse(filteredBySchoolYear(allStudents(), publicSchoolYearFilter.value), publicProgramFilter.value);
  const total = records.length;
  const readiness = countBy(records, "availability");
  const open = readiness.open || 0;
  const selective = readiness.selective || 0;
  const unavailable = readiness.unavailable || 0;
  const openPct = percent(open, total);
  const selectivePct = percent(selective, total);
  const unavailablePct = Math.max(0, 100 - openPct - selectivePct);
  document.querySelector("#public-readiness-donut").style.background = `conic-gradient(${AVAILABILITY_COLORS.open} 0 ${openPct}%, ${AVAILABILITY_COLORS.selective} ${openPct}% ${openPct + selectivePct}%, ${AVAILABILITY_COLORS.unavailable} ${openPct + selectivePct}% 100%)`;
  document.querySelector("#public-readiness-donut").dataset.availabilityFilter = "open";
  document.querySelector("#public-readiness-donut").setAttribute("role", "button");
  document.querySelector("#public-readiness-donut").setAttribute("tabindex", "0");
  document.querySelector("#public-readiness-donut").setAttribute("title", "Show students ready for OJT");
  document.querySelector("#public-readiness-donut").innerHTML = `<div class="donut-center"><strong>${openPct}%</strong><span>ready now</span></div>`;
  document.querySelector("#public-readiness-legend").innerHTML = [
    ["open", open, openPct],
    ["selective", selective, selectivePct],
    ["unavailable", unavailable, unavailablePct]
  ].map(([key, count, pct]) => `<button type="button" data-availability-filter="${key}"><i style="background:${AVAILABILITY_COLORS[key]}"></i>${AVAILABILITY_LABELS[key]}: ${count} (${pct}%)</button>`).join("");

  const courseCounts = countBy(records, "courseType");
  const maxCourse = Math.max(1, ...Object.values(courseCounts));
  document.querySelector("#public-course-bars").innerHTML = COURSE_FILTER_OPTIONS.map((course) => {
    const count = courseCounts[course] || 0;
    return `<button class="bar-row" type="button" data-course-filter="${course}" style="--value:${percent(count, maxCourse)}%"><span>${course}</span><div><i></i></div><strong>${count}</strong></button>`;
  }).join("");

  const yearCounts = countBy(records, "yearLevel");
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Fresh Grad"];
  document.querySelector("#public-year-rail").innerHTML = years.map((year) => {
    const count = yearCounts[year] || 0;
    return `<button class="rail-row" type="button" data-year-filter="${year}" style="--value:${Math.max(6, percent(count, Math.max(1, total)))}%"><span>${year}</span><div class="rail-track"><i></i></div><strong>${count}</strong></button>`;
  }).join("");
  renderTopStudents(records);
}

function renderTopStudents(records) {
  const featured = records
    .filter((student) => student.featured)
    .sort((a, b) => {
      const aOpen = a.availability === "open" ? 1 : 0;
      const bOpen = b.availability === "open" ? 1 : 0;
      return bOpen - aOpen || b.skills.length - a.skills.length || a.name.localeCompare(b.name);
    })
    .slice(0, 4);
  document.querySelector("#top-student-row").innerHTML = featured.length
    ? featured.map((student, index) => {
      const project = student.projects[0];
      return `
        <button class="top-student-card" type="button" data-featured-student="${student.id}" style="--delay:${index * 45}ms">
          <div class="top-student-mark">${student.initials}</div>
          <div>
            <span>${student.schoolYear} / ${student.courseType}</span>
            <h3>${student.name}</h3>
            <p>${project.title}: ${project.result}</p>
            <small>${student.skills.slice(0, 3).join(" / ")}</small>
          </div>
        </button>`;
    }).join("")
    : `<p class="cms-empty">No featured students for this school year yet.</p>`;
}

function syncPublicSchoolYearFilter() {
  schoolYearFilter.value = publicSchoolYearFilter.value;
}

function scrollToDirectory() {
  document.querySelector("#directory").scrollIntoView({ behavior: "smooth", block: "start" });
}

function applyAnalyticsShortcut({ course = "all", year = "all", availability = "all" }) {
  searchInput.value = "";
  syncPublicSchoolYearFilter();
  courseFilter.value = course;
  yearFilter.value = year;
  availabilityFilter.value = availability;
  sortSelect.value = "featured";
  renderStudents();
  scrollToDirectory();
}

function openFeaturedFromAnalytics(studentId) {
  const student = allStudents().find((item) => item.id === studentId);
  if (!student) return;
  searchInput.value = "";
  schoolYearFilter.value = student.schoolYear;
  courseFilter.value = student.courseType;
  yearFilter.value = student.yearLevel;
  availabilityFilter.value = "all";
  sortSelect.value = "featured";
  renderStudents();
  scrollToDirectory();
  window.setTimeout(() => openDetails(studentId), 360);
}

function renderAdminAnalytics() {
  const active = filteredByCourse(filteredBySchoolYear([...allStudents(), ...pendingStudents(), ...removedStudents()], adminSchoolYearFilter.value), adminProgramFilter.value);
  renderTrajectoryPanel(active, "#admin-trajectory-line", "#admin-trajectory-list", { includeStatus: true, cohortMode: adminTrajectoryCohort.value });
  const statusCounts = countBy(active, "status");
  const funnelOrder = [
    ["pending", "Needs first review"],
    ["returned", "Waiting on revision"],
    ["published", "Live for recruiters"],
    ["removed", "Archived / declined"]
  ];
  const maxStatus = Math.max(1, ...funnelOrder.map(([key]) => statusCounts[key] || 0));
  document.querySelector("#admin-status-funnel").innerHTML = funnelOrder.map(([key, label], index) => {
    const count = statusCounts[key] || 0;
    const width = Math.max(18, percent(count, maxStatus) - index * 5);
    return `<div class="funnel-row" style="--value:${width}%"><span>${label}</span><i></i><strong>${count}</strong></div>`;
  }).join("");

  const availabilityKeys = ["open", "selective", "unavailable"];
  const heatValues = COURSE_FILTER_OPTIONS.flatMap((course) => availabilityKeys.map((availability) => active.filter((student) => student.courseType === course && student.availability === availability).length));
  const heatMax = Math.max(1, ...heatValues);
  document.querySelector("#admin-heatmap").innerHTML = `
    <div class="heatmap-head"></div>${availabilityKeys.map((key) => `<div class="heatmap-head">${AVAILABILITY_SHORT_LABELS[key]}</div>`).join("")}
    ${COURSE_FILTER_OPTIONS.map((course) => `
      <div class="heatmap-course">${course}</div>
      ${availabilityKeys.map((availability) => {
        const count = active.filter((student) => student.courseType === course && student.availability === availability).length;
        const intensity = count / heatMax;
        return `<div class="heat-cell" style="--intensity:${intensity.toFixed(2)}"><span>${count}</span></div>`;
      }).join("")}
    `).join("")}`;

  const skillCounts = countBy(active.flatMap((student) => student.skills || []), (skill) => skill);
  const topSkills = Object.entries(skillCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 10);
  const maxSkill = Math.max(1, ...topSkills.map(([, count]) => count));
  document.querySelector("#admin-skill-bubbles").innerHTML = topSkills.map(([skill, count], index) => {
    return `<div class="skill-row" style="--value:${percent(count, maxSkill)}%; --delay:${index * 35}ms"><span>${skill}</span><div><i></i></div><strong>${count}</strong></div>`;
  }).join("");

  const pending = active.filter((student) => student.status === "pending").length;
  const returned = active.filter((student) => student.status === "returned").length;
  const featured = active.filter((student) => student.featured && student.status === "published").length;
  const openNow = active.filter((student) => student.availability === "open" && student.status === "published").length;
  const published = active.filter((student) => student.status === "published").length;
  const strongestCourse = COURSE_FILTER_OPTIONS
    .map((course) => [course, active.filter((student) => student.courseType === course && student.status === "published").length])
    .sort((a, b) => b[1] - a[1])[0];
  const topSkill = topSkills[0] || ["No skills yet", 0];
  adminInsightItems = [
    ["Review next", pending ? `${pending} submission${pending === 1 ? "" : "s"} need first-pass review before they can appear publicly.` : "No first-pass reviews waiting right now."],
    ["Follow up", returned ? `${returned} returned profile${returned === 1 ? "" : "s"} may need student reminders or clearer revision comments.` : "No returned profiles are waiting on student revisions."],
    ["Recruiter-ready pool", `${openNow} of ${published} live profile${published === 1 ? "" : "s"} are ready for OJT conversations now.`],
    ["Coverage signal", `${strongestCourse[0]} currently has the strongest published representation (${strongestCourse[1]} profile${strongestCourse[1] === 1 ? "" : "s"}).`],
    ["Evidence to check", `${topSkill[0]} appears most often (${topSkill[1]} profile${topSkill[1] === 1 ? "" : "s"}); verify project proof before featuring more students.`],
    ["Featured shelf", `${featured} live profile${featured === 1 ? "" : "s"} are marked featured for public discovery.`]
  ];
  adminInsightPage = Math.min(adminInsightPage, Math.max(0, Math.ceil(adminInsightItems.length / 3) - 1));
  renderAdminInsights();
}

function renderAdminInsights() {
  const pageSize = 3;
  const pageCount = Math.max(1, Math.ceil(adminInsightItems.length / pageSize));
  const visible = adminInsightItems.slice(adminInsightPage * pageSize, adminInsightPage * pageSize + pageSize);
  document.querySelector("#admin-insights").innerHTML = visible
    .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
  adminActionPrev.disabled = pageCount <= 1;
  adminActionNext.disabled = pageCount <= 1;
  adminActionPrev.setAttribute("aria-label", `Previous admin actions, page ${adminInsightPage + 1} of ${pageCount}`);
  adminActionNext.setAttribute("aria-label", `Next admin actions, page ${adminInsightPage + 1} of ${pageCount}`);
}

function inferCourseType(program) {
  const value = program.toLowerCase();
  if (value.includes("data")) return "Data Science";
  if (value.includes("information systems") || value.includes("is")) return "Information Systems";
  if (value.includes("information technology") || value.includes("it")) return "Information Technology";
  if (value.includes("computer science") || value.includes("comsci") || value.includes("cs")) return "Computer Science";
  if (value.includes("multimedia") || value.includes("media") || value.includes("film") || value.includes("design")) return "Media and Design";
  return "SOIT courses";
}

function normalizeCourseType(courseType) {
  const cleaned = cleanText(courseType);
  return cleaned.toLowerCase() === "tech courses" || cleaned === "SOIT courses" ? "SOIT courses" : cleaned;
}

function campusForCourse(courseType, fallback = "Makati") {
  const normalized = normalizeCourseType(courseType);
  const makatiCourses = ["Computer Science", "Data Science", "Information Systems", "Information Technology", "Media and Design", "SOIT courses"];
  return makatiCourses.includes(normalized) ? "Makati" : cleanText(fallback || "Makati");
}

function availabilityLabel(value) {
  return AVAILABILITY_LABELS[value] || "Not available now";
}

function cleanText(value) {
  return String(value || "").trim().replace(/[<>]/g, "");
}

function cleanUrl(value) {
  const url = cleanText(value);
  return /^https?:\/\//i.test(url) || url.startsWith("#") ? url : "";
}

function seedMetrics(item, index) {
  const [id, , , , courseType, , yearLevel, , , , skills, , , , result] = item;
  const metricBank = {
    "Data Science": [
      { value: `${180 + index * 7}`, label: "records cleaned" },
      { value: "3 dashboards", label: "analytics outputs" }
    ],
    "Computer Science": [
      { value: `${6 + (index % 5)}`, label: "modules shipped" },
      { value: `${92 + (index % 7)}%`, label: "test coverage" }
    ],
    "Information Technology": [
      { value: `${12 + index}`, label: "issues documented" },
      { value: `${4 + (index % 4)}`, label: "lab configs" }
    ],
    "Information Systems": [
      { value: `${9 + (index % 8)}`, label: "workflows mapped" },
      { value: `${3 + (index % 3)}`, label: "stakeholder groups" }
    ],
    "Media and Design": [
      { value: `${18 + index}`, label: "creative assets" },
      { value: `${4 + (index % 2)} rounds`, label: "user critique" }
    ],
    "SOIT courses": [
      { value: `${5 + (index % 6)}`, label: "prototype builds" },
      { value: `${2 + (index % 4)}`, label: "technical demos" }
    ]
  };
  return [
    { value: result, label: "project result" },
    { value: skills.length, label: "core skills" },
    ...(metricBank[normalizeCourseType(courseType)] || []),
    yearLevel === "Fresh Grad" ? { value: "Ready", label: "graduate availability" } : { value: id.split("-").length, label: "portfolio sections" }
  ].slice(0, 5);
}

function seedProjects(item, index) {
  const [, , , role, courseType, , , , , , skills, , title, summary, result] = item;
  const course = normalizeCourseType(courseType);
  const secondary = {
    "Data Science": ["Model Validation Notes", "Documented assumptions, metrics, and error checks for an analytics prototype.", "Validation log included"],
    "Computer Science": ["Code Review Pack", "Prepared repository notes, issue labels, and setup instructions for reviewers.", "Reviewer-ready repo"],
    "Information Technology": ["Operations Runbook", "Turned lab setup steps and troubleshooting notes into a repeatable support guide.", "Runbook drafted"],
    "Information Systems": ["Requirements Trace", "Linked stakeholder needs to screens, reports, and acceptance checks.", "Traceability matrix"],
    "Media and Design": ["Design Rationale", "Collected visual direction, user feedback, and iteration notes for portfolio review.", "Critique notes included"],
    "SOIT courses": ["Prototype Demo Notes", "Captured build constraints, testing notes, and improvement ideas for the technical demo.", "Demo proof included"]
  }[course] || ["Evidence Pack", "Collected supporting artifacts for review.", "Evidence ready"];
  const projects = [
    { code: "01", category: course, title, summary, result },
    { code: "02", category: `${skills[0]} evidence`, title: secondary[0], summary: secondary[1], result: secondary[2] }
  ];
  if (index % 4 === 0) {
    projects.push({ code: "03", category: "Collaboration", title: `${role} Handoff`, summary: "Prepared context notes so teammates or reviewers can continue the work without re-discovery.", result: "Handoff checklist" });
  }
  return projects;
}

function seedCredentials(item, index) {
  const [, , , role, courseType, , , , , , skills] = item;
  const course = normalizeCourseType(courseType);
  const providers = {
    "Data Science": ["Google Data Analytics Certificate", "Coursera", "https://coursera.org"],
    "Computer Science": ["GitHub Foundations", "GitHub", "https://github.com"],
    "Information Technology": ["Cisco Networking Basics", "Cisco Networking Academy", "https://skillsforall.com"],
    "Information Systems": ["Business Analysis Foundations", "LinkedIn Learning", "https://linkedin.com/learning"],
    "Media and Design": ["UX Design Professional Certificate", "Coursera", "https://coursera.org"],
    "SOIT courses": ["AWS Cloud Foundations", "Credly", "https://credly.com"]
  };
  const primary = providers[course] || ["Career Readiness Certificate", "Training provider", "https://example.com"];
  const credentials = [
    { name: `${skills[0]} training credential`, issuer: primary[1], url: primary[2] },
    { name: primary[0], issuer: primary[1], url: primary[2] }
  ];
  if (index % 2 === 0) credentials.push({ name: `${role} portfolio review`, issuer: "Faculty-reviewed evidence", url: "" });
  if (index % 5 === 0) credentials.push({ name: "OJT readiness orientation", issuer: "Career services", url: "" });
  return credentials;
}

function seedCredibilityHighlights(item, index) {
  const [, , , role, courseType, program, yearLevel, , availability, featured, skills] = item;
  const course = normalizeCourseType(courseType);
  const base = [
    `${program} / ${yearLevel}`,
    `${availabilityLabel(availability)} on Makati campus`,
    `Primary screening tags: ${skills.slice(0, 3).join(", ")}`
  ];
  const courseNote = {
    "Data Science": "Good for dashboarding, data cleaning, reporting, and model evaluation tasks.",
    "Computer Science": "Good for implementation-heavy roles with repository and API review.",
    "Information Technology": "Good for support, networking, QA, documentation, and operations tasks.",
    "Information Systems": "Good for requirements, workflow analysis, stakeholder notes, and business systems.",
    "Media and Design": "Good for UX, visual systems, research synthesis, and content-heavy product work.",
    "SOIT courses": "Good for technical prototyping, hardware/software demos, and applied build work."
  }[course];
  return [...base, courseNote, featured ? "Featured profile with stronger public evidence." : `Needs standard admin review before featuring as a ${role}.`].slice(0, index % 3 === 0 ? 5 : 4);
}

function seedPreferredRoles(item) {
  const [, , , role, courseType, , , , availability, , skills] = item;
  const course = normalizeCourseType(courseType);
  const roleBank = {
    "Data Science": ["Data analyst intern", "Dashboard builder", "Research assistant"],
    "Computer Science": ["Software developer intern", "Backend trainee", "QA automation trainee"],
    "Information Technology": ["IT support intern", "Network trainee", "Security documentation assistant"],
    "Information Systems": ["Business analyst intern", "Systems analyst trainee", "Process documentation assistant"],
    "Media and Design": ["UX design intern", "Content designer", "Visual systems assistant"],
    "SOIT courses": ["Technical support trainee", "Prototype builder", "Engineering documentation assistant"]
  };
  return [role, ...(roleBank[course] || []), `${skills[0]} support role`]
    .filter((value, index, list) => list.indexOf(value) === index)
    .slice(0, availability === "unavailable" ? 3 : 4);
}

function credentialEvidence(student) {
  const links = [
    student.resumeUrl ? { name: "Resume", issuer: "Student uploaded", url: student.resumeUrl } : null,
    student.linkedInUrl ? { name: "LinkedIn", issuer: "Professional profile", url: student.linkedInUrl } : null,
    student.portfolioUrl && !student.portfolioUrl.startsWith("#") ? { name: "Portfolio site", issuer: "External portfolio", url: student.portfolioUrl } : null
  ].filter(Boolean);
  return [...links, ...(student.credentials || [])];
}

function evidenceSummary(student) {
  const evidence = credentialEvidence(student);
  const labels = DEFAULT_CREDENTIAL_LABELS.filter((label) => {
    if (label === "Resume") return Boolean(student.resumeUrl);
    if (label === "LinkedIn") return Boolean(student.linkedInUrl);
    if (label === "Portfolio") return Boolean(student.portfolioUrl);
    return (student.credentials || []).length > 0;
  });
  return { count: evidence.length, labels };
}

function parseCredentials(value) {
  return String(value || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split("|").map(cleanText).filter(Boolean);
      const urlIndex = parts.findIndex((part) => /^https?:\/\//i.test(part));
      const url = urlIndex >= 0 ? parts[urlIndex] : "";
      const name = parts[0] && parts[0] !== url ? parts[0] : "Credential";
      const issuer = parts.find((part, index) => index !== 0 && index !== urlIndex) || inferCredentialIssuer(url || name);
      return { name, issuer, url };
    })
    .filter((item) => item.name || item.url)
    .slice(0, 12);
}

function credentialsToText(credentials = []) {
  return credentials.map((item) => [item.name, item.url, item.issuer].filter(Boolean).join(" | ")).join("\n");
}

function inferCredentialIssuer(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("coursera")) return "Coursera";
  if (text.includes("credly")) return "Credly";
  if (text.includes("linkedin")) return "LinkedIn Learning";
  if (text.includes("aws")) return "AWS";
  if (text.includes("cisco")) return "Cisco";
  if (text.includes("github")) return "GitHub";
  return "Credential";
}

function normalizeStudent(student) {
  const credentials = Array.isArray(student.credentials) ? student.credentials : parseCredentials(student.credentials);
  const courseType = normalizeCourseType(student.courseType);
  const skills = Array.isArray(student.skills) ? student.skills : [];
  return {
    ...student,
    courseType,
    location: campusForCourse(courseType, student.location),
    preferredRoles: Array.isArray(student.preferredRoles) && student.preferredRoles.length ? student.preferredRoles.map(cleanText).filter(Boolean) : defaultPreferredRoles(student, courseType),
    credibilityHighlights: Array.isArray(student.credibilityHighlights) && student.credibilityHighlights.length ? student.credibilityHighlights.map(cleanText).filter(Boolean) : defaultCredibilityHighlights(student, courseType, skills),
    linkedInUrl: cleanUrl(student.linkedInUrl),
    resumeUrl: cleanUrl(student.resumeUrl),
    portfolioUrl: cleanText(student.portfolioUrl || `#${student.id}`),
    credentials: credentials
      .map((item) => ({
        name: cleanText(item.name || "Credential"),
        issuer: cleanText(item.issuer || inferCredentialIssuer(item.url || item.name)),
        url: cleanUrl(item.url)
      }))
      .filter((item) => item.name || item.url)
  };
}

function defaultPreferredRoles(student, courseType = normalizeCourseType(student.courseType)) {
  return seedPreferredRoles([
    student.id || "student",
    student.name || "Student",
    student.initials || "ST",
    student.role || `${courseType} Student`,
    courseType,
    student.program || courseType,
    student.yearLevel || "Student",
    student.location || "Makati",
    student.availability || "open",
    Boolean(student.featured),
    student.skills || []
  ]);
}

function defaultCredibilityHighlights(student, courseType = normalizeCourseType(student.courseType), skills = student.skills || []) {
  return [
    `${student.program || courseType} / ${student.yearLevel || "Student"}`,
    `${availabilityLabel(student.availability)} on Makati campus`,
    skills.length ? `Primary screening tags: ${skills.slice(0, 3).join(", ")}` : "Needs more skill tags for faster screening.",
    (student.credentials || []).length ? `${student.credentials.length} credential item${student.credentials.length === 1 ? "" : "s"} submitted.` : "No training credential submitted yet."
  ];
}

function credentialListMarkup(student, compact = false) {
  const evidence = credentialEvidence(student);
  if (!evidence.length) return `<p class="muted-evidence">No resume, LinkedIn, or credentials have been added yet.</p>`;
  return evidence.map((item) => `
    <article class="${compact ? "evidence-chip" : "credential-item"}">
      <div>
        <strong>${item.name}</strong>
        <span>${item.issuer || inferCredentialIssuer(item.url || item.name)}</span>
      </div>
      ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener">Open ${icon("arrow-up-right")}</a>` : `<small>Link pending</small>`}
    </article>`).join("");
}

function profileDepthMarkup(student) {
  const roles = student.preferredRoles || [];
  const highlights = student.credibilityHighlights || [];
  return `
    <div class="profile-depth-grid">
      <article>
        <span class="detail-label">Best-fit roles</span>
        <div class="role-list">${roles.map((role) => `<span>${role}</span>`).join("")}</div>
      </article>
      <article>
        <span class="detail-label">Screening notes</span>
        <ul class="screening-list">${highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>
      </article>
    </div>`;
}

function adminProfileDepthMarkup(student) {
  const roles = (student.preferredRoles || []).slice(0, 3);
  const highlights = (student.credibilityHighlights || []).slice(0, 3);
  return `
    <div class="admin-profile-depth">
      <div>
        <strong>Best-fit roles</strong>
        <div class="admin-role-list">${roles.map((role) => `<span>${role}</span>`).join("")}</div>
      </div>
      <div>
        <strong>Fast screening notes</strong>
        <ul>${highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>
      </div>
    </div>`;
}

function studentCard(student, index) {
  const freshGrad = student.yearLevel === "Fresh Grad" ? `Fresh Grad / ${student.gradYearsSince || 1} year since graduation` : student.yearLevel;
  const evidence = evidenceSummary(student);
  return `
    <article class="student-card" style="--delay:${Math.min(index, 12) * 30}ms">
      <button class="card-open" type="button" data-student-id="${student.id}" aria-label="View ${student.name}'s portfolio">
        <div class="portrait">
          <span class="portrait-initials">${student.initials}</span>
          ${student.featured ? `<span class="featured-label">${icon("check")} Featured</span>` : ""}
        </div>
        <div class="card-body">
          <span class="card-kicker">${student.schoolYear} / ${freshGrad} / ${student.courseType}</span>
          <div class="card-title">
            <h3>${student.name}</h3>
            <span class="arrow-button">${icon("arrow-up-right")}</span>
          </div>
          <p class="student-role">${student.role} / ${student.program}</p>
          <div class="tag-list">${student.skills.slice(0, 4).map((skill) => `<span>${skill}</span>`).join("")}</div>
          <div class="evidence-pills">${evidence.labels.slice(0, 3).map((label) => `<span>${label}</span>`).join("")}${evidence.count > 3 ? `<span>+${evidence.count - 3}</span>` : ""}</div>
          <div class="card-footer">
            <span>${icon("location")} ${student.location}</span>
            <span>${student.availabilityLabel}</span>
          </div>
        </div>
      </button>
    </article>`;
}

function renderStudents() {
  const query = searchInput.value.trim().toLowerCase();
  const year = yearFilter.value;
  const schoolYear = schoolYearFilter.value;
  const course = courseFilter.value;
  const availability = availabilityFilter.value;
  const sort = sortSelect.value;
  const filtered = allStudents()
    .filter((student) => year === "all" || student.yearLevel === year)
    .filter((student) => schoolYear === "all" || student.schoolYear === schoolYear)
    .filter((student) => course === "all" || student.courseType === course)
    .filter((student) => availability === "all" || student.availability === availability)
    .filter((student) => !query || JSON.stringify(student).toLowerCase().includes(query))
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "year") return yearRank(a.yearLevel) - yearRank(b.yearLevel) || a.name.localeCompare(b.name);
      return Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name);
    });

  grid.innerHTML = filtered.map(studentCard).join("");
  resultCount.textContent = filtered.length;
  emptyState.hidden = filtered.length !== 0;
}

function yearRank(year) {
  return ["1st Year", "2nd Year", "3rd Year", "4th Year", "Fresh Grad"].indexOf(year);
}

function openDetails(id) {
  const student = allStudents().find((item) => item.id === id);
  if (!student) return;
  const freshGrad = student.yearLevel === "Fresh Grad" ? `Fresh Grad / ${student.gradYearsSince || 1} year since graduation` : student.yearLevel;
  const evidence = evidenceSummary(student);
  detailPanel.innerHTML = `
    <div class="panel-topbar">
      <span>Student portfolio / ${freshGrad}</span>
      <button type="button" class="icon-button close-panel" aria-label="Close portfolio">${icon("close")}</button>
    </div>
    <div class="panel-hero">
      <div class="panel-monogram">${student.initials}</div>
      <div class="panel-identity"><span>${student.courseType} / ${student.program}</span><h2>${student.name}</h2><p>${student.role}</p></div>
    </div>
    <div class="panel-content">
      <div class="panel-actions">
        <a class="primary-action" href="mailto:${student.email}">Contact student ${icon("arrow-up-right")}</a>
        ${student.resumeUrl ? `<a class="secondary-panel-action" href="${student.resumeUrl}" target="_blank" rel="noopener">Resume ${icon("arrow-up-right")}</a>` : ""}
        ${student.linkedInUrl ? `<a class="secondary-panel-action" href="${student.linkedInUrl}" target="_blank" rel="noopener">LinkedIn ${icon("arrow-up-right")}</a>` : ""}
        <button class="icon-button share-profile" type="button" aria-label="Share ${student.name}'s profile">${icon("share")}</button>
      </div>
      <div class="panel-meta">
        <span>${icon("location")} ${student.location}</span>
        <span>${student.availabilityLabel}</span>
        <span>${evidence.count} portfolio evidence link${evidence.count === 1 ? "" : "s"}</span>
      </div>
      <section class="about-student"><span class="detail-label">About</span><p>${student.bio}</p></section>
      <section>${profileDepthMarkup(student)}</section>
      <section><span class="detail-label">Capabilities</span><div class="panel-skills">${student.skills.map((skill) => `<span>${skill}</span>`).join("")}</div></section>
      <section><span class="detail-label">Resume, LinkedIn, and credentials</span><div class="credential-list">${credentialListMarkup(student)}</div></section>
      <section><span class="detail-label">Selected outcomes</span><div class="metric-grid">${student.metrics.map((metric) => `<article><strong>${metric.value}</strong><span>${metric.label}</span></article>`).join("")}</div></section>
      <section><span class="detail-label">Featured work</span><div class="project-list">${student.projects.map((project) => `
        <article><span>${project.code}</span><div><small>${project.category}</small><h3>${project.title}</h3><p>${project.summary}</p><strong>${project.result}</strong></div></article>`).join("")}</div></section>
    </div>`;
  detailBackdrop.hidden = false;
  detailPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("panel-open");
  detailPanel.querySelector(".close-panel").focus();
}

function closeDetails() {
  detailPanel.setAttribute("aria-hidden", "true");
  detailBackdrop.hidden = true;
  document.body.classList.remove("panel-open");
}

function renderCms() {
  const pending = pendingStudents();
  const cmsPublished = allStudents();
  const archived = removedStudents();

  renderAdminList("pending", pending, "queue", "No matching pending submissions.");
  renderAdminList("published", cmsPublished, "published", "No matching published profiles.");
  renderAdminList("removed", archived, "removed", "No matching archived or disapproved profiles.");

  document.querySelector("#admin-pending").textContent = String(pending.filter((student) => student.status === "pending").length).padStart(2, "0");
  document.querySelector("#admin-returned").textContent = String(pending.filter((student) => student.status === "returned").length).padStart(2, "0");
  document.querySelector("#admin-published").textContent = String(cmsPublished.length).padStart(2, "0");
  document.querySelector("#admin-removed").textContent = String(archived.length).padStart(2, "0");
  renderAdminAnalytics();
}

function renderAdminList(type, records, mode, emptyMessage) {
  const control = adminListControls[type];
  const query = control.search.value.trim().toLowerCase();
  const course = control.filter.value;
  const schoolYear = control.schoolYear.value;
  const filtered = records.filter((student) => {
    const matchesCourse = course === "all" || student.courseType === course;
    const matchesSchoolYear = schoolYear === "all" || student.schoolYear === schoolYear;
    const matchesQuery = !query || JSON.stringify(student).toLowerCase().includes(query);
    return matchesCourse && matchesSchoolYear && matchesQuery;
  });
  const expanded = adminListExpanded[type];
  const visible = expanded ? filtered : filtered.slice(0, ADMIN_LIST_LIMIT);
  const toggle = filtered.length > ADMIN_LIST_LIMIT
    ? `<button class="see-more-button" type="button" data-toggle-list="${type}">${expanded ? "Show top 5" : `See more (${filtered.length - ADMIN_LIST_LIMIT})`}</button>`
    : "";
  control.list.innerHTML = filtered.length
    ? `${visible.map((student) => cmsItem(student, mode)).join("")}${toggle}`
    : `<p class="cms-empty">${emptyMessage}</p>`;
}

function cmsItem(student, mode) {
  const reviewNote = student.reviewComments ? `<p class="review-note">Comments: ${student.reviewComments}</p>` : "";
  const cti = trajectoryScore(student);
  const evidence = evidenceSummary(student);
  const missing = [
    !student.resumeUrl ? "resume" : "",
    !student.linkedInUrl ? "LinkedIn" : "",
    !(student.credentials || []).length ? "certifications" : "",
    !student.portfolioUrl || student.portfolioUrl.startsWith("#") ? "external portfolio" : ""
  ].filter(Boolean);
  const screenStatus = missing.length ? `Missing ${missing.slice(0, 3).join(", ")}${missing.length > 3 ? "..." : ""}` : "Complete evidence set";
  const approve = mode === "queue" ? `<button class="cms-button" type="button" data-approve="${student.id}">Approve</button>` : "";
  const returnAction = mode === "queue" ? `<button class="cms-button secondary" type="button" data-return="${student.id}">Return with comments</button>` : "";
  const restore = mode === "removed" ? `<button class="cms-button" type="button" data-restore="${student.id}">Restore</button>` : "";
  const removeLabel = mode === "queue" ? "Disapprove" : "Archive";
  return `
    <div class="cms-item">
      <div class="record-heading">
        <h4>${student.name}</h4>
        <span>${student.status}</span>
      </div>
      <p>${student.program} / ${student.schoolYear} / ${student.yearLevel} / ${student.courseType}<br>${student.email}</p>
      <div class="record-cti"><strong>CTI ${cti}</strong><span>${trajectoryStage(cti)}</span><span>${evidence.count} evidence links</span></div>
      <div class="admin-evidence">
        <div class="screening-note"><strong>${screenStatus}</strong><span>Resume, LinkedIn, portfolio, and certification links help admins screen faster before featuring or approving.</span></div>
        ${adminProfileDepthMarkup(student)}
        <div class="evidence-chip-list">${credentialListMarkup(student, true)}</div>
      </div>
      ${reviewNote}
      <div class="cms-actions">
        ${approve}
        ${returnAction}
        ${restore}
        <button class="cms-button secondary" type="button" data-edit="${student.id}">Edit</button>
        <button class="cms-button danger" type="button" data-remove="${student.id}">${removeLabel}</button>
        <button class="cms-button danger" type="button" data-delete="${student.id}">Delete</button>
      </div>
    </div>`;
}

function createSubmission(formData) {
  const name = cleanText(formData.get("name"));
  const id = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now().toString(36)}`;
  const skills = formData.get("skills").split(",").map(cleanText).filter(Boolean).slice(0, 8);
  const program = cleanText(formData.get("program"));
  const courseType = inferCourseType(program);
  const baseStudent = {
    id,
    name,
    role: `${courseType} Student`,
    courseType,
    program,
    yearLevel: formData.get("yearLevel"),
    availability: "open",
    skills,
    credentials: parseCredentials(formData.get("credentials"))
  };
  return {
    id,
    name,
    initials: name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase(),
    role: `${courseType} Student`,
    courseType,
    program,
    yearLevel: formData.get("yearLevel"),
    schoolYear: formData.get("schoolYear"),
    gradYearsSince: formData.get("yearLevel") === "Fresh Grad" ? 1 : 0,
    location: "Submitted profile",
    availability: "open",
    availabilityLabel: "Ready for OJT",
    featured: false,
    skills,
    bio: cleanText(formData.get("bio")),
    metrics: [{ value: "Pending", label: "admin review" }, { value: skills.length, label: "submitted skills" }],
    projects: [{ code: "01", category: "Submitted portfolio", title: "Portfolio submission", summary: "Visitor-submitted profile awaiting full admin enrichment.", result: "Needs admin validation" }],
    email: cleanText(formData.get("email")),
    portfolioUrl: cleanText(formData.get("portfolioUrl")),
    linkedInUrl: cleanUrl(formData.get("linkedInUrl")),
    resumeUrl: cleanUrl(formData.get("resumeUrl")),
    credentials: baseStudent.credentials,
    preferredRoles: defaultPreferredRoles(baseStudent, courseType),
    credibilityHighlights: defaultCredibilityHighlights(baseStudent, courseType, skills),
    reviewComments: "",
    status: "pending",
    source: "visitor"
  };
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 2400);
}

function refresh() {
  updateStats();
  renderStudents();
  renderPublicAnalytics();
  renderCms();
}

function initializeMotion() {
  const animated = document.querySelectorAll(".hero-content > *, .stats article, .about-band > *, .section-heading, .analytics-card, .submit-section, .editor-panel, .records-panel");
  animated.forEach((element) => element.classList.add("reveal-on-scroll"));
  if (!("IntersectionObserver" in window)) {
    animated.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -48px 0px" });
  animated.forEach((element) => observer.observe(element));
}

function isAdminRoute() {
  return window.location.hash === "#/admin" || window.location.hash.startsWith("#admin-") || window.location.pathname.replace(/\/$/, "").endsWith("/admin");
}

function renderRoute() {
  const admin = isAdminRoute();
  publicHeader.hidden = admin;
  publicMain.hidden = admin;
  publicFooter.hidden = admin;
  adminView.hidden = !admin;
  if (admin) renderAdminAuth();
}

function renderAdminAuth() {
  loginPanel.hidden = state.adminLoggedIn;
  adminDashboard.hidden = !state.adminLoggedIn;
  if (state.adminLoggedIn) {
    accountCurrentEmail.textContent = state.adminAuth ? state.adminAuth.email : DEFAULT_ADMIN_EMAIL;
    refresh();
  }
}

function showFormMessage(element, message) {
  if (!message) {
    element.hidden = true;
    element.textContent = "";
    return;
  }
  element.textContent = message;
  element.hidden = false;
}

function resetEditor() {
  activeEditorId = "";
  editorTitle.textContent = "Add student profile";
  adminForm.reset();
  adminForm.elements.id.value = "";
  adminForm.elements.availability.value = "open";
  adminForm.elements.schoolYear.value = SCHOOL_YEAR_OPTIONS[0];
  adminForm.elements.featured.value = "false";
}

function populateEditor(id) {
  const student = findEditableStudent(id);
  if (!student) return;
  activeEditorId = id;
  editorTitle.textContent = `Editing ${student.name}`;
  adminForm.elements.id.value = student.id;
  adminForm.elements.name.value = student.name;
  adminForm.elements.email.value = student.email;
  adminForm.elements.program.value = student.program;
  adminForm.elements.courseType.value = student.courseType;
  adminForm.elements.yearLevel.value = student.yearLevel;
  adminForm.elements.schoolYear.value = student.schoolYear;
  adminForm.elements.availability.value = student.availability;
  adminForm.elements.role.value = student.role;
  adminForm.elements.location.value = student.location;
  adminForm.elements.portfolioUrl.value = student.portfolioUrl && !student.portfolioUrl.startsWith("#") ? student.portfolioUrl : "";
  adminForm.elements.linkedInUrl.value = student.linkedInUrl || "";
  adminForm.elements.resumeUrl.value = student.resumeUrl || "";
  adminForm.elements.featured.value = String(Boolean(student.featured));
  adminForm.elements.skills.value = student.skills.join(", ");
  adminForm.elements.credentials.value = credentialsToText(student.credentials || []);
  adminForm.elements.bio.value = student.bio;
  adminForm.elements.reviewComments.value = student.reviewComments || "";
  adminForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function studentFromAdminForm(formData, existing = {}) {
  const name = cleanText(formData.get("name"));
  const skills = formData.get("skills").split(",").map(cleanText).filter(Boolean).slice(0, 8);
  const availability = formData.get("availability");
  const id = existing.id || `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now().toString(36)}`;
  const courseType = normalizeCourseType(formData.get("courseType"));
  const credentials = parseCredentials(formData.get("credentials"));
  const baseStudent = { ...existing, id, name, role: cleanText(formData.get("role")), courseType, program: cleanText(formData.get("program")), yearLevel: formData.get("yearLevel"), availability, skills, credentials };
  return {
    ...existing,
    id,
    name,
    initials: name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase(),
    email: cleanText(formData.get("email")),
    program: cleanText(formData.get("program")),
    courseType,
    yearLevel: formData.get("yearLevel"),
    schoolYear: formData.get("schoolYear"),
    gradYearsSince: formData.get("yearLevel") === "Fresh Grad" ? existing.gradYearsSince || 1 : 0,
    availability,
    availabilityLabel: availabilityLabel(availability),
    role: cleanText(formData.get("role")),
    location: campusForCourse(formData.get("courseType"), formData.get("location")),
    portfolioUrl: cleanText(formData.get("portfolioUrl")) || existing.portfolioUrl || `#${id}`,
    linkedInUrl: cleanUrl(formData.get("linkedInUrl")),
    resumeUrl: cleanUrl(formData.get("resumeUrl")),
    featured: formData.get("featured") === "true",
    skills,
    credentials,
    preferredRoles: existing.preferredRoles || defaultPreferredRoles(baseStudent, courseType),
    credibilityHighlights: existing.credibilityHighlights || defaultCredibilityHighlights(baseStudent, courseType, skills),
    bio: cleanText(formData.get("bio")),
    reviewComments: cleanText(formData.get("reviewComments")),
    metrics: existing.metrics || [{ value: "Reviewed", label: "admin curated" }, { value: skills.length, label: "core skills" }],
    projects: existing.projects || [{ code: "01", category: normalizeCourseType(formData.get("courseType")), title: "Curated portfolio record", summary: "Profile created through the admin CMS prototype.", result: "Ready for review" }],
    status: existing.status || "published",
    source: existing.source || "admin"
  };
}

function saveAdminProfile(formData) {
  const id = formData.get("id");
  const existing = id ? findEditableStudent(id) : null;
  const updated = studentFromAdminForm(formData, existing || {});
  if (!id) {
    updated.status = "published";
    state.submissions.push(updated);
  } else {
    const submittedIndex = state.submissions.findIndex((student) => student.id === id);
    if (submittedIndex >= 0) state.submissions[submittedIndex] = { ...state.submissions[submittedIndex], ...updated };
    else state.edits[id] = updated;
  }
  state.removedIds = state.removedIds.filter((removedId) => removedId !== updated.id);
  saveState();
  resetEditor();
  refresh();
  showToast("Profile saved");
}

function setSubmissionStatus(id, status, comments = "") {
  const student = state.submissions.find((item) => item.id === id);
  if (!student) return;
  student.status = status;
  student.reviewComments = cleanText(comments) || student.reviewComments || "";
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-student-id]");
  if (button) openDetails(button.dataset.studentId);
});

analyticsSection.addEventListener("click", (event) => {
  const featured = event.target.closest("[data-featured-student]");
  const availability = event.target.closest("[data-availability-filter]");
  const course = event.target.closest("[data-course-filter]");
  const year = event.target.closest("[data-year-filter]");
  if (featured) {
    openFeaturedFromAnalytics(featured.dataset.featuredStudent);
    return;
  }
  if (availability) {
    applyAnalyticsShortcut({ availability: availability.dataset.availabilityFilter });
    showToast("Directory filtered by readiness");
    return;
  }
  if (course) {
    applyAnalyticsShortcut({ course: course.dataset.courseFilter });
    showToast("Directory filtered by program");
    return;
  }
  if (year) {
    applyAnalyticsShortcut({ year: year.dataset.yearFilter });
    showToast("Directory filtered by year level");
  }
});

analyticsSection.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-availability-filter]")) {
    event.preventDefault();
    event.target.click();
  }
});

detailPanel.addEventListener("click", async (event) => {
  if (event.target.closest(".close-panel")) closeDetails();
  if (event.target.closest(".share-profile")) {
    const shareData = { title: document.title, text: "Explore this Mapua student portfolio", url: window.location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(window.location.href);
        showToast("Portfolio link copied");
      }
    } catch (error) {
      if (error.name !== "AbortError") showToast("Unable to share this profile");
    }
  }
});

[searchInput, yearFilter, schoolYearFilter, courseFilter, availabilityFilter, sortSelect].forEach((control) => {
  control.addEventListener(control === searchInput ? "input" : "change", renderStudents);
});

publicSchoolYearFilter.addEventListener("change", renderPublicAnalytics);
publicProgramFilter.addEventListener("change", renderPublicAnalytics);
adminSchoolYearFilter.addEventListener("change", renderAdminAnalytics);
adminProgramFilter.addEventListener("change", renderAdminAnalytics);
adminTrajectoryCohort.addEventListener("change", renderAdminAnalytics);

adminTrajectoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-trajectory-view]");
  if (!button) return;
  activeTrajectoryView = button.dataset.trajectoryView;
  renderAdminAnalytics();
});

adminActionPrev.addEventListener("click", () => {
  const pageCount = Math.max(1, Math.ceil(adminInsightItems.length / 3));
  adminInsightPage = (adminInsightPage - 1 + pageCount) % pageCount;
  renderAdminInsights();
});

adminActionNext.addEventListener("click", () => {
  const pageCount = Math.max(1, Math.ceil(adminInsightItems.length / 3));
  adminInsightPage = (adminInsightPage + 1) % pageCount;
  renderAdminInsights();
});

document.querySelector("#clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  yearFilter.value = "all";
  schoolYearFilter.value = "all";
  courseFilter.value = "all";
  availabilityFilter.value = "all";
  sortSelect.value = "featured";
  renderStudents();
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.submissions.push(createSubmission(new FormData(profileForm)));
  saveState();
  profileForm.reset();
  showToast("Submitted for admin approval");
  refresh();
});

adminView.addEventListener("click", (event) => {
  const approveId = event.target.dataset.approve;
  const returnId = event.target.dataset.return;
  const removeId = event.target.dataset.remove;
  const deleteId = event.target.dataset.delete;
  const restoreId = event.target.dataset.restore;
  const editId = event.target.dataset.edit;
  const toggleList = event.target.dataset.toggleList;
  let changed = false;
  if (toggleList) {
    adminListExpanded[toggleList] = !adminListExpanded[toggleList];
    renderCms();
    return;
  }
  if (approveId) {
    setSubmissionStatus(approveId, "published");
    state.removedIds = state.removedIds.filter((id) => id !== approveId);
    changed = true;
    showToast("Profile approved and published");
  }
  if (returnId) {
    const comments = window.prompt("Return comments for the student:", "Please revise your portfolio details and resubmit for approval.");
    if (comments !== null) {
      setSubmissionStatus(returnId, "returned", comments);
      changed = true;
      showToast("Submission returned with comments");
    }
  }
  if (removeId) {
    if (!state.removedIds.includes(removeId)) state.removedIds.push(removeId);
    setSubmissionStatus(removeId, "removed");
    changed = true;
    showToast("Profile archived or disapproved");
  }
  if (restoreId) {
    state.removedIds = state.removedIds.filter((id) => id !== restoreId);
    const student = state.submissions.find((item) => item.id === restoreId);
    if (student) student.status = "published";
    changed = true;
    showToast("Profile restored");
  }
  if (editId) {
    populateEditor(editId);
  }
  if (deleteId) {
    const submittedIndex = state.submissions.findIndex((student) => student.id === deleteId);
    if (submittedIndex >= 0) state.submissions.splice(submittedIndex, 1);
    if (!state.removedIds.includes(deleteId)) state.removedIds.push(deleteId);
    delete state.edits[deleteId];
    if (activeEditorId === deleteId) resetEditor();
    changed = true;
    showToast("Profile deleted from CMS state");
  }
  if (!changed) return;
  saveState();
  refresh();
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  showFormMessage(loginError, "");
  const formData = new FormData(loginForm);
  const email = cleanText(formData.get("email")).toLowerCase();
  const password = formData.get("password");
  await ensureAdminAuth();
  const enteredHash = await sha256Hex(password);
  const validEmail = state.adminAuth.email.toLowerCase() === email;
  const validPassword = state.adminAuth.passwordHash === enteredHash;
  if (!validEmail || !validPassword) {
    showFormMessage(loginError, "Incorrect email or password. Check ADMIN-HANDOFF.md if you need to recover access.");
    return;
  }
  state.adminLoggedIn = true;
  saveState();
  loginForm.reset();
  renderAdminAuth();
  showToast("Admin session started");
});

document.querySelector("#admin-logout").addEventListener("click", () => {
  state.adminLoggedIn = false;
  saveState();
  renderAdminAuth();
});

accountForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  showFormMessage(accountError, "");
  showFormMessage(accountSuccess, "");
  const formData = new FormData(accountForm);
  const currentPassword = formData.get("currentPassword");
  const newEmail = cleanText(formData.get("newEmail"));
  const newPassword = formData.get("newPassword");
  const confirmPassword = formData.get("confirmPassword");

  const currentHash = await sha256Hex(currentPassword);
  if (currentHash !== state.adminAuth.passwordHash) {
    showFormMessage(accountError, "Current password is incorrect.");
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(newEmail)) {
    showFormMessage(accountError, "Enter a valid email address.");
    return;
  }
  if (newPassword.length < 10) {
    showFormMessage(accountError, "New password must be at least 10 characters.");
    return;
  }
  if (newPassword !== confirmPassword) {
    showFormMessage(accountError, "New password and confirmation do not match.");
    return;
  }

  state.adminAuth = { email: newEmail, passwordHash: await sha256Hex(newPassword) };
  saveState();
  accountForm.reset();
  accountCurrentEmail.textContent = newEmail;
  showFormMessage(accountSuccess, "Credentials updated. Share the new email and password with the next coordinator securely.");
  showToast("Admin credentials updated");
});

adminForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveAdminProfile(new FormData(adminForm));
});

document.querySelector("#editor-reset").addEventListener("click", resetEditor);

Object.entries(adminListControls).forEach(([type, control]) => {
  control.search.addEventListener("input", () => {
    adminListExpanded[type] = false;
    renderCms();
  });
  control.filter.addEventListener("change", () => {
    adminListExpanded[type] = false;
    renderCms();
  });
  control.schoolYear.addEventListener("change", () => {
    adminListExpanded[type] = false;
    renderCms();
  });
});

detailBackdrop.addEventListener("click", closeDetails);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetails();
});
window.addEventListener("hashchange", renderRoute);

initializeFilters();
resetEditor();
refresh();
renderRoute();
ensureAdminAuth().then(renderAdminAuth);
initializeMotion();
