# Admin Handoff Guide — Mapua Portfolio Registry

This guide is for the person taking over as **Folio Coordinator** (the admin who reviews and publishes student portfolios). No coding knowledge is required to follow it.

## 1. How to log in

1. Open the site.
2. Go to the admin area by adding `#/admin` to the end of the website address, for example:
   `https://your-site-address.com/#/admin`
3. Enter the coordinator email and password.
4. Click **Log in**.

**Current default login (change this immediately after first use — see Section 2):**

| Field | Value |
|---|---|
| Email | `coordinator@email.com` |
| Password | `mapua_foliocoordinator2026` |

## 2. How to change the email and password yourself

You do **not** need a developer to change the login. Do this the moment you take over the role, and again any time the role changes hands:

1. Log in to the admin area (Section 1).
2. Click **Account** in the top navigation bar (next to Dashboard, Analytics, Editor, Records).
3. Under **Change email & password**, fill in:
   - **Current password** — the password you just used to log in.
   - **New coordinator email** — the email the next coordinator should use.
   - **New password** — at least 10 characters. Use something not guessable (avoid names, birthdays, "password123", etc.).
   - **Confirm new password** — type the new password again.
4. Click **Update credentials**.
5. You'll see a green confirmation message. From now on, use the new email and password to log in.

Write the new credentials down somewhere safe (a password manager, sealed envelope, or your office's secure handoff document) — do **not** post them in a public chat, email, or shared drive.

## 3. Handing off to the next coordinator

When your term ends:

1. Change the email and password to new credentials (Section 2).
2. Share the new credentials with the next coordinator through a private, secure channel (in person, encrypted message, or your school's official handoff process) — not through a public group chat or unsecured email thread.
3. Point them to this file (`ADMIN-HANDOFF.md`) so they know how to do the same when their term ends.

## 4. If you get locked out

If the password is lost and nobody remembers it, there is no "forgot password" email recovery — this prototype does not send emails. To regain access:

1. Open the site in a web browser.
2. Open the browser's site settings (in Chrome: click the icon to the left of the address bar → **Site settings**, or go to `chrome://settings/content/all` and find the site).
3. Clear the stored data ("Cookies and site data") for this site.
4. Reload the page. The login will reset to the **default credentials** shown in Section 1.
5. Log in with the defaults, then immediately set new credentials again (Section 2).

**Important:** Clearing site data also resets any profile edits, approvals, or archive actions made in the admin dashboard, since this prototype stores everything in the browser rather than in a shared database. Only do this as a last resort, and let your team know beforehand if possible.

## 5. Good habits for whoever holds this role

- Change the password whenever the coordinator role changes hands — never leave the previous person's credentials active.
- Don't share the password over public or unsecured channels.
- Don't reuse a password from another account.
- Log out (**Log out** button, top right of the admin header) when you're done, especially on a shared or public computer.

## 6. A note on how secure this really is (read before going live with real student data)

This site is a self-contained prototype: it has no server and no database. The login and all admin data (student profiles, review decisions, and now the coordinator's email/password) live only in the browser's local storage on whichever computer is used to log in. The password is not sent anywhere for checking — it's compared entirely inside the browser.

What this means in practice:

- Anyone who opens the browser's developer tools on that same computer/browser profile could technically see the stored (scrambled) password data and admin records.
- Credentials and data do not sync across devices or browsers — logging in on a different computer will use whatever credentials were last set on *that* computer, not the one you changed elsewhere.
- This setup is fine for demos, coursework, and internal prototypes. It is **not** sufficient for handling real student personal data in production.

**Before this goes live with real students:** a developer should move the login and profile data to a real backend (a server + database with proper password hashing and access control), as already sketched out in `.local/docs/DATABASE_SCHEMA.sql`. Until then, treat this admin login as a convenience gate, not as strong security.

## 7. Quick reference

| Task | Where |
|---|---|
| Log in | `#/admin` → Email + Password → Log in |
| Change email/password | Admin dashboard → **Account** tab |
| Log out | Admin header → **Log out** button |
| View public site | Admin header → **View public site** |
| Recover from lockout | Clear browser site data → resets to default credentials above |
