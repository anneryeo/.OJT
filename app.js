const icon = (name) => `<svg aria-hidden="true"><use href="#icon-${name}"></use></svg>`;

const STORAGE_KEY = "mapuaPortfolioRegistry";

const studentSeeds = [
  ["ana-reyes", "Ana Sofia Reyes", "AS", "Data Analyst Intern", "Data Science", "BS Data Science", "3rd Year", "Makati", "open", true, ["Python", "SQL", "Power BI", "Statistics"], "Built a dashboard that reduced manual reporting time for a campus organization.", "Enrollment Insights", "Cleaned and visualized enrollment trend data.", "42% faster reporting"],
  ["marco-santos", "Marco Santos", "MS", "Backend Developer", "Computer Science", "BS Computer Science", "4th Year", "Intramuros", "selective", true, ["Node.js", "PostgreSQL", "APIs", "Docker"], "Focuses on reliable backend systems for student-facing tools.", "Queue API", "Designed a service for laboratory reservation queues.", "1.8s average response"],
  ["julia-lim", "Julia Lim", "JL", "UX Researcher", "Media and Design", "BS Multimedia Arts", "2nd Year", "Makati", "open", false, ["UX Research", "Figma", "Interviews", "Prototyping"], "Connects user research with clean interfaces for academic services.", "Advising Redesign", "Mapped the consultation flow for academic advising.", "31 student interviews"],
  ["paolo-cruz", "Paolo Cruz", "PC", "Cybersecurity Trainee", "Information Technology", "BS Information Technology", "3rd Year", "Intramuros", "open", true, ["Network Security", "Linux", "Python", "Risk Assessment"], "Interested in practical security hardening for small organizations.", "Lab Audit Kit", "Created a checklist for computer laboratory security reviews.", "18 risks classified"],
  ["mika-tan", "Mika Tan", "MT", "Frontend Developer", "Information Systems", "BS Information Systems", "2nd Year", "Makati", "open", false, ["React", "CSS", "Accessibility", "Testing"], "Builds accessible dashboards and workflow tools.", "Scholarship Tracker", "Prototype for tracking scholarship requirements.", "94 accessibility score"],
  ["gabriel-dizon", "Gabriel Dizon", "GD", "Machine Learning Student", "Data Science", "BS Data Science", "4th Year", "Intramuros", "selective", true, ["Machine Learning", "Pandas", "Scikit-learn", "Model Evaluation"], "Works on explainable models for student support use cases.", "Retention Signals", "Explored early indicators of academic risk.", "0.81 F1 score"],
  ["tricia-ong", "Tricia Ong", "TO", "Product Designer", "Media and Design", "BS Multimedia Arts", "3rd Year", "Makati", "open", false, ["Design Systems", "Figma", "Branding", "Usability"], "Designs polished, consistent interfaces for student communities.", "Org Brand Kit", "Created a reusable identity system for a student group.", "22 templates shipped"],
  ["nathan-yu", "Nathan Yu", "NY", "Software Engineer Intern", "Computer Science", "BS Computer Science", "Fresh Grad", "Intramuros", "open", true, ["Java", "Spring Boot", "MySQL", "Git"], "Fresh graduate focused on maintainable enterprise applications.", "Clinic Records", "Built a CRUD prototype for clinic appointment records.", "6 core modules"],
  ["bea-mendoza", "Bea Mendoza", "BM", "Business Systems Analyst", "Information Systems", "BS Information Systems", "4th Year", "Makati", "selective", false, ["Process Mapping", "SQL", "UML", "Documentation"], "Turns operational problems into clear system requirements.", "Inventory Flow", "Documented current and target inventory processes.", "14 workflows mapped"],
  ["enzo-ramos", "Enzo Ramos", "ER", "Cloud Support Trainee", "Tech Courses", "BS Computer Engineering", "3rd Year", "Intramuros", "open", false, ["AWS", "Linux", "Networking", "Scripting"], "Explores cloud infrastructure for reliable student applications.", "Deploy Playbook", "Wrote a static-site deployment guide for student teams.", "5 environments tested"],
  ["karen-villanueva", "Karen Villanueva", "KV", "Data Visualization Designer", "Data Science", "BS Data Science", "2nd Year", "Makati", "open", false, ["Tableau", "Storytelling", "R", "Data Cleaning"], "Uses visualization to make academic and community data understandable.", "Commute Dashboard", "Visualized student commute patterns and constraints.", "280 responses analyzed"],
  ["luis-bautista", "Luis Bautista", "LB", "Game Developer", "Tech Courses", "BS Entertainment and Multimedia Computing", "3rd Year", "Makati", "selective", true, ["Unity", "C#", "Game Design", "3D Assets"], "Creates interactive learning prototypes and game systems.", "Physics Quest", "Built a level-based learning game for physics review.", "12 playable levels"],
  ["isabel-garcia", "Isabel Garcia", "IG", "Mobile Developer", "Information Technology", "BS Information Technology", "4th Year", "Intramuros", "open", true, ["Flutter", "Firebase", "UI", "Testing"], "Builds mobile-first tools for student services.", "Cardinal Tasks", "Task tracker for OJT requirements and reminders.", "96 beta users"],
  ["rafael-co", "Rafael Co", "RC", "Database Developer", "Computer Science", "BS Computer Science", "2nd Year", "Intramuros", "open", false, ["PostgreSQL", "ERD", "Normalization", "SQL"], "Enjoys schema design, query tuning, and data integrity.", "Library Schema", "Normalized a borrowing and reservation database model.", "11 tables designed"],
  ["mae-fernandez", "Mae Fernandez", "MF", "Content Designer", "Media and Design", "BA Digital Film", "1st Year", "Makati", "unavailable", false, ["Writing", "Video Editing", "Storyboards", "Brand Voice"], "Builds stories that make technical work easier to understand.", "Student Reel", "Produced a short feature on student makers.", "7 interviews filmed"],
  ["daryl-aquino", "Daryl Aquino", "DA", "QA Tester", "Information Technology", "BS Information Technology", "2nd Year", "Intramuros", "open", false, ["Manual QA", "Test Cases", "Bug Reports", "Cypress"], "Documents defects clearly and validates user-facing workflows.", "Portal QA Pack", "Created regression tests for a mock enrollment portal.", "64 test cases"],
  ["nicole-chua", "Nicole Chua", "NC", "AI Prototype Builder", "Data Science", "BS Data Science", "3rd Year", "Makati", "selective", true, ["NLP", "Prompting", "Python", "Evaluation"], "Experiments with AI-assisted academic support prototypes.", "FAQ Assistant", "Designed and evaluated a campus information chatbot.", "88% answer accuracy"],
  ["samuel-lee", "Samuel Lee", "SL", "Full-stack Developer", "Computer Science", "BS Computer Science", "4th Year", "Intramuros", "open", true, ["TypeScript", "React", "Node.js", "MongoDB"], "Builds complete prototypes from data model to interface.", "Capstone Hub", "Portfolio and milestone tracker for capstone teams.", "9 teams onboarded"],
  ["angelica-torres", "Angelica Torres", "AT", "Interaction Designer", "Media and Design", "BS Multimedia Arts", "4th Year", "Makati", "open", false, ["Interaction Design", "Motion", "Figma", "Usability"], "Designs clear interaction flows for dense information products.", "Museum Guide", "Prototype for a self-guided exhibit companion.", "4.6 usability rating"],
  ["kevin-sy", "Kevin Sy", "KS", "IT Support Analyst", "Information Technology", "BS Information Technology", "1st Year", "Intramuros", "unavailable", false, ["Troubleshooting", "Networking", "Helpdesk", "Hardware"], "Learning support operations through practical ticket handling.", "Ticket Taxonomy", "Categorized common student IT support issues.", "38 issue types"],
  ["ella-morales", "Ella Morales", "EM", "Systems Analyst", "Information Systems", "BS Information Systems", "3rd Year", "Makati", "open", false, ["Requirements", "BPMN", "SQL", "Stakeholder Interviews"], "Clarifies messy workflows and writes implementation-ready specs.", "Clinic Intake", "Analyzed patient intake and notification requirements.", "17 requirements drafted"],
  ["joshua-ang", "Joshua Ang", "JA", "Robotics Programmer", "Tech Courses", "BS Robotics Engineering", "2nd Year", "Intramuros", "selective", false, ["Arduino", "Python", "Sensors", "Control Systems"], "Builds hardware prototypes with practical automation goals.", "Line Bot", "Programmed a line-following robot for lab demonstration.", "93% path completion"],
  ["sofia-del-rosario", "Sofia Del Rosario", "SD", "Marketing Analytics Student", "Data Science", "BS Data Science", "1st Year", "Makati", "unavailable", false, ["Excel", "Python", "Dashboards", "Survey Analysis"], "Explores analytics for communications and student engagement.", "Campaign Review", "Measured engagement from student campaign posts.", "3 channels compared"],
  ["miguel-velasco", "Miguel Velasco", "MV", "DevOps Learner", "Computer Science", "BS Computer Science", "3rd Year", "Intramuros", "open", false, ["CI/CD", "GitHub Actions", "Linux", "Docker"], "Improves development workflows through automation and documentation.", "Build Pipeline", "Configured automated checks for a student web app.", "7 checks automated"],
  ["camille-go", "Camille Go", "CG", "Information Architect", "Information Systems", "BS Information Systems", "2nd Year", "Makati", "open", false, ["Taxonomy", "Wireframes", "Research", "Notion"], "Organizes complex content into navigable digital services.", "Knowledge Base", "Structured a help center for freshmen FAQs.", "52 articles grouped"],
  ["andrei-lopez", "Andrei Lopez", "AL", "Computer Vision Student", "Data Science", "BS Data Science", "4th Year", "Intramuros", "selective", true, ["OpenCV", "Python", "Model Training", "Evaluation"], "Works on visual inspection and image processing prototypes.", "Lab Counter", "Detected equipment occupancy from sample lab images.", "86% detection rate"],
  ["princess-castro", "Princess Castro", "PC", "Graphic Designer", "Media and Design", "BS Multimedia Arts", "3rd Year", "Makati", "open", false, ["Layout", "Illustration", "Branding", "Adobe CC"], "Creates visual systems for campus events and student initiatives.", "Cardinal Posters", "Designed a modular poster kit for event promotions.", "30 assets delivered"],
  ["harvey-manalo", "Harvey Manalo", "HM", "Network Trainee", "Information Technology", "BS Information Technology", "4th Year", "Intramuros", "open", false, ["Cisco", "Subnetting", "Security", "Documentation"], "Documents and validates practical network configurations.", "Campus VLAN Lab", "Simulated segmented lab network configurations.", "4 VLANs validated"],
  ["ria-domingo", "Ria Domingo", "RD", "Analytics Engineer", "Data Science", "BS Data Science", "Fresh Grad", "Makati", "open", true, ["dbt", "SQL", "Python", "Data Modeling"], "Fresh graduate building dependable analytics datasets.", "Student Mart", "Modeled student activity tables for reporting.", "12 marts documented"],
  ["sean-padilla", "Sean Padilla", "SP", "AR Designer", "Media and Design", "BS Entertainment and Multimedia Computing", "2nd Year", "Makati", "selective", false, ["AR", "Unity", "3D", "UX"], "Combines spatial design and technical prototyping.", "AR Campus Map", "Prototype for location-based campus navigation.", "8 landmarks modeled"],
  ["lance-mercado", "Lance Mercado", "LM", "ERP Analyst Intern", "Information Systems", "BS Information Systems", "Fresh Grad", "Makati", "open", false, ["ERP", "Data Migration", "Excel", "User Training"], "Fresh graduate interested in enterprise workflows and training.", "Migration Checklist", "Prepared migration QA steps for mock student records.", "41 checks listed"],
  ["charmaine-nolasco", "Charmaine Nolasco", "CN", "Technical Writer", "Tech Courses", "BS Computer Engineering", "1st Year", "Intramuros", "unavailable", false, ["Documentation", "Diagrams", "Hardware", "Research"], "Explains technical systems through concise guides and diagrams.", "Sensor Guide", "Documented setup instructions for sensor lab kits.", "10 guides drafted"]
];

const seedStudents = studentSeeds.map((item) => ({
  id: item[0],
  name: item[1],
  initials: item[2],
  role: item[3],
  courseType: item[4],
  program: item[5],
  yearLevel: item[6],
  gradYearsSince: item[6] === "Fresh Grad" ? 1 : 0,
  location: item[7],
  availability: item[8],
  availabilityLabel: item[8] === "open" ? "Open to OJT" : item[8] === "selective" ? "Selective opportunities" : "Not currently available",
  featured: item[9],
  skills: item[10],
  bio: item[11],
  metrics: [{ value: item[14], label: "project result" }, { value: item[10].length, label: "core skills" }],
  projects: [{ code: "01", category: item[4], title: item[12], summary: item[13], result: item[14] }],
  email: `${item[0]}@mymail.mapua.edu.ph`,
  portfolioUrl: `#${item[0]}`,
  status: "published",
  source: "seed"
}));

const state = loadState();
const grid = document.querySelector("#student-grid");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const yearFilter = document.querySelector("#year-filter");
const courseFilter = document.querySelector("#course-filter");
const availabilityFilter = document.querySelector("#availability-filter");
const sortSelect = document.querySelector("#sort-select");
const detailPanel = document.querySelector("#detail-panel");
const detailBackdrop = document.querySelector("#detail-backdrop");
const toast = document.querySelector("#toast");
const profileForm = document.querySelector("#profile-form");
const pendingList = document.querySelector("#pending-list");
const publishedList = document.querySelector("#published-list");

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed && Array.isArray(parsed.submissions) && Array.isArray(parsed.removedIds)) return parsed;
  } catch (error) {
    console.warn("Unable to load CMS state", error);
  }
  return { submissions: [], removedIds: [] };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function allStudents() {
  const approved = state.submissions.filter((student) => student.status === "published");
  return [...seedStudents, ...approved].filter((student) => !state.removedIds.includes(student.id));
}

function pendingStudents() {
  return state.submissions.filter((student) => student.status === "pending" && !state.removedIds.includes(student.id));
}

function initializeFilters() {
  ["1st Year", "2nd Year", "3rd Year", "4th Year", "Fresh Grad"].forEach((year) => yearFilter.add(new Option(year, year)));
  [...new Set(seedStudents.map((student) => student.courseType))].sort().forEach((course) => courseFilter.add(new Option(course, course)));
}

function updateStats() {
  const students = allStudents();
  const courses = new Set(students.map((student) => student.courseType));
  document.querySelector("#stat-students").textContent = String(students.length).padStart(2, "0");
  document.querySelector("#stat-pending").textContent = String(pendingStudents().length).padStart(2, "0");
  document.querySelector("#stat-projects").textContent = String(students.reduce((total, student) => total + student.projects.length, 0)).padStart(2, "0");
  document.querySelector("#stat-courses").textContent = String(courses.size).padStart(2, "0");
}

function studentCard(student, index) {
  const freshGrad = student.yearLevel === "Fresh Grad" ? `Fresh Grad / ${student.gradYearsSince || 1} year since graduation` : student.yearLevel;
  return `
    <article class="student-card" style="--delay:${Math.min(index, 12) * 30}ms">
      <button class="card-open" type="button" data-student-id="${student.id}" aria-label="View ${student.name}'s portfolio">
        <div class="portrait">
          <span class="portrait-initials">${student.initials}</span>
          ${student.featured ? `<span class="featured-label">${icon("check")} Featured</span>` : ""}
        </div>
        <div class="card-body">
          <span class="card-kicker">${freshGrad} / ${student.courseType}</span>
          <div class="card-title">
            <h3>${student.name}</h3>
            <span class="arrow-button">${icon("arrow-up-right")}</span>
          </div>
          <p class="student-role">${student.role} / ${student.program}</p>
          <div class="tag-list">${student.skills.slice(0, 4).map((skill) => `<span>${skill}</span>`).join("")}</div>
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
  const course = courseFilter.value;
  const availability = availabilityFilter.value;
  const sort = sortSelect.value;
  const filtered = allStudents()
    .filter((student) => year === "all" || student.yearLevel === year)
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
        <button class="icon-button share-profile" type="button" aria-label="Share ${student.name}'s profile">${icon("share")}</button>
      </div>
      <div class="panel-meta">
        <span>${icon("location")} ${student.location}</span>
        <span>${student.availabilityLabel}</span>
      </div>
      <section class="about-student"><span class="detail-label">About</span><p>${student.bio}</p></section>
      <section><span class="detail-label">Capabilities</span><div class="panel-skills">${student.skills.map((skill) => `<span>${skill}</span>`).join("")}</div></section>
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
  pendingList.innerHTML = pending.length
    ? pending.map((student) => cmsItem(student, "pending")).join("")
    : `<p class="cms-empty">No pending submissions.</p>`;

  const cmsPublished = allStudents();
  publishedList.innerHTML = cmsPublished.length
    ? cmsPublished.map((student) => cmsItem(student, "published")).join("")
    : `<p class="cms-empty">No published profiles are currently visible.</p>`;
}

function cmsItem(student, mode) {
  const approve = mode === "pending" ? `<button class="cms-button" type="button" data-approve="${student.id}">Approve</button>` : "";
  return `
    <div class="cms-item">
      <h4>${student.name}</h4>
      <p>${student.program} / ${student.yearLevel} / ${student.courseType}<br>${student.email}</p>
      <div class="cms-actions">
        ${approve}
        <button class="cms-button secondary" type="button" data-remove="${student.id}">Remove</button>
      </div>
    </div>`;
}

function createSubmission(formData) {
  const name = formData.get("name").trim();
  const id = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now().toString(36)}`;
  const skills = formData.get("skills").split(",").map((skill) => skill.trim()).filter(Boolean).slice(0, 8);
  return {
    id,
    name,
    initials: name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase(),
    role: `${formData.get("courseType")} Student`,
    courseType: formData.get("courseType"),
    program: formData.get("program").trim(),
    yearLevel: formData.get("yearLevel"),
    gradYearsSince: formData.get("yearLevel") === "Fresh Grad" ? 1 : 0,
    location: "Submitted profile",
    availability: "open",
    availabilityLabel: "Open to OJT",
    featured: false,
    skills,
    bio: formData.get("bio").trim(),
    metrics: [{ value: "Pending", label: "admin review" }, { value: skills.length, label: "submitted skills" }],
    projects: [{ code: "01", category: "Submitted portfolio", title: "Portfolio submission", summary: "Visitor-submitted profile awaiting full admin enrichment.", result: "Needs admin validation" }],
    email: formData.get("email").trim(),
    portfolioUrl: formData.get("portfolioUrl").trim(),
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
  renderCms();
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-student-id]");
  if (button) openDetails(button.dataset.studentId);
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

[searchInput, yearFilter, courseFilter, availabilityFilter, sortSelect].forEach((control) => {
  control.addEventListener(control === searchInput ? "input" : "change", renderStudents);
});

document.querySelector("#clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  yearFilter.value = "all";
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

document.querySelector("#cms").addEventListener("click", (event) => {
  const approveId = event.target.dataset.approve;
  const removeId = event.target.dataset.remove;
  if (approveId) {
    const student = state.submissions.find((item) => item.id === approveId);
    if (student) student.status = "published";
    showToast("Profile approved and published");
  }
  if (removeId) {
    if (!state.removedIds.includes(removeId)) state.removedIds.push(removeId);
    showToast("Profile removed from website");
  }
  saveState();
  refresh();
});

detailBackdrop.addEventListener("click", closeDetails);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetails();
});

initializeFilters();
refresh();
