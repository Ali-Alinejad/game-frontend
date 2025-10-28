"use client";

import React from 'react';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-zinc-900 text-gray-100">
            {children}
        </div>
    );
};