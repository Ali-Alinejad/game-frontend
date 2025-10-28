'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface AuthInputProps {
    icon: React.ReactNode;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    className?: string;
    required?: boolean;
    dir?: 'ltr' | 'rtl';
}

export const AuthInput: React.FC<AuthInputProps> = ({
    icon,
    type,
    placeholder,
    value,
    onChange,
    error,
    className,
    required = false,
    dir = 'ltr'
}) => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground/50">
                {icon}
            </div>
            <input
                type={type}
                className={cn(
                    'block w-full pl-10 pr-4 py-2 text-sm rounded-lg',
                    'bg-background/50 border border-primary/10 backdrop-blur-sm',
                    'focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:outline-none',
                    'placeholder-muted-foreground/50',
                    error && 'border-destructive focus:ring-destructive/20 focus:border-destructive/30',
                    className
                )}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                dir={dir}
            />
            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-destructive"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
};