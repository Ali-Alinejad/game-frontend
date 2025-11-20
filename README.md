# GameFord - Gaming News & Admin Dashboard

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-teal?style=flat-square)
![Jest](https://img.shields.io/badge/Jest-29-red?style=flat-square)
![Zustand](https://img.shields.io/badge/Zustand-State-yellow?style=flat-square)
![Auth](https://img.shields.io/badge/Auth-Custom-blue?style=flat-square)

**GameFord** is a modern, dynamic, and interactive gaming website built with **Next.js 13**, **React**, **TypeScript**, and **TailwindCSS**. It features dynamic game pages, an admin panel, mock backend data, and a secure license-check system.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Components](#components)
- [Tech Stack & Dependencies](#tech-stack--dependencies)
- [License Check](#license-check)
- [Screenshots](#screenshots)
- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Dynamic Game Pages:** Each game has its own page with details, trailers, developer info, and comments.
- **Admin Panel:** Manage users, games, comments, and view overview statistics.
- **Mock Data:** No backend required for local testing.
- **Interactive UI:** Smooth animations with Framer Motion and 3D effects with Three.js.
- **Multi-language Support:** English (LTR) and Persian (RTL) layouts.
- **License Validation:** Requires a valid `LICENSE_KEY` to run locally.
- **Responsive Design:** Optimized for desktop and mobile views.

---

## Project Structure (Key)

```
src/
├─ app/           # Main pages, admin panel, dynamic game/news pages
├─ components/    # Game, admin, and 3D components
├─ hook/          # Custom hooks
├─ store/         # Zustand store
├─ types/         # TypeScript types and interfaces
├─ utils/         # Helper functions
├─ lib/           # Libraries and utilities
├─ middleware.ts
├─ .env
└─ README.md
```

---

## Pages

- **Home / Gaming Hub:** Displays games, trailers, news, and interactive features.
- **Dynamic Game Pages:** `src/app/Games/[gameId]/page.tsx`
- **News Pages:** `src/app/News/[slug]/page.tsx`
- **Admin Panel:** `src/app/(pages)/admin/page.tsx`

---

## Components

- **Sidebar & Header:** Navigation for main site and admin panel.
- **Game Sections:** Hero, Features, Stats, Trending, Footer.
- **Admin Tabs:** Overview, Games, Users, Comments.
- **UI Elements:** Buttons, Avatars, Ratings, Charts.

---

## Tech Stack & Dependencies

- **Next.js 13** - React framework for SSR and app routing
- **React 18** - Frontend library
- **TypeScript 5.2** - Type safety
- **TailwindCSS 3.3** - Utility-first CSS
- **Framer Motion** - Animations
- **Three.js** - 3D visual effects
- **Zustand** - State management
- **Jest 29** - Unit testing
- **js-cookie** - Cookie management for auth tokens
- **next-auth / custom token system** - Authentication

---

## License Check

The project includes a license validation system:

```ts
import checkLicense from "../../license-check/index";
checkLicense();
```

- Requires `LICENSE_KEY` in `.env` to run the main app.
- Admin panel requires `ACCESS_ADMIN_PANEL` token to access: `/admin?key=<ACCESS_ADMIN_PANEL>`

Example `.env`:

```
LICENSE_KEY=your-secret-token
ACCESS_ADMIN_PANEL=your-admin-token
```

Unauthorized users cannot run the app or access the admin panel.

---

## Screenshots

### Home Page
![Home Page](./public/screenshots/home.png)

### Game Page
![Game Page](./public/screenshots/game.png)

### Admin Panel
![Admin Panel](./public/screenshots/admin.png)

*(Place your images in `public/screenshots/` folder)*

---

## Live Demo

Check out the live version here: [GameFord Live](https://your-domain.com)

---

## Getting Started

1. Clone the repository.
2. Copy `.env.example` to `.env` and set your keys.
3. Install dependencies:

```bash
pnpm install
# or
npm install
```

4. Run development server:

```bash
pnpm dev
# or
npm run dev
```

5. Visit `http://localhost:3000`

---

## Environment Variables

```
LICENSE_KEY=Winf0RD_T0ken_ACcess_1999!@#
ACCESS_ADMIN_PANEL=p0w3rFul_T0ken_Adm1n_788376!@#
```

- `LICENSE_KEY`: Required to run the main app.
- `ACCESS_ADMIN_PANEL`: Required to access admin panel.

---

## Contributing

- Clone the repo and install dependencies.
- Use mock data for local testing.
- Make sure the license key is set before running.
- Create pull requests for improvements or new features.

---

## License

This project is for educational/demo purposes. All rights reserved.
