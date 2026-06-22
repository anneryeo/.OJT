# Mapua Student Portfolio Registry - Product Requirements

## Product Summary

The Mapua Student Portfolio Registry is a defense-ready OJT prototype for a public student portfolio website. It helps recruiters, faculty, mentors, and industry partners discover Mapua University students by course type, year level, skills, availability, and project evidence.

The prototype is static and dependency-free, but the information architecture is designed for a future database-backed CMS. It includes more than 30 example student profiles, visitor profile submission, a private admin route, administrator approval/edit/return/archive workflows, and documentation for a production database schema.

## Product Goals

- Present Mapua student work in a professional, school-aligned directory.
- Support discovery across Computer Science, Information Technology, Information Systems, Data Science, technology courses, and Media and Design.
- Let students or visitors submit a profile for admin review before publication.
- Give administrators a clear end-to-end moderation workflow: add, edit, save, approve, return with comments, archive/disapprove, restore, delete, and persist changes during the session.
- Provide documentation strong enough for an OJT defense: PRD, user flow, architecture, database schema, run instructions, and presentation points.

## Chapter 3 Alignment

This prototype supports the project document's Chapter 3 framing:

- **Project overview:** a dynamic, interactive Student Portfolio Dashboard that centralizes student achievements, academic standing, and project history.
- **Problem/opportunity:** previous student data and portfolio artifacts were unstructured and fragmented, making holistic review difficult for faculty and administrators.
- **Objectives:** clean and structure student data, model it as a relational database, design an administrator-friendly dashboard, and connect the data model to the frontend for live prototype updates.
- **Significance:** reduce administrative friction, improve visibility into student capabilities, and support institutional partnerships or accreditation presentations.
- **Scope/limitations:** scoped to School of IT portfolio data; real-time syncing with external Mapua systems such as Blackboard is outside this prototype.

## Brand Direction

- Institutional, credible, and academic.
- Red, gold, and white palette inspired by Mapua University and the Mapua Cardinals identity.
- Dense enough for an operations/admin tool but polished enough for public recruitment.
- Messaging should connect the registry to Mapua's technology-driven reputation, student excellence, and industry relevance.

Reference sites used for direction:

- Mapua University official website: https://www.mapua.edu.ph/
- Mapua University public background, motto, colors, and accreditation summary: https://en.wikipedia.org/wiki/Map%C3%BAa_University

## Primary Users

- **Public visitor:** Recruiter, partner, mentor, alumnus, or prospective student browsing student portfolios.
- **Student/profile submitter:** Wants their profile and work reviewed for public publication.
- **Administrator:** Approves submissions, publishes profiles, removes outdated records, and maintains data quality.
- **OJT evaluator:** Reviews the prototype for completeness, defense readiness, and production path.

## Core Experience

### Public Directory

- Display 30+ published student profiles.
- Search across names, programs, course types, skills, bio text, and project evidence.
- Filter by year level: 1st Year, 2nd Year, 3rd Year, 4th Year, Fresh Grad.
- Show Fresh Grad records with years since graduation.
- Filter by course type: Computer Science, Information Technology, Information Systems, Data Science, Tech Courses, Media and Design.
- Filter by availability: Open to OJT, Selective, Not available.
- Sort by featured status, name, or year level.
- Open a detailed profile panel for each student.

### Student Profile

- Show name, initials, role, program, course type, year level, location, availability, biography, skills, metrics, and project evidence.
- Provide email contact and share actions.
- Keep rendering generic so every profile uses the same structured data model.

### Visitor Submission

- Visitors can submit:
  - Full name
  - Email
  - Program
  - Year level
  - Portfolio URL
  - Skills
  - Short bio
- Course type is inferred from the program text to avoid redundant public input.
- New submissions are saved as pending records.
- Pending submissions do not appear publicly until approved.

### Private Admin CMS Prototype

- Accessed through `#/admin` in local/static mode, or `/admin` when hosted with a rewrite to `index.html`.
- Hidden from the public navigation and public scroll flow.
- Uses a fake login for demonstration; any email and password can start the admin session.
- Show pending, returned, published, and archived/disapproved records.
- Add new student profiles directly.
- Edit and save existing seed profiles or submitted profiles.
- Approve pending profiles so they become public.
- Return submissions with comments for revision.
- Archive or disapprove published or pending profiles.
- Restore archived records.
- Store CMS state in browser local storage for prototype purposes.
- Future production implementation should replace local storage with authenticated admin access and the documented database schema.

## Content Model

The prototype uses normalized student-like records in `app.js`. A production database should use the SQL schema in `.local/docs/DATABASE_SCHEMA.sql`.

Core fields:

- Identity: `id`, `name`, `initials`, `email`
- Academic: `program`, `courseType`, `yearLevel`, `gradYearsSince`
- Public profile: `role`, `location`, `availability`, `availabilityLabel`, `bio`, `skills`, `portfolioUrl`
- Governance: `status`, `source`, `featured`
- Evidence: `metrics[]`, `projects[]`

Statuses:

- `pending`: submitted but not approved
- `returned`: sent back with admin comments
- `published`: visible on the website
- `removed`: hidden or archived by admin

## Functional Requirements

- Public directory displays at least 30 students.
- Search, year level filter, course filter, availability filter, and sorting work together.
- Selecting a student opens the correct details.
- Visitors can submit a profile.
- Public submission only asks for program; course type is inferred.
- Admin CMS is not visible in public navigation or public scrolling.
- Admin can log in through the private admin route with fake credentials.
- Admin can add, edit, save, approve, return with comments, archive/disapprove, restore, and delete profiles.
- Stats update when submissions are approved or removed.
- Profile sharing uses Web Share API where available and clipboard fallback otherwise.
- The interface remains usable on desktop and mobile.

## Non-Functional Requirements

- No runtime dependencies.
- Works as a static website from local files or any static file host.
- Uses semantic landmarks and accessible form labels.
- Provides visible focus states.
- Maintains adequate contrast with red, gold, white, and dark text.
- Keeps documentation in `.local/docs`.

## Production Readiness Path

The current prototype is production-shaped but not production-hosted. To make it production-grade, the next phase should add:

- Real database using the schema in `.local/docs/DATABASE_SCHEMA.sql`.
- Real authentication and role-based admin access.
- Server-side validation and moderation audit logs.
- File/avatar upload storage if profile images are required.
- Email verification for submitters.
- Admin notifications for new submissions.
- Analytics for profile views and portfolio link clicks.
- Privacy review for student contact details.

## Acceptance Criteria

- The public website has a Mapua-inspired red, gold, and white institutional design.
- The directory contains more than 30 sample students.
- Users can filter by year level, course type, and availability.
- Fresh Grad status includes years since graduation.
- Visitors can submit a profile.
- Admin CMS is accessible as a separate admin route, not as a public page section.
- Admin CMS can add, edit, save, approve, return with comments, archive/disapprove, restore, and delete profiles.
- PRD, database schema, README, user flow diagram, architecture, and defense notes exist in `.local/docs`.
- Root README explains how to run the app.
