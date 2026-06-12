# Student Portfolio Directory - Product Requirements

## Product Summary

Create a polished public dashboard that helps visitors discover and evaluate student portfolios. The first release uses local placeholder data but must be structured so a future administrator, CMS, or API can replace it without redesigning the interface.

## Product Goals

- Present student work as credible, outcome-focused portfolios rather than generic profile cards.
- Help public visitors quickly find students by discipline, skill, availability, or graduation year.
- Give each student enough context to support internship, employment, and collaboration decisions.
- Keep content and presentation separated for a low-friction client/admin handoff.
- Work well on desktop and mobile without requiring authentication.

## Primary Users

- **Public visitor:** Recruiter, partner, mentor, or prospective student browsing portfolios.
- **Student:** Wants their work, capabilities, and availability represented accurately.
- **Administrator:** Maintains profiles, visibility, portfolio links, and summary metrics.

## Core Experience

### Directory Dashboard

- Show an overview of the active student cohort.
- Display summary metrics for published portfolios, featured projects, open-to-work students, and disciplines.
- Allow text search across names, roles, skills, projects, and locations.
- Filter by discipline and availability.
- Sort by featured status, name, or graduation year.
- Select a student card to open a detailed portfolio panel.

### Student Portfolio

- Show name, role, program, graduation year, location, availability, and biography.
- Show skills and two outcome-focused performance indicators.
- Show selected project work with category, title, summary, and measurable result.
- Provide clear portfolio and contact actions.

## Content Model

The prototype stores students in a single `students` array in `app.js`. Each student has:

- Identity: `id`, `name`, `initials`, `accent`
- Academic details: `program`, `graduationYear`
- Professional details: `role`, `discipline`, `location`, `availability`
- Profile content: `bio`, `skills`, `featured`, `portfolioUrl`, `email`
- Evidence: `metrics[]`, `projects[]`

This schema should map directly to a future CMS collection or API response. Rendering code must not depend on student-specific markup.

## Brand Direction

- Editorial, confident, and portfolio-first.
- Warm paper background, dark ink typography, and bright student-specific accent colors.
- Consistent iconography using inline SVG; never use emojis as icons.
- Motion should support orientation and selection, not decorate every interaction.

## Functional Requirements

- At least three students with meaningfully different disciplines and portfolio evidence.
- Search, filter, and sort update results without a page reload.
- Result count and empty state reflect current filters.
- Student details open from each card and can be dismissed with close button, backdrop, or Escape.
- Share action uses the Web Share API when available and clipboard fallback otherwise.
- All controls are keyboard accessible with visible focus states.

## Non-Functional Requirements

- No runtime dependencies in the prototype.
- Responsive from 360px mobile widths through large desktop screens.
- Use semantic landmarks, accessible labels, and adequate color contrast.
- Keep data, rendering, and styles separated to support future maintenance.
- Public deployment must work from any static file host.

## Future Admin Handoff

The next implementation phase should replace the local array with a CMS or API while retaining the same content model. Recommended admin capabilities:

- Draft/publish status and profile preview.
- Student-managed content with administrator approval.
- Featured profile and project ordering.
- Portfolio link validation and missing-content alerts.
- Privacy controls for contact details and public visibility.
- Basic analytics for profile and portfolio-link views.

## Acceptance Criteria

- Dashboard displays at least three distinct student portfolios.
- Search, discipline filter, availability filter, and sorting work together.
- Selecting any student opens the correct detailed portfolio content.
- Layout remains usable on desktop and mobile.
- Content can be changed by editing only the structured student data.
- Product documentation exists at `.local/docs/PRD.md`.
