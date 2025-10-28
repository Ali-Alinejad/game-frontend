# News Components

This directory contains all the components related to the news section of the gaming website.

## Directory Structure

```
news/
├── articles/         # Article-related components
│   ├── ArticleCard.tsx
│   ├── FeaturedArticleHero.tsx
│   └── SmallArticle.tsx
├── ui/              # Shared UI components specific to news
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── CategoryChip.tsx
│   ├── GradientBorder.tsx
│   ├── ThemeProvider.tsx
│   └── index.ts
├── AuthorBadge.tsx  # Author information component
├── NewsGrid.tsx     # Grid layout for news articles
├── NewsIndexWrapper.tsx # Main wrapper with language support
├── RedesignedNews.tsx  # New layout implementation
└── index.ts         # Barrel exports
```

## Component Usage

### RedesignedNews

The main news section component with dark theme and RTL support.

### NewsIndexWrapper

Handles language switching and theme context for the news section.

### UI Components

Reusable UI components styled specifically for the news section:

- `Button`: Custom button component with variants
- `Card`: Card container with hover effects
- `CategoryChip`: Tag/category display component
- `GradientBorder`: Border effect component
- `ThemeProvider`: Theme context provider
