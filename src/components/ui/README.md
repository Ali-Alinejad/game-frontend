# UI Components

This directory contains global UI components used across the application.

## Directory Structure

````
ui/
├── cursor/        # Custom cursor components
│   └── index.tsx  # Custom cursor implementation
├── loading/       # Loading indicators and spinners
│   └── index.tsx  # Loading component
└── README.md

## Component Usage

### Cursor
Custom cursor implementation with animations and hover effects.
- Used for enhanced interactivity
- Supports different states (default, hover, click)

### Loading
Loading indicators and spinners for async operations.
- Used during data fetching
- Supports different sizes and styles

## Integration

These components can be imported directly:

```tsx
import { CustomCursor } from '@/components/ui/cursor';
import { Loading } from '@/components/ui/loading';
````

## Best Practices

1. Keep these components purely presentational
2. Use theme variables for consistent styling
3. Ensure proper accessibility
4. Document prop interfaces
