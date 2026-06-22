# Mapua Student Portfolio Registry

A dependency-free OJT prototype for discovering Mapua student portfolios.

## Run locally

Open `index.html` directly, or serve the directory with any static file server.

```powershell
npx serve .
```

The prototype includes 33 sample profiles, visitor submission, private admin workflow, fake admin login, add/edit/save/delete, approval, return with comments, archive/restore, filters, profile details, and a documented production database schema.

Admin prototype route:

```text
index.html#/admin
```

If hosted with a rewrite to `index.html`, `/admin` also renders the admin workspace.

Defense and product documentation:

- `.local/docs/PRD.md`
- `.local/docs/README.md`
- `.local/docs/DATABASE_SCHEMA.sql`
