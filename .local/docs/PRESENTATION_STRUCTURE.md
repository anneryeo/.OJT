# Project Folio Presentation Structure

This deck is structured as an OJT project demo defense. The goal is to explain the context, the problem, the four project objectives, the system design, the live demo, future production work, and the final summary.

## Slide 1: Title

**Title:** Project "Folio"

**Subtitle:** OJT Project Demo Defense

**Presenter:** Christine Julliane Reyes, 3rd Year BS Data Science Student

**Content:**
Keep this slide clean and direct. It introduces the project name and frames the presentation as a demo defense, not a long technical lecture.

**Media Description:**
Use a Mapua-inspired red, gold, and white title layout. The title should be the main visual anchor.

## Slide 2: Internship Context

**Title:** Internship Context

**Content:**
This slide explains where the internship happened and why the project came up.

Key points:

- Interned at Mapua University.
- Assigned within SOIT.
- Simple organization flow:
  - SOIT Dean
  - Supervisor: Ms. Layno
  - Intern: Christine Julliane Reyes
- Ms. Layno suggested exploring a student portfolio dashboard.

**Speaker Direction:**
Keep this brief and conversational. The purpose is to show the watcher where the work came from before going into the actual problem.

**Media Description:**
Use a very simplified organizational chart:

```text
SOIT Dean
   ↓
Ms. Layno
   ↓
Christine Julliane Reyes, Intern
```

## Slide 3: Problem Statement

**Title:** Problem Statement

**Center Screen Text:**

```text
how will we let companies know better, who our top candidates are, credibly?
```

**Content:**
This slide explains how the project was approached. The wording should stay natural and personal because it matches the presenter's speaking style and leaves room for ad lib.

The core idea is that student talent should not just be listed. It should be presented with credible evidence: skills, projects, outcomes, availability, and admin-reviewed profile quality.

**Media Description:**
Use a centered question layout with minimal supporting graphics. The question should dominate the slide.

## Slide 4: Project Objectives

**Title:** Project Objectives

**Content:**
Show the four project objectives:

1. Data structuring
2. Dashboard interface
3. Admin moderation
4. Updates and iteration

**Speaker Direction:**
Explain that these objectives cover the full workflow: organizing student profile data, showing it clearly, giving admins control over publication, and making updates visible through the prototype.

**Media Description:**
Use four equal bars, pillars, or blocks. These same four objectives should return in the summary slide.

## Slide 5: System Overview

**Title:** System Overview

**Layout:**
Divide the slide into two sides:

- Public
- Admin

**Public Side:**

- Browse published student portfolios.
- Search and filter by school year, program, year level, and availability.
- View public analytics for hiring and discovery signals.
- Open student profile details.
- Submit a profile request for admin review.

**Admin Side:**

- Fake login for prototype demonstration.
- Review pending and returned submissions.
- Approve, edit, return with comments, archive, restore, or delete records.
- View admin-only analytics.
- Monitor CTI, or Career Trajectory Index, by cohort.
- Use local storage persistence to simulate CMS updates.

**Media Description:**
Use a split-screen system diagram. Keep it simple: public users on one side, admin workflow on the other.

## Slide 6: Demo

**Title:** Demo

**Content:**
This is the live product walkthrough slide. The slide should act as a transition point before leaving the deck and opening the actual website.

Suggested walkthrough:

1. Start in the public view.
2. Show the directory and profile details.
3. Show public analytics and featured students.
4. Submit a profile request.
5. Switch to admin route: `index.html#/admin`.
6. Show review queue, published records, and archived records.
7. Show admin analytics and CTI monitor.
8. Demonstrate approval, return with comments, or editing if needed.

**Speaker Direction:**
Use this slide to guide the watcher into the website itself. The slide does not need to explain everything because the demo should carry the section.

**Media Description:**
Use a simple "Live Demo" screen with the URL or route:

```text
Public: index.html
Admin: index.html#/admin
```

## Slide 7: Future Developments

**Title:** Future Developments

**Content:**
List production-ready features that would be needed beyond the prototype:

- Add real authentication
- Server-side validation
- Audit logging
- Email verification
- Privacy controls
- Hosted database persistence
- Live synchronization with external Mapua systems such as Blackboard

**Speaker Direction:**
After listing these, say:

```text
basically prod ready features!
```

Then verbally explain that these require permissions from broader Mapua authorities, which would take longer than the internship timeline.

**Media Description:**
Use a future roadmap or checklist layout. Keep it practical, not overly technical.

## Slide 8: Summary

**Title:** Summary

**Content:**
Circle back to the four project objectives and show how the prototype completed each one.

Use four bars or steps:

1. Data structuring
   - Student profiles are organized into consistent fields: identity, academic context, career context, skills, projects, metrics, status, and review comments.

2. Dashboard interface
   - Public users can browse, filter, open profiles, view public analytics, and see featured project evidence.
   - Admins have deeper operational dashboards.

3. Admin moderation
   - Admins can approve, return with comments, edit, archive, restore, and delete records.
   - Pending and returned submissions are kept separate from published profiles.

4. Updates and iteration
   - Visitor submissions enter the admin queue.
   - Admin actions update the prototype state through local storage.
   - Analytics update based on actual filtered records and admin workflow state.

**Closing Point:**
The project demonstrates how a student portfolio website can become more than a gallery. It can become a structured, moderated, and evidence-based way to help companies understand which students are credible candidates.

**Media Description:**
Use four horizontal bars, where each bar represents one objective and one completed project step.
