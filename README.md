# Black Cat Glass website

Source for the Black Cat Glass studio website hosted at
[piewbond.github.io](https://piewbond.github.io/).

The site is intentionally lightweight: it uses static HTML and CSS, with a small
TypeScript layer for language switching, navigation, and dynamically rendered
content. No framework or application server is required.

## Requirements

For simply previewing the site, you only need one of the following:

- Python 3, or
- Any static HTTP server

For changing the TypeScript, install:

- [Node.js](https://nodejs.org/) (a current LTS release is recommended)
- npm, which is included with Node.js

## Run locally

Clone the repository and enter its directory:

```bash
git clone https://github.com/piewbond/piewbond.github.io.git
cd piewbond.github.io
```

Start a static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

Do not open `index.html` directly from the file manager. The site uses
root-relative paths and loads translation files with `fetch`, so it needs to run
through an HTTP server.

## Development

Install the TypeScript dependency:

```bash
npm install
```

Compile `src/main.ts` into the JavaScript file used by the website:

```bash
npx tsc
```

To recompile automatically while editing, run this in a separate terminal:

```bash
npx tsc --watch
```

Keep the local HTTP server running in another terminal and refresh the browser to
see changes.

Before committing TypeScript changes, run a final type check and build:

```bash
npx tsc
```

The generated `scripts/main.js` is committed because GitHub Pages serves this
repository as a static site and does not compile TypeScript during deployment.

## Project structure

```text
.
├── index.html                 # Main landing page
├── home/index.html            # Clean /home/ route
├── about/index.html           # Studio and team page
├── news/index.html            # Games and project updates
├── contact/index.html         # Contact page
├── style.css                  # Shared site styling
├── src/main.ts                # Browser behavior and rendered content
├── src/translations/          # English and Hungarian translations
├── scripts/main.js            # Compiled JavaScript loaded by the pages
├── me.png                     # Profile image
├── tsconfig.json              # TypeScript compiler configuration
└── package.json               # Development dependency metadata
```

The root-level `about.html`, `news.html`, and `reachout.html` files are legacy
entry points kept for compatibility. The directory-based pages are the canonical
clean-URL routes.

## Updating content

- Edit page-specific markup in the relevant `index.html` file.
- Edit shared visual styles in `style.css`.
- Edit interactive behavior and data collections in `src/main.ts`, then run
  `npx tsc`.
- Keep user-facing translated text in both translation files:
  - `src/translations/EN_eng.json`
  - `src/translations/HU_hun.json`

When adding a translation key, add the same key to both locale files. Missing
keys may otherwise appear untranslated in one language.

## Deployment

This is a GitHub user-site repository. GitHub Pages can serve the files directly
from the repository root on the default branch (`master`). After reviewing and
committing changes, push them to GitHub:

```bash
git add .
git commit -m "Update website"
git push origin master
```

If deployment is not already enabled, open the repository on GitHub and go to
**Settings → Pages**. Set the source to **Deploy from a branch**, then select the
`master` branch and the `/ (root)` folder.

Published updates may take a few minutes to appear. Check the repository's
**Actions** or **Settings → Pages** view if a deployment fails.

## Browser data

The selected language is stored in the browser's local storage under
`piewbond-locale`. If language behavior seems stuck during testing, clear the
site's local storage in browser developer tools or switch languages using the
HU/EN buttons.
