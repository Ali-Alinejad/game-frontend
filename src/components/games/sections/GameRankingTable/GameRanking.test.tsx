import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameRankingTable from './GameRankingTable';
import { Game } from '@/app/types/Game';
import Image from 'next/image';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, onClick, ...props }: any) => (
      <div onClick={onClick} {...props}>{children}</div>
    ),
    button: ({ children, onClick, ...props }: any) => (
      <button onClick={onClick} {...props}>{children}</button>
    ),
    img: ({ src, alt, ...props }: any) => (
      <Image src={src} alt={alt} {...props} />
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

const mockGames: Game[] = [
  {
    id: '1',
    title: { en: 'Game 1', fa: 'بازی ۱' },
    image: '/game1.jpg',
    genres: ['Action'],
    platform: ['PC'],
    hasDiscount: false,
    developer: 'Dev 1',
    releaseDate: '2024-01-01',
    marketPrice: 59.99,
    tags: [],
    supportedLanguages: ['English'],
    description: {
      short: {
        english: 'An action-packed adventure',
        persian: 'ماجراجویی پر از اکشن'
      },
      long: {
        english: 'Experience intense action gameplay with stunning graphics',
        persian: 'گیم‌پلی اکشن شدید را با گرافیک خیره‌کننده تجربه کنید'
      }
    }
  },
  {
    id: '2',
    title: { en: 'Game 2', fa: 'بازی ۲' },
    image: '/game2.jpg',
    genres: ['RPG'],
    platform: ['PS5'],
    hasDiscount: true,
    developer: 'Dev 2',
    releaseDate: '2024-02-01',
    marketPrice: 49.99,
    tags: [],
    supportedLanguages: ['English'],
    description: {
      short: {
        english: 'Epic role-playing game',
        persian: 'بازی نقش‌آفرینی حماسی'
      },
      long: {
        english: 'Embark on an epic journey in this immersive RPG',
        persian: 'در این RPG همه‌جانبه سفری حماسی را آغاز کنید'
      }
    }
  },
  {
    id: '3',
    title: { en: 'Game 3', fa: 'بازی ۳' },
    image: '/game3.jpg',
    genres: ['Strategy'],
    platform: ['Xbox'],
    hasDiscount: false,
    developer: 'Dev 3',
    releaseDate: '2024-03-01',
    marketPrice: 39.99,
    tags: [],
    supportedLanguages: ['English'],
    description: {
      short: {
        english: 'Strategic warfare simulator',
        persian: 'شبیه‌ساز جنگ استراتژیک'
      },
      long: {
        english: 'Command your forces in this deep strategy game',
        persian: 'نیروهای خود را در این بازی استراتژی عمیق فرمان دهید'
      }
    }
  },
];

const mockTabLabels = {
  top: 'Top Rated',
  popular: 'Popular',
  newest: 'Newest',
};

const getGameTitle = (game: Game) => {
  return typeof game.title === 'object' ? game.title.en : game.title;
};

describe('GameRankingTable Component', () => {
  const defaultProps = {
    games: mockGames,
    activeTab: 'top' as const,
    setActiveTab: jest.fn(),
    tabLabels: mockTabLabels,
    onGameClick: jest.fn(),
    getGameTitle,
    lang: 'en',
    direction: 'ltr',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<GameRankingTable {...defaultProps} />);
    expect(screen.getByText('Exclusive Rankings')).toBeInTheDocument();
  });

  it('displays header title', () => {
    render(<GameRankingTable {...defaultProps} />);
    expect(screen.getByText('Exclusive Rankings')).toBeInTheDocument();
  });

  it('displays Persian header when lang is fa', () => {
    render(<GameRankingTable {...defaultProps} lang="fa" />);
    expect(screen.getByText('فهرست ویژه')).toBeInTheDocument();
  });

  it('renders all tab buttons', () => {
    render(<GameRankingTable {...defaultProps} />);
    expect(screen.getByText('Top Rated')).toBeInTheDocument();
    expect(screen.getByText('Popular')).toBeInTheDocument();
    expect(screen.getByText('Newest')).toBeInTheDocument();
  });

  it('highlights active tab', () => {
    render(<GameRankingTable {...defaultProps} activeTab="popular" />);
    const popularButton = screen.getByText('Popular').closest('button');
    expect(popularButton).toBeInTheDocument();
  });

  it('calls setActiveTab when tab is clicked', () => {
    const setActiveTab = jest.fn();
    render(<GameRankingTable {...defaultProps} setActiveTab={setActiveTab} />);
    
    const popularTab = screen.getByText('Popular');
    fireEvent.click(popularTab);
    
    expect(setActiveTab).toHaveBeenCalledWith('popular');
  });

  it('renders all games in the list', () => {
    render(<GameRankingTable {...defaultProps} />);
    expect(screen.getByText('Game 1')).toBeInTheDocument();
    expect(screen.getByText('Game 2')).toBeInTheDocument();
    expect(screen.getByText('Game 3')).toBeInTheDocument();
  });

  it('displays game images', () => {
    render(<GameRankingTable {...defaultProps} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockGames.length);
    expect(images[0]).toHaveAttribute('src', '/game1.jpg');
  });

  it('displays rank numbers', () => {
    render(<GameRankingTable {...defaultProps} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('displays ratings for each game', () => {
    render(<GameRankingTable {...defaultProps} />);
    const ratings = screen.getAllByText(/★/);
    expect(ratings.length).toBeGreaterThan(0);
  });

  it('displays view counts', () => {
    render(<GameRankingTable {...defaultProps} />);
    const viewCounts = screen.getAllByText(/K VIEWS/);
    expect(viewCounts.length).toBe(mockGames.length);
  });

  it('calls onGameClick when game is clicked', () => {
    const onGameClick = jest.fn();
    render(<GameRankingTable {...defaultProps} onGameClick={onGameClick} />);
    
    const gameElement = screen.getByText('Game 1').closest('div');
    if (gameElement?.parentElement) {
      fireEvent.click(gameElement.parentElement);
      expect(onGameClick).toHaveBeenCalledWith(mockGames[0]);
    }
  });

  it('renders tab icons', () => {
    render(<GameRankingTable {...defaultProps} />);
    expect(screen.getByText('♕')).toBeInTheDocument(); // top
    expect(screen.getByText('⚜')).toBeInTheDocument(); // popular
    expect(screen.getByText('✦')).toBeInTheDocument(); // newest
  });

  it('applies RTL direction correctly', () => {
    const { container } = render(<GameRankingTable {...defaultProps} direction="rtl" />);
    const elements = container.querySelectorAll('[dir="rtl"]');
    expect(elements.length).toBeGreaterThan(0);
  });

  it('has scrollable container', () => {
    const { container } = render(<GameRankingTable {...defaultProps} />);
    const scrollContainer = container.querySelector('.overflow-y-auto');
    expect(scrollContainer).toBeInTheDocument();
  });

  it('applies hover effects', () => {
    const { container } = render(<GameRankingTable {...defaultProps} />);
    const gameItems = container.querySelectorAll('.group');
    expect(gameItems.length).toBe(mockGames.length);
  });

  it('truncates long game titles', () => {
    const longTitleGame = {
      ...mockGames[0],
      title: { en: 'Very Long Game Title That Should Be Truncated', fa: 'عنوان بسیار طولانی' },
    };
    render(<GameRankingTable {...defaultProps} games={[longTitleGame]} />);
    
    const { container } = render(<GameRankingTable {...defaultProps} games={[longTitleGame]} />);
    const titleElement = container.querySelector('.truncate');
    expect(titleElement).toBeInTheDocument();
  });

  it('switches between tabs correctly', () => {
    const setActiveTab = jest.fn();
    const { rerender } = render(
      <GameRankingTable {...defaultProps} activeTab="top" setActiveTab={setActiveTab} />
    );
    
    const newestTab = screen.getByText('Newest');
    fireEvent.click(newestTab);
    expect(setActiveTab).toHaveBeenCalledWith('newest');
    
    rerender(
      <GameRankingTable {...defaultProps} activeTab="newest" setActiveTab={setActiveTab} />
    );
    expect(screen.getByText('Newest')).toBeInTheDocument();
  });

  it('renders empty state when no games', () => {
    render(<GameRankingTable {...defaultProps} games={[]} />);
    expect(screen.getByText('Exclusive Rankings')).toBeInTheDocument();
  });

  it('displays navigation arrows', () => {
    render(<GameRankingTable {...defaultProps} />);
    const arrows = screen.getAllByText('›');
    expect(arrows.length).toBe(mockGames.length);
  });

  it('displays correct arrow for RTL', () => {
    render(<GameRankingTable {...defaultProps} direction="rtl" />);
    const arrows = screen.getAllByText('‹');
    expect(arrows.length).toBe(mockGames.length);
  });

  it('has proper styling classes', () => {
    const { container } = render(<GameRankingTable {...defaultProps} />);
    expect(container.querySelector('.backdrop-blur-xl')).toBeInTheDocument();
    expect(container.querySelector('.shadow-2xl')).toBeInTheDocument();
  });
});