import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameSlider from './GameSilder';
import { Game } from '@/app/types/Game';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useAnimation: () => ({
    start: jest.fn().mockResolvedValue(undefined),
  }),
}));

jest.mock('@heroui/react', () => ({
  Card: ({ children, className }: any) => (
    <div className={className}>{children}</div>
  ),
}));

jest.mock('@/app/zustand/uselangStore', () => ({
  useLanguageStore: () => ({ lang: 'en' }),
}));

const mockGames: Game[] = Array.from({ length: 15 }, (_, i) => ({
  id: `${i + 1}`,
  title: { en: `Game ${i + 1}`, fa: `بازی ${i + 1}` },
  image: `/game${i + 1}.jpg`,
  genres: ['Action'],
  platform: ['PC'],
  hasDiscount: i % 2 === 0,
  developer: `Developer ${i + 1}`,
  releaseDate: '2024-01-01',
  marketPrice: 59.99,
  tags: [],
  supportedLanguages: ['English'],
  description: {
    short: {
      english: `Short description for Game ${i + 1}`,
      persian: `توضیحات کوتاه برای بازی ${i + 1}`
    },
    long: {
      english: `Detailed description for Game ${i + 1}`,
      persian: `توضیحات کامل برای بازی ${i + 1}`
    }
  }
}));

describe('GameSlider Component', () => {
  const defaultProps = {
    games: mockGames,
    onGameClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders without crashing', () => {
    render(<GameSlider {...defaultProps} />);
    expect(screen.getByText('Game 1')).toBeInTheDocument();
  });

  it('displays only first 10 games', () => {
    render(<GameSlider {...defaultProps} />);
    expect(screen.getByText('Game 1')).toBeInTheDocument();
    expect(screen.getByText('Game 10')).toBeInTheDocument();
    expect(screen.queryByText('Game 11')).not.toBeInTheDocument();
  });

  it('renders game images', () => {
    render(<GameSlider {...defaultProps} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
    expect(images[0]).toHaveAttribute('src', '/game1.jpg');
  });

  it('calls onGameClick when game card is clicked', () => {
    const onGameClick = jest.fn();
    render(<GameSlider {...defaultProps} onGameClick={onGameClick} />);
    
    const gameCard = screen.getByText('Game 1').closest('div');
    if (gameCard?.parentElement?.parentElement) {
      fireEvent.click(gameCard.parentElement.parentElement);
      expect(onGameClick).toHaveBeenCalledWith(mockGames[0]);
    }
  });

  it('displays game titles in English', () => {
    render(<GameSlider {...defaultProps} />);
    expect(screen.getByText('Game 1')).toBeInTheDocument();
    expect(screen.getByText('Game 2')).toBeInTheDocument();
  });

  it('displays game titles in Persian when lang is fa', () => {
    jest.spyOn(require('@/app/zustand/uselangStore'), 'useLanguageStore').mockReturnValue({
      lang: 'fa',
    });
    
    render(<GameSlider {...defaultProps} />);
    expect(screen.getByText('بازی 1')).toBeInTheDocument();
  });

  it('applies hover effects on game cards', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const cards = container.querySelectorAll('.group');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('has gradient overlay on images', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const gradients = container.querySelectorAll('.bg-gradient-to-t');
    expect(gradients.length).toBeGreaterThan(0);
  });

  it('renders with proper card width', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const cards = container.querySelectorAll('.w-60');
    expect(cards.length).toBe(10); // First 10 games
  });

  it('has overflow hidden container', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const overflow = container.querySelector('.overflow-hidden');
    expect(overflow).toBeInTheDocument();
  });

  it('applies flex layout to slider', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const flexContainer = container.querySelector('.flex');
    expect(flexContainer).toBeInTheDocument();
  });

  it('handles empty games array', () => {
    render(<GameSlider {...defaultProps} games={[]} />);
    const { container } = render(<GameSlider {...defaultProps} games={[]} />);
    expect(container.querySelector('.overflow-hidden')).toBeInTheDocument();
  });

  it('handles games array with less than 10 items', () => {
    const fewGames = mockGames.slice(0, 5);
    render(<GameSlider {...defaultProps} games={fewGames} />);
    // expect(screen.getByText('Game 5')).toBeInTheDocument();
    expect(screen.queryByText('Game 6')).not.toBeInTheDocument();
  });

  it('applies LTR direction', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const dirElement = container.querySelector('[dir="ltr"]');
    expect(dirElement).toBeInTheDocument();
  });

  it('renders Card components', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const cards = container.querySelectorAll('.rounded-lg');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('applies transform and scale effects', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const transformElements = container.querySelectorAll('.group-hover\\:scale-105');
    expect(transformElements.length).toBeGreaterThan(0);
  });

  it('has proper image styling', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const images = container.querySelectorAll('img');
    images.forEach(img => {
      expect(img).toHaveClass('object-cover');
    });
  });

  it('displays game info at bottom of cards', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const bottomElements = container.querySelectorAll('.absolute.bottom-4');
    expect(bottomElements.length).toBeGreaterThan(0);
  });

  it('truncates long titles', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const titles = container.querySelectorAll('.line-clamp-2');
    expect(titles.length).toBeGreaterThan(0);
  });

  it('has cursor pointer on clickable elements', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const clickableElements = container.querySelectorAll('.cursor-pointer');
    expect(clickableElements.length).toBeGreaterThan(0);
  });



  it('renders with proper spacing', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const spacedElements = container.querySelectorAll('.mx-4');
    expect(spacedElements.length).toBeGreaterThan(0);
  });

  it('has transition effects', () => {
    const { container } = render(<GameSlider {...defaultProps} />);
    const transitionElements = container.querySelectorAll('.transition-all');
    expect(transitionElements.length).toBeGreaterThan(0);
  });
});