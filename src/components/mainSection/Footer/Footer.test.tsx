import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './FooterMain';

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />;
  },
}));

const mockT = {
  logo: 'GameHub',
  heroDescription: 'The best cloud gaming platform',
  games: 'Games',
  browseGames: 'Browse Games',
  tournaments: 'Tournaments',
  leaderboards: 'Leaderboards',
  achievements: 'Achievements',
  community: 'Community',
  forums: 'Forums',
  discord: 'Discord',
  support: 'Support',
  feedback: 'Feedback',
  footer: '© 2024 GameHub. All rights reserved.',
};

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer t={mockT} />);
    expect(screen.getByText('GameHub')).toBeInTheDocument();
  });

  it('displays logo', () => {
    render(<Footer t={mockT} />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('GameHub')).toBeInTheDocument();
  });

  it('displays description text', () => {
    render(<Footer t={mockT} />);
    expect(screen.getByText('The best cloud gaming platform')).toBeInTheDocument();
  });

  it('renders Games section with all links', () => {
    render(<Footer t={mockT} />);
    expect(screen.getByText('Games')).toBeInTheDocument();
    expect(screen.getByText('Browse Games')).toBeInTheDocument();
    expect(screen.getByText('Tournaments')).toBeInTheDocument();
    expect(screen.getByText('Leaderboards')).toBeInTheDocument();
    expect(screen.getByText('Achievements')).toBeInTheDocument();
  });

  it('renders Community section with all links', () => {
    render(<Footer t={mockT} />);
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Forums')).toBeInTheDocument();
    expect(screen.getByText('Discord')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Feedback')).toBeInTheDocument();
  });

  it('displays copyright text', () => {
    render(<Footer t={mockT} />);
    expect(screen.getByText('© 2024 GameHub. All rights reserved.')).toBeInTheDocument();
  });

  it('has proper footer structure', () => {
    const { container } = render(<Footer t={mockT} />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('relative', 'py-4', 'px-4');
  });

  it('renders all links as anchor tags', () => {
    const { container } = render(<Footer t={mockT} />);
    const links = container.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0);
  });

  it('applies hover styles to links', () => {
    const { container } = render(<Footer t={mockT} />);
    const link = container.querySelector('a');
    expect(link).toHaveClass('hover:text-amber-400');
  });

  it('has grid layout for footer sections', () => {
    const { container } = render(<Footer t={mockT} />);
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-4');
  });

  it('renders with custom translations', () => {
    const customT = {
      ...mockT,
      logo: 'Custom Logo',
      footer: 'Custom footer text',
    };
    render(<Footer t={customT} />);
    expect(screen.getByText('Custom Logo')).toBeInTheDocument();
    expect(screen.getByText('Custom footer text')).toBeInTheDocument();
  });

  it('has proper styling classes', () => {
    const { container } = render(<Footer t={mockT} />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('border-t', 'border-amber-400/20');
  });

  it('section headers have proper styling', () => {
    const { container } = render(<Footer t={mockT} />);
    const headers = container.querySelectorAll('h4');
    headers.forEach(header => {
      expect(header).toHaveClass('text-amber-300', 'font-bold');
    });
  });
});