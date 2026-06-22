# Student Portfolio Dashboard Presentation Structure

## Slide 1: Title

**Title:** Mapua SOIT Student Portfolio Dashboard: Data Integration and Visualization
**Subtitle:** OJT Project Prototype Defense
**Presenter:** Christine Julliane Reyes, 3rd Year BS Data Science Student
**Institution:** School of Information Technology, Mapua University

**Content:**
This slide introduces the project as an academic and technical output of the 320-hour OJT deployment. It should establish that the system is a prototype dashboard for centralizing, organizing, and presenting student portfolio data.

**Media Description:**
Use a clean Mapua-inspired red, gold, and white title layout. Add a simple dashboard mockup screenshot or a cropped image of the prototype hero section.

## Slide 2: Project Context

**Title:** Project Context and Department Setting

**Content:**
The trainee was assigned to the School of Information Technology under the supervision of Ms. Renilda Layno, Program Coordinator for BS Data Science. The project was developed to support the department's need for a more structured way to present student achievements, academic standing, skills, and project history.

The system aligns with Mapua University's technology-driven identity by treating student portfolio information as structured institutional data rather than scattered profile artifacts.

**Media Description:**
Use a simple organizational flow graphic: Trainee → BS Data Science Program Coordinator → SOIT Dean. Keep it formal and minimal.

## Slide 3: Problem and Opportunity

**Title:** Problem and Opportunity

**Content:**
Student portfolio information was previously difficult to evaluate when stored in unstructured or fragmented formats. This made it harder for faculty and administrators to assess student capability, compare project evidence, and prepare student work for external partners or accreditation-related presentations.

The opportunity was to create a clean and unified pipeline that transforms raw student profile data into a readable visual dashboard with administrative moderation.

**Media Description:**
Show a before-and-after visual: scattered documents/spreadsheets on the left, structured dashboard/database on the right.

## Slide 4: Project Objectives

**Title:** Project Objectives

**Content:**
The first objective was to organize student information into a reliable structured data model that can support a future relational database. The second objective was to create a user-friendly dashboard for public discovery and academic administration. The third objective was to connect the structured data model to a working interface where profile updates can appear immediately in the prototype environment.

These objectives reflect the complete flow from data cleaning and schema planning to frontend visualization and administrative governance.

**Media Description:**
Use a three-step process diagram: Data Structuring → Dashboard Interface → Admin Moderation and Updates.

## Slide 5: System Overview

**Title:** System Overview

**Content:**
The prototype has two major user environments. The public website allows visitors to browse published student portfolios, use search and filters, open profile details, and submit their own profile for review. The private admin route allows an administrator to log in through a fake prototype login and manage records through add, edit, save, approve, return with comments, archive, restore, and delete actions.

The prototype is dependency-free and uses browser local storage to simulate session persistence and content management.

**Media Description:**
Use a simple architecture diagram showing Public Interface, Admin Route, JavaScript State, Local Storage, and Future Database Schema.

## Slide 6: Public Portfolio Directory

**Title:** Public Portfolio Directory

**Content:**
The public directory contains thirty-three sample student profiles. Users can search across names, programs, skills, biographies, and project evidence. They can also filter by year level, course type, and availability. Each profile card opens into a detailed student portfolio panel showing academic status, course category, role, location, skills, selected outcomes, and featured work.

This demonstrates how cleaned student data can become a readable portfolio snapshot for faculty, recruiters, mentors, and institutional partners.

**Media Description:**
Use screenshots of the public directory, filter bar, profile cards, and expanded profile panel.

## Slide 7: Student Submission Workflow

**Title:** Student Submission Workflow

**Content:**
The submission form allows students or visitors to request publication by entering their name, email, program, year level, portfolio URL, skills, and short biography. To avoid redundant input, the prototype no longer asks for a separate course type dropdown. Instead, the system infers course classification from the program text and sends the profile into the admin queue.

Submitted profiles are not immediately public. They remain pending until reviewed and approved through the private admin workspace.

**Media Description:**
Show a user flow: Submit Profile → Pending Queue → Admin Review → Published Directory or Returned with Comments.

## Slide 8: Private Admin CMS

**Title:** Private Admin CMS and Moderation

**Content:**
The admin CMS is accessed through the private prototype route `index.html#/admin`, or `/admin` when hosted with routing support. It includes a fake login for demonstration purposes. The CMS supports adding new student profiles, editing existing records, saving changes, approving submissions, returning submissions with comments, archiving or disapproving records, restoring archived profiles, and deleting records.

The admin workspace also includes searchable and filterable categories for submission queues, published portfolios, and archived or disapproved records. Each list shows the top five records by default with an option to see more.

**Media Description:**
Use screenshots of the admin login, admin editor form, submission queue, published records, and archived records.

## Slide 9: Database and Production Readiness

**Title:** Database Schema and Production Path

**Content:**
Although the prototype runs as a static website, it is designed around a production-ready data model. The documented SQL schema includes students, skills, projects, metrics, admin users, and audit logs. This schema supports the future replacement of local storage with a real database and authenticated backend.

For production, the next phase should add real authentication, server-side validation, audit logging, email verification, privacy controls, and hosted database persistence. Live synchronization with external Mapua systems such as Blackboard remains outside the scope of this initial 320-hour deployment.

**Media Description:**
Use a database relationship diagram or simplified table map showing students connected to skills, projects, metrics, and admin audit logs.

## Slide 10: Conclusion and Defense Points

**Title:** Conclusion and Defense Points

**Content:**
The Student Portfolio Dashboard demonstrates an end-to-end process for converting student portfolio information into a structured, searchable, and moderated dashboard. It supports public discovery, student submission, private administrative review, and future database integration.

The project addresses the original problem of fragmented student portfolio data by presenting a clearer workflow for academic administrators and a more professional publication channel for student achievements. The final prototype is defense-ready because it includes a working public interface, private admin CMS, session persistence, documented schema, user flow, architecture, and clear production limitations.

**Media Description:**
Use a final summary graphic with four pillars: Structured Data, Public Dashboard, Admin Workflow, Production Path.
