import { Game, SuggestedGame, Comment } from './types';

export const mockGame: Game = {
    title: { en: "Path of Exile 2", fa: "مسیر تبعید ۲" },
    description: {
        english: "Path of Exile 2 is a next-generation Action RPG from Grinding Gear Games. Travel across the vast continent of Wraeclast and discover the corrupting influences that are spreading. The game features a new skill gem system, 100 distinct environments, and a deep, immersive storyline, making it a true successor to the critically acclaimed original. The game is known for its complex skill tree and dark, gritty atmosphere.",
        persian: "یک بازی نقش‌آفرینی اکشن نسل بعدی از Grinding Gear Games. در سراسر قاره پهناور Wraeclast سفر کنید و تأثیرات فاسدکننده را کشف کنید. این بازی دارای یک سیستم سنگ مهارت جدید، ۱۰۰ محیط مجزا و یک خط داستانی عمیق و غوطه‌ورکننده است که آن را به یک جانشین واقعی برای نسخه اصلی تحسین‌شده تبدیل می‌کند. فضای بازی ترکیبی از فانتزی تاریک و گوتیک است که تجربه‌ای غنی و چالشی را برای بازیکنان فراهم می‌آورد.",
    },
    image: "https://via.placeholder.com/1920x1080/0d0d0d/FFF?text=Path+of+Exile+2+Game+Banner",
    developer: "Grinding Gear Games",
    platform: "PC / PS5 / Xbox Series X/S",
    genres: ["Action RPG", "Dark Fantasy", "Gothic"],
    supportedLanguages: ["English", "Persian", "French", "German", "Spanish", "Italian"],
    releaseDate: "2025-12-10",
    betaDate: "2025-07-09",
    marketPrice: 59.99,
    trailerUrl: "https://www.youtube.com/embed/L5C63Bq_i4U",
    officialWebsiteUrl: "https://www.pathofexile.com/poe2",
    developerInfo: {
        description: {
            en: "Grinding Gear Games is a New Zealand video game developer founded in 2006. They are best known for the popular free-to-play ARPG, Path of Exile. The studio focuses on creating deep, complex games for hardcore players.",
            fa: "Grinding Gear Games یک توسعه‌دهنده بازی‌های ویدیویی نیوزیلندی است که در سال ۲۰۰۶ تأسیس شد. آن‌ها بیشتر به خاطر بازی محبوب اکشن نقش‌آفرینی رایگان خود، Path of Exile، شناخته می‌شوند. این استودیو بر ساخت بازی‌های عمیق و پیچیده برای بازیکنان حرفه‌ای تمرکز دارد.",
        },
        website: "https://www.grindinggear.com/",
        founded: "2006",
        logo: "https://via.placeholder.com/64x64/27272a/FFF?text=GGG",
    }
};

export const mockSuggestedGames: SuggestedGame[] = [
    { id: 101, title: { en: "Diablo 4", fa: "دیابلو ۴" }, image: "https://via.placeholder.com/400x250/242424/FFF?text=Diablo+4", genres: ["Action RPG"], rating: 8.5 },
    { id: 102, title: { en: "Lost Ark", fa: "لست آرک" }, image: "https://via.placeholder.com/400x250/242424/FFF?text=Lost+Ark", genres: ["MMORPG", "Action RPG"], rating: 8.2 },
    { id: 103, title: { en: "Elden Ring", fa: "الدن رینگ" }, image: "https://via.placeholder.com/400x250/242424/FFF?text=Elden+Ring", genres: ["Dark Fantasy", "Souls-like"], rating: 9.5 },
];

export const mockInitialComments = (lang: 'en' | 'fa'): Comment[] => [
    {
        id: '1',
        author: lang === 'fa' ? 'علی کریمی' : 'Ali Karimi',
        text: lang === 'fa' ? 'گرافیک بازی واقعا خیره‌کننده بود! تجربه بی‌نظیری از فانتزی تاریک ارائه می‌دهد.' : 'The graphics were truly stunning! It offers an unparalleled experience of dark fantasy.',
        date: new Date(Date.now() - 2 * 60 * 60 * 1000),
        likes: 12,
        rating: 9
    },
    {
        id: '2',
        author: lang === 'fa' ? 'سارا احمدی' : 'Sara Ahmadi',
        text: lang === 'fa' ? 'یکی از بهترین بازی‌های سال! سیستم مهارت جدید بازی یک شاهکار است.' : 'One of the best games of the year! The new skill system is a masterpiece.',
        date: new Date(Date.now() - 5 * 60 * 60 * 1000),
        likes: 8,
        rating: 10
    }
];