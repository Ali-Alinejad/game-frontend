// lib/data/mockNews.ts

import { NewsAuthor, NewsArticle } from '@/lib/types/news/NewsType';

export const mockAuthors: NewsAuthor[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://i.pravatar.cc/150?img=5',
    title: 'Senior Gaming Editor',
    bio: 'Sarah has been covering gaming news for over 10 years, specializing in esports and competitive gaming.'
  },
  {
    id: '2',
    name: 'محمد رضایی',
    avatar: 'https://i.pravatar.cc/150?img=12',
    title: 'نویسنده ارشد',
    bio: 'محمد با بیش از ۸ سال تجربه در حوزه بازی‌های ویدیویی، تحلیل‌های عمیقی از صنعت بازی ارائه می‌دهد.'
  },
  {
    id: '3',
    name: 'Alex Martinez',
    avatar: 'https://i.pravatar.cc/150?img=8',
    title: 'Hardware Specialist',
    bio: 'Alex specializes in gaming hardware reviews and PC building guides.'
  }
];

export const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: {
      en: 'The Future of Cloud Gaming: A Comprehensive Analysis',
      fa: 'آینده بازی‌های ابری: تحلیلی جامع'
    },
    slug: 'future-cloud-gaming-analysis',
    excerpt: {
      en: 'As internet speeds increase and latency decreases, cloud gaming is positioning itself as the future of interactive entertainment.',
      fa: 'با افزایش سرعت اینترنت و کاهش تاخیر، بازی‌های ابری خود را به عنوان آینده سرگرمی تعاملی معرفی می‌کنند.'
    },
    content: {
      en: 'Cloud gaming has evolved dramatically over the past few years. What started as an experimental technology has now become a viable option for millions of gamers worldwide.\n\nMajor tech companies have invested billions into cloud gaming infrastructure, creating data centers that can deliver high-quality gaming experiences with minimal latency.\n\nThe advantages are clear: no need for expensive hardware upgrades, instant access to games, and the ability to play on almost any device.',
      fa: 'بازی‌های ابری در چند سال گذشته به طور چشمگیری تکامل یافته‌اند. آنچه به عنوان یک فناوری آزمایشی آغاز شد، اکنون به یک گزینه قابل اجرا برای میلیون‌ها گیمر تبدیل شده است.'
    },
    category: 'industry',
    tags: ['cloud-gaming', 'technology', 'future'],
    author: mockAuthors[0],
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    featuredImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200',
    readTime: 8,
    views: 15420,
    featured: true,
    trending: true,
    breaking: true
  },
  {
    id: '2',
    title: {
      en: 'Top 10 Indie Games That Defined 2024',
      fa: '۱۰ بازی مستقل برتر که سال ۲۰۲۴ را تعریف کردند'
    },
    slug: 'top-indie-games-2024',
    excerpt: {
      en: 'Independent developers continue to push boundaries and create unforgettable experiences.',
      fa: 'توسعه‌دهندگان مستقل به پیش بردن مرزها و خلق تجربیات فراموش‌نشدنی ادامه می‌دهند.'
    },
    content: {
      en: 'The indie gaming scene has never been more vibrant. This year brought us incredible titles that prove you don\'t need a massive budget to create compelling gaming experiences.\n\nFrom pixel art masterpieces to innovative gameplay mechanics, indie developers have shown their creativity knows no bounds.',
      fa: 'صحنه بازی‌سازی مستقل هرگز پر جنب و جوش‌تر از این نبوده است. امسال عناوین باورنکردنی به ما ارائه داد که ثابت می‌کند برای ایجاد تجربیات بازی جذاب نیازی به بودجه عظیم ندارید.'
    },
    category: 'reviews',
    tags: ['indie', 'games', '2024', 'reviews'],
    author: mockAuthors[1],
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    featuredImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200',
    readTime: 12,
    views: 28900,
    featured: true
  },
  {
    id: '3',
    title: {
      en: 'RTX 5090 Review: The Graphics Card That Changes Everything',
      fa: 'بررسی RTX 5090: کارت گرافیکی که همه چیز را تغییر می‌دهد'
    },
    slug: 'rtx-5090-review',
    excerpt: {
      en: 'NVIDIA\'s latest flagship GPU promises unprecedented performance.',
      fa: 'جدیدترین GPU پرچمدار NVIDIA عملکرد بی‌سابقه‌ای را وعده می‌دهد.'
    },
    content: {
      en: 'NVIDIA has once again raised the bar for gaming performance. The RTX 5090 represents a significant leap forward in graphics technology.\n\nOur testing showed consistent 4K gaming at maximum settings across all modern titles.',
      fa: 'NVIDIA یک بار دیگر معیار عملکرد بازی را بالا برده است. RTX 5090 نشان‌دهنده یک جهش قابل توجه در فناوری گرافیک است.'
    },
    category: 'hardware',
    tags: ['nvidia', 'rtx', 'gpu', 'review'],
    author: mockAuthors[2],
    publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    featuredImage: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1200',
    readTime: 15,
    views: 45200,
    featured: true,
    trending: true
  },
  {
    id: '4',
    title: {
      en: 'Esports Salaries Reach New Heights in 2024',
      fa: 'حقوق‌های ای‌اسپورت در سال ۲۰۲۴ به اوج جدیدی رسید'
    },
    slug: 'esports-salaries-2024',
    excerpt: {
      en: 'Professional gamers are earning more than ever before.',
      fa: 'گیمرهای حرفه‌ای بیش از هر زمان دیگری درآمد دارند.'
    },
    content: {
      en: 'The esports industry has matured significantly, and player salaries reflect this growth.\n\nTop-tier professional gamers now command salaries comparable to traditional sports athletes.',
      fa: 'صنعت ای‌اسپورت به طور قابل توجهی بالغ شده است و حقوق بازیکنان منعکس‌کننده این رشد است.'
    },
    category: 'esports',
    tags: ['esports', 'salaries', 'professional-gaming'],
    author: mockAuthors[0],
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    featuredImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200',
    readTime: 10,
    views: 32100,
    trending: true
  },
  {
    id: '5',
    title: {
      en: 'Steam\'s New Refund Policy: What You Need to Know',
      fa: 'سیاست جدید بازپرداخت Steam: آنچه باید بدانید'
    },
    slug: 'steam-refund-policy-update',
    excerpt: {
      en: 'Valve has updated its refund policy with significant changes.',
      fa: 'Valve سیاست بازپرداخت خود را با تغییرات قابل توجهی به‌روزرسانی کرده است.'
    },
    content: {
      en: 'Valve has announced major updates to Steam\'s refund policy, making it more consumer-friendly.\n\nThe new policy extends the refund window and provides clearer guidelines.',
      fa: 'Valve به‌روزرسانی‌های عمده‌ای را برای سیاست بازپرداخت Steam اعلام کرده است.'
    },
    category: 'updates',
    tags: ['steam', 'valve', 'refund', 'policy'],
    author: mockAuthors[1],
    publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    featuredImage: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1200',
    readTime: 6,
    views: 18700
  },
  {
    id: '6',
    title: {
      en: 'Mobile Gaming Revenue Surpasses Console and PC Combined',
      fa: 'درآمد بازی‌های موبایل از کنسول و PC با هم بیشتر شد'
    },
    slug: 'mobile-gaming-revenue-record',
    excerpt: {
      en: 'New market data reveals the dominance of mobile gaming.',
      fa: 'داده‌های جدید بازار تسلط بازی‌های موبایل را نشان می‌دهد.'
    },
    content: {
      en: 'The latest market research has confirmed what many industry observers suspected: mobile gaming has become the dominant force.\n\nThis shift is driven by several factors, including the ubiquity of smartphones.',
      fa: 'آخرین تحقیقات بازار چیزی را که بسیاری از ناظران صنعت مشکوک بودند تأیید کرده است.'
    },
    category: 'industry',
    tags: ['mobile', 'revenue', 'market'],
    author: mockAuthors[2],
    publishedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    featuredImage: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200',
    readTime: 9,
    views: 24500
  }
];

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return mockNewsArticles.find(article => article.slug === slug);
};

// Helper function to get related articles
export const getRelatedArticles = (currentArticle: NewsArticle, limit: number = 3): NewsArticle[] => {
  return mockNewsArticles
    .filter(article => 
      article.id !== currentArticle.id && 
      (article.category === currentArticle.category || 
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
};