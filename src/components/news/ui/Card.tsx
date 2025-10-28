import React from 'react';

interface CardProps {
    children: React.ReactNode;
    hover?: boolean;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, hover = true, className = '' }) => (
    <div
        className={`
      bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-zinc-700/50
      ${hover ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10' : ''}
      ${className}
    `}
    >
        {children}
    </div>
);