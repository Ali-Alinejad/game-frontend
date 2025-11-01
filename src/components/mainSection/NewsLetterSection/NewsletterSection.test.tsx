import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NewsletterSection } from './NewsLetterSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, onClick, ...props }: any) => (
      <div onClick={onClick} {...props}>{children}</div>
    ),
    button: ({ children, onClick, ...props }: any) => (
      <button onClick={onClick} {...props}>{children}</button>
    ),
  },
}));

const mockT = {
  stayInGame: 'Stay in the Game',
  stayDesc: 'Get the latest updates and exclusive offers',
  emailPlaceholder: 'Enter your email',
  subscribe: 'Subscribe',
};

describe('NewsletterSection Component', () => {
  it('renders without crashing', () => {
    render(<NewsletterSection t={mockT} />);
    expect(screen.getByText('Stay in the Game')).toBeInTheDocument();
  });

  it('displays section title', () => {
    render(<NewsletterSection t={mockT} />);
    expect(screen.getByText('Stay in the Game')).toBeInTheDocument();
  });

  it('displays section description', () => {
    render(<NewsletterSection t={mockT} />);
    expect(screen.getByText('Get the latest updates and exclusive offers')).toBeInTheDocument();
  });

  it('renders email input field', () => {
    render(<NewsletterSection t={mockT} />);
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders subscribe button', () => {
    render(<NewsletterSection t={mockT} />);
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  it('allows typing in email input', () => {
    render(<NewsletterSection t={mockT} />);
    const input = screen.getByPlaceholderText('Enter your email') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input.value).toBe('test@example.com');
  });

  it('subscribe button is clickable', () => {
    render(<NewsletterSection t={mockT} />);
    const button = screen.getByText('Subscribe');
    
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    const { container } = render(<NewsletterSection t={mockT} />);
    expect(container.querySelector('section')).toBeInTheDocument();
    expect(container.querySelector('.relative.py-32')).toBeInTheDocument();
  });

  it('input has proper styling classes', () => {
    render(<NewsletterSection t={mockT} />);
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toHaveClass('flex-1', 'px-6', 'py-4', 'rounded-full');
  });

  it('button has proper styling classes', () => {
    render(<NewsletterSection t={mockT} />);
    const button = screen.getByText('Subscribe');
    expect(button).toHaveClass('px-8', 'py-4', 'rounded-full');
  });

  it('renders with custom translations', () => {
    const customT = {
      stayInGame: 'Custom Title',
      stayDesc: 'Custom description text',
      emailPlaceholder: 'Custom placeholder',
      subscribe: 'Custom Button',
    };
    render(<NewsletterSection t={customT} />);
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom description text')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Custom placeholder')).toBeInTheDocument();
    expect(screen.getByText('Custom Button')).toBeInTheDocument();
  });

  it('has decorative background elements', () => {
    const { container } = render(<NewsletterSection t={mockT} />);
    const decorativeElements = container.querySelectorAll('.absolute.inset-0');
    expect(decorativeElements.length).toBeGreaterThan(0);
  });

  it('form has flex layout', () => {
    const { container } = render(<NewsletterSection t={mockT} />);
    const formContainer = container.querySelector('.flex.flex-col.sm\\:flex-row');
    expect(formContainer).toBeInTheDocument();
  });

  it('input accepts only email type', () => {
    render(<NewsletterSection t={mockT} />);
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('has max-width container', () => {
    const { container } = render(<NewsletterSection t={mockT} />);
    expect(container.querySelector('.max-w-4xl')).toBeInTheDocument();
  });

  it('button has gradient background', () => {
    render(<NewsletterSection t={mockT} />);
    const button = screen.getByText('Subscribe');
    expect(button).toHaveClass('bg-gradient-to-r', 'from-amber-500', 'to-yellow-600');
  });
});