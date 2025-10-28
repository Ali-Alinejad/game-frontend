import React from 'react';

interface GradientBorderProps {
    children: React.ReactNode;
    className?: string;
}

export const GradientBorder: React.FC<GradientBorderProps> = ({ children, className = '' }) => (
    <div className={`
    relative rounded-xl overflow-hidden
    before:absolute before:inset-0 
    before:p-[1px] before:bg-gradient-to-r before:from-amber-500/20 before:via-amber-500/10 before:to-transparent
    before:rounded-xl before:-z-10
    ${className}
  `}>
        {children}
    </div>
);