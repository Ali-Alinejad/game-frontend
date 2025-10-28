import React from 'react';

interface CategoryChipProps {
    category: string;
    trending?: boolean;
    className?: string;
    textLanguage?: 'en' | 'fa';
}

export const CategoryChip: React.FC<CategoryChipProps> = ({
    category,
    trending,
    className = '',
    textLanguage = 'en'
}) => (
    <span className={`
    inline-block px-3 py-1 rounded-full text-xs font-medium
    bg-amber-500/20 text-amber-300 border border-amber-500/30
    ${className}
  `}>
        {category.toUpperCase()}
        {trending && <span className="ml-1 text-amber-400/80">
            {textLanguage === 'fa' ? '• پرطرفدار' : '• TRENDING'}
        </span>}
    </span>
);