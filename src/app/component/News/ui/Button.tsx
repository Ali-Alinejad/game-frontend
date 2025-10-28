import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

const variants = {
    primary: 'bg-amber-500 hover:bg-amber-400 text-zinc-900 shadow-lg shadow-amber-500/20',
    secondary: 'bg-zinc-800 hover:bg-zinc-700 text-gray-100 border border-zinc-700',
    outline: 'bg-transparent hover:bg-zinc-800 text-gray-300 border border-zinc-700',
};

const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => (
    <button
        className={`
      rounded-full font-medium transition-all duration-300
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `}
        {...props}
    >
        {children}
    </button>
);