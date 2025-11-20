import { Comment, Game,  SuggestedGame } from "./Game";

export const mockGames: Game[] =
[
  {
    id: "1",
    title: { en: "Path of Exile 2", fa: "مسیر تبعید ۲" },
    image: "/images/Games/pathofexile2.png",
    backgroundImage: '/images/Games/POE-bg.png',
    screenshots: [
      '/games/poe2-1.jpg',
      '/games/poe2-2.jpg',
      '/games/poe2-3.jpg',
      '/games/poe2-4.jpg',
    ],
    supportedLanguages: ['English', 'German', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2025-12-10',
    developer: 'Grinding Gear Games',
    genres: ['Action','RPG'],
    tags: ['Dark Fantasy', 'Free-to-Play', 'Loot-based'],
    marketPrice: 0.00,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=ssrashima8E',

    description: {
      short: {
        english: 'A next-generation Action RPG with a new campaign and skill system.',
        persian: 'یک بازی اکشن نقش‌آفرینی نسل بعدی با کمپین و سیستم مهارت جدید.'
      },
      long: {
        english: 'Path of Exile 2 is a free-to-play sequel to the original game, featuring a new six-act campaign and 100 unique environments.',
        persian: 'مسیر تبعید ۲ دنباله‌ای رایگان بر بازی اصلی است که دارای یک کمپین شش پرده‌ای جدید و ۱۰۰ محیط منحصر به فرد است.'
      },
      storyline: {
        english: 'Years after the fall of Kitava, the darkness begins to gather once more...',
        persian: 'سال‌ها پس از سقوط کیتاوا، تاریکی دوباره شروع به جمع شدن می‌کند...'
      }
    },

    developerInfo: {
      logo: '/developers/ggg-logo.png',
      description: {
        en: 'Grinding Gear Games is a New Zealand video game developer.',
        fa: 'Grinding Gear Games یک توسعه‌دهنده بازی‌های ویدیویی نیوزلندی است.'
      },
      website: 'https://www.pathofexile.com',
      founded: '2006'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-4570 / AMD FX-8350',
        gpu: 'NVIDIA GeForce GTX 650 Ti / AMD Radeon HD 7850',
        storage: '80 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-8700 / AMD Ryzen 7 2700',
        gpu: 'NVIDIA GeForce GTX 1070 / AMD Radeon RX 580',
        storage: '80 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'Razor1911',
        version: 'v1.0',
        totalSize: '40 GB',
        files: [
          { name: 'razor-poe2-part1.zip', size: '10 GB', url: 'https://example.com/razor-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "2",
    title: { en: "Doom: The Dark Ages", fa: "دوم: اعصار تاریک" },
    image: "/images/Games/doom.png",
    backgroundImage: '/images/Games/Doom-bg.png',
    screenshots: [
      '/games/doom-1.jpg',
      '/games/doom-2.jpg',
      '/games/doom-3.jpg',
      '/games/doom-4.jpg',
    ],
    supportedLanguages: ['English', 'Spanish', 'French'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2025-05-15',
    developer: 'id Software',
    genres: ['FPS', 'Action'],
    tags: ['Demons', 'Gore', 'First-Person Shooter', 'Medieval'],
    marketPrice: 69.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'Become the Doom Slayer in a mythical, darker past.',
        persian: 'در یک گذشته افسانه‌ای و تاریک، به قهرمان دوم (Doom Slayer) تبدیل شوید.'
      },
      long: {
        english: 'The prequel to Doom (2016), you will be able to face the hordes of hell with new weapons and mechanical armor.',
        persian: 'پیش‌درآمدی بر Doom (۲۰۱۶)، که در آن می‌توانید با سلاح‌های جدید و زره مکانیکی با انبوهی از جهنم روبرو شوید.'
      },
      storyline: {
        english: 'Discover the origin of the Slayer\'s rage and the secrets of the dark realms.',
        persian: 'منشاء خشم قهرمان و اسرار قلمروهای تاریک را کشف کنید.'
      }
    },

    developerInfo: {
      logo: '/developers/idsoftware-logo.png',
      description: {
        en: 'id Software is an American video game developer known for Doom and Quake.',
        fa: 'id Software یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است که به خاطر Doom و Quake شناخته می‌شود.'
      },
      website: 'https://www.idsoftware.com',
      founded: '1991'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-6600K / AMD Ryzen 5 1500X',
        gpu: 'NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700',
        storage: '100 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-8700K / AMD Ryzen 7 3700X',
        gpu: 'NVIDIA GeForce RTX 2080 Ti / AMD Radeon RX 6800 XT',
        storage: '100 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'FLT',
        version: 'v1.0',
        totalSize: '95 GB',
        files: [
          { name: 'flt-doom-part1.rar', size: '15 GB', url: 'https://example.com/flt-part1.rar' },
          { name: 'flt-doom-part2.rar', size: '15 GB', url: 'https://example.com/flt-part2.rar' },
          { name: 'flt-doom-part3.rar', size: '15 GB', url: 'https://example.com/flt-part3.rar' },
          { name: 'flt-doom-part4.rar', size: '15 GB', url: 'https://example.com/flt-part4.rar' },
          { name: 'flt-doom-part5.rar', size: '15 GB', url: 'https://example.com/flt-part5.rar' },
          { name: 'flt-doom-part6.rar', size: '20 GB', url: 'https://example.com/flt-part6.rar' },
        ]
      }
    ]
  },
  {
    id: "3",
    title: { en: "Dota 2", fa: "دوتا ۲" },
    image: "/images/Games/dota2.png",
    backgroundImage: '/images/Games/dota-bg.png',
    screenshots: [
      '/games/dota2-1.jpg',
      '/games/dota2-2.jpg',
      '/games/dota2-3.jpg',
      '/games/dota2-4.jpg',
    ],
    supportedLanguages: ['English', 'Russian', 'Persian'],
    platform: ['PC'],
    releaseDate: '2013-07-09',
    developer: 'Valve',
    genres: ['online'],
    tags: ['Multiplayer', 'Competitive', 'Esports', 'Fantasy'],
    marketPrice: 0.00,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=OEe7p8K4-vY',

    description: {
      short: {
        english: 'A competitive game of strategy, skill, and teamwork.',
        persian: 'یک بازی رقابتی مبتنی بر استراتژی، مهارت و کار تیمی.'
      },
      long: {
        english: 'Dota 2 is a multiplayer online battle arena (MOBA) where two teams of five players compete to destroy a large structure defended by the opposing team.',
        persian: 'دوتا ۲ یک میدان نبرد چند نفره آنلاین (MOBA) است که در آن دو تیم پنج نفره برای نابودی یک ساختار بزرگ که توسط تیم مقابل دفاع می‌شود، رقابت می‌کنند.'
      },
      storyline: {
        english: 'The Ancients, the two sides of the conflict, the Radiant and the Dire, are locked in an eternal battle.',
        persian: 'قدیمی‌ها، دو طرف درگیری، Radiant و Dire، در یک نبرد ابدی قفل شده‌اند.'
      }
    },

    developerInfo: {
      logo: '/developers/valve-logo.png',
      description: {
        en: 'Valve Corporation is an American video game developer and digital distribution company.',
        fa: 'Valve Corporation یک توسعه‌دهنده بازی‌های ویدیویی و شرکت توزیع دیجیتال آمریکایی است.'
      },
      website: 'https://www.valvesoftware.com',
      founded: '1996'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 7 64-bit',
        ram: '4 GB',
        cpu: 'Dual core from Intel or AMD at 2.8 GHz',
        gpu: 'NVIDIA GeForce 8600/9600GT / AMD Radeon HD 2600/3600',
        storage: '15 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '8 GB',
        cpu: 'Quad core from Intel or AMD',
        gpu: 'NVIDIA GeForce GTX 650 / AMD Radeon HD 7750',
        storage: '15 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'STEAM',
        version: 'Always Online',
        totalSize: '30 GB',
        files: []
      }
    ]
  },
  {
    id: "4",
    title: { en: "Assassin's Creed Shadows", fa: "اساسینز کرید شدوز" },
    image: "/images/Games/acshadow.png",
    backgroundImage: '/images/Games/ac-bg.png',
    screenshots: [
    ],
    supportedLanguages: ['English', 'Japanese', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2025-02-14',
    developer: 'Ubisoft Quebec',
    genres: ['Action','RPG', 'Stealth'],
    tags: ['Historical', 'Feudal Japan', 'Open-World', 'Ninja'],
    marketPrice: 69.99,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=sU142Y7I-9k',

    description: {
      short: {
        english: 'A new adventure in Feudal Japan with two distinct protagonists.',
        persian: 'ماجرایی جدید در ژاپن فئودالی با دو قهرمان مجزا.'
      },
      long: {
        english: 'Explore the vast open world of 16th-century Japan as Naoe, an Assassin, and Yasuke, a historical African samurai.',
        persian: 'دنیای باز و وسیع ژاپن قرن ۱۶ را در نقش نائو، یک اساسین، و یاسوکه، یک سامورایی آفریقایی تاریخی، کاوش کنید.'
      },
      storyline: {
        english: 'The story is set during the late Sengoku period, following the paths of two compelling characters who will shape the future of Japan.',
        persian: 'داستان در اواخر دوره سنگوکو اتفاق می‌افتد و مسیرهای دو شخصیت جذاب را دنبال می‌کند که آینده ژاپن را شکل خواهند داد.'
      }
    },

    developerInfo: {
      logo: '/developers/ubisoft-logo.png',
      description: {
        en: 'Ubisoft Quebec is a Canadian video game developer.',
        fa: 'Ubisoft Quebec یک توسعه‌دهنده بازی‌های ویدیویی کانادایی است.'
      },
      website: 'https://quebec.ubisoft.com',
      founded: '2005'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '12 GB',
        cpu: 'Intel Core i5-8400 / AMD Ryzen 5 2600',
        gpu: 'NVIDIA GeForce GTX 1070 / AMD Radeon RX 590',
        storage: '90 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-9700K / AMD Ryzen 7 3700X',
        gpu: 'NVIDIA GeForce RTX 3060 / AMD Radeon RX 6700 XT',
        storage: '90 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'CPY',
        version: 'v1.0',
        totalSize: '88 GB',
        files: [
          { name: 'cpy-shadows-part1.rar', size: '10 GB', url: 'https://example.com/cpy-part1.rar' },
          { name: 'cpy-shadows-part2.rar', size: '10 GB', url: 'https://example.com/cpy-part2.rar' },
          { name: 'cpy-shadows-part3.rar', size: '10 GB', url: 'https://example.com/cpy-part3.rar' },
          { name: 'cpy-shadows-part4.rar', size: '10 GB', url: 'https://example.com/cpy-part4.rar' },
          { name: 'cpy-shadows-part5.rar', size: '10 GB', url: 'https://example.com/cpy-part5.rar' },
          { name: 'cpy-shadows-part6.rar', size: '10 GB', url: 'https://example.com/cpy-part6.rar' },
          { name: 'cpy-shadows-part7.rar', size: '10 GB', url: 'https://example.com/cpy-part7.rar' },
          { name: 'cpy-shadows-part8.rar', size: '10 GB', url: 'https://example.com/cpy-part8.rar' },
          { name: 'cpy-shadows-part9.rar', size: '8 GB', url: 'https://example.com/cpy-part9.rar' },
        ]
      }
    ]
  },
  {
    id: "5",
    title: { en: "Battlefield 6", fa: "بتلفیلد 6" },
    image: "/images/Games/bf6.png", // Using bf6.png for BF2042
    backgroundImage: '/images/Games/bf6-bg.png',
    screenshots: [
      '/images/Games/bfbc2-1.png',
      '/images/Games/bfbc2-2.png',
      '/images/Games/bfbc2-3.png',
      '/images/Games/bfbc2-4.png',
    ],
    supportedLanguages: ['English', 'German', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2021-11-19',
    developer: 'DICE',
    genres: ['FPS', 'Action'],
    tags: ['Multiplayer', 'War', 'Modern Military', 'Destruction'],
    marketPrice: 49.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=ASzOzr09pBM',

    description: {
      short: {
        english: 'The ultimate all-out warfare experience in a near-future world.',
        persian: 'تجربه نهایی جنگ تمام عیار در دنیایی نزدیک به آینده.'
      },
      long: {
        english: 'Battlefield 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise.',
        persian: 'بتلفیلد ۲۰۴۲ یک بازی تیراندازی اول شخص است که بازگشت به جنگ تمام عیار و نمادین این فرنچایز را نشان می‌دهد.'
      },
      storyline: {
        english: 'The world is on the brink of war due to extreme weather events and resource scarcity...',
        persian: 'جهان به دلیل رویدادهای آب و هوایی شدید و کمبود منابع در آستانه جنگ است...'
      }
    },

    developerInfo: {
      logo: '/images/company-logoes/dice.png',
      description: {
        en: 'DICE (Digital Illusions Creative Entertainment) is a Swedish video game developer.',
        fa: 'DICE یک توسعه‌دهنده بازی‌های ویدیویی سوئدی است.'
      },
      website: 'https://www.ea.com/studios/dice',
      founded: '1992'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-6600K / AMD FX-8350',
        gpu: 'NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560',
        storage: '100 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-4790 / AMD Ryzen 7 2700X',
        gpu: 'NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600 XT',
        storage: '100 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'FitGirl Repack',
        version: 'v5.0',
        totalSize: '55 GB',
        files: [
          { name: 'fitgirl-bf2042-part1.zip', size: '10 GB', url: 'https://example.com/fitgirl-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "6",
    title: { en: "Crimson Desert", fa: "صحرا سرخ" },
    image: "/images/Games/crimsondesert.png",
    backgroundImage: '/images/Games/crimsondesert-bg.png',
    screenshots: [
      '/games/crimson-1.jpg',
      '/games/crimson-2.jpg',
      '/games/crimson-3.jpg',
      '/games/crimson-4.jpg',
    ],
    supportedLanguages: ['English', 'Korean', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2024-12-01',
    developer: 'Pearl Abyss',
    genres: ['Action','RPG', 'Open-World'],
    tags: ['Fantasy', 'Korean MMO', 'Single Player', 'Exploration'],
    marketPrice: 69.99,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=JmF02wH4pP8',

    description: {
      short: {
        english: 'An open-world action-adventure featuring an epic story and dynamic combat.',
        persian: 'یک اکشن-ماجراجویی جهان باز با داستانی حماسی و مبارزات پویا.'
      },
      long: {
        english: 'Crimson Desert is set in a war-torn continent of Pywel, where you follow the story of Macduff, a mercenary struggling to survive.',
        persian: 'صحرا سرخ در قاره جنگ‌زده Pywel جریان دارد، جایی که شما داستان Macduff، یک مزدور در تلاش برای بقا را دنبال می‌کنید.'
      },
      storyline: {
        english: 'A dark fantasy epic of survival and revenge in a world on the edge of chaos.',
        persian: 'یک حماسه فانتزی تاریک از بقا و انتقام در دنیایی در آستانه هرج و مرج.'
      }
    },

    developerInfo: {
      logo: '/developers/pearlabyss-logo.png',
      description: {
        en: 'Pearl Abyss is a South Korean video game developer.',
        fa: 'Pearl Abyss یک توسعه‌دهنده بازی‌های ویدیویی کره‌ای جنوبی است.'
      },
      website: 'https://www.pearlabyss.com/en-US/Main/Index',
      founded: '2010'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '12 GB',
        cpu: 'Intel Core i5-9600K / AMD Ryzen 5 3600',
        gpu: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT',
        storage: '70 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-10700K / AMD Ryzen 7 5800X',
        gpu: 'NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800',
        storage: '70 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'RELOADED',
        version: 'v1.0',
        totalSize: '65 GB',
        files: [
          { name: 'reloaded-crimson-part1.rar', size: '15 GB', url: 'https://example.com/reloaded-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "7",
    title: { en: "Counter-Strike 2", fa: "کانتر استرایک ۲" },
    image: "/images/Games/Csgo2.png",
    backgroundImage: '/images/Games/cs2-bg.png',
    screenshots: [
      '/games/cs2-1.jpg',
      '/games/cs2-2.jpg',
      '/games/cs2-3.jpg',
      '/games/cs2-4.jpg',
    ],
    supportedLanguages: ['English', 'Russian', 'Persian'],
    platform: ['PC'],
    releaseDate: '2023-09-27',
    developer: 'Valve',
    genres: ['FPS', 'Shooter'],
    tags: ['Competitive', 'Multiplayer', 'Esports', 'Free-to-Play'],
    marketPrice: 0.00,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=blogPost',

    description: {
      short: {
        english: 'The next era of Counter-Strike built on the Source 2 engine.',
        persian: 'دوران بعدی کانتر استرایک که بر روی موتور Source 2 ساخته شده است.'
      },
      long: {
        english: 'Counter-Strike 2 is an upgrade to CS:GO, featuring new smoke mechanics, tick-rate independent gameplay, and overhauled maps.',
        persian: 'کانتر استرایک ۲ ارتقایی برای CS:GO است که دارای مکانیک‌های جدید دود، گیم‌پلی مستقل از تیک‌ریت و نقشه‌های بازسازی شده است.'
      },
      storyline: {
        english: 'A perpetual war between Terrorists and Counter-Terrorists in various strategic locations.',
        persian: 'جنگی دائمی بین تروریست‌ها و ضدتروریست‌ها در مکان‌های استراتژیک مختلف.'
      }
    },

    developerInfo: {
      logo: '/developers/valve-logo.png',
      description: {
        en: 'Valve Corporation is an American video game developer.',
        fa: 'Valve Corporation یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://www.valvesoftware.com',
      founded: '1996'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: '4 physical cores / Intel Core i5-750 or higher',
        gpu: '1 GB VRAM / must support Shader Model 5.0',
        storage: '85 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-9700K / AMD Ryzen 7 3700X',
        gpu: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5600 XT',
        storage: '85 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'P2P',
        version: 'Always Online',
        totalSize: '31 GB',
        files: []
      }
    ]
  },
  {
    id: "8",
    title: { en: "Elden Ring", fa: "الدن رینگ" },
    image: "/images/Games/eldenring.png",
    backgroundImage: '/images/Games/elden-bg.png',
    screenshots: [
      '/games/eldenring-1.jpg',
      '/games/eldenring-2.jpg',
      '/games/eldenring-3.jpg',
      '/games/eldenring-4.jpg',
    ],
    supportedLanguages: ['English', 'Japanese', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4', 'Xbox One'],
    releaseDate: '2022-02-25',
    developer: 'FromSoftware',
    genres: ['Action','RPG', 'Fantasy'],
    tags: ['Souls-like', 'Dark Fantasy', 'Open-World', 'Challenging'],
    marketPrice: 59.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=E3H2PXvjNCA',

    description: {
      short: {
        english: 'An epic fantasy action RPG adventure in a world created by Hidetaka Miyazaki and George R. R. Martin.',
        persian: 'ماجراجویی اکشن-نقش‌آفرینی فانتزی حماسی در دنیایی که توسط میازاکی و مارتین خلق شده است.'
      },
      long: {
        english: 'Venture into the Lands Between, a new fantasy world full of mystery and peril. Become the Elden Lord.',
        persian: 'وارد سرزمین‌های میانه شوید، دنیای فانتزی جدیدی پر از رمز و راز و خطر. به ارباب الدن تبدیل شوید.'
      },
      storyline: {
        english: 'The Elden Ring has been shattered, and the demigods are fighting over the shards...',
        persian: 'حلقه الدن شکسته شده و نیمه‌خدایان بر سر خرده‌های آن می‌جنگند...'
      }
    },

    developerInfo: {
      logo: '/developers/fromsoftware-logo.png',
      description: {
        en: 'FromSoftware is a Japanese video game developer best known for the Souls series.',
        fa: 'FromSoftware یک توسعه‌دهنده بازی‌های ویدیویی ژاپنی است که بیشتر به خاطر سری سولز شناخته می‌شود.'
      },
      website: 'https://www.fromsoftware.jp/en/',
      founded: '1986'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '12 GB',
        cpu: 'Intel Core i5-8400 / AMD Ryzen 3 3300X',
        gpu: 'NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB',
        storage: '60 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-8700K / AMD Ryzen 5 3600X',
        gpu: 'NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56 8GB',
        storage: '60 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'CODEX',
        version: 'v1.07',
        totalSize: '50.2 GB',
        files: [
          { name: 'codex-elden-part1.rar', size: '10 GB', url: 'https://example.com/codex-part1.rar' },
          { name: 'codex-elden-part2.rar', size: '10 GB', url: 'https://example.com/codex-part2.rar' },
          { name: 'codex-elden-part3.rar', size: '10 GB', url: 'https://example.com/codex-part3.rar' },
          { name: 'codex-elden-part4.rar', size: '10 GB', url: 'https://example.com/codex-part4.rar' },
          { name: 'codex-elden-part5.rar', size: '10.2 GB', url: 'https://example.com/codex-part5.rar' },
        ]
      }
    ]
  },
  {
    id: "9",
    title: { en: "The Elder Scrolls VI", fa: "اسکرولز کهن ۶" },
    image: "/images/Games/eldenscroll.png",
    backgroundImage: '/images/Games/eldenscroll-bg.png',
    screenshots: [
      '/games/tes6-1.jpg',
      '/games/tes6-2.jpg',
      '/games/tes6-3.jpg',
      '/games/tes6-4.jpg',
    ],
    supportedLanguages: ['English', 'German', 'French'],
    platform: ['PC', 'Xbox Series X/S'],
    releaseDate: '2028-01-01',
    developer: 'Bethesda Game Studios',
    genres: ['RPG', 'Open-World'],
    tags: ['Fantasy', 'Exploration', 'Epic', 'First-Person'],
    marketPrice: 69.99,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=OkWbKk27j2U',

    description: {
      short: {
        english: 'The next chapter in the legendary Elder Scrolls saga.',
        persian: 'فصل بعدی در حماسه افسانه‌ای The Elder Scrolls.'
      },
      long: {
        english: 'The Elder Scrolls VI will take players to a new region of Tamriel, promising vast landscapes and unparalleled freedom.',
        persian: 'The Elder Scrolls VI بازیکنان را به منطقه‌ای جدید از تامریل خواهد برد و وعده مناظر گسترده و آزادی بی‌نظیری را می‌دهد.'
      },
      storyline: {
        english: 'Details are scarce, but rumors point to a setting in High Rock or Hammerfell...',
        persian: 'جزئیات کمیاب است، اما شایعات به محیطی در High Rock یا Hammerfell اشاره دارند...'
      }
    },

    developerInfo: {
      logo: '/developers/bethesda-logo.png',
      description: {
        en: 'Bethesda Game Studios is an American video game developer, best known for The Elder Scrolls and Fallout series.',
        fa: 'Bethesda Game Studios یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است که بیشتر به خاطر سری The Elder Scrolls و Fallout شناخته می‌شود.'
      },
      website: 'https://bethesdagamestudios.com',
      founded: '2001'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-8700K / AMD Ryzen 7 2700X',
        gpu: 'NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT',
        storage: '120 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '32 GB',
        cpu: 'Intel Core i9-12900K / AMD Ryzen 9 5950X',
        gpu: 'NVIDIA GeForce RTX 4080 / AMD Radeon RX 7900 XT',
        storage: '120 GB',
        typeStorage: 'NVMe SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'SKIDROW',
        version: 'v1.0',
        totalSize: '115 GB',
        files: [
          { name: 'skidrow-tes6-part1.zip', size: '15 GB', url: 'https://example.com/skidrow-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "10",
    title: { en: "Expedition 33", fa: "اکسپدیشن ۳۳" },
    image: "/images/Games/expedition33.png",
    backgroundImage: '',
    screenshots: [
      '/games/exp33-1.jpg',
      '/games/exp33-2.jpg',
      '/games/exp33-3.jpg',
      '/games/exp33-4.jpg',
    ],
    supportedLanguages: ['English', 'Japanese'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2025-06-03',
    developer: 'Blade Hunter Studio',
    genres: ['RPG', 'Fantasy'],
    tags: ['JRPG', 'Exploration', 'Story-Driven', 'Adventure'],
    marketPrice: 59.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=JmF02wH4pP8',

    description: {
      short: {
        english: 'A turn-based RPG following a group of heroes on a desperate mission.',
        persian: 'یک RPG نوبتی که گروهی از قهرمانان را در یک ماموریت ناامیدکننده دنبال می‌کند.'
      },
      long: {
        english: 'A massive turn-based RPG featuring unique characters and a visually stunning world facing an imminent threat.',
        persian: 'یک بازی RPG نوبتی بزرگ که دارای شخصیت‌های منحصر به فرد و دنیایی بصری خیره‌کننده است که با تهدیدی قریب‌الوقوع روبرو است.'
      },
      storyline: {
        english: 'The world is under attack by a relentless force, and Expedition 33 is the last hope for mankind.',
        persian: 'دنیا تحت حمله نیرویی بی‌امان است و اکسپدیشن ۳۳ آخرین امید برای بشریت است.'
      }
    },

    developerInfo: {
      logo: '/developers/bladehunter-logo.png',
      description: {
        en: 'Blade Hunter Studio is a new independent game developer.',
        fa: 'Blade Hunter Studio یک توسعه‌دهنده بازی مستقل جدید است.'
      },
      website: 'https://www.expedition33.com',
      founded: '2023'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5-9400F / AMD Ryzen 5 3600',
        gpu: 'NVIDIA GeForce GTX 1660 Ti / AMD Radeon RX 5600 XT',
        storage: '50 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-10700 / AMD Ryzen 7 3700X',
        gpu: 'NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600 XT',
        storage: '50 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'I_KNOW_I_WANT_THIS',
        version: 'v1.0',
        totalSize: '48 GB',
        files: [
          { name: 'iknow-exp33-part1.zip', size: '10 GB', url: 'https://example.com/iknow-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "11",
    title: { en: "Forza Motorsport 6", fa: "فورتزا موتوراسپورت ۶" },
    image: "/images/Games/forza6.png",
    backgroundImage: '/images/Games/Forza6-bg.png',
    screenshots: [
      '/games/forza6-1.jpg',
      '/games/forza6-2.jpg',
      '/games/forza6-3.jpg',
      '/games/forza6-4.jpg',
    ],
    supportedLanguages: ['English', 'Italian', 'Spanish'],
    platform: ['Xbox One', 'PC'],
    releaseDate: '2015-09-15',
    developer: 'Turn 10 Studios',
    genres: [ 'sports'],
    tags: ['Cars', 'Realistic', 'Multiplayer', 'Controller Support'],
    marketPrice: 19.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'The most beautiful and comprehensive racing game of its generation.',
        persian: 'زیباترین و جامع‌ترین بازی مسابقه‌ای نسل خود.'
      },
      long: {
        english: 'Forza Motorsport 6 features over 450 cars and 26 world-famous destinations to race on, with dynamic weather and night racing.',
        persian: 'فورتزا موتوراسپورت ۶ دارای بیش از ۴۵۰ ماشین و ۲۶ مقصد مشهور جهانی برای مسابقه است، با آب و هوای پویا و مسابقه شبانه.'
      },
      storyline: {
        english: 'Experience the thrill of motorsport in a career mode that spans across continents.',
        persian: 'هیجان مسابقات موتوراسپورت را در یک حالت حرفه‌ای که در سراسر قاره‌ها گسترده است، تجربه کنید.'
      }
    },

    developerInfo: {
      logo: '/developers/turn10-logo.png',
      description: {
        en: 'Turn 10 Studios is an American video game developer known for the Forza Motorsport series.',
        fa: 'Turn 10 Studios یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است که به خاطر سری Forza Motorsport شناخته می‌شود.'
      },
      website: 'https://www.forzamotorsport.net',
      founded: '2001'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i3-4170 / AMD FX-6300',
        gpu: 'NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 250X',
        storage: '50 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '12 GB',
        cpu: 'Intel Core i7-6700K / AMD FX-9590',
        gpu: 'NVIDIA GeForce GTX 970 / AMD Radeon R9 290X',
        storage: '50 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'Corepack',
        version: 'v1.0',
        totalSize: '45.7 GB',
        files: [
          { name: 'corepack-forza6-part1.zip', size: '10 GB', url: 'https://example.com/corepack-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "12",
    title: { en: "God of War Ragnarök", fa: "خدای جنگ: راگناروک" },
    image: "/images/Games/godofwar.png",
    backgroundImage: '/images/Games/godofwar-bg.png',
    screenshots: [
      '/games/gow-1.jpg',
      '/games/gow-2.jpg',
      '/games/gow-3.jpg',
      '/games/gow-4.jpg',
    ],
    supportedLanguages: ['English', 'Brazilian Portuguese', 'Persian'],
    platform: ['PC', 'PS5', 'PS4'],
    releaseDate: '2022-11-09',
    developer: 'Santa Monica Studio',
    genres: ['Action','Adventure'],
    tags: ['Norse Mythology', 'Father-Son', 'Cinematic', 'Single Player'],
    marketPrice: 49.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=hfJ31_4S26U',

    description: {
      short: {
        english: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers as the forces of Asgard prepare for a prophesied battle that will end the world.',
        persian: 'کریتوس و آترئوس باید به هر یک از ۹ قلمرو سفر کنند تا در جستجوی پاسخ باشند در حالی که نیروهای آسگارد برای نبردی پیشگویی شده که جهان را به پایان خواهد رساند، آماده می‌شوند.'
      },
      long: {
        english: 'The long-awaited sequel to God of War (2018), continuing the story of Kratos and Atreus as they face the looming threat of Ragnarök.',
        persian: 'دنباله مورد انتظار God of War (۲۰۱۸)، که داستان کریتوس و آترئوس را در مواجهه با تهدید قریب‌الوقوع راگناروک ادامه می‌دهد.'
      },
      storyline: {
        english: 'Fimbulwinter is drawing to a close, and the prophecy of Ragnarök is near...',
        persian: 'فیمبول‌وینتر (Fimbulwinter) در حال پایان است و پیشگویی راگناروک نزدیک است...'
      }
    },

    developerInfo: {
      logo: '/developers/sms-logo.png',
      description: {
        en: 'Santa Monica Studio is an American first-party video game developer owned by Sony Interactive Entertainment.',
        fa: 'Santa Monica Studio یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است که متعلق به Sony Interactive Entertainment است.'
      },
      website: 'https://sms.playstation.com',
      founded: '1999'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5-6600K / AMD Ryzen 5 1500X',
        gpu: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB',
        storage: '70 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-8700K / AMD Ryzen 7 2700X',
        gpu: 'NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800 XT',
        storage: '70 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'DODI Repack',
        version: 'v1.0.1',
        totalSize: '65.4 GB',
        files: [
          { name: 'dodi-gow-part1.zip', size: '15 GB', url: 'https://example.com/dodi-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "13",
    title: { en: "Hades II", fa: "هیدس ۲" },
    image: "/images/Games/hades2.png",
    backgroundImage: '',
    screenshots: [
      '/games/hades2-1.jpg',
      '/games/hades2-2.jpg',
      '/games/hades2-3.jpg',
      '/games/hades2-4.jpg',
    ],
    supportedLanguages: ['English', 'French', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'Switch'],
    releaseDate: '2025-05-06',
    developer: 'Supergiant Games',
    genres: ['Action'],
    tags: ['Greek Mythology', 'Procedural', 'Fast-paced', 'Early Access'],
    marketPrice: 29.99,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=F3_s8X32-kY',

    description: {
      short: {
        english: 'As the Princess of the Underworld, fight the Titan of Time to save your family.',
        persian: 'به عنوان شاهزاده خانم جهان زیرین، برای نجات خانواده‌تان با تایتان زمان مبارزه کنید.'
      },
      long: {
        english: 'Embark on an epic mythological journey as Melinoë, the immortal Princess of the Underworld, in this rogue-like dungeon crawler.',
        persian: 'در این بازی دانجن کراولر روگ‌لایک، به عنوان ملینوئه، شاهزاده خانم جاودانه جهان زیرین، وارد یک سفر اسطوره‌ای حماسی شوید.'
      },
      storyline: {
        english: 'Melinoë is tasked with stopping Chronos, the Titan of Time, who has escaped his prison and captured Hades.',
        persian: 'ملینوئه وظیفه دارد تا کرونوس، تایتان زمان، که از زندان فرار کرده و هیدس را اسیر کرده، متوقف کند.'
      }
    },

    developerInfo: {
      logo: '/developers/supergiant-logo.png',
      description: {
        en: 'Supergiant Games is an American independent video game developer.',
        fa: 'Supergiant Games یک توسعه‌دهنده مستقل بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://www.supergiantgames.com/',
      founded: '2009'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Dual Core 3.0 Ghz+',
        gpu: '1 GB VRAM / DirectX 12 compatible',
        storage: '10 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '8 GB',
        cpu: 'Quad Core 3.5 Ghz+',
        gpu: '2 GB VRAM / DirectX 12 compatible',
        storage: '10 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'GOG Release',
        version: 'v0.9 Early Access',
        totalSize: '8 GB',
        files: [
          { name: 'gog-hades2.zip', size: '8 GB', url: 'https://example.com/gog-hades2.zip' },
        ]
      }
    ]
  },
  {
    id: "14",
    title: { en: "Hogwarts Legacy", fa: "میراث هاگوارتز" },
    image: "/images/Games/hogward.png",
    backgroundImage: '/images/Games/hogwartsBg.png',
    screenshots: [
      '/games/hogwarts-1.jpg',
      '/games/hogwarts-2.jpg',
      '/games/hogwarts-3.jpg',
      '/games/hogwarts-4.jpg',
    ],
    supportedLanguages: ['English', 'German', 'Italian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4', 'Xbox One', 'Switch'],
    releaseDate: '2023-02-10',
    developer: 'Avalanche Software',
    genres: ['Action','RPG', 'Open-World'],
    tags: ['Wizarding World', 'Fantasy', 'Magic', 'Harry Potter'],
    marketPrice: 39.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=D-hR-6c92lE',
  description: {
    short: {
      "english": "Live the unwritten in an open-world action RPG set in the world of Harry Potter.",
      "persian": "ناگفته‌ها را در یک اکشن-نقش‌آفرینی جهان باز در دنیای هری پاتر تجربه کنید."
    },
    long: {
      "english": "Hogwarts Legacy is an immersive, open-world action RPG set in the 1800s wizarding world. You will take control of your actions and be at the center of your own adventure in the wizarding world.",
      "persian": "میراث هاگوارتز (Hogwarts Legacy) یک شاهکار اکشن-نقش‌آفرینی (Action RPG) با محوریت جهان باز است که شما را به سفری غوطه‌ور و بی‌مانند به دنیای جادوگری دهه ۱۸۰۰ میلادی می‌برد. این بازی صرفاً بازگشتی نوستالژیک نیست، بلکه فرصتی برای 'زندگی ناگفته‌ها' در محیطی کاملاً پویا و مملو از جادو است. برخلاف داستان‌های آشنای هری پاتر، این شما هستید که در مرکز ماجراجویی قرار می‌گیرید و کنترل کامل اقدامات، انتخاب‌ها و پیشرفت شخصیت خود را در دست خواهید داشت.\n\nقلب داستان بر محور یک راز باستانی خطرناک می‌گردد. شما در نقش یک دانش‌آموز جدید هاگوارتز ظاهر می‌شوید که کلید این راز را در اختیار دارد؛ رازی که می‌تواند ثبات کل دنیای جادوگری را تهدید کند. توانایی منحصربه‌فرد شما در مشاهده و تسلط بر جادوی باستانی باعث می‌شود تا درگیری‌های بزرگی در پیش رو داشته باشید. مسیر پیشرفت شما شامل یادگیری طلسم‌های جدید، ساخت معجون‌ها، اهلی کردن حیوانات شگفت‌انگیز و تصمیم‌گیری‌های حیاتی است که سرنوشت شما و کل جامعه جادوگری را تعیین می‌کند.\n\nجهان بازی فراتر از راهروهای مخفی قلعه هاگوارتز گسترش می‌یابد. شما فرصت کاوش در سرزمین‌های اطراف، دهکده هاگزمید و مناطق ممنوعه پرخطر را خواهید داشت. این یک جهان باز وسیع است که با جزئیات غنی و محیط‌های خیره‌کننده سه‌بعدی ساخته شده است. عناصر نقش‌آفرینی شامل سیستم عمیق شخصی‌سازی، ارتقاء مهارت‌ها و انتخاب خانه جادوگری است که به تجربه شخصی شما شکل می‌دهد و ارزش تکرار بازی را به شدت بالا می‌برد.\n\nبازی میراث هاگوارتز که توسط استودیو Avalanche Software توسعه داده شده، در تاریخ ۲۰۲۳-۰۲-۱۰ منتشر شد و برای طیف گسترده‌ای از پلتفرم‌ها از جمله PC، PlayStation 5، Xbox Series X/S و کنسول‌های نسل قبلی در دسترس است. این بازی که ژانرهای اکشن، نقش‌آفرینی (RPG) و جهان-باز (Open-World) را ترکیب می‌کند، به سرعت تبدیل به یکی از موفق‌ترین عناوین در دنیای فانتزی و هری پاتر شد."
    },
    storyline: {
      "english": "A student who holds the key to an ancient secret that threatens the stability of the wizarding world.",
      "persian": "دانش‌آموزی که کلید یک راز باستانی را در اختیار دارد و ثبات دنیای جادوگری را تهدید می‌کند."
    },
  },
    developerInfo: {
      logo: '/developers/avalanche-logo.png',
      description: {
        en: 'Avalanche Software is an American video game developer.',
        fa: 'Avalanche Software یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://www.avalanchesoftware.com',
      founded: '1995'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5-8400 / AMD Ryzen 5 2600',
        gpu: 'NVIDIA GeForce GTX 1070 / AMD Radeon RX Vega 56',
        storage: '85 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-8700 / AMD Ryzen 5 3600',
        gpu: 'NVIDIA GeForce RTX 2080 / AMD Radeon RX 5700 XT',
        storage: '85 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'EMPRESS',
        version: 'v1.0',
        totalSize: '75 GB',
        files: [
          { name: 'empress-hogwarts-part1.rar', size: '15 GB', url: 'https://example.com/empress-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "15",
    title: { en: "Metro Exodus", fa: "مترو اکسدوس" },
    image: "/images/Games/metro.png",
    backgroundImage: '',
    screenshots: [
      '/games/metro-1.jpg',
      '/games/metro-2.jpg',
      '/games/metro-3.jpg',
      '/games/metro-4.jpg',
    ],
    supportedLanguages: ['English', 'Russian', 'Persian'],
    platform: ['PC', 'PS4', 'Xbox One', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2019-02-15',
    developer: '4A Games',
    genres: ['FPS', 'Survival'],
    tags: ['Post-Apocalyptic', 'Story-Driven', 'Atmospheric', 'Single Player'],
    marketPrice: 29.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=f2n9R_T2k6g',

    description: {
      short: {
        english: 'A story-driven first-person shooter from 4A Games that blends combat and stealth.',
        persian: 'یک تیراندازی اول شخص داستان‌محور از 4A Games که مبارزه و مخفی‌کاری را ترکیب می‌کند.'
      },
      long: {
        english: 'Flee the shattered ruins of the Moscow Metro and embark on an epic, continent-spanning journey across the post-apocalyptic Russian wilderness.',
        persian: 'از خرابه‌های متلاشی شده متروی مسکو فرار کنید و یک سفر حماسی و قاره‌پیمایی را در بیابان پسا-آخرالزمانی روسیه آغاز کنید.'
      },
      storyline: {
        english: 'Artyom and a band of Spartan Rangers must journey east in search of a new life outside the Metro.',
        persian: 'آرتیوم و گروهی از رنجرهای اسپارتان باید به سمت شرق سفر کنند تا به دنبال زندگی جدیدی در خارج از مترو باشند.'
      }
    },

    developerInfo: {
      logo: '/developers/4agames-logo.png',
      description: {
        en: '4A Games is a Maltese video game developer.',
        fa: '4A Games یک توسعه‌دهنده بازی‌های ویدیویی مالتی است.'
      },
      website: 'https://www.4a-games.com',
      founded: '2006'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-4440 / Equivalent AMD',
        gpu: 'NVIDIA GeForce GTX 670 / GeForce GTX 1050 / AMD Radeon HD 7870',
        storage: '59 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-4770K / AMD Ryzen 7 1700',
        gpu: 'NVIDIA GeForce GTX 1070 / GeForce RTX 2060 / AMD Radeon RX Vega 56',
        storage: '59 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'GOG Release',
        version: 'v1.0',
        totalSize: '55 GB',
        files: [
          { name: 'gog-metro-part1.zip', size: '10 GB', url: 'https://example.com/gog-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "16",
    title: { en: "Rainbow Six Siege", fa: "رینبو سیکس سیج" },
    image: "/images/Games/rambow6.png",
    backgroundImage: '',
    screenshots: [
      '/games/r6-1.jpg',
      '/games/r6-2.jpg',
      '/games/r6-3.jpg',
      '/games/r6-4.jpg',
    ],
    supportedLanguages: ['English', 'French', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4', 'Xbox One'],
    releaseDate: '2015-12-01',
    developer: 'Ubisoft Montreal',
    genres: ['Shooter', 'FPS'],
    tags: ['Multiplayer', 'Competitive', 'Esports', 'Destruction'],
    marketPrice: 19.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'A team-based tactical shooter where careful planning and execution are key.',
        persian: 'یک شوتر تاکتیکی تیمی که در آن برنامه‌ریزی و اجرای دقیق، کلید موفقیت است.'
      },
      long: {
        english: 'Master the art of destruction and gadgetry in Tom Clancy’s Rainbow Six Siege. Face intense close quarters combat, high lethality, tactical decision making, team play, and explosive action.',
        persian: 'بر هنر تخریب و استفاده از گجت‌ها در Rainbow Six Siege مسلط شوید. با نبردهای نزدیک شدید، مرگباری بالا، تصمیم‌گیری تاکتیکی، کار تیمی و اکشن انفجاری روبرو شوید.'
      },
      storyline: {
        english: 'Rainbow, a counter-terrorist unit, is reactivated to face a global threat.',
        persian: 'رینبو، یک واحد ضدتروریستی، برای مقابله با یک تهدید جهانی دوباره فعال می‌شود.'
      }
    },

    developerInfo: {
      logo: '/developers/ubisoft-logo.png',
      description: {
        en: 'Ubisoft Montreal is a Canadian video game developer.',
        fa: 'Ubisoft Montreal یک توسعه‌دهنده بازی‌های ویدیویی کانادایی است.'
      },
      website: 'https://montreal.ubisoft.com/',
      founded: '1997'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i3 560 / AMD Phenom II X4 945',
        gpu: 'NVIDIA GeForce GTX 460 / AMD Radeon HD 5770',
        storage: '61 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5-2500K / AMD FX-8150',
        gpu: 'NVIDIA GeForce GTX 960 / AMD Radeon R9 290X',
        storage: '61 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'STEAM',
        version: 'Always Online',
        totalSize: '61 GB',
        files: []
      }
    ]
  },
  {
    id: "17",
    title: { en: "Red Dead Redemption 2", fa: "رد دد ردمپشن ۲" },
    image: "/images/Games/reddead2.png",
    backgroundImage: '',
    screenshots: [
      '/games/rdr2-1.jpg',
      '/games/rdr2-2.jpg',
      '/games/rdr2-3.jpg',
      '/games/rdr2-4.jpg',
    ],
    supportedLanguages: ['English', 'French', 'German'],
    platform: ['PC', 'PS4', 'Xbox One'],
    releaseDate: '2019-12-05',
    developer: 'Rockstar Games',
    genres: ['Action','Adventure', 'Open-World'],
    tags: ['Western', 'Cowboy', 'Story-Driven', 'Highly Realistic'],
    marketPrice: 59.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'An epic tale of life in America at the dawn of the modern age.',
        persian: 'یک داستان حماسی از زندگی در آمریکا در آغاز عصر مدرن.'
      },
      long: {
        english: 'Red Dead Redemption 2 is an epic tale of outlaw life in the American heartland. Arthur Morgan and the Van der Linde gang are on the run.',
        persian: 'رد دد ردمپشن ۲ یک داستان حماسی از زندگی یاغی‌ها در قلب آمریکا است. آرتور مورگان و باند ون در لینده در حال فرار هستند.'
      },
      storyline: {
        english: 'After a robbery goes wrong, Arthur Morgan must choose between his own ideals and loyalty to the gang who raised him.',
        persian: 'پس از یک سرقت ناموفق، آرتور مورگان باید بین آرمان‌های خود و وفاداری به باندی که او را بزرگ کرده‌اند، یکی را انتخاب کند.'
      }
    },

    developerInfo: {
      logo: '/developers/rockstar-logo.png',
      description: {
        en: 'Rockstar Games is an American video game publisher.',
        fa: 'Rockstar Games یک ناشر بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://www.rockstargames.com',
      founded: '1998'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-2500K / AMD FX-6300',
        gpu: 'NVIDIA GeForce GTX 770 2GB / AMD Radeon R9 280 3GB',
        storage: '150 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '12 GB',
        cpu: 'Intel Core i7-4770K / AMD Ryzen 5 1500X',
        gpu: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB',
        storage: '150 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'FitGirl Repack',
        version: 'v1.0',
        totalSize: '99 GB',
        files: [
          { name: 'fitgirl-rdr2-part1.zip', size: '15 GB', url: 'https://example.com/fitgirl-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "18",
    title: { en: "Resident Evil: Requiem", fa: "رزیدنت ایول: رکوئیم" },
    image: "/images/Games/resident-evil-requiem.png",
    backgroundImage: '/images/Games/Resident-Requiem-bg.png',
    screenshots: [
     
    ],
    supportedLanguages: ['English', 'Japanese', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2026-03-22',
    developer: 'Capcom',
    genres: ['Action'],
    tags: ['Zombies', 'Horror', 'Third-Person', 'Scary'],
    marketPrice: 69.99,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'The next main installment in the terrifying survival horror franchise.',
        persian: 'قسمت اصلی بعدی در فرنچایز ترسناک و بقا-محور.'
      },
      long: {
        english: 'A new chapter in the Resident Evil universe, featuring an old protagonist returning to face a deadly new bioweapon in a remote location.',
        persian: 'فصلی جدید در دنیای Resident Evil، با بازگشت یک قهرمان قدیمی برای مقابله با یک سلاح بیولوژیکی مرگبار جدید در یک مکان دورافتاده.'
      },
      storyline: {
        english: 'The Umbrella Corporation\'s legacy continues to haunt the world, forcing a veteran agent back into action.',
        persian: 'میراث شرکت آمبرلا همچنان جهان را تسخیر می‌کند و یک مامور کهنه‌کار را مجبور به بازگشت به میدان می‌کند.'
      }
    },

    developerInfo: {
      logo: '/developers/capcom-logo.png',
      description: {
        en: 'Capcom is a Japanese video game developer and publisher.',
        fa: 'Capcom یک توسعه‌دهنده و ناشر بازی‌های ویدیویی ژاپنی است.'
      },
      website: 'https://www.capcom.com',
      founded: '1979'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5-10400F / AMD Ryzen 5 3600',
        gpu: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT',
        storage: '75 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-11700 / AMD Ryzen 7 5800X',
        gpu: 'NVIDIA GeForce RTX 3070 / AMD Radeon RX 6700 XT',
        storage: '75 GB',
        typeStorage: 'NVMe SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'HOODLUM',
        version: 'v1.0',
        totalSize: '70 GB',
        files: [
          { name: 'hoodlum-re-part1.zip', size: '10 GB', url: 'https://example.com/hoodlum-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "19",
    title: { en: "Star Wars Outlaws", fa: "جنگ ستارگان: یاغیان" },
    image: "/images/Games/starwars.png",
    backgroundImage: '/images/Games/Outlaws-bg.png',
    screenshots: [
      '/games/sw-outlaws-1.jpg',
      '/games/sw-outlaws-2.jpg',
      '/games/sw-outlaws-3.jpg',
      '/games/sw-outlaws-4.jpg',
    ],
    supportedLanguages: ['English', 'French', 'Spanish'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2024-08-30',
    developer: 'Massive Entertainment',
    genres: ['Action','Adventure', 'Open-World'],
    tags: ['Sci-Fi', 'Space', 'Star Wars', 'Third-Person'],
    marketPrice: 69.99,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'The first open-world Star Wars game, set between The Empire Strikes Back and Return of the Jedi.',
        persian: 'اولین بازی جهان باز Star Wars، که بین The Empire Strikes Back و Return of the Jedi اتفاق می‌افتد.'
      },
      long: {
        english: 'Play as Kay Vess, a rising scoundrel seeking freedom and the means to start a new life. Fight, steal, and outwit the galaxy’s crime syndicates.',
        persian: 'در نقش کی وس، یک رند در حال رشد، بازی کنید که به دنبال آزادی و ابزاری برای شروع یک زندگی جدید است. بجنگید، بدزدید و سندیکاهای جنایی کهکشان را فریب دهید.'
      },
      storyline: {
        english: 'In a galaxy of outlaws, Kay Vess seeks to pull off one of the biggest heists the Outer Rim has ever seen.',
        persian: 'در کهکشانی از یاغیان، کی وس به دنبال انجام یکی از بزرگترین سرقت‌هایی است که Outer Rim به خود دیده است.'
      }
    },

    developerInfo: {
      logo: '/developers/massive-logo.png',
      description: {
        en: 'Massive Entertainment is a Swedish video game developer.',
        fa: 'Massive Entertainment یک توسعه‌دهنده بازی‌های ویدیویی سوئدی است.'
      },
      website: 'https://www.massive.se',
      founded: '1990'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '12 GB',
        cpu: 'Intel Core i5-8400 / AMD Ryzen 5 2600',
        gpu: 'NVIDIA GeForce GTX 1070 / AMD Radeon RX 5700 XT',
        storage: '90 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-10700K / AMD Ryzen 7 5800X',
        gpu: 'NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800 XT',
        storage: '90 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'EMPRESS',
        version: 'v1.0',
        totalSize: '85 GB',
        files: [
          { name: 'empress-sw-part1.rar', size: '10 GB', url: 'https://example.com/empress-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "20",
    title: { en: "The Last of Us Part II", fa: "آخرین بازمانده از ما: قسمت دوم" },
    image: "/images/Games/tlou2.png",
    backgroundImage: '',
    screenshots: [
      '/games/tlou2-1.jpg',
      '/games/tlou2-2.jpg',
      '/games/tlou2-3.jpg',
      '/games/tlou2-4.jpg',
    ],
    supportedLanguages: ['English', 'Italian', 'Persian'],
    platform: ['PC', 'PS5', 'PS4'],
    releaseDate: '2020-06-19',
    developer: 'Naughty Dog',
    genres: ['Action','Adventure', 'Survival'],
    tags: ['Post-Apocalyptic', 'Story-Driven', 'Third-Person', 'Emotional'],
    marketPrice: 39.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'Five years after their perilous journey, Ellie and Joel have settled down in Jackson, Wyoming.',
        persian: 'پنج سال پس از سفر خطرناکشان، الی و جوئل در جکسون، وایومینگ ساکن شده‌اند.'
      },
      long: {
        english: 'A brutal and emotionally challenging game that follows Ellie on a path of revenge, exploring the devastating physical and emotional consequences of her actions.',
        persian: 'یک بازی وحشیانه و از نظر احساسی چالش‌برانگیز که الی را در مسیر انتقام دنبال می‌کند و عواقب جسمی و عاطفی ویرانگر اقدامات او را بررسی می‌کند.'
      },
      storyline: {
        english: 'When a violent event disrupts their peace, Ellie embarks on a relentless journey to find closure.',
        persian: 'هنگامی که یک اتفاق خشونت‌آمیز آرامش آن‌ها را به هم می‌زند، الی سفری بی‌امان را برای یافتن آرامش آغاز می‌کند.'
      }
    },

    developerInfo: {
      logo: '/developers/naughtydog-logo.png',
      description: {
        en: 'Naughty Dog is an American first-party video game developer.',
        fa: 'Naughty Dog یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://www.naughtydog.com',
      founded: '1984'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-4770K / AMD Ryzen 5 1500X',
        gpu: 'NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700 XT',
        storage: '100 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '32 GB',
        cpu: 'Intel Core i9-9900K / AMD Ryzen 9 3900X',
        gpu: 'NVIDIA GeForce RTX 3080 / AMD Radeon RX 6800 XT',
        storage: '100 GB',
        typeStorage: 'NVMe SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'EMPRESS',
        version: 'v1.0',
        totalSize: '95 GB',
        files: [
          { name: 'empress-tlou2-part1.rar', size: '10 GB', url: 'https://example.com/empress-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "21",
    title: { en: "The Witcher 4: Polaris", fa: "ویچر ۴: پولاریس" },
    image: "/images/Games/witcher4.png",
    backgroundImage: '',
    screenshots: [
      '/games/witcher4-1.jpg',
      '/games/witcher4-2.jpg',
      '/games/witcher4-3.jpg',
      '/games/witcher4-4.jpg',
    ],
    supportedLanguages: ['English', 'Polish', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2027-10-01',
    developer: 'CD Projekt Red',
    genres: ['Action','RPG', 'Open-World'],
    tags: ['Fantasy', 'Magic', 'Medieval', 'Monsters'],
    marketPrice: 69.99,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'The start of a new trilogy for The Witcher franchise, under the new School of the Lynx.',
        persian: 'شروع یک سه‌گانه جدید برای فرنچایز ویچر، زیر نظر مدرسه جدید لینکس.'
      },
      long: {
        english: 'The Witcher 4, currently codenamed Polaris, is being developed using Unreal Engine 5 and is expected to offer a massive open world experience with new combat mechanics.',
        persian: 'ویچر ۴، که در حال حاضر با کد پولاریس شناخته می‌شود، با استفاده از Unreal Engine 5 در حال توسعه است و انتظار می‌رود یک تجربه جهان باز بزرگ با مکانیک‌های مبارزه جدید ارائه دهد.'
      },
      storyline: {
        english: 'The identity of the protagonist is unknown, but the story will move away from Geralt of Rivia.',
        persian: 'هویت شخصیت اصلی نامشخص است، اما داستان از گرالت ریویا فاصله خواهد گرفت.'
      }
    },

    developerInfo: {
      logo: '/developers/cdpr-logo.png',
      description: {
        en: 'CD Projekt Red is a Polish video game developer.',
        fa: 'سی‌دی پروجکت رد یک توسعه‌دهنده بازی‌های ویدیویی لهستانی است.'
      },
      website: 'https://www.cdprojektred.com',
      founded: '2002'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5-10600K / AMD Ryzen 5 5600X',
        gpu: 'NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600 XT',
        storage: '100 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '32 GB',
        cpu: 'Intel Core i7-13700K / AMD Ryzen 7 7700X',
        gpu: 'NVIDIA GeForce RTX 4070 / AMD Radeon RX 7800 XT',
        storage: '100 GB',
        typeStorage: 'NVMe SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'RELOADED',
        version: 'v1.0',
        totalSize: '95 GB',
        files: [
          { name: 'reloaded-witcher4-part1.zip', size: '10 GB', url: 'https://example.com/reloaded-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "22",
    title: { en: "Black Myth: Wukong", fa: "اسطوره سیاه: ووکونگ" },
    image: "/images/Games/wukong.png",
    backgroundImage:"/images/Games/wukong-bg.png",
    screenshots: [
      '/games/wukong-1.jpg',
      '/games/wukong-2.jpg',
      '/games/wukong-3.jpg',
      '/games/wukong-4.jpg',
    ],
    supportedLanguages: ['English', 'Simplified Chinese', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2024-08-20',
    developer: 'Game Science',
    genres: ['Action','RPG', 'Adventure'],
    tags: ['Chinese Mythology', 'Soulslike', 'Monkey King', 'Unreal Engine 5'],
    marketPrice: 69.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=oV8C0fC2E2U',

    description: {
      short: {
        english: 'An epic journey inspired by the classic Chinese novel Journey to the West.',
        persian: 'یک سفر حماسی با الهام از رمان کلاسیک چینی «سفر به غرب».'
      },
      long: {
        english: 'A single-player action RPG set in a fantastical version of ancient China. Players assume the role of the Destined One and face various foes and challenges.',
        persian: 'یک بازی اکشن نقش‌آفرینی تک‌نفره که در نسخه‌ای فانتزی از چین باستان جریان دارد. بازیکنان نقش «مقدر شده» را بر عهده می‌گیرند و با دشمنان و چالش‌های مختلفی روبرو می‌شوند.'
      },
      storyline: {
        english: 'The story follows the classic tale of the Monkey King, Sun Wukong, with a dark and new twist.',
        persian: 'داستان از افسانه کلاسیک میمون پادشاه، سان ووکونگ، با یک پیچش جدید و تاریک پیروی می‌کند.'
      }
    },

    developerInfo: {
      logo: '/developers/gamescience-logo.png',
      description: {
        en: 'Game Science is a Chinese video game developer.',
        fa: 'Game Science یک توسعه‌دهنده بازی‌های ویدیویی چینی است.'
      },
      website: 'https://www.gamesci.com.cn/',
      founded: '2014'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5-8400 / AMD Ryzen 5 1600',
        gpu: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB',
        storage: '80 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-9700K / AMD Ryzen 7 3700X',
        gpu: 'NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800',
        storage: '80 GB',
        typeStorage: 'NVMe SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'DODI Repack',
        version: 'v1.0',
        totalSize: '75.2 GB',
        files: [
          { name: 'dodi-wukong-part1.zip', size: '10 GB', url: 'https://example.com/dodi-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "23",
    title: { en: "Death Stranding 2: On the Beach", fa: "دث استرندینگ ۲: در ساحل" },
    image: "/images/Games/deadstranding2.png",
    backgroundImage: '/images/Games/DeathStranding-bg.png',
    screenshots: [
      '/games/ds2-1.jpg',
      '/games/ds2-2.jpg',
      '/games/ds2-3.jpg',
      '/games/ds2-4.jpg',
    ],
    supportedLanguages: ['English', 'Japanese', 'Persian'],
    platform: ['PS5', 'PC'],
    releaseDate: '2025-05-30',
    developer: 'Kojima Productions',
    genres: ['Action', 'Adventure'],
    tags: ['Sci-Fi', 'Hideo Kojima', 'Cinematic', 'Eerie'],
    marketPrice: 69.99,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'Sam Bridges embarks on a new journey to connect humanity once more.',
        persian: 'سم بریجز سفری جدید را برای اتصال دوباره بشریت آغاز می‌کند.'
      },
      long: {
        english: 'Continue the saga of Sam Bridges in a new adventure that explores the themes of connection, life, and death in a stunning and complex world.',
        persian: 'حماسه سم بریجز را در ماجرایی جدید ادامه دهید که مضامین ارتباط، زندگی و مرگ را در دنیایی خیره‌کننده و پیچیده بررسی می‌کند.'
      },
      storyline: {
        english: 'The sequel will delve deeper into the mysteries of the Death Stranding and the Beach.',
        persian: 'دنباله بیشتر به رازهای دث استرندینگ و ساحل خواهد پرداخت.'
      }
    },

    developerInfo: {
      logo: '/developers/kojimaprod-logo.png',
      description: {
        en: 'Kojima Productions is a Japanese video game developer.',
        fa: 'Kojima Productions یک توسعه‌دهنده بازی‌های ویدیویی ژاپنی است.'
      },
      website: 'https://www.kojimaproductions.jp',
      founded: '2015'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5-12400 / AMD Ryzen 5 5600',
        gpu: 'NVIDIA GeForce RTX 3060 / AMD Radeon RX 6700 XT',
        storage: '80 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '32 GB',
        cpu: 'Intel Core i7-13700K / AMD Ryzen 7 7700X',
        gpu: 'NVIDIA GeForce RTX 4080 / AMD Radeon RX 7900 XT',
        storage: '80 GB',
        typeStorage: 'NVMe SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'EMPRESS',
        version: 'v1.0',
        totalSize: '75 GB',
        files: [
          { name: 'empress-ds2-part1.rar', size: '10 GB', url: 'https://example.com/empress-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "24",
    title: { en: "Valorant", fa: "ولورانت" },
    image: "/images/Games/valorant.png",
    backgroundImage: '/images/Games/valorant-bg.png',
    screenshots: [
      '/games/valorant-1.jpg',
      '/games/valorant-2.jpg',
      '/games/valorant-3.jpg',
      '/games/valorant-4.jpg',
    ],
    supportedLanguages: ['English', 'Korean', 'Persian'],
    platform: ['PC'],
    releaseDate: '2020-06-02',
    developer: 'Riot Games',
    genres: ['Shooter', 'FPS'],
    tags: ['Multiplayer', 'Free-to-Play', 'Competitive', 'Hero Shooter'],
    marketPrice: 0.00,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=lO-99tF_98Q',

    description: {
      short: {
        english: 'A 5v5 character-based tactical shooter.',
        persian: 'یک شوتر تاکتیکی ۵v۵ مبتنی بر شخصیت.'
      },
      long: {
        english: 'VALORANT is a free-to-play tactical first-person shooter where agents with unique abilities engage in intense, round-based combat.',
        persian: 'VALORANT یک تیراندازی اول شخص تاکتیکی رایگان برای بازی است که در آن عامل‌هایی با توانایی‌های منحصر به فرد در نبردهای شدید و مبتنی بر دور درگیر می‌شوند.'
      },
      storyline: {
        english: 'Agents from a parallel Earth called \'Omega\' cross over to our Earth to steal Radianite.',
        persian: 'عامل‌هایی از یک زمین موازی به نام «امگا» به زمین ما می‌آیند تا رادیانایت را بدزدند.'
      }
    },

    developerInfo: {
      logo: '/developers/riotgames-logo.png',
      description: {
        en: 'Riot Games is an American video game developer.',
        fa: 'Riot Games یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://www.riotgames.com/en',
      founded: '2006'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '4 GB',
        cpu: 'Intel Core i3-4150 / AMD Equivalent',
        gpu: 'NVIDIA GeForce GT 730 / AMD Equivalent',
        storage: '30 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-9400F / AMD Ryzen 5 2600X',
        gpu: 'NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570',
        storage: '30 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'Riot Launcher',
        version: 'Always Online',
        totalSize: '30 GB',
        files: []
      }
    ]
  },
  {
    id: "25",
    title: { en: "UFC 4", fa: "یواف‌سی ۴" },
    image: "/images/Games/ufc4.png",
    backgroundImage: '/images/Games/ufc4-bg.png',
    screenshots: [
      '/games/ufc4-1.jpg',
      '/games/ufc4-2.jpg',
      '/games/ufc4-3.jpg',
      '/games/ufc4-4.jpg',
    ],
    supportedLanguages: ['English', 'German', 'Spanish'],
    platform: ['PS4', 'Xbox One'],
    releaseDate: '2020-08-14',
    developer: 'EA Vancouver',
    genres: ['Sports', 'Fighting'],
    tags: ['MMA', 'Realistic', 'Multiplayer', 'Competitive'],
    marketPrice: 9.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'The most authentic and intense MMA fighting experience.',
        persian: 'واقعی‌ترین و شدیدترین تجربه مبارزات MMA.'
      },
      long: {
        english: 'EA SPORTS UFC 4 is built on fluid combinations of striking, grappling, and new takedown controls, allowing for a more authentic MMA experience.',
        persian: 'EA SPORTS UFC 4 بر اساس ترکیب‌های روان از ضربه زدن، گلاویز شدن و کنترل‌های جدید برای زمین زدن ساخته شده است، که تجربه MMA واقعی‌تری را ممکن می‌سازد.'
      },
      storyline: {
        english: 'Create your legend in the career mode and rise to become the undisputed champion.',
        persian: 'افسانه خود را در حالت حرفه‌ای بسازید و به قهرمان بی‌چون و چرای تبدیل شوید.'
      }
    },

    developerInfo: {
      logo: '/developers/ea-logo.png',
      description: {
        en: 'EA Vancouver is a Canadian video game developer.',
        fa: 'EA Vancouver یک توسعه‌دهنده بازی‌های ویدیویی کانادایی است.'
      },
      website: 'https://www.ea.com/studios/ea-vancouver',
      founded: '1983'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-6600 / AMD FX-8350',
        gpu: 'NVIDIA GeForce GTX 960 / AMD Radeon R9 290',
        storage: '60 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-8700 / AMD Ryzen 7 2700',
        gpu: 'NVIDIA GeForce GTX 1070 / AMD Radeon RX 580',
        storage: '60 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'CPY',
        version: 'v1.0',
        totalSize: '55 GB',
        files: [
          { name: 'cpy-ufc4-part1.rar', size: '10 GB', url: 'https://example.com/cpy-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "26",
    title: { en: "Assassin's Creed Valhalla", fa: "اساسینز کرید والهالا" },
    image: "/images/Games/assassinscreedvalhalla.png",
    backgroundImage: '/images/Games/assassinscreedvalhalla-bg.png',
    screenshots: [
      '/games/acv-1.jpg',
      '/games/acv-2.jpg',
      '/games/acv-3.jpg',
      '/games/acv-4.jpg',
    ],
    supportedLanguages: ['English', 'French', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4', 'Xbox One'],
    releaseDate: '2020-11-10',
    developer: 'Ubisoft Montreal',
    genres: ['Action', 'RPG', 'Open-World'],
    tags: ['Viking', 'Historical', 'Adventure', 'Open-World'],
    marketPrice: 59.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=ssrashima8E',

    description: {
      short: {
        english: 'Lead epic Viking raids against the fractured kingdoms of England.',
        persian: 'رهبری حملات حماسی وایکینگ‌ها را در برابر پادشاهی‌های متلاشی شده انگلستان بر عهده بگیرید.'
      },
      long: {
        english: 'Become Eivor, a legendary Viking warrior, and build your settlement.',
        persian: 'به یک جنگجوی افسانه‌ای وایکینگ تبدیل شوید و اسکان خود را بسازید.'
      },
      storyline: {
        english: 'Lead your clan from the harsh shores of Norway to a new home in England\'s verdant lands.',
        persian: 'قبیله خود را از سواحل خشن نروژ به خانه جدیدی در سرزمین‌های سرسبز انگلستان هدایت کنید.'
      }
    },

    developerInfo: {
      logo: '/developers/ubisoft-logo.png',
      description: {
        en: 'Ubisoft Montreal is a Canadian video game developer.',
        fa: 'Ubisoft Montreal یک توسعه‌دهنده بازی‌های ویدیویی کانادایی است.'
      },
      website: 'https://montreal.ubisoft.com/',
      founded: '1997'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-4460 / AMD Ryzen 3 1200',
        gpu: 'NVIDIA GeForce GTX 960 4GB / AMD Radeon R9 380 4GB',
        storage: '130 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-4790 / AMD Ryzen 5 1600',
        gpu: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 570 8GB',
        storage: '130 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'EMPRESS',
        version: 'v1.0',
        totalSize: '115 GB',
        files: [
          { name: 'empress-acv-part1.rar', size: '15 GB', url: 'https://example.com/empress-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "27",
    title: { en: "Marvel's Avengers", fa: "انتقام‌جویان مارول" },
    image: "/images/Games/avengers.png",
    backgroundImage: '',
    screenshots: [
      '/games/avengers-1.jpg',
      '/games/avengers-2.jpg',
      '/games/avengers-3.jpg',
      '/games/avengers-4.jpg',
    ],
    supportedLanguages: ['English', 'German', 'Italian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4', 'Xbox One'],
    releaseDate: '2020-09-04',
    developer: 'Crystal Dynamics',
    genres: ['Action','Adventure'],
    tags: ['Superheroes', 'Marvel', 'Multiplayer', 'Third-Person'],
    marketPrice: 9.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'An epic third-person action-adventure game that blends an original cinematic story with single-player and co-op gameplay.',
        persian: 'یک بازی اکشن-ماجراجویی حماسی سوم شخص که داستانی سینمایی اصلی را با گیم‌پلی تک‌نفره و کوآپ ترکیب می‌کند.'
      },
      long: {
        english: 'Assemble Earth’s Mightiest Heroes, embrace your powers, and live your Super Hero dreams.',
        persian: 'قدرتمندترین قهرمانان زمین را گرد هم آورید، قدرت‌های خود را در آغوش بگیرید و رویاهای ابرقهرمانی خود را زندگی کنید.'
      },
      storyline: {
        english: 'The Avengers must reassemble after a catastrophic event called A-Day leaves them disbanded and blamed for a tragedy.',
        persian: 'انتقام‌جویان باید پس از یک رویداد فاجعه‌بار به نام A-Day که آن‌ها را منحل و مقصر یک تراژدی می‌داند، دوباره جمع شوند.'
      }
    },

    developerInfo: {
      logo: '/developers/crystaldynamics-logo.png',
      description: {
        en: 'Crystal Dynamics is an American video game developer.',
        fa: 'Crystal Dynamics یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://crystaldynamics.com',
      founded: '1992'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i3-4170 / AMD FX-8350',
        gpu: 'NVIDIA GeForce GTX 950 / AMD Radeon R9 290',
        storage: '75 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-4790K / AMD Ryzen 5 2600',
        gpu: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 8GB',
        storage: '75 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'SKIDROW',
        version: 'v1.0',
        totalSize: '68.5 GB',
        files: [
          { name: 'skidrow-avengers-part1.rar', size: '10 GB', url: 'https://example.com/skidrow-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "28",
    title: { en: "Cyberpunk 2077", fa: "سایبرپانک ۲۰۷۷" },
    image: "/images/Games/cyberpunk2077.png",
    backgroundImage: '/images/Games/Cyberpunk-bg.png',
    screenshots: [
      '/games/cyberpunk-1.jpg',
      '/games/cyberpunk-2.jpg',
      '/games/cyberpunk-3.jpg',
      '/games/cyberpunk-4.jpg',
    ],
    supportedLanguages: ['English', 'Polish', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2020-12-10',
    developer: 'CD Projekt Red',
    genres: ['RPG', 'Action'],
    tags: ['Open World', 'Cyberpunk', 'Futuristic', 'First-Person'],
    marketPrice: 59.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=8X2kIfS6fb8',

    description: {
      short: {
        english: 'An open-world, action-adventure story set in Night City.',
        persian: 'داستان اکشن-ماجراجویی جهان باز در شهر نایت سیتی.'
      },
      long: {
        english: 'You play as V, a mercenary outlaw going after a one-of-a-kind implant.',
        persian: 'شما در نقش V، یک مزدور قانون‌شکن، به دنبال یک ایمپلنت منحصربه‌فرد هستید.'
      },
      storyline: {
        english: 'In the year 2077, corporations rule every aspect of life in Night City...',
        persian: 'در سال ۲۰۷۷، شرکت‌ها بر تمام جنبه‌های زندگی در شهر نایت حکمرانی می‌کنند...'
      }
    },

    developerInfo: {
      logo: '/developers/cdpr-logo.png',
      description: {
        en: 'CD Projekt Red is a Polish video game developer.',
        fa: 'سی‌دی پروجکت رد یک توسعه‌دهنده بازی‌های ویدیویی لهستانی است.'
      },
      website: 'https://www.cdprojektred.com',
      founded: '2002'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-3570K / AMD FX-8310',
        gpu: 'NVIDIA GeForce GTX 780 3GB / AMD Radeon RX 470',
        storage: '70 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-6700 / AMD Ryzen 5 1600',
        gpu: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB',
        storage: '70 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'FitGirl Repack',
        version: 'v2.1',
        totalSize: '35.2 GB',
        files: [
          { name: 'fitgirl-repack-part1.zip', size: '10 GB', url: 'https://example.com/fitgirl-part1.zip' },
          { name: 'fitgirl-repack-part2.zip', size: '10 GB', url: 'https://example.com/fitgirl-part2.zip' },
          { name: 'fitgirl-repack-part3.zip', size: '10 GB', url: 'https://example.com/fitgirl-part3.zip' },
          { name: 'fitgirl-repack-part4.zip', size: '5.2 GB', url: 'https://example.com/fitgirl-part4.zip' },
        ]
      },
      {
        name: 'CODEX',
        version: 'v1.0',
        totalSize: '68.5 GB',
        files: [
          { name: 'codex-game-part1.rar', size: '15 GB', url: 'https://example.com/codex-part1.rar' },
          { name: 'codex-game-part2.rar', size: '15 GB', url: 'https://example.com/codex-part2.rar' },
          { name: 'codex-game-part3.rar', size: '15 GB', url: 'https://example.com/codex-part3.rar' },
          { name: 'codex-game-part4.rar', size: '15 GB', url: 'https://example.com/codex-part4.rar' },
          { name: 'codex-game-part5.rar', size: '8.5 GB', url: 'https://example.com/codex-part5.rar' },
        ]
      }
    ]
  },
  {
    id: "29",
    title: { en: "Far Cry 6", fa: "فار کرای ۶" },
    image: "/images/Games/farcry6.png",
    backgroundImage: '',
    screenshots: [
      '/games/fc6-1.jpg',
      '/games/fc6-2.jpg',
      '/games/fc6-3.jpg',
      '/games/fc6-4.jpg',
    ],
    supportedLanguages: ['English', 'Spanish', 'French'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4', 'Xbox One'],
    releaseDate: '2021-10-07',
    developer: 'Ubisoft Toronto',
    genres: ['FPS', 'Action', 'Open-World'],
    tags: ['Revolution', 'Tropical', 'Guerrilla Warfare', 'Dictator'],
    marketPrice: 19.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'Welcome to Yara, a tropical paradise frozen in time.',
        persian: 'به یارا، یک بهشت گرمسیری که در زمان متوقف شده است، خوش آمدید.'
      },
      long: {
        english: 'Play as Dani Rojas, a local Yaran, and become a guerrilla fighter to liberate your nation from a ruthless dictator.',
        persian: 'در نقش دنی روخاس، یک یارانی محلی، بازی کنید و به یک مبارز چریکی تبدیل شوید تا ملت خود را از یک دیکتاتور بی‌رحم آزاد کنید.'
      },
      storyline: {
        english: 'The dictator Anton Castillo is raising his son Diego to follow in his footsteps, while the people of Yara rise up against their oppressive regime.',
        persian: 'دیکتاتور آنتون کاستیلو پسرش دیگو را برای پیروی از ردپای خود تربیت می‌کند، در حالی که مردم یارا علیه رژیم سرکوبگر خود قیام می‌کنند.'
      }
    },

    developerInfo: {
      logo: '/developers/ubisoft-logo.png',
      description: {
        en: 'Ubisoft Toronto is a Canadian video game developer.',
        fa: 'Ubisoft Toronto یک توسعه‌دهنده بازی‌های ویدیویی کانادایی است.'
      },
      website: 'https://toronto.ubisoft.com',
      founded: '2010'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-4460 / AMD Ryzen 3 1200',
        gpu: 'NVIDIA GeForce GTX 960 4GB / AMD Radeon RX 460 4GB',
        storage: '60 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-7700 / AMD Ryzen 5 3600X',
        gpu: 'NVIDIA GeForce GTX 1080 / AMD Radeon RX Vega 64',
        storage: '60 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'DODI Repack',
        version: 'v1.0',
        totalSize: '45.8 GB',
        files: [
          { name: 'dodi-fc6-part1.zip', size: '10 GB', url: 'https://example.com/dodi-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "30",
    title: { en: "Halo 5: Guardians", fa: "هیلو ۵: نگهبانان" },
    image: "/images/Games/halo5.png",
    backgroundImage: '',
    screenshots: [
      '/games/halo5-1.jpg',
      '/games/halo5-2.jpg',
      '/games/halo5-3.jpg',
      '/games/halo5-4.jpg',
    ],
    supportedLanguages: ['English', 'German', 'Japanese'],
    platform: ['Xbox One'],
    releaseDate: '2015-10-27',
    developer: '343 Industries',
    genres: ['FPS','Action'],
    tags: ['Multiplayer', 'Space Opera', 'Master Chief', 'Co-op'],
    marketPrice: 9.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'A mysterious and unstoppable force threatens the galaxy, and the Master Chief is missing.',
        persian: 'یک نیروی مرموز و غیرقابل توقف، کهکشان را تهدید می‌کند و Master Chief مفقود شده است.'
      },
      long: {
        english: 'Play as both the Master Chief and Spartan Locke in an epic adventure that explores both sides of the conflict.',
        persian: 'در نقش هم Master Chief و هم Spartan Locke در یک ماجراجویی حماسی که هر دو طرف درگیری را بررسی می‌کند، بازی کنید.'
      },
      storyline: {
        english: 'When a devastating attack occurs, a new Spartan team is sent to hunt down the Master Chief.',
        persian: 'هنگامی که یک حمله ویرانگر رخ می‌دهد، یک تیم جدید اسپارتان برای شکار Master Chief فرستاده می‌شود.'
      }
    },

    developerInfo: {
      logo: '/developers/343i-logo.png',
      description: {
        en: '343 Industries is an American video game developer.',
        fa: '343 Industries یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://www.halowaypoint.com',
      founded: '2007'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-3570 / AMD FX-6350',
        gpu: 'NVIDIA GeForce GTX 660 / AMD Radeon HD 7850',
        storage: '60 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-4770K / AMD FX-9590',
        gpu: 'NVIDIA GeForce GTX 980 / AMD Radeon R9 Fury',
        storage: '60 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'Razor1911',
        version: 'v1.0',
        totalSize: '55.5 GB',
        files: [
          { name: 'razor-halo5-part1.zip', size: '10 GB', url: 'https://example.com/razor-part1.zip' },
        ]
      }
    ]
  },
  // برای تکمیل به ۳۰ مورد، ۱۸ بازی دیگر با استفاده از تصاویر موجود در لیست شما و تصاویر محبوب اضافی ایجاد می‌کنم.
  {
    id: "31",
    title: { en: "The Last of Us Part I", fa: "آخرین بازمانده از ما: قسمت اول" },
    image: "/images/Games/tlou2.png", // Using the same image for Part I
    backgroundImage: '',
    screenshots: [
      '/games/tlou1-1.jpg',
      '/games/tlou1-2.jpg',
      '/games/tlou1-3.jpg',
      '/games/tlou1-4.jpg',
    ],
    supportedLanguages: ['English', 'Italian', 'Persian'],
    platform: ['PC', 'PS5', 'PS4'],
    releaseDate: '2023-03-28',
    developer: 'Naughty Dog',
    genres: ['Adventure', 'Survival'],
    tags: ['Post-Apocalyptic', 'Story-Driven', 'Third-Person', 'Zombies'],
    marketPrice: 49.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'Relive the emotional story and unforgettable characters of Joel and Ellie.',
        persian: 'داستان احساسی و شخصیت‌های فراموش‌نشدنی جوئل و الی را دوباره تجربه کنید.'
      },
      long: {
        english: 'Experience the emotional storytelling and unforgettable characters of Joel and Ellie in The Last of Us, winner of over 200 Game of the Year awards.',
        persian: 'روایت احساسی و شخصیت‌های فراموش‌نشدنی جوئل و الی را در The Last of Us، برنده بیش از ۲۰۰ جایزه بازی سال، تجربه کنید.'
      },
      storyline: {
        english: 'In a ravaged civilization, Joel, a hardened survivor, is hired to smuggle 14-year-old Ellie out of an oppressive quarantine zone.',
        persian: 'در یک تمدن ویران‌شده، جوئل، یک بازمانده سرسخت، برای قاچاق الی ۱۴ ساله از یک منطقه قرنطینه ظالمانه استخدام می‌شود.'
      }
    },

    developerInfo: {
      logo: '/developers/naughtydog-logo.png',
      description: {
        en: 'Naughty Dog is an American first-party video game developer.',
        fa: 'Naughty Dog یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://www.naughtydog.com',
      founded: '1984'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-4770K / AMD Ryzen 5 1500X',
        gpu: 'NVIDIA GeForce GTX 1070 / AMD Radeon RX 580',
        storage: '100 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '32 GB',
        cpu: 'Intel Core i9-9900K / AMD Ryzen 7 3700X',
        gpu: 'NVIDIA GeForce RTX 2080 Ti / AMD Radeon RX 6700 XT',
        storage: '100 GB',
        typeStorage: 'NVMe SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'FitGirl Repack',
        version: 'v1.0',
        totalSize: '75 GB',
        files: [
          { name: 'fitgirl-tlou1-part1.zip', size: '10 GB', url: 'https://example.com/fitgirl-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "32",
    title: { en: "The Elder Scrolls Online", fa: "اسکرولز کهن آنلاین" },
    image: "/images/Games/eldenscroll.png", // Using the same image for ESO
    backgroundImage: '',
    screenshots: [
      '/games/eso-1.jpg',
      '/games/eso-2.jpg',
      '/games/eso-3.jpg',
      '/games/eso-4.jpg',
    ],
    supportedLanguages: ['English', 'German', 'French'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4', 'Xbox One'],
    releaseDate: '2014-04-04',
    developer: 'ZeniMax Online Studios',
    genres: ['Fantasy'],
    tags: ['Massively Multiplayer', 'Exploration', 'Questing', 'High Fantasy'],
    marketPrice: 19.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=OkWbKk27j2U',

    description: {
      short: {
        english: 'An online multiplayer RPG set in the world of Tamriel.',
        persian: 'یک RPG چند نفره آنلاین که در دنیای تامریل اتفاق می‌افتد.'
      },
      long: {
        english: 'Experience a constantly expanding world in The Elder Scrolls Online. Explore the world, uncover dark secrets, and fight for the destiny of Tamriel.',
        persian: 'دنیای در حال گسترش The Elder Scrolls Online را تجربه کنید. جهان را کاوش کنید، اسرار تاریک را کشف کنید و برای سرنوشت تامریل بجنگید.'
      },
      storyline: {
        english: 'The Daedric Prince Molag Bal attempts to pull all of Tamriel into his demonic realm.',
        persian: 'شاهزاده دادریک، مولاگ بال، تلاش می‌کند تا تمام تامریل را به قلمرو اهریمنی خود بکشاند.'
      }
    },

    developerInfo: {
      logo: '/developers/zenimax-logo.png',
      description: {
        en: 'ZeniMax Online Studios is an American video game developer.',
        fa: 'ZeniMax Online Studios یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://www.elderscrollsonline.com',
      founded: '2007'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i3-540 / AMD A6-3620',
        gpu: 'NVIDIA GeForce 460 / AMD Radeon HD 6850',
        storage: '120 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5-2300 / AMD FX-4350',
        gpu: 'NVIDIA GeForce GTX 750 / AMD Radeon HD 7850',
        storage: '120 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'STEAM',
        version: 'Always Online',
        totalSize: '110 GB',
        files: []
      }
    ]
  },

  {
    id: "34",
    title: { en: "Grand Theft Auto V", fa: "سرقت بزرگ اتومبیل ۵" },
    image: "/images/Games/reddead2.png", // Using RDR2 image as a mock for GTA
    backgroundImage: '',
    screenshots: [
      '/games/gta5-1.jpg',
      '/games/gta5-2.jpg',
      '/games/gta5-3.jpg',
      '/games/gta5-4.jpg',
    ],
    supportedLanguages: ['English', 'German', 'Russian', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4', 'Xbox One'],
    releaseDate: '2015-04-14',
    developer: 'Rockstar North',
    genres: ['Action','Adventure', 'Open-World'],
    tags: ['Crime', 'Modern', 'Satirical', 'Multiplayer'],
    marketPrice: 29.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'Three very different criminals team up for a series of daring and dangerous heists.',
        persian: 'سه مجرم بسیار متفاوت برای یک سری سرقت‌های جسورانه و خطرناک با هم متحد می‌شوند.'
      },
      long: {
        english: 'Explore the vast and detailed world of Los Santos and Blaine County in the ultimate Grand Theft Auto V experience, featuring technical upgrades and Grand Theft Auto Online.',
        persian: 'دنیای وسیع و با جزئیات لس سانتوس و بلین کانتی را در تجربه نهایی Grand Theft Auto V کاوش کنید، که شامل ارتقاءهای فنی و Grand Theft Auto Online است.'
      },
      storyline: {
        english: 'When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive.',
        persian: 'هنگامی که یک کلاهبردار جوان خیابانی، یک سارق بانک بازنشسته و یک روان‌پریش ترسناک خود را درگیر با برخی از وحشتناک‌ترین عناصر دنیای زیرزمینی جنایت، دولت ایالات متحده و صنعت سرگرمی می‌یابند، باید یک سری سرقت‌های خطرناک را برای بقا انجام دهند.'
      }
    },

    developerInfo: {
      logo: '/developers/rockstar-logo.png',
      description: {
        en: 'Rockstar North is a British video game developer.',
        fa: 'Rockstar North یک توسعه‌دهنده بازی‌های ویدیویی بریتانیایی است.'
      },
      website: 'https://www.rockstargames.com',
      founded: '1987'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850 Quad-Core Processor @ 2.5GHz',
        gpu: 'NVIDIA 9800 GT 1GB / AMD HD 4870 1GB',
        storage: '72 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz',
        gpu: 'NVIDIA GTX 660 2GB / AMD HD 7870 2GB',
        storage: '72 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'RELOADED',
        version: 'v1.0',
        totalSize: '65 GB',
        files: [
          { name: 'reloaded-gta5-part1.rar', size: '10 GB', url: 'https://example.com/reloaded-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "35",
    title: { en: "Elden Ring: Shadow of the Erdtree", fa: "الدن رینگ: سایه اردتری" },
    image: "/images/Games/eldenring.png", // Using the same image for the expansion
    backgroundImage: '',
    screenshots: [
      '/games/sote-1.jpg',
      '/games/sote-2.jpg',
      '/games/sote-3.jpg',
      '/games/sote-4.jpg',
    ],
    supportedLanguages: ['English', 'Japanese', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4', 'Xbox One'],
    releaseDate: '2024-06-21',
    developer: 'FromSoftware',
    genres: ['Action','RPG', 'Fantasy','Adventure'],
    tags: ['Souls-like', 'DLC', 'Dark Fantasy', 'Challenging'],
    marketPrice: 39.99,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'The major expansion for Elden Ring, introducing a new story and region.',
        persian: 'بزرگترین بسته الحاقی الدن رینگ، با معرفی داستانی جدید و منطقه‌ای جدید.'
      },
      long: {
        english: 'Shadow of the Erdtree takes players to the Land of Shadow, a place untouched by the Erdtree where the Goddess Marika first set foot.',
        persian: 'سایه اردتری بازیکنان را به سرزمین سایه می‌برد، مکانی دست‌نخورده توسط اردتری که الهه ماریکا برای اولین بار پا به آنجا گذاشت.'
      },
      storyline: {
        english: 'The story follows the path of Miquella and the secrets hidden in the Land of Shadow.',
        persian: 'داستان مسیر میکلا و رازهای پنهان در سرزمین سایه را دنبال می‌کند.'
      }
    },

    developerInfo: {
      logo: '/developers/fromsoftware-logo.png',
      description: {
        en: 'FromSoftware is a Japanese video game developer best known for the Souls series.',
        fa: 'FromSoftware یک توسعه‌دهنده بازی‌های ویدیویی ژاپنی است که بیشتر به خاطر سری سولز شناخته می‌شود.'
      },
      website: 'https://www.fromsoftware.jp/en/',
      founded: '1986'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '12 GB',
        cpu: 'Intel Core i5-8400 / AMD Ryzen 3 3300X',
        gpu: 'NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB',
        storage: '80 GB',
        typeStorage: 'SSD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-8700K / AMD Ryzen 5 3600X',
        gpu: 'NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56 8GB',
        storage: '80 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'CODEX',
        version: 'v1.0 DLC',
        totalSize: '70 GB',
        files: [
          { name: 'codex-elden-dlc-part1.rar', size: '15 GB', url: 'https://example.com/codex-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "36",
    title: { en: "The Witcher 3: Wild Hunt", fa: "ویچر ۳: وایلد هانت" },
    image: "/images/Games/witcher4.png", // Using the same image for The Witcher 3
    backgroundImage: '',
    screenshots: [
      '/games/witcher3-1.jpg',
      '/games/witcher3-2.jpg',
      '/games/witcher3-3.jpg',
      '/games/witcher3-4.jpg',
    ],
    supportedLanguages: ['English', 'Polish', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4', 'Xbox One', 'Switch'],
    releaseDate: '2015-05-18',
    developer: 'CD Projekt Red',
    genres: ['Action','RPG', 'Open-World' , 'Adventure'] ,
    tags: ['Fantasy', 'Magic', 'Medieval', 'Geralt'],
    marketPrice: 9.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'Become Geralt of Rivia, a professional monster slayer, in a dark fantasy world.',
        persian: 'در دنیایی فانتزی تاریک، به گرالت ریویا، یک شکارچی هیولای حرفه‌ای تبدیل شوید.'
      },
      long: {
        english: 'Explore a massive, open world, morally grey choices, and a captivating story in the final installment of Geralt’s story.',
        persian: 'جهانی عظیم و باز، انتخاب‌های اخلاقی خاکستری و داستانی جذاب را در آخرین قسمت از داستان گرالت کاوش کنید.'
      },
      storyline: {
        english: 'Geralt is hunting the Wild Hunt, a phantom army, to find his adopted daughter, Ciri.',
        persian: 'گرالت در حال شکار وایلد هانت، یک ارتش شبح، برای یافتن دخترخوانده‌اش، سیری است.'
      }
    },

    developerInfo: {
      logo: '/developers/cdpr-logo.png',
      description: {
        en: 'CD Projekt Red is a Polish video game developer.',
        fa: 'سی‌دی پروجکت رد یک توسعه‌دهنده بازی‌های ویدیویی لهستانی است.'
      },
      website: 'https://www.cdprojektred.com',
      founded: '2002'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-2500K / AMD Phenom II X4 940',
        gpu: 'NVIDIA GeForce GTX 660 / AMD Radeon HD 7870',
        storage: '50 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i7-3770 / AMD FX-8350',
        gpu: 'NVIDIA GeForce GTX 770 / AMD Radeon R9 290',
        storage: '50 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'GOG Release',
        version: 'v4.0 Next-Gen',
        totalSize: '45 GB',
        files: [
          { name: 'gog-witcher3-part1.zip', size: '10 GB', url: 'https://example.com/gog-part1.zip' },
        ]
      }
    ]
  },
 
  {
    id: "38",
    title: { en: "Star Wars Jedi: Survivor", fa: "جنگ ستارگان جدی: بازمانده" },
    image: "/images/Games/starwars.png", 
    backgroundImage: '/images/Games/jedi-bg.png',
    screenshots: [
      '/games/jedi-survivor-1.jpg',
      '/games/jedi-survivor-2.jpg',
      '/games/jedi-survivor-3.jpg',
      '/games/jedi-survivor-4.jpg',
    ],
    supportedLanguages: ['English', 'French', 'Spanish'],
    platform: ['PC', 'PS5', 'Xbox Series X/S'],
    releaseDate: '2023-04-28',
    developer: 'Respawn Entertainment',
    genres: ['Action','Adventure'],
    tags: ['Sci-Fi', 'Space', 'Star Wars', 'Lightsaber'],
    marketPrice: 49.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'Continue the journey of Cal Kestis as he fights to stay one step ahead of the Empire’s pursuit.',
        persian: 'سفر کال کستیس را ادامه دهید در حالی که او برای یک قدم جلوتر ماندن از تعقیب امپراتوری می‌جنگد.'
      },
      long: {
        english: 'Jedi: Survivor is a third-person, action-adventure game set five years after the events of Jedi: Fallen Order.',
        persian: 'جدی: بازمانده یک بازی اکشن-ماجراجویی سوم شخص است که پنج سال پس از وقایع Jedi: Fallen Order اتفاق می‌افتد.'
      },
      storyline: {
        english: 'Cal must forge new alliances and use new Force abilities and lightsaber combat to survive as one of the last remaining Jedi.',
        persian: 'کال باید اتحادهای جدیدی ایجاد کند و از توانایی‌های جدید نیرو و مبارزات شمشیر نوری برای بقا به عنوان یکی از آخرین جدای‌های باقی‌مانده استفاده کند.'
      }
    },

    developerInfo: {
      logo: '/developers/respawn-logo.png',
      description: {
        en: 'Respawn Entertainment is an American video game developer.',
        fa: 'Respawn Entertainment یک توسعه‌دهنده بازی‌های ویدیویی آمریکایی است.'
      },
      website: 'https://www.respawn.com',
      founded: '2010'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i7-7700 / AMD Ryzen 5 1400',
        gpu: 'NVIDIA GeForce GTX 1070 / AMD Radeon RX 580',
        storage: '155 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '16 GB',
        cpu: 'Intel Core i5-11600K / AMD Ryzen 5 5600X',
        gpu: 'NVIDIA GeForce RTX 2070 / AMD Radeon RX 6700 XT',
        storage: '155 GB',
        typeStorage: 'SSD Required'
      }
    },

    crackVersions: [
      {
        name: 'EMPRESS',
        version: 'v1.0',
        totalSize: '135 GB',
        files: [
          { name: 'empress-jedi-part1.rar', size: '15 GB', url: 'https://example.com/empress-part1.rar' },
        ]
      }
    ]
  },
  {
    id: "40",
    title: { en: "Metro Last Light", fa: "مترو آخرین نور" },
    image: "/images/Games/metro.png", // Using the same image for Last Light
    backgroundImage: '',
    screenshots: [
      '/games/mll-1.jpg',
      '/games/mll-2.jpg',
      '/games/mll-3.jpg',
      '/games/mll-4.jpg',
    ],
    supportedLanguages: ['English', 'Russian', 'Persian'],
    platform: ['PC', 'PS4', 'Xbox One'],
    releaseDate: '2013-05-14',
    developer: '4A Games',
    genres: ['FPS', 'Survival'],
    tags: ['Post-Apocalyptic', 'Story-Driven', 'Atmospheric', 'Single Player'],
    marketPrice: 9.99,
    hasDiscount: true,
    trailerUrl: 'https://www.youtube.com/watch?v=f2n9R_T2k6g',

    description: {
      short: {
        english: 'A terrifying post-apocalyptic journey through the Moscow Metro.',
        persian: 'یک سفر پسا-آخرالزمانی وحشتناک از طریق متروی مسکو.'
      },
      long: {
        english: 'The sequel to Metro 2033, continuing the story of Artyom as he faces a civil war among the inhabitants of the Metro.',
        persian: 'دنباله Metro 2033، که داستان آرتیوم را در مواجهه با یک جنگ داخلی در میان ساکنان مترو ادامه می‌دهد.'
      },
      storyline: {
        english: 'Artyom is burdened by a sense of guilt, but is given a chance at redemption when he is tasked with destroying the last remaining Dark One.',
        persian: 'آرتیوم تحت بار احساس گناه است، اما زمانی که مامور می‌شود آخرین Dark One باقی‌مانده را نابود کند، فرصتی برای رستگاری پیدا می‌کند.'
      }
    },

    developerInfo: {
      logo: '/developers/4agames-logo.png',
      description: {
        en: '4A Games is a Maltese video game developer.',
        fa: '4A Games یک توسعه‌دهنده بازی‌های ویدیویی مالتی است.'
      },
      website: 'https://www.4a-games.com',
      founded: '2006'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows Vista 64-bit',
        ram: '2 GB',
        cpu: 'Intel Core 2 Duo / AMD Equivalent',
        gpu: 'NVIDIA GeForce GTS 250 / AMD Radeon HD 4870',
        storage: '10 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5 / AMD Equivalent',
        gpu: 'NVIDIA GeForce GTX 670 / AMD Radeon HD 7870',
        storage: '10 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'FLT',
        version: 'v1.0',
        totalSize: '9 GB',
        files: [
          { name: 'flt-mll-part1.zip', size: '9 GB', url: 'https://example.com/flt-part1.zip' },
        ]
      }
    ]
  },
  {
    id: "41",
    title: { en: "Minecraft", fa: "ماینکرفت" },
    image: "/images/Games/minecraft.png",
    backgroundImage: '',
    screenshots: [
      '/games/minecraft-1.jpg',
      '/games/minecraft-2.jpg',
      '/games/minecraft-3.jpg',
      '/games/minecraft-4.jpg',
    ],
    supportedLanguages: ['English', 'German', 'Persian'],
    platform: ['PC', 'PS5', 'Xbox Series X/S', 'PS4'],
    releaseDate: '2011-11-18',
    developer: 'Mojang Studios',
    genres: ['Survival'],
    tags: ['Creative', 'Multiplayer', 'Exploration', 'Blocky'],
    marketPrice: 29.99,
    hasDiscount: false,
    trailerUrl: 'https://www.youtube.com/watch?v=Fj-b1S6k86w',

    description: {
      short: {
        english: 'Explore your own unique world, survive the night, and create anything you can imagine.',
        persian: 'دنیای منحصر به فرد خود را کاوش کنید، از شب زنده بمانید و هر چیزی که می‌توانید تصور کنید بسازید.'
      },
      long: {
        english: 'Minecraft is a game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles.',
        persian: 'ماینکرفت بازی‌ای در مورد قرار دادن بلوک‌ها و رفتن به ماجراجویی است. دنیاهای تولید شده تصادفی را کاوش کنید و چیزهای شگفت‌انگیزی از ساده‌ترین خانه‌ها تا باشکوه‌ترین قلعه‌ها بسازید.'
      },
      storyline: {
        english: 'There is no set storyline, but players can work towards defeating the Ender Dragon.',
        persian: 'داستان مشخصی وجود ندارد، اما بازیکنان می‌توانند برای شکست دادن اژدهای اِندر تلاش کنند.'
      }
    },

    developerInfo: {
      logo: '/developers/mojang-logo.png',
      description: {
        en: 'Mojang Studios is a Swedish video game developer.',
        fa: 'Mojang Studios یک توسعه‌دهنده بازی‌های ویدیویی سوئدی است.'
      },
      website: 'https://www.minecraft.net',
      founded: '2009'
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        ram: '4 GB',
        cpu: 'Intel Core i3-3210 / AMD A8-7600 APU',
        gpu: 'NVIDIA GeForce 400 Series / AMD Radeon HD 7000 Series',
        storage: '4 GB',
        typeStorage: 'HDD'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        ram: '8 GB',
        cpu: 'Intel Core i5-4690 / AMD A10-7800 APU',
        gpu: 'NVIDIA GeForce 700 Series / AMD Radeon Rx 200 Series',
        storage: '4 GB',
        typeStorage: 'SSD'
      }
    },

    crackVersions: [
      {
        name: 'TLauncher',
        version: 'All Versions',
        totalSize: '2 GB',
        files: [
          { name: 'tlauncher-minecraft.exe', size: '10 MB', url: 'https://example.com/tlauncher.exe' },
        ]
      }
    ]
  }

]


export const mockSuggestedGames: SuggestedGame[] = [
    { id: 101, title: { en: "Diablo 4", fa: "دیابلو ۴" }, image: "https://via.placeholder.com/400x250/242424/FFF?text=Diablo+4", genres: ["Action RPG"], rating: 8.5 },
    { id: 102, title: { en: "Lost Ark", fa: "لست آرک" }, image: "https://via.placeholder.com/400x250/242424/FFF?text=Lost+Ark", genres: ["MMORPG", "Action RPG"], rating: 8.2 },
    { id: 103, title: { en: "Elden Ring", fa: "الدن رینگ" }, image: "https://via.placeholder.com/400x250/242424/FFF?text=Elden+Ring", genres: ["Dark Fantasy", "Souls-like"], rating: 9.5 },
];

export const mockInitialComments = (lang: 'en' | 'fa'): Comment[] => [
  {
    id: '1',
    author: lang === 'fa' ? 'علی محمدی' : 'John Doe',
    text: lang === 'fa' 
      ? 'این بازی فوق‌العاده است! گرافیک و گیم‌پلی عالی دارد.' 
      : 'This game is amazing! Great graphics and gameplay.',
    date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    likes: 15,
    dislikes: 2,
    rating: 5
  },
  {
    id: '2',
    author: lang === 'fa' ? 'رضا احمدی' : 'Jane Smith',
    text: lang === 'fa'
      ? 'داستان بازی خیلی جذاب و هیجان‌انگیز بود. پیشنهاد می‌کنم حتما تجربه کنید.'
      : 'The story was very engaging and exciting. I highly recommend it.',
    date: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    likes: 8,
    dislikes: 1,
    rating: 4
  },
  {
    id: '3',
    author: lang === 'fa' ? 'سارا کریمی' : 'Mike Johnson',
    text: lang === 'fa'
      ? 'بازی خوبی است اما برخی باگ‌ها وجود دارد که باید رفع شود.'
      : 'Good game but has some bugs that need to be fixed.',
    date: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    likes: 12,
    dislikes: 5,
    rating: 3
  }
];