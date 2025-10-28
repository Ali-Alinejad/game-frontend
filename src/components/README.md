# Project Components

This directory contains all the reusable components for the gaming website.

## Directory Structure

```
components/
├── news/              # News section components
│   ├── articles/      # Article-related components
│   ├── ui/           # News-specific UI components
│   └── README.md     # News components documentation
├── mainSection/      # Main page sections
│   ├── HeaderMain.tsx
│   ├── HeroSection.tsx
│   ├── TrendingSection.tsx
│   └── ...
├── shared/          # Shared components
│   ├── cards/       # Card components
│   │   ├── FeatureCard.tsx
│   │   ├── GameCard.tsx
│   │   └── ...
│   └── ...
└── other sections... # Other feature sections
```

## Component Categories

### News Components

Contains all components related to the news section, including article displays and UI components. See `news/README.md` for details.

### Main Section Components

Components used in the main landing page and shared across different sections:

- `HeaderMain`: Main navigation header
- `HeroSection`: Hero banner section
- `TrendingSection`: Trending games section
- `FeatureSection`: Features showcase
- `StatsSection`: Statistics display
- `NewsLetterSection`: Newsletter subscription
- `FooterMain`: Main footer

### Shared Components

Reusable components used across different sections:

- Cards
  - `FeatureCard`: Feature showcase card
  - `GameCard`: Game display card
  - Others...
