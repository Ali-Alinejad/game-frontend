// types/mockNewsData.ts
import { NewsArticle, NewsAuthor } from './NewsType';

export const mockAuthors: NewsAuthor[] = [
  {
    id: '1',
    name: 'John Peterson',
    title: 'Senior Gaming Editor',
    avatar: '/images/avatars/man1.png'
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    title: 'Reviews Editor',
    avatar: '/authors/sarah.jpg'
  },
  {
    id: '3',
    name: 'David Chen',
    title: 'Esports Correspondent',
    avatar: '/authors/david.jpg'
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    title: 'Industry Analyst',
    avatar: '/authors/emily.jpg'
  }
];

export const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'path-of-exile-2-early-access-announcement',
    title: {
      en: 'Path of Exile 2 Early Access Announced for December 2024',
      fa: 'دسترسی زودهنگام Path of Exile 2 برای دسامبر 2024 اعلام شد'
    },
    excerpt: {
      en: 'Grinding Gear Games has officially announced the early access release date for their highly anticipated action RPG sequel.',
      fa: 'Grinding Gear Games به طور رسمی تاریخ انتشار دسترسی زودهنگام برای دنباله بسیار مورد انتظار اکشن RPG خود را اعلام کرد.'
    },
    content: {
      en: 'In a major announcement today, Grinding Gear Games revealed that Path of Exile 2 will enter early access on December 6, 2024. The sequel promises to revolutionize the action RPG genre with its innovative skill system and stunning graphics powered by a new engine...',
      fa: 'در یک اعلامیه مهم امروز، Grinding Gear Games فاش کرد که Path of Exile 2 در 6 دسامبر 2024 وارد دسترسی زودهنگام خواهد شد. این دنباله قول می‌دهد که ژانر اکشن RPG را با سیستم مهارت نوآورانه و گرافیک خیره‌کننده خود که توسط موتور جدید پشتیبانی می‌شود، متحول کند...'
    },
    category: 'breaking',
    tags: ['Path of Exile 2', 'Action RPG', 'Early Access', 'Grinding Gear Games'],
    author: mockAuthors[0],
    publishedAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    featuredImage: '/images/Games/starwars.png',
    readTime: 5,
    views: 15420,
    featured: true,
    trending: true
  },
  {
    id: '2',
    slug: 'doom-dark-ages-gameplay-reveal',
    title: {
      en: 'DOOM: The Dark Ages Reveals Medieval Mayhem Gameplay',
      fa: 'DOOM: The Dark Ages گیم‌پلی هرج و مرج قرون وسطایی را نشان می‌دهد'
    },
    excerpt: {
      en: 'id Software showcases brutal medieval combat with mechs and dragons in the upcoming DOOM prequel.',
      fa: 'id Software نبردهای وحشیانه قرون وسطایی با مکس‌ها و اژدهاها را در پیش‌درآمد آینده DOOM به نمایش می‌گذارد.'
    },
    content: {
      en: 'During today\'s gaming showcase, id Software pulled back the curtain on DOOM: The Dark Ages, revealing a surprising medieval setting. The game features the Doom Slayer in a darker, more brutal past...',
      fa: 'در طی نمایش بازی‌های امروز، id Software پرده از DOOM: The Dark Ages برداشت و یک محیط قرون وسطایی شگفت‌انگیز را نشان داد. این بازی دارای Doom Slayer در یک گذشته تاریک‌تر و وحشیانه‌تر است...'
    },
    category: 'updates',
    tags: ['DOOM', 'id Software', 'FPS', 'Action'],
    author: mockAuthors[1],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    featuredImage: '/images/Games/minecraft.png',
    readTime: 4,
    views: 12350,
    featured: true
  },
  {
    id: '3',
    slug: 'assassins-creed-shadows-delayed-february',
    title: {
      en: 'Assassin\'s Creed Shadows Delayed to February 2025',
      fa: 'Assassin\'s Creed Shadows به فوریه 2025 تاخیر یافت'
    },
    excerpt: {
      en: 'Ubisoft announces delay to polish the feudal Japan adventure, citing quality improvements.',
      fa: 'Ubisoft تاخیر را برای صیقل دادن ماجراجویی ژاپن فئودالی اعلام می‌کند و به بهبود کیفیت اشاره می‌کند.'
    },
    content: {
      en: 'Ubisoft has made the difficult decision to delay Assassin\'s Creed Shadows from its original November 2024 release date to February 14, 2025. In an official statement, the development team emphasized their commitment to delivering a polished experience...',
      fa: 'Ubisoft تصمیم دشواری گرفته است که Assassin\'s Creed Shadows را از تاریخ انتشار اصلی نوامبر 2024 به 14 فوریه 2025 به تاخیر بیندازد. در یک بیانیه رسمی، تیم توسعه بر تعهد خود برای ارائه یک تجربه صیقل‌خورده تاکید کرد...'
    },
    category: 'updates',
    tags: ['Assassin\'s Creed', 'Ubisoft', 'Delay', 'Japan'],
    author: mockAuthors[3],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    featuredImage: '/news/ac-shadows-delay.jpg',
    readTime: 3,
    views: 8920
  },
  {
    id: '4',
    slug: 'counter-strike-2-major-update',
    title: {
      en: 'Counter-Strike 2 Receives Major Balance Update',
      fa: 'Counter-Strike 2 به‌روزرسانی عمده تعادل را دریافت می‌کند'
    },
    excerpt: {
      en: 'Valve rolls out significant changes to weapon balance and map adjustments in latest patch.',
      fa: 'Valve تغییرات قابل توجهی در تعادل سلاح‌ها و تنظیمات نقشه در آخرین وصله ارائه می‌دهد.'
    },
    content: {
      en: 'Valve has released a substantial update for Counter-Strike 2, addressing community concerns about weapon balance and introducing several quality-of-life improvements. The patch includes adjustments to the AWP, AK-47, and M4A4...',
      fa: 'Valve یک به‌روزرسانی قابل توجه برای Counter-Strike 2 منتشر کرده است که به نگرانی‌های جامعه در مورد تعادل سلاح رسیدگی می‌کند و چندین بهبود کیفیت زندگی را معرفی می‌کند. این وصله شامل تنظیمات AWP، AK-47 و M4A4 است...'
    },
    category: 'updates',
    tags: ['Counter-Strike 2', 'Valve', 'Update', 'Esports'],
    author: mockAuthors[2],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    featuredImage: '/news/cs2-update.jpg',
    readTime: 4,
    views: 22100,
    trending: true
  },
  {
    id: '5',
    slug: 'elden-ring-shadow-erdtree-review',
    title: {
      en: 'Elden Ring: Shadow of the Erdtree - A Masterpiece Expansion',
      fa: 'Elden Ring: Shadow of the Erdtree - یک بسته الحاقی شاهکار'
    },
    excerpt: {
      en: 'FromSoftware delivers another incredible experience with the Shadow of the Erdtree DLC.',
      fa: 'FromSoftware یک تجربه باورنکردنی دیگر با DLC Shadow of the Erdtree ارائه می‌دهد.'
    },
    content: {
      en: 'Shadow of the Erdtree is not just an expansion; it\'s a testament to FromSoftware\'s mastery of game design. The Land of Shadow offers a dark, twisted mirror to the Lands Between, filled with new challenges, bosses, and lore that deepens the already rich narrative...',
      fa: 'Shadow of the Erdtree فقط یک بسته الحاقی نیست؛ این شهادتی بر تسلط FromSoftware بر طراحی بازی است. سرزمین سایه یک آینه تاریک و پیچیده به Lands Between ارائه می‌دهد که پر از چالش‌ها، رئیس‌ها و داستان‌های جدیدی است که روایت قبلاً غنی را عمیق‌تر می‌کند...'
    },
    category: 'reviews',
    tags: ['Elden Ring', 'FromSoftware', 'DLC', 'Review'],
    author: mockAuthors[1],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    featuredImage: '/news/elden-ring-review.jpg',
    readTime: 8,
    views: 31450,
    trending: true
  },
  {
    id: '6',
    slug: 'nvidia-rtx-5000-series-rumors',
    title: {
      en: 'NVIDIA RTX 5000 Series: Everything We Know So Far',
      fa: 'سری NVIDIA RTX 5000: هرآنچه تاکنون می‌دانیم'
    },
    excerpt: {
      en: 'Latest leaks suggest significant performance improvements and new AI features for next-gen GPUs.',
      fa: 'آخرین نشت‌ها نشان‌دهنده بهبودهای قابل توجه عملکرد و ویژگی‌های AI جدید برای GPU‌های نسل بعدی است.'
    },
    content: {
      en: 'As we approach the anticipated launch of NVIDIA\'s RTX 5000 series, new information continues to surface about these next-generation graphics cards. Industry sources suggest the flagship RTX 5090 could offer up to 70% better performance than the current RTX 4090...',
      fa: 'همانطور که به راه‌اندازی مورد انتظار سری RTX 5000 NVIDIA نزدیک می‌شویم، اطلاعات جدیدی در مورد این کارت‌های گرافیک نسل بعدی به دست می‌آید. منابع صنعت پیشنهاد می‌کنند که RTX 5090 پرچمدار می‌تواند عملکرد تا 70٪ بهتر از RTX 4090 فعلی ارائه دهد...'
    },
    category: 'hardware',
    tags: ['NVIDIA', 'RTX 5000', 'GPU', 'Hardware'],
    author: mockAuthors[3],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 36), // 1.5 days ago
    featuredImage: '/news/rtx-5000.jpg',
    readTime: 6,
    views: 18720
  },
  {
    id: '7',
    slug: 'dota-2-international-2024-preview',
    title: {
      en: 'The International 2024: Teams to Watch and Predictions',
      fa: 'بین‌المللی 2024: تیم‌های قابل توجه و پیش‌بینی‌ها'
    },
    excerpt: {
      en: 'With a record-breaking prize pool, The International 2024 promises to be the biggest Dota 2 event yet.',
      fa: 'با یک جایزه رکوردشکن، بین‌المللی 2024 قول می‌دهد که بزرگترین رویداد Dota 2 تا کنون باشد.'
    },
    content: {
      en: 'The International returns to Seattle this year with the largest prize pool in esports history. Teams from around the globe have battled through regional qualifiers for a chance to compete for the Aegis of Champions. Our analysis breaks down the favorites, dark horses, and storylines to follow...',
      fa: 'The International امسال با بزرگترین جایزه در تاریخ اسپورت به سیاتل برمی‌گردد. تیم‌ها از سراسر جهان از طریق مسابقات انتخابی منطقه‌ای برای شانس رقابت برای Aegis of Champions مبارزه کرده‌اند. تحلیل ما مورد علاقه‌ها، اسب‌های تاریک و خطوط داستانی که باید دنبال شود را تجزیه می‌کند...'
    },
    category: 'esports',
    tags: ['Dota 2', 'The International', 'Esports', 'Tournament'],
    author: mockAuthors[2],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    featuredImage: '/news/ti2024.jpg',
    readTime: 7,
    views: 14580
  },
  {
    id: '8',
    slug: 'sony-ps5-pro-specs-leak',
    title: {
      en: 'PS5 Pro Specifications Leaked: 8K Gaming on the Horizon',
      fa: 'مشخصات PS5 Pro نشت کرد: بازی 8K در افق'
    },
    excerpt: {
      en: 'Alleged specifications for Sony\'s mid-generation console refresh suggest major GPU upgrades.',
      fa: 'مشخصات ادعایی برای به‌روزرسانی کنسول نسل میانی سونی نشان‌دهنده ارتقاء عمده GPU است.'
    },
    content: {
      en: 'A recent leak from a reliable hardware insider has revealed what appears to be the complete specifications for the rumored PlayStation 5 Pro. The upgraded console is expected to feature enhanced ray tracing capabilities, support for 8K gaming, and improved CPU performance...',
      fa: 'نشت اخیر از یک منبع قابل اعتماد سخت‌افزار آنچه را که به نظر می‌رسد مشخصات کامل برای PlayStation 5 Pro شایعه‌ای است، فاش کرده است. انتظار می‌رود کنسول ارتقا یافته دارای قابلیت‌های ردیابی پرتو پیشرفته، پشتیبانی از بازی 8K و عملکرد بهبود یافته CPU باشد...'
    },
    category: 'hardware',
    tags: ['PS5 Pro', 'Sony', 'Console', 'Leak'],
    author: mockAuthors[3],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 72), // 3 days ago
    featuredImage: '/news/ps5-pro.jpg',
    readTime: 5,
    views: 26340,
    trending: true
  },
  {
    id: '9',
    slug: 'indie-game-showcase-2024',
    title: {
      en: 'Top 10 Indie Games to Watch in 2024',
      fa: '10 بازی مستقل برتر برای تماشا در 2024'
    },
    excerpt: {
      en: 'From innovative puzzle games to narrative masterpieces, 2024 is shaping up to be a great year for indie gaming.',
      fa: 'از بازی‌های پازل نوآورانه تا شاهکارهای روایی، 2024 در حال شکل‌گیری به یک سال عالی برای بازی‌های مستقل است.'
    },
    content: {
      en: 'The indie gaming scene continues to thrive with creative and innovative titles that push the boundaries of game design. We\'ve curated a list of the most exciting indie games scheduled for release in 2024, including "Hollow Knight: Silksong," "Replaced," and several surprising newcomers...',
      fa: 'صحنه بازی‌های مستقل با عناوین خلاقانه و نوآورانه که مرزهای طراحی بازی را جابجا می‌کنند، همچنان رونق دارد. ما فهرستی از هیجان‌انگیزترین بازی‌های مستقل برنامه‌ریزی شده برای انتشار در 2024 را تهیه کرده‌ایم، از جمله "Hollow Knight: Silksong"، "Replaced" و چندین تازه‌وارد شگفت‌انگیز...'
    },
    category: 'releases',
    tags: ['Indie Games', '2024', 'Gaming', 'Releases'],
    author: mockAuthors[0],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 96), // 4 days ago
    featuredImage: '/news/indie-showcase.jpg',
    readTime: 10,
    views: 9840
  },
  {
    id: '10',
    slug: 'gta-6-new-trailer-breakdown',
    title: {
      en: 'GTA 6 Trailer Breakdown: Every Detail You Missed',
      fa: 'تجزیه تریلر GTA 6: هر جزئیاتی که از دست دادید'
    },
    excerpt: {
      en: 'A frame-by-frame analysis of Rockstar\'s highly anticipated Grand Theft Auto VI reveal trailer.',
      fa: 'یک تحلیل فریم به فریم از تریلر بسیار مورد انتظار Grand Theft Auto VI Rockstar.'
    },
    content: {
      en: 'Rockstar Games finally unveiled the first official trailer for Grand Theft Auto VI, and it\'s packed with details about the game\'s setting, characters, and features. Our deep dive examines every frame, from the return to Vice City to hints about the game\'s dual protagonist system...',
      fa: 'Rockstar Games سرانجام اولین تریلر رسمی برای Grand Theft Auto VI را رونمایی کرد و پر از جزئیات در مورد محیط، شخصیت‌ها و ویژگی‌های بازی است. غواصی عمیق ما هر فریم را بررسی می‌کند، از بازگشت به Vice City تا اشاره‌هایی درباره سیستم دو قهرمان بازی...'
    },
    category: 'breaking',
    tags: ['GTA 6', 'Rockstar', 'Trailer', 'Analysis'],
    author: mockAuthors[0],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 120), // 5 days ago
    featuredImage: '/news/gta6-trailer.jpg',
    readTime: 12,
    views: 45620,
    featured: true,
    trending: true
  }
];