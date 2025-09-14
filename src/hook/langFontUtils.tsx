import { useMemo } from 'react';

export const isPersian = (text: string): boolean => {
  const persianRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
  return persianRegex.test(text);
};

// Hook برای تشخیص خودکار فونت
export const useAutoFont = (text: string) => {
  return useMemo(() => {
    const hasPersian = isPersian(text);
    
    return {
      fontClass: hasPersian ? 'vazir-font' : 'bricolage-grotesque',
      direction: hasPersian ? 'rtl' : 'ltr',
      lang: hasPersian ? 'fa' : 'en',
    };
  }, [text]);
};

// کامپوننت برای اعمال خودکار فونت
interface AutoFontProps {
  children: React.ReactNode;
  className?: string;
  text?: string;
}

export const AutoFont: React.FC<AutoFontProps> = ({ 
  children, 
  className = '', 
  text 
}) => {
  // اگر text پاس نشده، از children استخراج کن
  const extractedText = text || (typeof children === 'string' ? children : '');
  const { fontClass, direction, lang } = useAutoFont(extractedText);
  
  return (
    <div 
      className={`${fontClass} ${className}`}
      dir={direction}
      lang={lang}
    >
      {children}
    </div>
  );
};

// Hook برای zustand store شما
export const useLanguageFont = (currentLang: 'fa' | 'en') => {
  return useMemo(() => {
    return {
      fontClass: currentLang === 'fa' ? 'vazir-font' : 'bricolage-grotesque',
      direction: currentLang === 'fa' ? 'rtl' : 'ltr',
      lang: currentLang,
    };
  }, [currentLang]);
};