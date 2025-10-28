# Admin Components

This directory contains all the components related to the admin dashboard.

## Directory Structure

```
admin/
├── tabs/           # Admin dashboard tabs
│   ├── CommentsTab.tsx
│   ├── GamesTab.tsx
│   ├── OverviewTab.tsx
│   ├── PlaceholderTab.tsx
│   └── UsersTab.tsx
├── modals/         # Modal components
│   ├── GameForModal.tsx
│   └── steps/      # Game creation steps
│       ├── Step1BasicInfo.tsx
│       ├── Step2Description.tsx
│       ├── Step3Media.tsx
│       └── Step4Technical.tsx
├── Header.tsx      # Admin dashboard header
└── Sidebar.tsx     # Admin dashboard sidebar

## Additional Resources

- Types: `/src/lib/types/admin`
- Utils: `/src/lib/utils/admin`
- Constants: `/src/lib/constants/admin`

## Component Usage

### Tabs
Each tab represents a different section of the admin dashboard:
- `OverviewTab`: Dashboard statistics and metrics
- `GamesTab`: Game management interface
- `UsersTab`: User management interface
- `CommentsTab`: Comment moderation interface

### Modals
Modal components for various admin actions:
- `GameForModal`: Game creation/editing modal
  - Uses a step-based approach with 4 distinct steps

### Navigation
- `Header`: Top navigation bar with user controls
- `Sidebar`: Main navigation sidebar with section links
```
