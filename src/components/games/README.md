# Games Components

This directory contains all the components related to game displays and interactions.

## Directory Structure

```
games/
├── details/        # Game detail page components
│   ├── navigation.tsx
│   ├── sections.tsx
│   ├── modals.tsx
│   ├── moreSections.tsx
│   └── shared.tsx
├── sections/       # Game section components
│   ├── GameSlider.tsx
│   ├── GameRankingTable.tsx
│   ├── GameModal.tsx
│   ├── GenreSections.tsx
│   └── MainNewsGrid.tsx
└── ui/            # Game-specific UI components (if needed)

## Component Categories

### Detail Components
Components used in the game detail pages:
- `navigation.tsx`: Game detail page navigation
- `sections.tsx`: Main content sections
- `modals.tsx`: Game-related modals
- `moreSections.tsx`: Additional content sections
- `shared.tsx`: Shared utilities and components

### Section Components
Components for displaying game collections and lists:
- `GameSlider`: Carousel/slider for game previews
- `GameRankingTable`: Ranked list of games
- `GameModal`: Modal for quick game info
- `GenreSections`: Genre-based game grouping
- `MainNewsGrid`: Game news display grid

## Integration with Shared Components

These components often work with shared components from:
- `/components/shared/cards/GameCard.tsx`
- `/components/shared/cards/FeatureCard.tsx`

## Additional Resources

- Game types: `/src/lib/types/games`
- Game utilities: `/src/lib/utils/games`
- Constants: `/src/lib/constants/games`
```
