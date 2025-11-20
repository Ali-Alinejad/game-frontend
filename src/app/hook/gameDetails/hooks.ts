import { BookOpen, Factory, Film, Link, MessageSquare, Gamepad } from 'lucide-react';
import { SystemRequirements, TabItem } from '@/app/types/Game';


export const useTranslations = (lang: 'en' | 'fa', commentsCount: number) => {
    const t = {
        lang,
        setLang: () => { },
        about: lang === 'fa' ? 'درباره بازی و داستان' : 'About the Game & Story',
        trailer: lang === 'fa' ? 'ویدیوها و عکس ها' : 'Videos & Pictures',
        comments: lang === 'fa' ? 'نظرات کاربران' : 'User Comments',
        sysReq: lang === 'fa' ? 'مشخصات فنی و سخت‌افزار مورد نیاز' : 'Technical & System Requirements',
        downloads: lang === 'fa' ? 'لینک‌های دانلود بازی' : 'Game Download Links',
        gameDetails: lang === 'fa' ? 'جزئیات فنی بازی' : 'Game Technical Details',
        standardEdition: lang === 'fa' ? 'نسخه نهایی' : 'Final Edition',
        free: lang === 'fa' ? 'رایگان' : 'Free',
        viewDownloads: lang === 'fa' ? 'دریافت بازی' : 'Get the Game',
        viewTrailer: lang === 'fa' ? 'تماشای آنلاین تریلر' : 'Watch Trailer Online',
        crackedTested: lang === 'fa' ? 'کرک شده و تست شده' : 'Cracked and Tested',
        totalSize: lang === 'fa' ? 'حجم' : 'Size',
        writeComment: lang === 'fa' ? 'نظر خود را بنویسید (حداقل 5 کاراکتر)...' : 'Write your comment (min 10 characters)...',
        submit: lang === 'fa' ? 'ارسال نظر' : 'Submit Comment',
        rateGame: lang === 'fa' ? 'امتیازدهی' : 'Rating',
        invalidComment: lang === 'fa' ? 'لطفا نظر معتبر (حداقل ۱۰ حرف) و امتیاز را وارد کنید.' : 'Please enter a valid comment (min 10 chars) and a rating.',
        ratingRequired: lang === 'fa' ? 'لطفا امتیازی بدهید' : 'Please give a rating',
        hoursAgo: (hours: number) => lang === 'fa' ? `${hours} ساعت پیش` : `${hours}h ago`,
        commentsCount: `${commentsCount} ${lang === 'fa' ? 'نظر' : 'Comments'}`,
        developerSpotlight: lang === 'fa' ? 'معرفی استودیو سازنده' : 'Developer Spotlight',
        suggestedGames: lang === 'fa' ? 'بازی‌های پیشنهادی مشابه' : 'Suggested Similar Games',
        website: lang === 'fa' ? 'لینک‌های رسمی' : 'Official Links',
        founded: lang === 'fa' ? 'تأسیس' : 'Founded',
        noTrailer: lang === 'fa' ? 'فایلی برای نمایش موجود نیست.' : 'No files available for this game.',
        noSuggested: lang === 'fa' ? 'بازی پیشنهادی مشابهی یافت نشد.' : 'No similar suggested games found.',
        playOnline: lang === 'fa' ? 'پیش نمایش' : 'Trailer',
        linkSectionTitle: lang === 'fa' ? 'لینک‌های خارجی و رسمی' : 'External & Official Links',
    };

    const navItems: TabItem[] = [
        { id: 'about', label: lang === 'fa' ? 'داستان و معرفی' : 'Story ', icon: BookOpen },
        { id: 'developer', label: lang === 'fa' ? 'سازنده' : 'Developer', icon: Factory },
        { id: 'trailer', label: lang === 'fa' ? 'عکس ها' : 'Videos', icon: Film },
        { id: 'link-section', label: lang === 'fa' ? 'دانلود' : 'download', icon: Link },
        { id: 'comments', label: lang === 'fa' ? 'نظرات' : 'Comments', icon: MessageSquare },
        { id: 'suggested', label: lang === 'fa' ? 'مشابه‌ها' : 'Similar', icon: Gamepad },
    ];

    return { ...t, navItems };
};

export const getSystemRequirements = (lang: 'en' | 'fa'): SystemRequirements => ({
    os: lang === 'fa' ? "ویندوز ۱۰ ۶۴ بیتی" : "Windows 10 64-bit",
    cpu: lang === 'fa' ? "اینتل Core i5-8400 یا AMD Ryzen 5 2600" : "Intel Core i5-8400 or AMD Ryzen 5 2600",
    ram: lang === 'fa' ? "۱۶ گیگابایت رم" : "16 GB RAM",
    gpu: lang === 'fa' ? "انویدیا GeForce GTX 1060 یا AMD Radeon RX 580" : "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
    storage: lang === 'fa' ? "۱۵۰ گیگابایت حافظه SSD" : "150 GB ",
    typeStorage:  "SATA or M2 SSD",

});

export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 150, damping: 25 } },
};