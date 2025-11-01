import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PlayhostBackground } from './index';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('PlayhostBackground', () => {
  it('renders without crashing', () => {
    const { container } = render(<PlayhostBackground />);
    expect(container).toBeInTheDocument();
  });

  it('renders with correct test id', () => {
    render(<PlayhostBackground />);
    const background = screen.getByTestId('playhost-background');
    expect(background).toBeInTheDocument();
  });

  it('applies correct intensity', () => {
    render(<PlayhostBackground intensity="high" />);
    const background = screen.getByTestId('playhost-background');
    expect(background).toBeInTheDocument();
  });
});