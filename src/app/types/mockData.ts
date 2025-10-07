import { Game, NewsItem, Story } from "./Game";

export const mockGames: Game[] = [
  // Existing Games (Updated Genres)
  {
    _id: "68b6ec2c4ca283b28284dc19",
    title: { en: "Path of Exile 2", fa: "مسیر تبعید ۲" },
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2025-12-10T00:00:00.000Z",
    betaDate: "2025-7-09T00:00:00.000Z",
    image: "/images/Games/pathofexile2.png",
    developer: "Grinding Gear Games",
    genres: ["Action", "RPG"], // Updated from "Action RPG"
    tags: ["Dark Fantasy", "Gothic", "Isometric"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: [
      "English",
      "Persian",
      "French",
      "German",
      "Spanish",
      "Italian",
    ],

    description: {
      short: "A next-generation Action RPG from Grinding Gear Games.",
      english:
        "Path of Exile 2 is a next-generation Action RPG from Grinding Gear Games. Travel across the vast continent of Wraeclast and discover the corrupting influences that are spreading.",
      persian:
        "یک بازی نقش‌آفرینی اکشن نسل بعدی از Grinding Gear Games. در سراسر قاره پهناور Wraeclast سفر کنید و تأثیرات فاسدکننده را کشف کنید.",
    },
  },
  {
    _id: "68b6ec344ca283b28284dc1e",
    title: { en: "Expedition 33", fa: "اکسپدیشن ۳۳" },
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2025-04-20T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/expedition33.png",
    developer: "Sandfall Interactive",
    genres: ["RPG"], // Updated from "Turn-Based RPG", removed "Fantasy"
    tags: ["RPG", "Adventure", "Unique Art Style"],
    trailerUrl: "https://www.youtube.com/watch?v=L2vE8Ew_K0Y",
    description: {
      short:
        "A turn-based fantasy RPG where you must pursue the Paintress to stop her from ending the world.",
      english:
        "Clair Obscur: Expedition 33 is a fantasy RPG where you pursue the Paintress to stop her from erasing humanity.",
      persian:
        "یک بازی نقش‌آفرینی فانتزی نوبتی که در آن باید نقاش را تعقیب کنید تا او را از پاک کردن بشریت متوقف سازید.",
    },
    supportedLanguages: [],
  },
  {
    _id: "68b6ec3a4ca283b28284dc23",
    title: { en: "Baldur's Gate 3", fa: "دروازه بالدور ۳" },
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2023-08-03T00:00:00.000Z",
    betaDate: "2020-10-06T00:00:00.000Z",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1748346026",
    developer: "Larian Studios",
    genres: ["RPG"], // Removed "Fantasy"
    tags: ["Dungeons & Dragons", "Turn-Based Combat", "Choices Matter"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "French", "German", "Spanish", "Polish"],
    description: {
      short: "A party-based RPG set in the Dungeons & Dragons universe.",
      english:
        "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      persian:
        "یک بازی نقش‌آفرینی مبتنی بر گروه که در دنیای Dungeons & Dragons جریان دارد، با دنیایی گسترده و داستانی عمیق.",
    },
  },
  {
    _id: "68b6eec04ca283b28284dc32",
    title: { en: "Mortal Kombat 1", fa: "مورتال کمبت ۱" },
    marketPrice: 69.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2023-09-19T00:00:00.000Z",
    betaDate: null,
    image:
      "https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/mortal-kombat-11-1-scaled.jpeg",
    developer: "NetherRealm Studios",
    genres: ["Fighting"],
    tags: ["Action", "Gore", "Multiplayer"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "French", "German", "Spanish", "Polish"],

    description: {
      short: "The latest installment in the iconic Mortal Kombat franchise.",
      english:
        "The latest installment in the iconic Mortal Kombat franchise, featuring a new story and reimagined characters.",
      persian:
        "جدیدترین نسخه از فرنچایز نمادین مورتال کمبت، با داستانی جدید و شخصیت‌های بازطراحی شده.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc20",
    title: { en: "Cyberpunk 2077", fa: "سایبرپانک ۲۰۷۷" },
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2020-12-10T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/cyberpunk2077.png",
    developer: "CD Projekt RED",
    genres: ["Action", "RPG", "Open-World"], // Updated from "Action RPG", removed "Open-World"
    tags: ["Cyberpunk", "Sci-Fi", "Futuristic", "Open-World"], // Added Open-World to tags
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    description: {
      short: "An open-world, action-adventure story set in Night City.",
      english:
        "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
      persian:
        "یک داستان ماجراجویی اکشن جهان-باز که در نایت سیتی، یک کلانشهر گرفتار در قدرت، زرق و برق و تغییرات بدن، اتفاق می‌افتد.",
    },
    supportedLanguages: [],
  },
  {
    _id: "68b6ec344ca283b28284dc1f",
    title: { en: "Elden Ring", fa: "الدن رینگ" },
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2022-02-25T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/eldenring.png",
    developer: "FromSoftware",
    genres: ["Action", "RPG", "Open-World"], // Updated from "Action RPG", removed "Fantasy"
    tags: ["Souls-like", "Dark Fantasy", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=L2vE8Ew_K0Y",
    description: {
      short:
        "A fantasy action RPG game in a vast world filled with peril and intrigue.",
      english:
        "A fantasy action RPG game in a vast world filled with peril and intrigue.",
      persian:
        "یک بازی اکشن نقش‌آفرینی فانتزی در دنیایی وسیع پر از خطر و رمز و راز.",
    },
    supportedLanguages: [],
  },

  {
    _id: "68b6ec3a4ca283b28284dc24",
    title: { en: "The Witcher 3: Wild Hunt", fa: "ویچر ۳: وایلد هانت" },
    marketPrice: 39.99,
    hasDiscount: true,
    platform: "PC, PS4, Xbox One, Switch",
    releaseDate: "2015-05-19T00:00:00.000Z",
    betaDate: null,
    image:
      "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    developer: "CD Projekt RED",
    genres: ["RPG", "Open-World"], // Removed "Open-World"
    tags: ["Fantasy", "Witcher", "Medieval", "Open-World"], // Added Open-World to tags
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "German", "French", "Polish"],
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
    title: { en: "God of War (2018)", fa: "خدای جنگ (۲۰۱۸)" },
    marketPrice: 49.99,
    hasDiscount: false,
    platform: "PC, PS4",
    releaseDate: "2022-01-14T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/godofwar.png",
    developer: "Santa Monica Studio",
    genres: ["Action", "Adventure"],
    tags: ["Norse Mythology", "Father-Son", "Third Person", "Remaster"], // Added Remaster tag
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "Spanish", "French", "German", "Italian"],
    description: {
      short:
        "Kratos now lives as a man in the realm of Norse Gods and monsters.",
      english:
        "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
      persian:
        "کراتوس که انتقامش از خدایان المپ سال‌ها پیش به پایان رسیده، اکنون به‌عنوان یک انسان در قلمرو خدایان و هیولاهای نوردیک زندگی می‌کند.",
    },
  },
  {
    _id: "68b6ec3a4ca283b28284dc27",
    title: { en: "Red Dead Redemption 2", fa: "رد دد ردمپشن ۲" },
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC, PS4, Xbox One",
    releaseDate: "2019-11-05T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/reddead2.png",
    developer: "Rockstar Games",
    genres: ["Action", "Adventure", "Open-World"], // Removed "Open-World"
    tags: ["Western", "Outlaw", "Horses", "Open-World"], // Added Open-World to tags
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    description: {
      short:
        "The epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang.",
      english:
        "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.",
      persian:
        "برنده بیش از ۱۷۵ جایزه بازی سال، RDR2 داستان حماسی قانون‌شکن آرتور مورگان و گروه بدنام ون در لیند است.",
    },
    supportedLanguages: [],
  },
  {
    _id: "68b6ec3a4ca283b28284dc26",
    title: { en: "Horizon Forbidden West", fa: "هورایزن فوربیدن وست" },
    marketPrice: 29.99,
    hasDiscount: true,
    platform: "PC, PS5, PS4",
    releaseDate: "2024-03-21T00:00:00.000Z",
    betaDate: null,
    image: "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    developer: "Guerrilla Games",
    genres: ["Action", "RPG" , "Open-World"], // Updated from "Action RPG", removed "Open-World"
    tags: ["Post-Apocalyptic", "Robot Dinosaurs", "Tribal", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    description: {
      short:
        "Aloy's legendary quest to unravel the mysteries of a world ruled by deadly Machines.",
      english:
        "Experience Aloy's entire legendary quest to unravel the mysteries of a world ruled by deadly Machines. An outcast from her tribe, the young hunter fights to uncover her destiny... and save her world.",
      persian:
        "تجربه کامل ماموریت افسانه‌ای آلوی برای کشف اسرار دنیایی که توسط ماشین‌های مرگبار اداره می‌شود.",
    },
    supportedLanguages: [],
  },

  // New Games Added from baseGameImages
  {
    _id: "68b6ec2c4ca283b28284dc30",
    title: { en: "Doom: The Dark Ages", fa: "دوم: اعصار تاریک" },
    marketPrice: 69.99,
    hasDiscount: false,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2025-05-18T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/doom.png",
    developer: "id Software",
    genres: ["Shooter", "Action"], // Updated from "FPS"
    tags: ["Gore", "Demons", "Fast-Paced"],
    trailerUrl: "https://www.youtube.com/watch?v=Fj-P3M9e3iI",
    supportedLanguages: ["English", "French", "German", "Spanish", "Italian"],
    description: {
      short:
        "Experience the single-player prequel to Doom (2016) with new medieval elements.",
      english:
        "Experience the single-player prequel to Doom (2016) with new medieval elements.",
      persian:
        "پیش‌درآمدی تک‌نفره بر بازی Doom (2016) با عناصر جدید قرون وسطایی.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc31",
    title: { en: "Dota 2", fa: "دوتا ۲" },
    marketPrice: 0.0,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2013-07-09T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/dota2.png",
    developer: "Valve",
    genres: ["Strategy"], // Updated from "MOBA", kept "Strategy"
    tags: ["Multiplayer", "Free-to-Play", "Esports"],
    trailerUrl: "https://www.youtube.com/watch?v=W0S1k_G_yqE",
    supportedLanguages: ["English", "Russian", "Chinese", "Spanish"],

    description: {
      short:
        "The most-played game on Steam. Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes.",
      english:
        "The most-played game on Steam. Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes.",
      persian:
        "پر بازی‌ترین بازی در استیم. هر روز، میلیون‌ها بازیکن در سراسر جهان به‌عنوان یکی از بیش از صد قهرمان دوتا وارد نبرد می‌شوند.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc33",
    title: { en: "Assassin's Creed Shadows", fa: "اساسینز کرید شدوز" },
    marketPrice: 69.99,
    hasDiscount: false,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2025-11-15T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/acshadow.png",
    developer: "Ubisoft Quebec",
    genres: ["Action", "Adventure"], // Updated from "Action-Adventure", removed "Stealth"
    tags: ["Feudal Japan", "Open-World", "History", "Stealth"], // Added Stealth to tags
    trailerUrl: "https://www.youtube.com/watch?v=F_f-x0l_90o",
    supportedLanguages: ["English", "Japanese", "French", "German"],

    description: {
      short:
        "Experience an epic historical action-adventure set in the world of feudal Japan.",
      english:
        "Experience an epic historical action-adventure set in the world of feudal Japan.",
      persian:
        "یک ماجراجویی اکشن تاریخی حماسی را در دنیای ژاپن فئودالی تجربه کنید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc34",
    title: { en: "Battlefield 2042", fa: "بتلفیلد ۲۰۴۲" },
    marketPrice: 39.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2021-11-19T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/bf6.png",
    developer: "DICE",
    genres: ["Shooter", "Action"], // Updated from "FPS"
    tags: ["Multiplayer", "Warfare", "Future"],
    trailerUrl: "https://www.youtube.com/watch?v=ASzOzr-bm9E",
    supportedLanguages: ["English", "French", "German", "Russian"],

    description: {
      short:
        "A first-person shooter set in a near-future world transformed by disorder.",
      english:
        "A first-person shooter set in a near-future world transformed by disorder. Master ever-changing battlegrounds.",
      persian:
        "یک تیراندازی اول شخص در دنیای آینده نزدیک که توسط بی‌نظمی دگرگون شده است.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc35",
    title: { en: "Crimson Desert", fa: "کویر ارغوانی" },
    marketPrice: 69.99,
    hasDiscount: false,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2025-06-30T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/crimsondesert.png",
    developer: "Pearl Abyss",
    genres: ["Action", "RPG" , "Open-World"], // Updated from "Action RPG", removed "Open-World"
    tags: ["Fantasy", "Exploration", "Medieval", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=1F5D91M6L7E",
    supportedLanguages: ["English", "Korean", "Japanese"],

    description: {
      short:
        "A vast open-world action-adventure game centered around a group of mercenaries.",
      english:
        "A vast open-world action-adventure game centered around a group of mercenaries. Explore a world full of danger and opportunity.",
      persian:
        "یک بازی اکشن ماجراجویی جهان باز و گسترده که حول یک گروه از مزدوران متمرکز است.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc36",
    title: { en: "Counter-Strike 2", fa: "کانتر-استرایک ۲" },
    marketPrice: 0.0,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2023-09-27T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/Csgo2.png",
    developer: "Valve",
    genres: ["Shooter"], // Updated from "FPS"
    tags: ["Multiplayer", "Competitive", "Esports"],
    trailerUrl: "https://www.youtube.com/watch?v=F2oH5N_F4qM",
    supportedLanguages: ["English", "Russian", "Chinese", "Persian"],

    description: {
      short: "The next era of Counter-Strike, built on the Source 2 engine.",
      english:
        "The next era of Counter-Strike, built on the Source 2 engine. Experience completely overhauled core gameplay and maps.",
      persian:
        "دوران بعدی کانتر-استرایک، ساخته شده بر روی موتور Source 2. گیم‌پلی و نقشه‌های اصلی کاملاً بازسازی شده را تجربه کنید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc37",
    title: { en: "The Elder Scrolls VI", fa: "الدر اسکرولز ۶" },
    marketPrice: 69.99,
    hasDiscount: false,
    platform: "PC, Xbox Series X/S",
    releaseDate: "2028-11-11T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/eldenscroll.png",
    developer: "Bethesda Game Studios ",
    genres: ["RPG", "Open-World"], // Removed "Open-World"
    tags: ["Fantasy", "Exploration", "Adventure", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=ok5s85b-G6g",
    supportedLanguages: ["English", "German", "French", "Spanish"],

    description: {
      short: "The next chapter in the Elder Scrolls saga.",
      english:
        "The next chapter in the Elder Scrolls saga. Explore a massive fantasy world with unparalleled freedom and depth.",
      persian:
        "فصل بعدی در حماسه الدر اسکرولز. دنیایی فانتزی عظیم را با آزادی و عمق بی‌نظیر کاوش کنید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc38",
    title: { en: "Forza Horizon 5", fa: "فورتزا هورایزن ۵" },
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC, Xbox Series X/S",
    releaseDate: "2021-11-09T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/forza6.png",
    developer: "Playground Games",
    genres: ["Simulation" ,"Sports"], // Removed "Racing"
    tags: ["Open-World", "Multiplayer", "Cars", "Racing"], // Added Racing to tags
    trailerUrl: "https://www.youtube.com/watch?v=Xh0Y1pS-u4I",
    supportedLanguages: ["English", "Spanish", "German", "French"],

    description: {
      short:
        "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open-world landscapes of Mexico.",
      english:
        "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open-world landscapes of Mexico.",
      persian:
        "ماجراجویی نهایی هورایزن در انتظار شماست! مناظر جهان باز و همیشه در حال تحول مکزیک را کاوش کنید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc39",
    title: { en: "Hades II", fa: "هیدیز ۲" },
    marketPrice: 29.99,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2025-05-06T00:00:00.000Z",
    betaDate: "2024-05-06T00:00:00.000Z",
    image: "/images/Games/hades2.png",
    developer: "Supergiant Games",
    genres: ["Action"], // Updated from "Roguelike"
    tags: ["Greek Mythology", "Indie", "Fantasy", "Roguelike"], // Added Roguelike to tags
    trailerUrl: "https://www.youtube.com/watch?v=0kF1R5K-q_c",
    supportedLanguages: ["English", "German", "French", "Persian"],

    description: {
      short:
        "A rogue-like dungeon crawler that continues the story of the underworld.",
      english:
        "A rogue-like dungeon crawler that continues the story of the underworld, now with Melinoë, Princess of the Underworld.",
      persian:
        "یک بازی سبک روگ‌لایک که داستان جهان زیرین را این بار با ملینوئه، شاهزاده خانم جهان زیرین، ادامه می‌دهد.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc40",
    title: { en: "Hogwarts Legacy", fa: "میراث هاگوارتز" },
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2023-02-10T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/hogward.png",
    developer: "Avalanche Software",
    genres: ["Action", "RPG"  , "Open-World"], // Updated from "Action RPG", removed "Open-World"
    tags: ["Fantasy", "Magic", "Harry Potter", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=BTYVNjY2_S0",
    supportedLanguages: ["English", "French", "German", "Spanish"],

    description: {
      short:
        "Experience the Wizarding World in the 1800s. Forge your own legacy.",
      english:
        "Experience the Wizarding World in the 1800s. Forge your own legacy and explore Hogwarts and the surrounding lands.",
      persian:
        "دنیای جادوگری را در دهه ۱۸۰۰ میلادی تجربه کنید. میراث خود را بسازید و هاگوارتز و سرزمین‌های اطراف را کاوش کنید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc41",
    title: { en: "Metro Exodus", fa: "مترو اکسدوس" },
    marketPrice: 39.99,
    hasDiscount: true,
    platform: "PC, PS4, Xbox One",
    releaseDate: "2019-02-15T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/metro.png",
    developer: "4A Games",
    genres: ["Shooter", "Survival"], // Updated from "FPS", "Survival Horror"
    tags: ["Post-Apocalyptic", "Horror", "Action"],
    trailerUrl: "https://www.youtube.com/watch?v=f2nN3fM3W5g",
    supportedLanguages: ["English", "Russian", "German", "Persian"],

    description: {
      short:
        "Flee the ruins of the Moscow Metro and embark on an epic, continent-spanning journey across post-apocalyptic Russia.",
      english:
        "Flee the ruins of the Moscow Metro and embark on an epic, continent-spanning journey across post-apocalyptic Russia.",
      persian:
        "از خرابه‌های متروی مسکو فرار کنید و یک سفر حماسی قاره‌ای را در سراسر روسیه پسا آخرالزمانی آغاز کنید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc42",
    title: { en: "Rainbow Six Siege", fa: "رینبو سیکس سیج" },
    marketPrice: 19.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2015-12-01T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/rambow6.png",
    developer: "Ubisoft Montreal",
    genres: ["Shooter", "Strategy"], // Updated from "FPS"
    tags: ["Multiplayer", "Tactical", "Esports"],
    trailerUrl: "https://www.youtube.com/watch?v=Fh3K00T2Y7Q",
    supportedLanguages: ["English", "French", "German", "Spanish"],

    description: {
      short:
        "Master the art of destruction and gadgetry in a tense, close-quarters combat.",
      english:
        "Master the art of destruction and gadgetry in a tense, close-quarters combat.",
      persian:
        "در نبردهای نزدیک و پرتنش، بر هنر تخریب و استفاده از گجت‌ها مسلط شوید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc43",
    title: { en: "Resident Evil Requiem", fa: "رزیدنت ایول رکوئیم" },
    marketPrice: 69.99,
    hasDiscount: false,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2026-03-24T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/resident-evil-requiem.png",
    developer: "CAPCOM",
    genres: ["Survival", "Action"], // Updated from "Survival Horror"
    tags: ["Zombies", "Horror", "Third Person"],
    trailerUrl: "https://www.youtube.com/watch?v=MockTrailer",
    supportedLanguages: ["English", "Japanese", "Spanish", "French"],

    description: {
      short:
        "A new chapter in the Resident Evil saga, focusing on deep survival and action.",
      english:
        "A new chapter in the Resident Evil saga, focusing on deep survival and action.",
      persian: "فصلی جدید در حماسه رزیدنت ایول، با تمرکز بر بقا و اکشن عمیق.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc44",
    title: { en: "Star Wars Jedi: Survivor", fa: "جنگ ستارگان: جدای بازمانده" },
    marketPrice: 69.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2023-04-28T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/starwars.png",
    developer: "Respawn Entertainment",
    genres: ["Action", "Adventure"], // Updated from "Action-Adventure"
    tags: ["Sci-Fi", "Lightsaber", "Force Powers"],
    trailerUrl: "https://www.youtube.com/watch?v=VRaob3-F9Lg",
    supportedLanguages: ["English", "French", "German", "Spanish"],

    description: {
      short:
        "Continue Cal Kestis' journey to protect the galaxy from the Empire.",
      english:
        "Continue Cal Kestis' journey to protect the galaxy from the Empire. A cinematic action-adventure.",
      persian:
        "سفر کَل کِستیس را برای محافظت از کهکشان در برابر امپراتوری ادامه دهید. یک ماجراجویی اکشن سینمایی.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc45",
    title: {
      en: "The Last of Us Part II",
      fa: "آخرین بازمانده از ما: قسمت دوم",
    },
    marketPrice: 49.99,
    hasDiscount: false,
    platform: "PC, PS5",
    releaseDate: "2020-06-19T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/tlou2.png",
    developer: "Naughty Dog",
    genres: ["Action", "Adventure", "Survival"], // Updated from "Action-Adventure", "Survival Horror"
    tags: ["Post-Apocalyptic", "Story Rich", "Emotional"],
    trailerUrl: "https://www.youtube.com/watch?v=vhY7m_3q-6A",
    supportedLanguages: ["English", "Persian", "French", "German"],

    description: {
      short:
        "A powerful, emotional story of survival, revenge, and consequences.",
      english:
        "A powerful, emotional story of survival, revenge, and consequences.",
      persian: "داستانی قدرتمند و احساسی درباره بقا، انتقام و عواقب.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc46",
    title: { en: "The Witcher 4: Polaris", fa: "ویچر ۴: پولاریس" },
    marketPrice: 69.99,
    hasDiscount: false,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2027-10-01T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/witcher4.png",
    developer: "CD Projekt RED",
    genres: ["RPG"  , "Open-World"], // Removed "Open-World"
    tags: ["Fantasy", "Medieval", "Choices Matter", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=Placeholder",
    supportedLanguages: ["English", "Polish", "German", "French"],

    description: {
      short:
        "A new saga in The Witcher universe, built on the Unreal Engine 5.",
      english:
        "A new saga in The Witcher universe, built on the Unreal Engine 5. Focuses on the School of the Lynx.",
      persian:
        "حماسه‌ای جدید در دنیای ویچر، ساخته شده بر روی موتور Unreal Engine 5.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc47",
    title: { en: "Black Myth: Wukong", fa: "افسانه سیاه: ووکانگ" },
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2024-08-20T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/wukong.png",
    developer: "Game Science",
    genres: ["Action", "RPG"], // Updated from "Action RPG"
    tags: ["Chinese Mythology", "Souls-like", "Fantasy"],
    trailerUrl: "https://www.youtube.com/watch?v=F_f-x0l_90o",
    supportedLanguages: ["English", "Chinese", "Japanese"],

    description: {
      short:
        "An action RPG rooted in Chinese mythology, based on the story of the Monkey King.",
      english:
        "An action RPG rooted in Chinese mythology, based on the story of the Monkey King. Explore a richly detailed world.",
      persian:
        "یک بازی اکشن نقش‌آفرینی که ریشه در اساطیر چینی دارد و بر اساس داستان پادشاه میمون است.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc48",
    title: {
      en: "Death Stranding 2: On The Beach",
      fa: "دث استرندینگ ۲: در ساحل",
    },
    marketPrice: 69.99,
    hasDiscount: false,
    platform: "PS5",
    releaseDate: "2025-09-01T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/deadstranding2.png",
    developer: "Kojima Productions",
    genres: ["Action", "Adventure"  , "Open-World"],
    tags: ["Sci-Fi", "Open-World", "Story Rich"],
    trailerUrl: "https://www.youtube.com/watch?v=Z_hB5D04J44",
    supportedLanguages: ["English", "Japanese", "French", "German"],

    description: {
      short:
        "Sam Porter Bridges embarks on a new journey to save humanity from extinction.",
      english:
        "Sam Porter Bridges embarks on a new journey to save humanity from extinction. A new chapter in the Death Stranding universe.",
      persian:
        "سم پورتر بریجز سفری جدید را برای نجات بشریت از انقراض آغاز می‌کند.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc49",
    title: { en: "Valorant", fa: "ولورانت" },
    marketPrice: 0.0,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2020-06-02T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/valorant.png",
    developer: "Riot Games",
    genres: ["Shooter"], // Updated from "FPS"
    tags: ["Multiplayer", "Tactical", "Free-to-Play"],
    trailerUrl: "https://www.youtube.com/watch?v=e_E9W2SEbQE",
    supportedLanguages: ["English", "Turkish", "French", "Persian"],

    description: {
      short: "A 5v5 character-based tactical shooter.",
      english:
        "A 5v5 character-based tactical shooter. Precise gunplay meets unique Agent abilities.",
      persian:
        "یک بازی تیراندازی تاکتیکی ۵ به ۵ مبتنی بر شخصیت. اسلحه‌بازی دقیق با توانایی‌های منحصر به فرد کاراکترها.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc50",
    title: { en: "UFC 4", fa: "یو‌اف‌سی ۴" },
    marketPrice: 19.99,
    hasDiscount: true,
    platform: "PS4, Xbox One",
    releaseDate: "2020-08-14T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/ufc4.png",
    developer: "EA Vancouver",
    genres: ["Sports", "Fighting"],
    tags: ["Simulation", "Multiplayer", "MMA"],
    trailerUrl: "https://www.youtube.com/watch?v=n-P3eJkm0zY",
    supportedLanguages: ["English", "Spanish", "French"],

    description: {
      short: "Shape your legend in the world of mixed martial arts in UFC 4.",
      english: "Shape your legend in the world of mixed martial arts in UFC 4.",
      persian: "اسطوره خود را در دنیای هنرهای رزمی ترکیبی در UFC 4 بسازید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc51",
    title: { en: "Assassin's Creed Valhalla", fa: "اساسینز کرید والهالا" },
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2020-11-10T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/assassinscreedvalhalla.png",
    developer: "Ubisoft Montreal",
    genres: ["Action", "RPG"  , "Open-World"], // Updated from "Action RPG", removed "Open-World"
    tags: ["Viking", "Historical", "Adventure", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=ssrashima8E",
    supportedLanguages: ["English", "French", "German", "Persian"],

    description: {
      short:
        "Lead epic Viking raids against the fractured kingdoms of England.",
      english:
        "Lead epic Viking raids against the fractured kingdoms of England.",
      persian:
        "رهبری حملات حماسی وایکینگ‌ها را در برابر پادشاهی‌های متلاشی شده انگلستان بر عهده بگیرید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc52",
    title: { en: "Marvel's Avengers", fa: "انتقام‌جویان مارول" },
    marketPrice: 39.99,
    hasDiscount: true,
    platform: "PC, PS4, Xbox One",
    releaseDate: "2020-09-04T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/avengers.png",
    developer: "Crystal Dynamics",
    genres: ["Action", "Adventure"], // Updated from "Action-Adventure"
    tags: ["Superhero", "Co-op", "Third Person"],
    trailerUrl: "https://www.youtube.com/watch?v=q6bY1M6H354",
    supportedLanguages: ["English", "Spanish", "French"],

    description: {
      short: "Assemble Earth's Mightiest Heroes and embrace your powers.",
      english:
        "Assemble Earth's Mightiest Heroes and embrace your powers. Play as Captain America, Iron Man, Hulk, Black Widow, and Thor.",
      persian:
        "قدرتمندترین قهرمانان زمین را جمع کنید و قدرت‌های خود را بپذیرید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc53",
    title: { en: "Far Cry 6", fa: "فار کرای ۶" },
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2021-10-07T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/farcry6.png",
    developer: "Ubisoft Toronto",
    genres: ["Shooter", "Action"  , "Open-World"], // Updated from "FPS", removed "Open-World"
    tags: ["Action", "Guerrilla Warfare", "Tropical", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=Jm5n196x8Lw",
    supportedLanguages: ["English", "French", "German", "Spanish"],

    description: {
      short:
        "Experience the adrenaline of guerrilla combat in a tropical paradise dictatorship.",
      english:
        "Experience the adrenaline of guerrilla combat in a tropical paradise dictatorship.",
      persian:
        "آدرنالین مبارزات چریکی را در یک دیکتاتوری بهشت گرمسیری تجربه کنید.",
    },
  },
  
  // 👇👇👇 دو بازی جدید برای تست دسته بندی Remake/Remaster 👇👇👇
  {
    _id: "68b6ec2c4ca283b28284dc54",
    title: { en: "The Last of Us Part I", fa: "آخرین بازمانده از ما: قسمت اول" },
    marketPrice: 69.99,
    hasDiscount: false,
    platform: "PC, PS5",
    releaseDate: "2022-09-02T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/tlou1.png",
    developer: "Naughty Dog",
    genres: ["Action", "Adventure", "Survival"], 
    tags: ["Post-Apocalyptic", "Story Rich", "Emotional", "Remake"], // اضافه شدن تگ Remake
    trailerUrl: "https://www.youtube.com/watch?v=A32I6_L6X_w",
    supportedLanguages: ["English", "Persian", "French", "German"],

    description: {
      short: "A total remake of the original game, rebuilt for the modern generation.",
      english: "A total remake of the original game, rebuilt for the modern generation.",
      persian: "بازسازی کامل بازی اصلی، بازسازی شده برای نسل جدید.",
    },
  },
  {
    _id: "68b6ec2c4ca283b28284dc55",
    title: { en: "Resident Evil 4", fa: "رزیدنت ایول ۴" },
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC, PS5, Xbox Series X/S",
    releaseDate: "2023-03-24T00:00:00.000Z",
    betaDate: null,
    image: "/images/Games/re4remake.png",
    developer: "CAPCOM",
    genres: ["Survival", "Action"], 
    tags: ["Horror", "Zombies", "Third Person", "Remake"], // اضافه شدن تگ Remake
    trailerUrl: "https://www.youtube.com/watch?v=VRaob3-F9Lg",
    supportedLanguages: ["English", "Japanese", "Spanish", "French"],

    description: {
      short: "A reimagining of the classic survival horror game.",
      english: "A reimagining of the classic survival horror game.",
      persian: "بازآفرینی بازی کلاسیک ترس و بقا.",
    },
  },
  // 👆👆👆 پایان بازی های جدید Remake/Remaster 👆👆👆
];