# Project Folio Rough Presentation Script

Use this as a speaking guide, not a memorized script. The goal is to keep the defense clear while still sounding natural.

## Slide 1: Title

**On slide:** Project "Folio" / OJT Project Demo Defense / name, year, course

**Rough script:**

Good day. I am Christine Julliane Reyes, a 3rd Year BS Data Science student, and today I will be presenting my OJT project demo defense.

The project is called Project "Folio". It is a student portfolio registry prototype that focuses on organizing student information, showing it in a useful dashboard, and giving admins a way to review and manage student portfolio submissions.

I will briefly go through the context, the problem I tried to solve, the objectives, the system overview, then I will move into the actual product demo.

**Optional ad lib:**

- "I called it Folio because the main idea is really portfolio discovery, but with more structure and credibility behind it."

## Slide 2: Internship Context

**On slide:** Mapua context and simple org chart

**Rough script:**

For my OJT, I interned at Mapua University under SOIT.

The simplified organizational structure that I had during the production of this project is: the SOIT Dean, then my supervisor Ms. Layno, then me as the intern.

During the internship, Ms. Layno suggested that I try to make a student portfolio dashboard. So the project came from a practical department need: how can student work be organized and presented better, especially if the school wants to show student capability to companies or external partners?

This is why I approached it not just as a website, but as a small system with data, public viewing, and admin moderation.

**Optional ad lib:**

- "This is a simplified chart, of course, just to show where I fit in the project context."
- "The idea started simple, but I expanded it into a prototype with both public and admin workflows."

## Slide 3: Problem Statement

**On slide:** how will we let companies know better, who our top candidates are, credibly?

**Rough script:**

The question I kept coming back to was:

"how will we let companies know better, who our top candidates are, credibly?"

For me, the important word here is "credibly."

It is easy to just list students. But if a company or recruiter is looking at students, they need more than names. They need context: what course the student is from, what skills they claim, what projects they have done, whether those projects have outcomes, and whether the profile has been reviewed.

So my approach was to build a prototype where student portfolio data is structured, filterable, and moderated before it becomes public.

**Optional ad lib:**

- "I did not want it to feel like just a gallery."
- "The idea is not just 'look, here are students,' but 'here is evidence that helps you decide who to look at first.'"

## Slide 4: Project Objectives

**On slide:** four objectives

**Rough script:**

I organized the project around four objectives.

First is data structuring. Student profiles need consistent fields, like school year, program, skills, availability, projects, and review status.

Second is the dashboard interface. The data should not just sit somewhere. It should be easy to browse, filter, compare, and understand.

Third is admin moderation. Since this is student-facing and potentially recruiter-facing, not everything should be published immediately. Admins should be able to approve, return, edit, archive, or restore records.

Fourth is updates and iteration. The prototype should show what happens when students submit profiles and admins update them. Even without a backend, the flow should still be visible.

**Optional ad lib:**

- "These four objectives are also how I will summarize the project later."
- "I treated the project as an end-to-end workflow, not just screens."

## Slide 5: System Overview

**On slide:** split public/admin view

**Rough script:**

The system has two main sides: public and admin.

On the public side, users can browse published student portfolios. They can search, filter by school year or program, view analytics, open student details, and submit a profile request.

The public side is meant for recruiters, students, aspirants, or partners who want to understand student work quickly.

On the admin side, admins have a private workspace. It uses a fake login for the prototype, but the workflow simulates a CMS. Admins can review pending submissions, approve profiles, return them with comments, archive records, edit records, and monitor deeper analytics.

This is also where the CTI or Career Trajectory Index appears. It is an admin-only readiness score that helps estimate whether a profile has enough evidence to be recruiter-ready.

**Optional ad lib:**

- "The public side is discovery. The admin side is governance."
- "Public users should see clean information; admins should see the messy workflow behind it."

## Slide 6: Demo

**On slide:** Live Demo

**Rough script before switching to website:**

For this part, I will move out of the slide deck and show the actual prototype.

I will start with the public view, then move to the admin view.

In the public view, I will show the directory, filters, profile cards, detailed profile panel, analytics, and the submission form.

Then in the admin view, I will show the login, the dashboard, the moderation queue, published and archived records, and the admin-only analytics including the CTI monitor.

**Demo talking path:**

1. Public homepage:

   - "This is the public-facing side."
   - "The goal here is discovery, so the interface is cleaner and less operational."
2. Public analytics:

   - "These charts summarize published profiles only."
   - "For example, OJT readiness tells recruiters who is ready now, role-fit only, or unavailable."
   - "The featured row gives aspirants or recruiters examples of stronger student work."
3. Directory:

   - "Here, users can filter by year level, school year, program, and availability."
   - "Each card opens into a more detailed profile."
4. Profile panel:

   - "This turns the student record into a portfolio snapshot: identity, course, skills, outcomes, and featured work."
5. Submission form:

   - "Students can request publication, but it does not go public immediately."
   - "It enters the admin review queue."
6. Admin route:

   - "Now I will switch to the admin view."
   - "The fake login is just for demo purposes."
7. Admin dashboard:

   - "This is more operational. It shows what needs review, what is ready, and what may need support."
8. CTI monitor:

   - "CTI is not claiming employment success. It is a prototype readiness score."
   - "It checks evidence signals like profile completeness, skills, projects, measurable outcomes, availability, and review status."
   - "Admins can group it by school year, year level, program, or review status."
9. Admin records:

   - "Each record also shows CTI so admins can see the score per student."
   - "This helps decide whether a profile is recruiter-ready or needs more evidence."
10. Moderation:

- "Admins can approve, return with comments, archive, restore, edit, or delete."
- "That completes the workflow from submission to publication."

**Optional ad lib:**

- "I will not click every single thing, but I will show the main flow."
- "This is static and localStorage-based, so it simulates what a backend CMS would later handle."

## Slide 7: Future Developments

**On slide:** production-ready feature list

**Rough script:**

Since this is a prototype, there are features that would be needed before it becomes production-ready.

These include real authentication, server-side validation, audit logging, email verification, privacy controls, hosted database persistence, and live synchronization with external Mapua systems such as Blackboard.

So basically, prod ready features!

And realistically, these would require permissions and coordination with broader Mapua authorities. That would take longer than my internship timeline, so I scoped this as a working prototype that shows the flow and system logic first.

**Optional ad lib:**

- "The prototype shows what the system could do, but production would need security, governance, and integration work."
- "Especially because this involves student data, privacy and permissions matter."

## Slide 8: Summary

**On slide:** four objective bars/steps

**Rough script:**

To summarize, I will circle back to the four objectives.

For data structuring, I organized student profiles into consistent fields: identity, academic context, career context, skills, projects, metrics, status, and review comments.

For dashboard interface, I built a public view for discovery and an admin view for deeper analytics and operations.

For admin moderation, the prototype supports approving, returning with comments, editing, archiving, restoring, and deleting records.

For updates and iteration, visitor submissions enter the admin queue, admin actions update local state, and the dashboards update based on the current records and filters.

Overall, the project shows how a student portfolio website can become more than a gallery. It can become a structured, moderated, and evidence-based way to help companies understand which students are credible candidates.

**Optional closing:**

- "That ends my presentation. Thank you, and I am ready for questions."
- "I can also go back to the prototype if there is any part you want me to demonstrate again."

## Quick Defense Reminders

- If asked why localStorage: It is for prototype persistence without backend setup.
- If asked why fake login: It demonstrates admin-only routing and workflow without implementing real authentication.
- If asked what CTI means: It is a readiness score, not a job-success claim.
- If asked how skills are validated: Admins compare claimed skills against project evidence, outcomes, links, and review notes.
- If asked what makes this useful to companies: It turns student portfolios into searchable, filtered, evidence-based candidate profiles.
- If asked what makes this useful to the school: It gives SOIT a structured way to present student capability and monitor profile readiness.
