import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroSection } from './HeroSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
}));

const mockT = {
  heroTitle1: 'ULTIMATE',
  heroDescription: 'Experience the next generation of cloud gaming',
  players: 'Players',
  games: 'Games',
  tournaments: 'Tournaments',
};

describe('HeroSection Component', () => {
  const defaultProps = {
    heroY: 0,
    heroOpacity: 1,
    heroScale: 1,
    t: mockT,
  };

  it('renders without crashing', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText('ULTIMATE')).toBeInTheDocument();
  });

  it('displays hero title', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText('ULTIMATE')).toBeInTheDocument();
  });

  it('displays hero description', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText(/Experience the next generation of cloud gaming/i)).toBeInTheDocument();
  });

  it('renders all stats', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText('10M+')).toBeInTheDocument();
    expect(screen.getByText('5K+')).toBeInTheDocument();
    expect(screen.getByText('50K+')).toBeInTheDocument();
  });

  it('displays stat labels', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText('Players')).toBeInTheDocument();
    expect(screen.getByText('Games')).toBeInTheDocument();
    expect(screen.getByText('Tournaments')).toBeInTheDocument();
  });

  it('renders with custom translation', () => {
    const customT = {
      ...mockT,
      heroTitle1: 'CUSTOM TITLE',
      heroDescription: 'Custom description text',
    };
    render(<HeroSection {...defaultProps} t={customT} />);
    expect(screen.getByText('CUSTOM TITLE')).toBeInTheDocument();
    expect(screen.getByText('Custom description text')).toBeInTheDocument();
  });

  it('applies motion style props', () => {
    const { container } = render(<HeroSection {...defaultProps} />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('renders scroll indicator', () => {
    const { container } = render(<HeroSection {...defaultProps} />);
    expect(container.querySelector('.absolute.bottom-4')).toBeInTheDocument();
  });

  it('has proper structure and classes', () => {
    const { container } = render(<HeroSection {...defaultProps} />);
    expect(container.querySelector('.min-h-screen')).toBeInTheDocument();
    expect(container.querySelector('.max-w-6xl')).toBeInTheDocument();
  });
});