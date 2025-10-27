// news/components/AuthorBadge.tsx
import { NewsAuthor } from '@/app/types/News/NewsType';
import React from 'react';

interface AuthorBadgeProps {
  author: NewsAuthor;
  size?: 'small' | 'medium';
}

const AuthorBadge: React.FC<AuthorBadgeProps> = ({ author, size = 'medium' }) => {
  const avatarSize = size === 'small' ? 'w-6 h-6' : 'w-8 h-8';
  const nameStyle = size === 'small' ? 'text-xs' : 'text-sm font-semibold';
  const titleStyle = size === 'small' ? 'text-xxs' : 'text-xs text-gray-500';

  return (
    <div className="flex items-center space-x-2">
      <img
        src={author.avatar || '/authors/default.jpg'}
        alt={author.name}
        className={`rounded-full ${avatarSize} object-cover`}
      />
      <div>
        <p className={`text-gray-800 ${nameStyle}`}>{author.name}</p>
        <p className={`text-gray-500 ${titleStyle} hidden sm:block`}>{author.title}</p>
      </div>
    </div>
  );
};

export default AuthorBadge;