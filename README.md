# gmeono.me

Personal portfolio website for Gustavo Meoño — CTO & Senior Engineering Leader.

## Stack

- **Vue 3** (Composition API)
- **Vite** (build tool)
- **Tailwind CSS v4** (styling)
- **PrimeVue** (component library)
- **vue-i18n** (Spanish/English)
- **Sora + Inter** (typography)
- **bun** (package manager)

## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

Output goes to `dist/`.

## Deploy

Hosted on **Cloudflare Pages** with automatic deploys from `main`.

- Build command: `bun run build`
- Output directory: `dist`
- Custom domain: `gmeono.me`

## Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, SectionWrapper
│   └── sections/        # Hero, About, Experience, Services,
│                        # HowIWork, TechStack, Contact
├── composables/         # useScrollAnimation, useContactForm
├── data/                # techStack.js
├── i18n/locales/        # en.json, es.json
├── assets/styles/       # main.css (Tailwind + design tokens)
├── App.vue
└── main.js
```

## License

All rights reserved.
