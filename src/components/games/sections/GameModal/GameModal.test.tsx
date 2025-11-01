import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameModal from './GameModal';
import { Game } from '@/app/types/Game';

// Mock dependencies
jest.mock('next/link', () => {
  return ({ children, href, onClick }: any) => {
    return <a href={href} onClick={onClick}>{children}</a>;
  };
});

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, onClick, ...props }: any) => (
      <div onClick={onClick} {...props}>{children}</div>
    ),
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

jest.mock('@heroui/react', () => ({
  Button: ({ children, onClick, isIconOnly, className }: any) => (
    <button onClick={onClick} className={className} data-icon-only={isIconOnly}>
      {children}
    </button>
  ),
}));

jest.mock('tailwind-merge', () => ({
  twMerge: (...classes: string[]) => classes.join(' '),
}));

const mockUseLanguageStore = jest.fn();
jest.mock('@/app/zustand/uselangStore', () => ({
  useLanguageStore: () => mockUseLanguageStore(),
}));

const mockUseLanguageFont = jest.fn();
jest.mock('@/app/hook/langFontUtils', () => ({
  useLanguageFont: () => mockUseLanguageFont(),
}));

const mockGame: Game = {
  id: '1',
  title: { en: 'Test Game', fa: 'بازی تست' },
  image: '/test-image.jpg',
  description: {
    short: {
      english: 'Test game short description',
      persian: 'توضیحات کوتاه بازی تست',
    },
    long: {
      english: 'Test game description',
      persian: 'توضیحات بازی تست',
    },
  },
  releaseDate: '2024-01-15',
  platform: ['PC'],
  marketPrice: 59.99,
  genres: ['Action', 'Adventure'],
  hasDiscount: true,
  developer: 'Test Studio',
  tags: [],
  supportedLanguages: ['English', 'Persian'],
};

describe('GameModal Component', () => {
  const defaultProps = {
    game: mockGame,
    isOpen: true,
    onClose: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Set default language to English
    mockUseLanguageStore.mockReturnValue({ lang: 'en' });
    mockUseLanguageFont.mockReturnValue({ fontClass: 'font-sans', direction: 'ltr' });
  });

  it('renders when isOpen is true', () => {
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('Test Game')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<GameModal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Test Game')).not.toBeInTheDocument();
  });

  it('displays game title', () => {
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('Test Game')).toBeInTheDocument();
  });

  it('displays game image', () => {
    render(<GameModal {...defaultProps} />);
    const image = screen.getByAltText('Test Game');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  it('displays platform', () => {
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('PC')).toBeInTheDocument();
  });

  it('displays multiple platforms', () => {
    const multiPlatformGame = { ...mockGame, platform: ['PC', 'PlayStation', 'Xbox'] };
    render(<GameModal {...defaultProps} game={multiPlatformGame} />);
    expect(screen.getByText(/PC/)).toBeInTheDocument();
  });

  it('displays price', () => {
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('$59.99')).toBeInTheDocument();
  });

  it('displays Free when price is 0', () => {
    const freeGame = { ...mockGame, marketPrice: 0 };
    render(<GameModal {...defaultProps} game={freeGame} />);
    expect(screen.getByText('Free')).toBeInTheDocument();
  });

  it('displays all genres', () => {
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Adventure')).toBeInTheDocument();
  });

  it('displays crack badge when hasDiscount is true', () => {
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('🔥 CRACK')).toBeInTheDocument();
  });

  it('does not display crack badge when hasDiscount is false', () => {
    const gameWithoutDiscount = { ...mockGame, hasDiscount: false };
    render(<GameModal {...defaultProps} game={gameWithoutDiscount} />);
    expect(screen.queryByText('🔥 CRACK')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<GameModal {...defaultProps} onClose={onClose} />);
    
    const closeButton = screen.getByRole('button', { name: '' });
    fireEvent.click(closeButton);
    
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onClose when backdrop is clicked', () => {
    const onClose = jest.fn();
    const { container } = render(<GameModal {...defaultProps} onClose={onClose} />);
    
    const backdrop = container.firstChild;
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(onClose).toHaveBeenCalled();
    }
  });

  it('does not call onClose when modal content is clicked', () => {
    const onClose = jest.fn();
    render(<GameModal {...defaultProps} onClose={onClose} />);
    
    const modalContent = screen.getByText('Test Game').closest('div');
    if (modalContent) {
      fireEvent.click(modalContent);
      expect(onClose).not.toHaveBeenCalled();
    }
  });

  it('renders detail button', () => {
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('Detail')).toBeInTheDocument();
  });

  it('navigates to game detail page when detail button is clicked', () => {
    render(<GameModal {...defaultProps} />);
    const detailLink = screen.getByText('Detail').closest('a');
    expect(detailLink).toHaveAttribute('href', '/Games/1');
  });

  it('displays rating', () => {
    render(<GameModal {...defaultProps} />);
    const ratingText = screen.getByText(/\/10/);
    expect(ratingText).toBeInTheDocument();
  });

  it('handles game with string title', () => {
    const gameWithStringTitle = { ...mockGame, title: 'Simple Title' };
    render(<GameModal {...defaultProps} game={gameWithStringTitle as any} />);
    expect(screen.getByText('Simple Title')).toBeInTheDocument();
  });

  it('handles game without description', () => {
    const gameWithoutDesc = { ...mockGame, description: undefined };
    render(<GameModal {...defaultProps} game={gameWithoutDesc as any} />);
    expect(screen.getByText('Test Game')).toBeInTheDocument();
  });

  it('applies correct direction for RTL', () => {
    mockUseLanguageFont.mockReturnValue({
      fontClass: 'font-sans',
      direction: 'rtl',
    });
    
    const { container } = render(<GameModal {...defaultProps} />);
    const modalContent = container.querySelector('[dir="rtl"]');
    expect(modalContent).toBeInTheDocument();
  });

  it('displays Persian text when language is fa', () => {
    mockUseLanguageStore.mockReturnValue({ lang: 'fa' });
    mockUseLanguageFont.mockReturnValue({ fontClass: 'font-arabic', direction: 'rtl' });
    
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('بازی تست')).toBeInTheDocument();
  });

  it('displays Persian crack badge when language is fa', () => {
    mockUseLanguageStore.mockReturnValue({ lang: 'fa' });
    mockUseLanguageFont.mockReturnValue({ fontClass: 'font-arabic', direction: 'rtl' });
    
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('🔥 کرک')).toBeInTheDocument();
  });

  it('has proper styling classes', () => {
    const { container } = render(<GameModal {...defaultProps} />);
    const modal = container.querySelector('.rounded-3xl');
    expect(modal).toBeInTheDocument();
  });

//   it('displays correct stat labels in English', () => {
//     render(<GameModal {...defaultProps} />);
//     expect(screen.getByText(/Platform|Price|Rating/)).toBeInTheDocument();
//   });

  it('displays correct stat labels in Persian', () => {
    mockUseLanguageStore.mockReturnValue({ lang: 'fa' });
    mockUseLanguageFont.mockReturnValue({ fontClass: 'font-arabic', direction: 'rtl' });
    
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('پلتفرم')).toBeInTheDocument();
    expect(screen.getByText('قیمت')).toBeInTheDocument();
    expect(screen.getByText('امتیاز')).toBeInTheDocument();
  });

  it('displays Detail button in English', () => {
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('Detail')).toBeInTheDocument();
  });

  it('displays Detail button in Persian', () => {
    mockUseLanguageStore.mockReturnValue({ lang: 'fa' });
    mockUseLanguageFont.mockReturnValue({ fontClass: 'font-arabic', direction: 'rtl' });
    
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('مشاهده')).toBeInTheDocument();
  });

  it('displays GENRES label in English', () => {
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('GENRES')).toBeInTheDocument();
  });

  it('displays genres label in Persian', () => {
    mockUseLanguageStore.mockReturnValue({ lang: 'fa' });
    mockUseLanguageFont.mockReturnValue({ fontClass: 'font-arabic', direction: 'rtl' });
    
    render(<GameModal {...defaultProps} />);
    expect(screen.getByText('ژانرها')).toBeInTheDocument();
  });
});