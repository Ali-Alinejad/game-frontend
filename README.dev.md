## Overview

This README is intended for developers who want to work on the **GameFord** project. It contains detailed information about dependencies, development setup, testing, and project structure.

---

## Tech Stack & Dependencies

### Core Dependencies
| Package | Version | Notes |
|---------|---------|-------|
| next | 15.5.2 | React framework |
| react | 19.1.0 | Frontend library |
| react-dom | 19.1.0 | DOM renderer |
| typescript | 5.2 | Type safety |
| tailwindcss | 4.1.12 | Utility-first CSS |
| framer-motion | 12.23.12 | Animations |
| three | 0.179.1 | 3D rendering |
| @react-three/fiber | 9.3.0 | 3D scene management |
| @react-three/drei | 10.7.4 | Useful helpers for react-three/fiber |
| zustand | 5.0.8 | State management |
| axios | 1.11.0 | HTTP requests |
| js-cookie | latest | Cookie management for auth tokens |
| @auth/core | 0.41.1 | Authentication system |
| next-auth | 4.24.12 | Auth integration |
| lucide-react | 0.542.0 | Icons |
| recharts | 3.2.1 | Charts |
| clsx | 2.1.1 | Classnames helper |
| tailwind-merge | 3.3.1 | Merge Tailwind classes |
| @heroui/react | 2.8.3 | UI components library |

### Dev Dependencies
| Package | Version | Notes |
|---------|---------|-------|
| @babel/core | 7.28.5 | Babel compiler |
| @babel/preset-env | 7.28.5 | Babel preset for modern JS |
| @babel/preset-react | 7.28.5 | Babel preset for React |
| @babel/preset-typescript | 7.28.5 | Babel preset for TypeScript |

---

## Project Structure (Key)
1. Clone the repository.
2. Copy `.env.example` to `.env` and add your keys:

---

License Check

The project includes a license validation system:

Always show details
import checkLicense from "../../license-check/index";
checkLicense();
-----
Testing

Unit tests use Jest.

Run tests:
pnpm test
-------
Auth & State

Authentication: Managed using next-auth or custom token system with @auth/core.

Cookies: js-cookie used for storing auth tokens.

State Management: zustand used for global app state.
-------
Notes for Developers

Use mock data in src/app/api for local testing.

3D components are built with @react-three/fiber and @react-three/drei.

UI components leverage @heroui/react, TailwindCSS, and Framer Motion.

Ensure all environment variables are set before development.
---------
Contributing

Create a feature branch for new work.

Write unit tests for new functionality.

Open pull requests for review.

Keep dependencies up-to-date.

