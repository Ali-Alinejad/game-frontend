'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AuthButtonProps {
    onClick?: () => void;
    icon: React.ReactNode;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    type?: 'button' | 'submit';
    className?: string;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
    onClick,
    icon,
    children,
    variant = 'primary',
    disabled = false,
    type = 'button',
    className
}) => {
    const baseStyles = "flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors";
    const variantStyles = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline: "border border-primary/10 bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary/5"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={cn(
                baseStyles,
                variantStyles[variant],
                disabled && 'opacity-50 cursor-not-allowed',
                className
            )}
        >
            {disabled ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
                <>
                    {icon}
                    <span>{children}</span>
                </>
            )}
        </motion.button>
    );
};