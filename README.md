# AS Tech Solution PK

Responsive static website for AS Tech Solution PK. Built with HTML, CSS, and
vanilla JavaScript; no build step or server runtime is required.

## Project structure

```text
.
├── index.html
└── assets/
    ├── css/
    │   ├── style.css
    │   └── theme-v3.css
    ├── img/
    │   └── clients/
    ├── js/
    │   ├── data.js
    │   ├── effects.js
    │   ├── main.js
    │   └── theme.js
    ├── favicon.png
    └── logo.png
```

## Run locally

Open `index.html` in a browser, or serve this folder with any static-file
server. Keep the `assets` directory next to `index.html`.

## Deploy to Vercel

Import this repository as a Vercel project and choose **Other** as the
framework preset. Leave the build and output-directory settings empty; Vercel
can serve the static files directly. The entry point is `index.html`.

## Content notes

- Website and app demos are listed in `assets/js/main.js`.
- Services, articles, and other site content are maintained in
  `assets/js/data.js`.
- Article cards open short editorial summaries included in the site data.
- Decorative concept artwork is illustrative and should not be presented as
  actual client screenshots or case studies.
