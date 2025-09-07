import { Game, NewsItem, Story } from "./Game";

export const mockGames: Game[] = [
  {
    _id: "68b6ec2c4ca283b28284dc19",
    title: "Path of Exile 2",
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2025-12-10T00:00:00.000Z",
    betaDate: "2025-7-09T00:00:00.000Z",
    image:
      "https://gaming-cdn.com/images/products/5813/orig/path-of-exile-2-pc-steam-cover.jpg?v=1753427678",
    developer: "CD Projekt RED",
    genres: ["Action RPG", "Open-World"],
    tags: ["Cyberpunk", "Sci-Fi", "Futuristic"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: [
      "English",
      "Persian",
      "French",
      "German",
      "Spanish",
      "Italian",
    ],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-6700 or AMD Ryzen 5 1600",
      graphicsCard: "Nvidia GeForce GTX 1060 (6GB) or AMD Radeon RX 580 (8GB)",
      ram: "12 GB",
      storage: "70 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-12700 or AMD Ryzen 7 7800X3D",
      graphicsCard: "Nvidia GeForce RTX 2060 SUPER or AMD Radeon RX 5700 XT",
      ram: "16 GB",
      storage: "70 GB SSD",
    },
    description: {
      short:
        "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
      english:
        "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
      persian:
        "یک داستان ماجراجویی اکشن جهان-باز که در نایت سیتی، یک کلانشهر گرفتار در قدرت، زرق و برق و تغییرات بدن، اتفاق می‌افتد.",
    },
  },
  {
    _id: "68b6ec344ca283b28284dc1e",
    title: "expedition 33",
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2022-02-25T00:00:00.000Z",
    betaDate: null,
    image:
      "https://vgdl.ir/wp-content/uploads/2025/04/Clair_Obscur_Expedition_33.jpg",
    developer: "FromSoftware",
    genres: ["Action RPG", "Fantasy"],
    tags: ["Souls-like", "Dark Fantasy", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=L2vE8Ew_K0Y",
    supportedLanguages: [
      "English",
      "Japanese",
      "French",
      "German",
      "Italian",
      "Spanish",
      "Russian",
    ],
    minimumSystemRequirements: {
      os: "Windows 10",
      processor: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
      graphicsCard: "NVIDIA GeForce GTX 1060 (3GB) or AMD Radeon RX 580 (4GB)",
      ram: "12 GB",
      storage: "60 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10",
      processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
      graphicsCard:
        "NVIDIA GeForce GTX 1070 (8GB) or AMD Radeon RX Vega 56 (8GB)",
      ram: "16 GB",
      storage: "60 GB SSD",
    },
    description: {
      short:
        "A fantasy action RPG game in a vast world filled with peril and intrigue.",
      english:
        "A fantasy action RPG game in a vast world filled with peril and intrigue.",
      persian:
        "یک بازی اکشن نقش‌آفرینی فانتزی در دنیایی وسیع پر از خطر و رمز و راز.",
    },
  },
  {
    _id: "68b6ec3a4ca283b28284dc23",
    title: "Baldur's Gate 3",
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2023-08-03T00:00:00.000Z",
    betaDate: "2020-10-06T00:00:00.000Z",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1748346026",
    developer: "Larian Studios",
    genres: ["RPG", "Fantasy"],
    tags: ["Dungeons & Dragons", "Turn-Based Combat", "Choices Matter"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "French", "German", "Spanish", "Polish"],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-4690 or AMD FX 8350",
      graphicsCard: "NVIDIA GTX 970 or RX 480",
      ram: "8 GB",
      storage: "150 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i7 8700K or AMD r5 3600",
      graphicsCard: "Nvidia RTX 2060 Super or RX 5700 XT",
      ram: "16 GB",
      storage: "150 GB SSD",
    },
    description: {
      short:
        "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      english:
        "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      persian:
        "یک بازی نقش‌آفرینی مبتنی بر گروه که در دنیای Dungeons & Dragons جریان دارد، با دنیایی گسترده و داستانی عمیق.",
    },
  },
  {
    _id: "68b6eec04ca283b28284dc32",
    title: "Mortal Combat",
    marketPrice: 1,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2023-08-03T00:00:00.000Z",
    betaDate: "2020-10-06T00:00:00.000Z",
    image:
      "https://images.ctfassets.net/nwksj2ft7iku/1mpqWPrT4km2yPHCPhAwJp/468842158cb73c7546bd88a591375380/hero_1556585321.png",
    developer: "Bone",
    genres: ["RPG", "Action"],
    tags: ["Dungeons & Dragons", "Turn-Based Combat", "Choices Matter"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "French", "German", "Spanish", "Polish"],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-4690 or AMD FX 8350",
      graphicsCard: "NVIDIA GTX 970 or RX 480",
      ram: "8 GB",
      storage: "150 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i7 8700K or AMD r5 3600",
      graphicsCard: "Nvidia RTX 2060 Super or RX 5700 XT",
      ram: "16 GB",
      storage: "150 GB SSD",
    },
    description: {
      short: "Mortal Combat",
      english:
        "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      persian:
        "یک بازی نقش‌آفرینی مبتنی بر گروه که در دنیای Dungeons & Dragons جریان دارد، با دنیایی گسترده و داستانی عمیق.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc20",
    title: "Cyberpunk 2077",
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2020-12-10T00:00:00.000Z",
    betaDate: null,
    image:
      "https://substackcdn.com/image/fetch/$s_!kRZN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcc7124b-6df8-4dc9-b6cf-8c6a4bc52e8a_1388x788.png",
    developer: "CD Projekt RED",
    genres: ["Action RPG", "Open-World"],
    tags: ["Cyberpunk", "Sci-Fi", "Futuristic"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: [
      "English",
      "Persian",
      "French",
      "German",
      "Spanish",
      "Italian",
    ],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-6700 or AMD Ryzen 5 1600",
      graphicsCard: "Nvidia GeForce GTX 1060 (6GB) or AMD Radeon RX 580 (8GB)",
      ram: "12 GB",
      storage: "70 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-12700 or AMD Ryzen 7 7800X3D",
      graphicsCard: "Nvidia GeForce RTX 2060 SUPER or AMD Radeon RX 5700 XT",
      ram: "16 GB",
      storage: "70 GB SSD",
    },
    description: {
      short:
        "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
      english:
        "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
      persian:
        "یک داستان ماجراجویی اکشن جهان-باز که در نایت سیتی، یک کلانشهر گرفتار در قدرت، زرق و برق و تغییرات بدن، اتفاق می‌افتد.",
    },
  },
  {
    _id: "68b6ec344ca283b28284dc1f",
    title: "Elden Ring",
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2022-02-25T00:00:00.000Z",
    betaDate: null,
    image: "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    developer: "FromSoftware",
    genres: ["Action RPG", "Fantasy"],
    tags: ["Souls-like", "Dark Fantasy", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=L2vE8Ew_K0Y",
    supportedLanguages: [
      "English",
      "Japanese",
      "French",
      "German",
      "Italian",
      "Spanish",
      "Russian",
    ],
    minimumSystemRequirements: {
      os: "Windows 10",
      processor: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
      graphicsCard: "NVIDIA GeForce GTX 1060 (3GB) or AMD Radeon RX 580 (4GB)",
      ram: "12 GB",
      storage: "60 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10",
      processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
      graphicsCard:
        "NVIDIA GeForce GTX 1070 (8GB) or AMD Radeon RX Vega 56 (8GB)",
      ram: "16 GB",
      storage: "60 GB SSD",
    },
    description: {
      short:
        "A fantasy action RPG game in a vast world filled with peril and intrigue.",
      english:
        "A fantasy action RPG game in a vast world filled with peril and intrigue.",
      persian:
        "یک بازی اکشن نقش‌آفرینی فانتزی در دنیایی وسیع پر از خطر و رمز و راز.",
    },
  },
  {
    _id: "68b6ec3a4ca283b28284dc24",
    title: "The Witcher 3",
    marketPrice: 39.99,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2015-05-19T00:00:00.000Z",
    betaDate: null,
    image:
      "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    developer: "CD Projekt RED",
    genres: ["RPG", "Open-World"],
    tags: ["Fantasy", "Witcher", "Medieval"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "German", "French", "Polish"],
    minimumSystemRequirements: {
      os: "Windows 7 64-bit",
      processor: "Intel CPU Core i5-2500K 3.3GHz",
      graphicsCard: "Nvidia GPU GeForce GTX 660",
      ram: "6 GB",
      storage: "35 GB",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel CPU Core i7 3770 3,4 GHz",
      graphicsCard: "Nvidia GPU GeForce GTX 770",
      ram: "8 GB",
      storage: "35 GB SSD",
    },
    description: {
      short: "A story-driven, next-generation open world role-playing game.",
      english:
        "A story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
      persian:
        "یک بازی نقش‌آفرینی داستان-محور نسل جدید در دنیای باز که در جهانی فانتزی خیره‌کننده پر از انتخاب‌های معنادار و عواقب تأثیرگذار جریان دارد.",
    },
  },
  {
    _id: "68b6ec3a4ca283b28284dc25",
    title: "God of War",
    marketPrice: 49.99,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2022-01-14T00:00:00.000Z",
    betaDate: null,
    image:
      "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    developer: "Santa Monica Studio",
    genres: ["Action", "Adventure"],
    tags: ["Norse Mythology", "Father-Son", "Third Person"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "Spanish", "French", "German", "Italian"],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor:
        "Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
      graphicsCard: "NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)",
      ram: "8 GB",
      storage: "70 GB",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor:
        "Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)",
      graphicsCard: "NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)",
      ram: "8 GB",
      storage: "70 GB SSD",
    },
    description: {
      short:
        "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters.",
      english:
        "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
      persian:
        "کراتوس که انتقامش از خدایان المپ سال‌ها پیش به پایان رسیده، اکنون به‌عنوان یک انسان در قلمرو خدایان و هیولاهای نوردیک زندگی می‌کند.",
    },
  },
  {
    _id: "68b6ec3a4ca283b28284dc26",
    title: "horizon forbidden west",
    marketPrice: 29.99,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2020-08-07T00:00:00.000Z",
    betaDate: null,
    image:
      "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    developer: "Guerrilla Games",
    genres: ["Action RPG", "Open-World"],
    tags: ["Post-Apocalyptic", "Robot Dinosaurs", "Tribal"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "French", "German", "Spanish", "Italian"],
    minimumSystemRequirements: {
      os: "Windows 10 64-bits",
      processor: "Intel Core i5-2500K@3.3GHz or AMD FX 6300@3.5GHz",
      graphicsCard: "Nvidia GeForce GTX 780 (3 GB) or AMD Radeon R9 290 (4 GB)",
      ram: "8 GB",
      storage: "100 GB",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bits",
      processor: "Intel Core i7-4770K@3.5GHz or Ryzen 5 1500X@3.5GHz",
      graphicsCard:
        "Nvidia GeForce GTX 1060 (6 GB) or AMD Radeon RX 580 (8 GB)",
      ram: "16 GB",
      storage: "100 GB SSD",
    },
    description: {
      short:
        "Experience Aloy's entire legendary quest to unravel the mysteries of a world ruled by deadly Machines.",
      english:
        "Experience Aloy's entire legendary quest to unravel the mysteries of a world ruled by deadly Machines. An outcast from her tribe, the young hunter fights to uncover her destiny... and save her world.",
      persian:
        "تجربه کامل ماموریت افسانه‌ای آلوی برای کشف اسرار دنیایی که توسط ماشین‌های مرگبار اداره می‌شود.",
    },
  },
  {
    _id: "68b6ec3a4ca283b28284dc27",
    title: "Red Dead Redemption 2",
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2019-11-05T00:00:00.000Z",
    betaDate: null,
    image:
      "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
    developer: "Rockstar Games",
    genres: ["Action", "Adventure", "Open-World"],
    tags: ["Western", "Outlaw", "Horses"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "French", "German", "Spanish", "Italian"],
    minimumSystemRequirements: {
      os: "Windows 7 SP1 64-bit",
      processor: "Intel Core i5-2500K / AMD FX-6300",
      graphicsCard: "Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280",
      ram: "8 GB",
      storage: "150 GB",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
      graphicsCard: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
      ram: "12 GB",
      storage: "150 GB SSD",
    },
    description: {
      short:
        "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang.",
      english:
        "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.",
      persian:
        "برنده بیش از ۱۷۵ جایزه بازی سال و دریافت‌کننده بیش از ۲۵۰ امتیاز کامل، RDR2 داستان حماسی قانون‌شکن آرتور مورگان و گروه بدنام ون در لیند است.",
    },
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "DLSS 4 is coming to Hell is Us and Cronos: The New Dawn",
    excerpt: "Asobo Studio has added DLSS 4 to Microsoft Flight Simulator 2024",
    time: "6 hours ago",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
  },
];

export const lastStories: Story[] = [
  {
    id: 1,
    title: "Gaming Story 1",
    image:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Gaming Story 2",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
  },
];
