<div align="center">

# GameFord


![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?style=for-the-badge&logo=tailwindcss)
![Zustand](https://img.shields.io/badge/Zustand-5-FF9800?style=for-the-badge)

**A modern, dynamic gaming platform with news, admin dashboard, and interactive 3D experiences**

[Screenshots](#-Screenshots) • [Features](#-features) • [Getting Started](#-getting-started) • [Guidelines](#-Guidelines)

</div>

## ✨ Features

### 🎯 Core Features
- **Dynamic Game Pages** - Individual pages for each game with trailers, details, and community comments
- **Real-time News** - Gaming news with dynamic routing and article pages
- **Admin Dashboard** - Complete admin panel for managing users, games, comments, and analytics
- **Interactive 3D Effects** - Immersive visual experiences powered by Three.js
- **Smooth Animations** - Beautiful transitions and effects with Framer Motion

### 🌍 User Experience
- **Multi-language Support** - English (LTR) and Persian (RTL) with language switcher
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Theme switcher for user preference
- **Cookie Consent** - GDPR-compliant cookie management

### 🔐 Security & Authentication
- **Custom License System** - Secure license validation via npm package
- **Protected Routes** - Middleware-based authentication
- **Admin Authorization** - Role-based access control

---


## 🛠 Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript 5.2](https://www.typescriptlang.org/)** - Type safety
- **[TailwindCSS 3.3](https://tailwindcss.com/)** - Utility-first CSS framework

### State & Animation
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Three.js](https://threejs.org/)** - 3D graphics library

### Testing & Quality
- **[Jest 29](https://jestjs.io/)** - Unit testing framework
- **[ESLint](https://eslint.org/)** - Code linting
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking

### Utilities
- **[js-cookie](https://github.com/js-cookie/js-cookie)** - Cookie management
- **[gameford-license-check](https://www.npmjs.com/package/gameford-license-check)** - Custom license validation

---

## 🔐 License Check System

GameFord uses a personal proprietary license validation system via  the npm package [`gameford-license-check`](https://www.npmjs.com/package/gameford-license-check).

### How it works:
```typescript
import checkLicense from "gameford-license-check";
checkLicense();
```

### Setup:
1. Add your license key to `.env`:
```env
LICENSE_KEY=your-secret-license-key
```

2. The license check runs on application startup
3. Invalid licenses prevent access to protected features

> ⚠️ **Important**: Without a valid `LICENSE_KEY`, the application will not function.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm/yarn
- Valid GameFord license key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/gameford.git
cd gameford
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your license key:
```env
LICENSE_KEY=your-secret-license-key
```

4. **Run the development server**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

### Run Tests

```bash
pnpm test
# or
npm test
```

---

## 📄 Environment Variables

Create a `.env` file in the root directory:

```env
 # Required

LICENSE_KEY=your-secret-license-key

# Optional
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://gameford.com
```

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](./public/screenshots/home.png)
*Dynamic hero section with trending games and latest news*

### 🎮 Game Details
![Game Page](./public/screenshots/game.png)
*Comprehensive game information with trailers, screenshots, and community comments*

### 🛡️ Admin Dashboard
![Admin Panel](./public/screenshots/admin.png)
*Full-featured admin panel for content and user management*



## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guidelines
- Use TypeScript for all new files
- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure license validation is working

---

## 📝 License

This project is proprietary software. All rights reserved.

**License Key Required**: A valid license key from GameFord is required to run this application.

For licensing inquiries, contact: winford.op@gmail.com

---

## 👥 Authors

- **WINFORD** - *Initial work* - [WINFOORD](https://github.com/winfoord)

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- React community for the ecosystem
- All open-source contributors

---

## 📞 Support

For support, email [Developer](mailto:alialineejad@gmail.com)
---

<div align="center">

**[⬆ back to top](#-gameford)**

Made with ❤️

</div>

