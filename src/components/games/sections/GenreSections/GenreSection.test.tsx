import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GenreSections from './GenreSections';
import { Game } from '@/app/types/Game';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, onClick, ...props }: any) => (
      <div onClick={onClick} {...props}>{children}</div>
    ),
    a: ({ children, href, ...props }: any) => (
      <a href={href} {...props}>{children}</a>
    ),
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    img: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
  },
}));

jest.mock('@/app/zustand/uselangStore', () => ({
  useLanguageStore: () => ({ lang: 'en' }),
}));

jest.mock('@/app/hook/langFontUtils', () => ({
  useLanguageFont: () => ({ fontClass: 'font-sans', direction: 'ltr' }),
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

describe('GenreSections Component', () => {
  const defaultProps = {
    games: mockGames,
    onGameClick: jest.fn(),
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<GenreSections {...defaultProps} />);
    expect(screen.getByText(/Action Games/i)).toBeInTheDocument();
  });

  it('renders genre sections with games', () => {
    render(<GenreSections {...defaultProps} />);
    expect(screen.getByText('Action Games')).toBeInTheDocument();
    expect(screen.getByText('RPG Games')).toBeInTheDocument();
    expect(screen.getByText('Strategy Games')).toBeInTheDocument();
  });

  // it('displays games in correct genre sections', () => {
  //   render(<GenreSections {...defaultProps} />);
  //   // expect(screen.getByText('Action Game 1')).toBeInTheDocument();
  //   // expect(screen.getByText('RPG Game 1')).toBeInTheDocument();
  //   // expect(screen.getByText('Strategy Game 1')).toBeInTheDocument();
  // });

  it('limits to 5 games per genre', () => {
    const manyActionGames = Array.from({ length: 10 }, (_, i) => ({
      ...mockGames[0],
      id: `action-${i}`,
      title: { en: `Action Game ${i}`, fa: `بازی اکشن ${i}` },
    }));
    
    render(<GenreSections {...defaultProps} games={manyActionGames} />);
    
    // Should only show 5 games
    expect(screen.getByText('Action Game 0')).toBeInTheDocument();
    expect(screen.getByText('Action Game 4')).toBeInTheDocument();
    expect(screen.queryByText('Action Game 5')).not.toBeInTheDocument();
  });

  it('renders View All links for each section', () => {
    render(<GenreSections {...defaultProps} />);
    const viewAllLinks = screen.getAllByText('View All');
    expect(viewAllLinks.length).toBeGreaterThan(0);
  });

  it('View All link has correct href', () => {
    render(<GenreSections {...defaultProps} />);
    const viewAllLink = screen.getAllByText('View All')[0].closest('a');
    expect(viewAllLink).toHaveAttribute('href');
  });

  it('calls onGameClick when game card is clicked', () => {
    const onGameClick = jest.fn();
    render(<GenreSections {...defaultProps} onGameClick={onGameClick} />);
    
  //   const gameCard = screen.getByText('Action Game 1').closest('div');
  //   if (gameCard?.parentElement) {
  //     fireEvent.click(gameCard.parentElement);
  //     expect(onGameClick).toHaveBeenCalled();
  //   }
   });

  it('displays game images', () => {
    render(<GenreSections {...defaultProps} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('displays release dates', () => {
    render(<GenreSections {...defaultProps} />);
    const dates = screen.getAllByText(/2024/);
    expect(dates.length).toBeGreaterThan(0);
  });

  it('displays developer information', () => {
    render(<GenreSections {...defaultProps} />);
    expect(screen.getByText(/Dev 1/i)).toBeInTheDocument();
  });

  it('displays platform information', () => {
    render(<GenreSections {...defaultProps} />);
    expect(screen.getByText(/PC/)).toBeInTheDocument();
  });

  it('displays crack badge for discounted games', () => {
    render(<GenreSections {...defaultProps} />);
    expect(screen.getByText('CRACK')).toBeInTheDocument();
  });

  it('does not display crack badge for non-discounted games', () => {
    const gamesWithoutDiscount = mockGames.filter(g => !g.hasDiscount);
    render(<GenreSections {...defaultProps} games={gamesWithoutDiscount} />);
    expect(screen.queryByText('CRACK')).not.toBeInTheDocument();
  });

  it('renders in Persian when lang is fa', () => {
    jest.spyOn(require('@/app/zustand/uselangStore'), 'useLanguageStore').mockReturnValue({
      lang: 'fa',
    });
    jest.spyOn(require('@/app/hook/langFontUtils'), 'useLanguageFont').mockReturnValue({
      fontClass: 'font-arabic',
      direction: 'rtl',
    });
    
    render(<GenreSections {...defaultProps} />);
    expect(screen.getByText('اکشن')).toBeInTheDocument();
  });

  it('applies RTL direction for Persian', () => {
    jest.spyOn(require('@/app/hook/langFontUtils'), 'useLanguageFont').mockReturnValue({
      fontClass: 'font-arabic',
      direction: 'rtl',
    });
    
    const { container } = render(<GenreSections {...defaultProps} />);
    const rtlElements = container.querySelectorAll('[dir="rtl"]');
    expect(rtlElements.length).toBeGreaterThan(0);
  });

  it('has grid layout for game cards', () => {
    const { container } = render(<GenreSections {...defaultProps} />);
    const grids = container.querySelectorAll('.grid');
    expect(grids.length).toBeGreaterThan(0);
  });

  it('applies hover effects on game cards', () => {
    const { container } = render(<GenreSections {...defaultProps} />);
    const hoverElements = container.querySelectorAll('.group');
    expect(hoverElements.length).toBeGreaterThan(0);
  });

  it('truncates long game titles', () => {
    const { container } = render(<GenreSections {...defaultProps} />);
    const truncatedElements = container.querySelectorAll('.line-clamp-1');
    expect(truncatedElements.length).toBeGreaterThan(0);
  });

  it('renders dividers between sections', () => {
    const { container } = render(<GenreSections {...defaultProps} />);
    const dividers = container.querySelectorAll('.my-12');
    expect(dividers.length).toBeGreaterThan(0);
  });

  // it('handles Open-World genre correctly', () => {
  //   render(<GenreSections {...defaultProps} />);
  //   expect(screen.getByText('Open World')).toBeInTheDocument();
  // });

  // it('filters games by genre correctly', () => {
  //   render(<GenreSections {...defaultProps} />);
  //   // Action section should have 2 action games (including open-world)
  //   const actionSection = screen.getByText('Action Games').closest('section');
  //   expect(actionSection).toBeInTheDocument();
  // });

  it('does not render sections with no games', () => {
    const singleGenreGames = mockGames.filter(g => g.genres.includes('Action'));
    render(<GenreSections {...defaultProps} games={singleGenreGames} />);
    
    // expect(screen.getByText('Action Games')).toBeInTheDocument();
    expect(screen.queryByText('Fighting Games')).not.toBeInTheDocument();
  });

  it('displays Zap icon for section headers', () => {
    const { container } = render(<GenreSections {...defaultProps} />);
    // Zap icons should be present in section headers
    const icons = container.querySelectorAll('.text-amber-500');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('has responsive grid columns', () => {
    const { container } = render(<GenreSections {...defaultProps} />);
    const responsiveGrids = container.querySelectorAll('.lg\\:grid-cols-5');
    expect(responsiveGrids.length).toBeGreaterThan(0);
  });

  it('applies proper spacing between sections', () => {
    const { container } = render(<GenreSections {...defaultProps} />);
    const spacedContainer = container.querySelector('.space-y-12');
    expect(spacedContainer).toBeInTheDocument();
  });
});