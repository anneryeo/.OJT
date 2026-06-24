# Mapua Student Portfolio Registry

A dependency-free OJT prototype for discovering, reviewing, and analyzing Mapua student portfolio profiles.

The project is a static HTML/CSS/JavaScript prototype. It models the full workflow of a student portfolio registry: public discovery, visitor submission, admin review, profile moderation, dashboard analytics, and iterative updates through browser-local persistence.

## Run locally

Open `index.html` directly, or serve the directory with any static file server.

```powershell
npx serve .
```

Admin prototype route:

```text
index.html#/admin
```

If hosted with a rewrite to `index.html`, `/admin` also renders the admin workspace.

## Project objectives and how this prototype addresses them

### 1. Data structuring

The prototype uses structured JavaScript records to simulate the data model that would later move into a database.

Core profile fields include:

- Identity: `id`, `name`, `initials`, `email`
- Academic context: `program`, `courseType`, `yearLevel`, `schoolYear`
- Career context: `role`, `availability`, `availabilityLabel`, `location`
- Portfolio evidence: `skills`, `bio`, `projects`, `metrics`, `portfolioUrl`
- Moderation state: `status`, `reviewComments`, `featured`, `source`

The main data groups are:

- `seedStudents`: published sample student profiles used for the public directory.
- `defaultPendingSubmissions`: seeded pending/returned demo submissions used to show the admin review queue.
- `state.submissions`: visitor/admin-created records persisted in browser `localStorage`.
- `state.edits`: admin edits to seeded records.
- `state.removedIds`: archived/disapproved record IDs.

The project separates records by workflow state through helper functions:

- `allStudents()`: published public profiles.
- `pendingStudents()`: pending or returned submissions.
- `removedStudents()`: archived or disapproved records.

This keeps the prototype close to a production structure where published, pending, returned, and archived records would be queryable states in a database.

### 2. Dashboard interface

The public dashboard focuses on recruiter-facing and student-facing discovery signals:

- OJT readiness distribution.
- Program concentration.
- Year-level pipeline.
- Featured student project row.
- Public filters for school year and program.

The admin dashboard focuses on operational decisions:

- Review queue status: shows whether records need first review, student revision, publishing, or archiving.
- Program readiness map: shows availability by course/program.
- Skill evidence checks: shows recurring claimed skills that admins should validate against portfolio proof.
- Student trajectory monitor: admin-only CTI dashboard for cohort-level and per-profile readiness.
- Next admin actions: task-style bento cards for concrete follow-up actions.

The admin dashboard is intentionally more detailed than the public dashboard because it supports moderation and quality control, not just browsing.

### 3. Admin moderation

The admin workspace simulates a CMS with a fake login and browser-local state.

Admins can:

- Add a new profile.
- Edit seeded or submitted records.
- Approve pending submissions.
- Return submissions with comments.
- Archive/disapprove records.
- Restore archived records.
- Delete records from CMS state.
- Filter admin lists by course type and school year.

Admin moderation changes persist through `localStorage` under:

```js
mapuaPortfolioRegistry
```

This allows the prototype to demonstrate update behavior without a backend.

### 4. Updates and iteration

The app supports iteration in two ways:

1. User-facing iteration:
   - Students can submit profiles through the public form.
   - Submitted records enter the admin queue.
   - Admins can approve, return with comments, archive, restore, edit, or delete records.

2. Dashboard iteration:
   - Public and admin analytics update after real state changes.
   - Admin graphs no longer rerender on unrelated clicks.
   - School year and program filters let users inspect different cohorts.
   - The admin trajectory monitor can group by school year, year level, program, or review status.

The current prototype uses seeded data plus local edits, but the structure is designed so the same concepts can map to a production database, API, and authenticated CMS later.

## Career Trajectory Index

The Career Trajectory Index, or CTI, is an admin-only prototype metric. It is not an employment outcome claim. It estimates how ready a profile is for recruiter review based on portfolio evidence.

CTI considers:

- Base profile completeness.
- Meaningful biography.
- Number of submitted skills.
- Project evidence.
- Published/admin-reviewed status.
- Availability.
- Featured status.
- Measurable project outcomes.
- Penalties for returned or archived records.

Admins can use CTI to identify:

- Recruiter-ready profiles.
- Profiles that need support.
- Cohort-level trends by school year, year level, program, or review status.
- Individual student records that need stronger evidence before promotion.

## Included prototype data

The app includes seeded published profiles plus demo pending/returned submissions. The seeded records are intentionally varied by:

- School year: `AY 2025 to 2026`, `AY 2026 to 2027`, `AY 2027 to 2028`, `AY 2028 to 2029`
- Course/program category
- Year level
- Availability
- Skills
- Featured status
- Project outcomes

## Related documentation

Defense and product documentation:

- `.local/docs/PRD.md`
- `.local/docs/README.md`
- `.local/docs/DATABASE_SCHEMA.sql`
