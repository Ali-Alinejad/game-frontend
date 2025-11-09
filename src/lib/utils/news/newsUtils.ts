// utils/formatters.ts

export const formatTimeSince = (date: Date, language: 'en' | 'fa'): string => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  const intervals = [
    { label: { en: 'year', fa: 'سال' }, seconds: 31536000 },
    { label: { en: 'month', fa: 'ماه' }, seconds: 2592000 },
    { label: { en: 'day', fa: 'روز' }, seconds: 86400 },
    { label: { en: 'hour', fa: 'ساعت' }, seconds: 3600 },
    { label: { en: 'minute', fa: 'دقیقه' }, seconds: 60 },
  ];
  
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return language === 'fa' 
        ? `${count} ${interval.label.fa} پیش`
        : `${count} ${interval.label.en}${count > 1 ? 's' : ''} ago`;
    }
  }
  
  return language === 'fa' ? 'اکنون' : 'just now';
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const formatNumber = (num: number, language: 'en' | 'fa'): string => {
  if (language === 'fa') {
    return num.toLocaleString('fa-IR');
  }
  return num.toLocaleString('en-US');
};