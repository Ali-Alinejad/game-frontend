import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FeaturesSection } from './FeatureSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock FeatureCard component
jest.mock('@/components/shared/cards/FeatureCard', () => ({
  FeatureCard: ({ title, description, delay }: any) => (
    <div data-testid="feature-card" data-delay={delay}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ),
}));

const mockFeatures = [
  {
    icon: 'icon1',
    title: 'Ultra Low Latency',
    description: 'Experience gaming with minimal delay',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: 'icon2',
    title: '4K Graphics',
    description: 'Stunning visual quality',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'icon3',
    title: 'Cross Platform',
    description: 'Play anywhere, anytime',
    gradient: 'from-pink-500 to-red-500',
  },
];

jest.mock('@/app/types/constants/data', () => ({
  getFeatures: () => mockFeatures,
}));

const mockT = {
  whyChoose: 'Why Choose Us',
  whyDescription: 'Discover what makes us special',
};

describe('FeaturesSection Component', () => {
  it('renders without crashing', () => {
    render(<FeaturesSection t={mockT} />);
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument();
  });

  it('displays section title', () => {
    render(<FeaturesSection t={mockT} />);
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument();
  });

  it('displays section description', () => {
    render(<FeaturesSection t={mockT} />);
    expect(screen.getByText('Discover what makes us special')).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    render(<FeaturesSection t={mockT} />);
    const featureCards = screen.getAllByTestId('feature-card');
    expect(featureCards).toHaveLength(3);
  });

  it('displays feature titles', () => {
    render(<FeaturesSection t={mockT} />);
    expect(screen.getByText('Ultra Low Latency')).toBeInTheDocument();
    expect(screen.getByText('4K Graphics')).toBeInTheDocument();
    expect(screen.getByText('Cross Platform')).toBeInTheDocument();
  });

  it('displays feature descriptions', () => {
    render(<FeaturesSection t={mockT} />);
    expect(screen.getByText('Experience gaming with minimal delay')).toBeInTheDocument();
    expect(screen.getByText('Stunning visual quality')).toBeInTheDocument();
    expect(screen.getByText('Play anywhere, anytime')).toBeInTheDocument();
  });

  it('applies staggered delays to feature cards', () => {
    render(<FeaturesSection t={mockT} />);
    const featureCards = screen.getAllByTestId('feature-card');
    
    expect(featureCards[0]).toHaveAttribute('data-delay', '0');
    expect(featureCards[1]).toHaveAttribute('data-delay', '0.2');
    expect(featureCards[2]).toHaveAttribute('data-delay', '0.4');
  });

  it('has proper grid layout classes', () => {
    const { container } = render(<FeaturesSection t={mockT} />);
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
  });

  it('renders with custom translations', () => {
    const customT = {
      whyChoose: 'Custom Title',
      whyDescription: 'Custom Description',
    };
    render(<FeaturesSection t={customT} />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    const { container } = render(<FeaturesSection t={mockT} />);
    expect(container.querySelector('section')).toBeInTheDocument();
    expect(container.querySelector('.max-w-7xl')).toBeInTheDocument();
  });
});