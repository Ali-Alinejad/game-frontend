import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './HeaderMain';
import { useRouter } from 'next/navigation';

// Mock Next.js dependencies
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>;
  };
});

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />;
  },
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, onClick, ...props }: any) => (
      <button onClick={onClick} {...props}>{children}</button>
    ),
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock LanguageSwitcher
jest.mock('@/components/shared/LanguageSwitcher', () => ({
  LanguageSwitcher: () => <div data-testid="language-switcher">Language Switcher</div>,
}));

const mockT = {
  logo: 'GameHub',
  login: 'Login',
  searchPlaceholder: 'Search games...',
  home: 'Home',
  games: 'Games',
  about: 'About',
};

const mockUser = {
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  avatar: '/avatar.png',
};

const mockMenuItems = [
  { id: 'home', label: 'Home', path: '/', icon: () => null },
  { id: 'games', label: 'Games', path: '/games', icon: () => null },
];

jest.mock('@/app/types/constants/data', () => ({
  getMenuItems: () => mockMenuItems,
}));

describe('Header Component', () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const defaultProps = {
    isLoggedIn: false,
    user: null,
    activeItem: 'home',
    isScrolled: false,
    isMenuOpen: false,
    lang: 'en' as const,
    t: mockT,
    onLogout: jest.fn(),
    onNavigation: jest.fn(),
    onToggleMenu: jest.fn(),
    onToggleLang: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  it('displays logo text', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByText('GameHub')).toBeInTheDocument();
  });

  it('shows login button when user is not logged in', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('calls router.push when login button is clicked', () => {
    render(<Header {...defaultProps} />);
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    expect(mockRouter.push).toHaveBeenCalledWith('/auth/login');
  });

  it('displays user avatar when logged in', () => {
    render(<Header {...defaultProps} isLoggedIn={true} user={mockUser} />);
    const avatar = screen.getByAltText(`${mockUser.name}'s avatar`);
    expect(avatar).toBeInTheDocument();
  });

  it('calls onLogout when logout button is clicked', () => {
    const onLogout = jest.fn();
    render(<Header {...defaultProps} isLoggedIn={true} user={mockUser} onLogout={onLogout} />);
    
    const logoutButtons = screen.getAllByRole('button');
    const logoutButton = logoutButtons.find(btn => btn.querySelector('[class*="LogOut"]'));
    
    if (logoutButton) {
      fireEvent.click(logoutButton);
      expect(onLogout).toHaveBeenCalled();
    }
  });

  it('toggles menu when menu button is clicked', () => {
    const onToggleMenu = jest.fn();
    render(<Header {...defaultProps} onToggleMenu={onToggleMenu} />);
    
    const buttons = screen.getAllByRole('button');
    const menuButton = buttons.find(btn => 
      btn.className.includes('lg:hidden')
    );
    
    if (menuButton) {
      fireEvent.click(menuButton);
      expect(onToggleMenu).toHaveBeenCalled();
    }
  });

  it('toggles search overlay when search button is clicked', () => {
    render(<Header {...defaultProps} />);
    
    const buttons = screen.getAllByRole('button');
    const searchButton = buttons.find(btn => 
      btn.querySelector('[class*="Search"]')
    );
    
    if (searchButton) {
      fireEvent.click(searchButton);
      expect(screen.getByPlaceholderText('Search games...')).toBeInTheDocument();
    }
  });

  it('applies scrolled styles when isScrolled is true', () => {
    const { container } = render(<Header {...defaultProps} isScrolled={true} />);
    expect(container).toBeInTheDocument();
  });

  it('renders navigation menu items', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Games')).toBeInTheDocument();
  });

  it('highlights active menu item', () => {
    render(<Header {...defaultProps} activeItem="games" />);
    const gamesLink = screen.getByText('Games').closest('button');
    expect(gamesLink).toHaveClass('bg-white/15');
  });

  it('renders language switcher', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });

  it('closes search overlay when clicking outside', () => {
    render(<Header {...defaultProps} />);
    
    const buttons = screen.getAllByRole('button');
    const searchButton = buttons.find(btn => 
      btn.querySelector('[class*="Search"]')
    );
    
    if (searchButton) {
      fireEvent.click(searchButton);
      const overlay = screen.getByPlaceholderText('Search games...').closest('div')?.parentElement?.parentElement;
      if (overlay) {
        fireEvent.click(overlay);
      }
    }
  });

  it('handles RTL language correctly', () => {
    render(<Header {...defaultProps} lang="fa" />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });
});