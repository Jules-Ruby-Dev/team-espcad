# Team ESPCAD

Brochureware site for **Team ESPCAD** — built with [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/) and deployed to GitHub Pages.

🌐 **Live site:** <https://jules-ruby-dev.github.io/team-espcad/>

---

## Local Development

**Prerequisites:** Node.js 20+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server (hot-reload)
npm run dev
```

The dev server runs at <http://localhost:5173/team-espcad/> by default.

## Build

```bash
npm run build
```

Output is written to `dist/`. Do **not** commit `dist/` — GitHub Actions handles deployment automatically.

## Preview the build locally

```bash
npm run preview
```

Serves the production build at <http://localhost:4173/team-espcad/>.

## Deployment

Pushes to `main` automatically trigger the **Deploy to GitHub Pages** workflow (`.github/workflows/deploy.yml`), which:

1. Installs dependencies (`npm ci`)
2. Builds the site (`npm run build`)
3. Uploads `dist/` as a Pages artifact
4. Deploys to <https://jules-ruby-dev.github.io/team-espcad/>

