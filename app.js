const icon = (name) => `<svg aria-hidden="true"><use href="#icon-${name}"></use></svg>`;

const students = [
  {
    id: "maya-chen",
    name: "Maya Chen",
    initials: "MC",
    accent: "#ff5c35",
    accentSoft: "#ffd9c9",
    role: "Brand & Product Designer",
    discipline: "Design",
    program: "BFA Communication Design",
    graduationYear: 2026,
    location: "Brooklyn, NY",
    availability: "open",
    availabilityLabel: "Open to work",
    featured: true,
    bio: "Maya builds expressive brand systems and useful digital products. Her practice blends editorial restraint with playful interaction to make complex ideas feel immediate.",
    skills: ["Brand systems", "Product design", "Art direction", "Figma"],
    metrics: [{ value: "3×", label: "design awards" }, { value: "92%", label: "test completion" }],
    projects: [
      { code: "01", category: "Identity system", title: "Common Ground", summary: "A flexible identity for a city-wide network of community gardens.", result: "+41% event signups" },
      { code: "02", category: "Digital product", title: "Tempo Health", summary: "A calmer care-planning experience for people managing chronic conditions.", result: "92% task completion" }
    ],
    email: "maya.chen@example.com",
    portfolioUrl: "#maya-chen"
  },
  {
    id: "eli-navarro",
    name: "Eli Navarro",
    initials: "EN",
    accent: "#2057f5",
    accentSoft: "#c9d8ff",
    role: "Creative Developer",
    discipline: "Technology",
    program: "BS Creative Computing",
    graduationYear: 2026,
    location: "Austin, TX",
    availability: "selective",
    availabilityLabel: "Selective opportunities",
    featured: true,
    bio: "Eli creates interactive systems where engineering and storytelling meet. He focuses on accessible creative tools, generative interfaces, and thoughtful technical prototypes.",
    skills: ["JavaScript", "Creative coding", "WebGL", "Accessibility"],
    metrics: [{ value: "98", label: "Lighthouse score" }, { value: "12k", label: "monthly users" }],
    projects: [
      { code: "01", category: "Creative tool", title: "Signal Garden", summary: "A browser-based sound visualizer built for live performers.", result: "12k monthly users" },
      { code: "02", category: "Civic technology", title: "Clear Ballot", summary: "An accessible explainer for first-time local election voters.", result: "98 accessibility score" }
    ],
    email: "eli.navarro@example.com",
    portfolioUrl: "#eli-navarro"
  },
  {
    id: "amara-okafor",
    name: "Amara Okafor",
    initials: "AO",
    accent: "#15996b",
    accentSoft: "#bcebd8",
    role: "Documentary Storyteller",
    discipline: "Media",
    program: "BA Film & Visual Media",
    graduationYear: 2025,
    location: "Chicago, IL",
    availability: "open",
    availabilityLabel: "Open to work",
    featured: false,
    bio: "Amara tells intimate, research-led stories about place and belonging. Her work spans short documentary, editorial photography, and community-led oral histories.",
    skills: ["Documentary", "Photography", "Editing", "Field research"],
    metrics: [{ value: "4", label: "festival selections" }, { value: "38", label: "stories archived" }],
    projects: [
      { code: "01", category: "Short documentary", title: "After the Last Train", summary: "A portrait of the night workers who keep Chicago moving.", result: "4 festival selections" },
      { code: "02", category: "Oral history", title: "Block by Block", summary: "A living archive made with residents of Bronzeville.", result: "38 stories archived" }
    ],
    email: "amara.okafor@example.com",
    portfolioUrl: "#amara-okafor"
  },
  {
    id: "noah-williams",
    name: "Noah Williams",
    initials: "NW",
    accent: "#e4b000",
    accentSoft: "#fff0a6",
    role: "Service & Systems Designer",
    discipline: "Design",
    program: "MDes Social Innovation",
    graduationYear: 2026,
    location: "Providence, RI",
    availability: "open",
    availabilityLabel: "Open to work",
    featured: false,
    bio: "Noah maps complex services and turns research into practical interventions. His collaborative practice centers equitable public systems and measurable change.",
    skills: ["Service design", "Research", "Facilitation", "Systems mapping"],
    metrics: [{ value: "27%", label: "wait time reduced" }, { value: "120", label: "people interviewed" }],
    projects: [
      { code: "01", category: "Public service", title: "First Stop", summary: "A redesigned intake journey for a regional housing nonprofit.", result: "27% less wait time" },
      { code: "02", category: "Systems research", title: "Care Atlas", summary: "A shared map of informal childcare resources and needs.", result: "120 interviews" }
    ],
    email: "noah.williams@example.com",
    portfolioUrl: "#noah-williams"
  }
];

const grid = document.querySelector("#student-grid");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const disciplineFilter = document.querySelector("#discipline-filter");
const availabilityFilter = document.querySelector("#availability-filter");
const sortSelect = document.querySelector("#sort-select");
const detailPanel = document.querySelector("#detail-panel");
const detailBackdrop = document.querySelector("#detail-backdrop");
const toast = document.querySelector("#toast");

function initializeStats() {
  const disciplines = new Set(students.map((student) => student.discipline));
  document.querySelector("#stat-students").textContent = String(students.length).padStart(2, "0");
  document.querySelector("#stat-projects").textContent = String(students.reduce((total, student) => total + student.projects.length, 0)).padStart(2, "0");
  document.querySelector("#stat-available").textContent = String(students.filter((student) => student.availability === "open").length).padStart(2, "0");
  document.querySelector("#stat-disciplines").textContent = String(disciplines.size).padStart(2, "0");
  [...disciplines].sort().forEach((discipline) => disciplineFilter.add(new Option(discipline, discipline)));
}

function studentCard(student, index) {
  return `
    <article class="student-card" style="--accent:${student.accent}; --accent-soft:${student.accentSoft}; --delay:${index * 70}ms">
      <button class="card-open" type="button" data-student-id="${student.id}" aria-label="View ${student.name}'s portfolio">
        <div class="portrait">
          <span class="portrait-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="portrait-initials">${student.initials}</span>
          <span class="portrait-ring"></span>
          ${student.featured ? `<span class="featured-label">${icon("spark")} Featured</span>` : ""}
        </div>
        <div class="card-body">
          <div class="card-title">
            <div><span>${student.discipline} · ${student.graduationYear}</span><h3>${student.name}</h3></div>
            <span class="arrow-button">${icon("arrow-up-right")}</span>
          </div>
          <p class="student-role">${student.role}</p>
          <div class="skill-list">${student.skills.slice(0, 3).map((skill) => `<span>${skill}</span>`).join("")}</div>
          <div class="card-footer">
            <span>${icon("location")} ${student.location}</span>
            <span class="availability"><i></i>${student.availabilityLabel}</span>
          </div>
        </div>
      </button>
    </article>`;
}

function renderStudents() {
  const query = searchInput.value.trim().toLowerCase();
  const discipline = disciplineFilter.value;
  const availability = availabilityFilter.value;
  const sort = sortSelect.value;
  const filtered = students
    .filter((student) => discipline === "all" || student.discipline === discipline)
    .filter((student) => availability === "all" || student.availability === availability)
    .filter((student) => !query || JSON.stringify(student).toLowerCase().includes(query))
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "year") return a.graduationYear - b.graduationYear || a.name.localeCompare(b.name);
      return Number(b.featured) - Number(a.featured);
    });

  grid.innerHTML = filtered.map(studentCard).join("");
  resultCount.textContent = filtered.length;
  emptyState.hidden = filtered.length !== 0;
}

function openDetails(id) {
  const student = students.find((item) => item.id === id);
  if (!student) return;
  detailPanel.style.setProperty("--accent", student.accent);
  detailPanel.style.setProperty("--accent-soft", student.accentSoft);
  detailPanel.innerHTML = `
    <div class="panel-topbar">
      <span>STUDENT PORTFOLIO / ${student.graduationYear}</span>
      <button type="button" class="icon-button close-panel" aria-label="Close portfolio">${icon("close")}</button>
    </div>
    <div class="panel-hero">
      <div class="panel-monogram">${student.initials}<span></span></div>
      <div class="panel-identity"><span>${student.discipline} · ${student.program}</span><h2>${student.name}</h2><p>${student.role}</p></div>
    </div>
    <div class="panel-content">
      <div class="panel-actions">
        <a class="primary-action" href="mailto:${student.email}">Start a conversation ${icon("arrow-up-right")}</a>
        <button class="icon-button share-profile" type="button" aria-label="Share ${student.name}'s profile">${icon("share")}</button>
      </div>
      <div class="panel-meta">
        <span>${icon("location")} ${student.location}</span>
        <span class="availability"><i></i>${student.availabilityLabel}</span>
      </div>
      <section class="about-student"><span class="detail-label">ABOUT</span><p>${student.bio}</p></section>
      <section><span class="detail-label">CAPABILITIES</span><div class="panel-skills">${student.skills.map((skill) => `<span>${skill}</span>`).join("")}</div></section>
      <section><span class="detail-label">SELECTED OUTCOMES</span><div class="metric-grid">${student.metrics.map((metric) => `<article><strong>${metric.value}</strong><span>${metric.label}</span></article>`).join("")}</div></section>
      <section><span class="detail-label">FEATURED WORK</span><div class="project-list">${student.projects.map((project) => `
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

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 2400);
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-student-id]");
  if (button) openDetails(button.dataset.studentId);
});

detailPanel.addEventListener("click", async (event) => {
  if (event.target.closest(".close-panel")) closeDetails();
  if (event.target.closest(".share-profile")) {
    const shareData = { title: document.title, text: "Explore this student portfolio", url: window.location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(window.location.href);
        showToast("Portfolio link copied");
      }
    } catch (error) {
      if (error.name !== "AbortError") showToast("Unable to share this portfolio");
    }
  }
});

[searchInput, disciplineFilter, availabilityFilter, sortSelect].forEach((control) => {
  control.addEventListener(control === searchInput ? "input" : "change", renderStudents);
});

document.querySelector("#clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  disciplineFilter.value = "all";
  availabilityFilter.value = "all";
  sortSelect.value = "featured";
  renderStudents();
});

detailBackdrop.addEventListener("click", closeDetails);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetails();
});

initializeStats();
renderStudents();
