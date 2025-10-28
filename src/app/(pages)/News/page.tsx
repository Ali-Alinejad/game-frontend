// news/pages/NewsIndex.tsx
import React from 'react';
import { RedesignedNews } from '@/components/news';

// Server-rendered page that delegates to the client RedesignedNews component.
const Page: React.FC = () => {
  // Default translations for server-rendered entry; client wrappers (like the Header wrapper)
  // can still render a language-controlled version when needed.
  const t = { logo: 'THE GAMING TIMES' };
  const language: 'en' | 'fa' = 'en';

  return <RedesignedNews language={language} t={t} />;
};

export default Page;