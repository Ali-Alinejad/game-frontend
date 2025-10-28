# Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (pages)/           # Route groups
│   │   ├── admin/         # Admin dashboard
│   │   ├── Games/         # Games section
│   │   ├── News/          # News section
│   │   └── HeroSection/   # Landing page
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/            # Reusable components
│   ├── admin/            # Admin dashboard components
│   │   ├── modals/      # Admin modals
│   │   ├── tabs/        # Dashboard tabs
│   │   └── README.md
│   ├── games/           # Game components
│   │   ├── details/     # Game detail components
│   │   ├── sections/    # Game sections
│   │   └── README.md
│   ├── news/            # News components
│   │   ├── articles/    # Article components
│   │   ├── ui/         # News UI components
│   │   └── README.md
│   ├── mainSection/     # Main page sections
│   ├── ui/             # Global UI components
│   │   ├── cursor/     # Custom cursor
│   │   └── loading/    # Loading indicators
│   ├── 3d/             # 3D components and effects
│   ├── layout/         # Layout components
│   ├── shared/         # Shared components
│   │   └── cards/     # Card components
│   └── README.md
├── lib/                # Utilities and types
│   ├── types/         # TypeScript types
│   │   ├── news/     # News-related types
│   │   ├── hero/     # Hero section types
│   │   └── constants/
│   └── utils/        # Utility functions
│       └── news/     # News-specific utils
└── public/          # Static assets
    ├── fonts/
    ├── images/
    └── logoes/
```

## Directory Structure Explanation

### `/src/app`

Next.js app directory using the App Router pattern. Contains page routes and layouts.

### `/src/components`

Reusable React components organized by feature and shared utilities.

- `/news`: News section components with their own UI library
- `/mainSection`: Main page section components
- `/shared`: Components used across different sections

### `/src/lib`

Application utilities and TypeScript types.

- `/types`: Type definitions organized by feature
- `/utils`: Utility functions and helpers

### `/public`

Static assets including fonts, images, and logos.
