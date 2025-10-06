import React from 'react';
import { Gamepad2 } from 'lucide-react';
import Image from 'next/image';

interface FooterProps {
  t: any;
}

export const Footer: React.FC<FooterProps> = ({ t }) => (
  // رنگ پس‌زمینه تیره حفظ شد تا رنگ طلایی بیشتر جلوه کند
  // از border-t با رنگ نزدیک به طلایی (amber-500) برای جداکننده استفاده شد.
  <footer className="relative py-4 px-4  backdrop-blur-xs z-10 border-t border-amber-400/20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            {/* قسمت لوگو: تغییر نکرد اما می‌توانید اطمینان حاصل کنید که لوگوی شما در مسیر /logoes/logoGold.png واقعاً طلایی است. */}
            <div className='relative h-8 w-8'>
              <Image
                src="/logoes/logoGold.png"
                alt="Logo"
                fill
                className="scale-200 brightness-125 object-contain group-hover:drop-shadow-[0_0_12px_rgba(255,185,0,0.6)] transition-all duration-300"
              />
            </div>
            
            {/* متن لوگو: از گرادیانت طلایی برای متن استفاده شده است */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 font-extrabold text-2xl tracking-wider">
              {t.logo}
            </span>
          </div>
          {/* متن توضیحات: رنگ خاکستری تیره برای خوانایی بیشتر روی پس‌زمینه تیره */}
          <p className="text-zinc-400 max-w-md leading-relaxed">
            {t.heroDescription}
          </p>
        </div>
        
        {/* ستون بازی‌ها */}
        <div>
          {/* عنوان: رنگ سفید یا طلایی ملایم */}
          <h4 className="text-amber-300 font-bold mb-4 uppercase tracking-wider">{t.games}</h4>
          <ul className="space-y-2 text-zinc-400">
            {/* لینک‌ها: hover به رنگ طلایی (amber-400) */}
            <li><a href="#" className="hover:text-amber-400 transition-colors">{t.browseGames}</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">{t.tournaments}</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">{t.leaderboards}</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">{t.achievements}</a></li>
          </ul>
        </div>
        
        {/* ستون انجمن */}
        <div>
          {/* عنوان: رنگ سفید یا طلایی ملایم */}
          <h4 className="text-amber-300 font-bold mb-4 uppercase tracking-wider">{t.community}</h4>
          <ul className="space-y-2 text-zinc-400">
            {/* لینک‌ها: hover به رنگ طلایی (amber-400) */}
            <li><a href="#" className="hover:text-amber-400 transition-colors">{t.forums}</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">{t.discord}</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">{t.support}</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">{t.feedback}</a></li>
          </ul>
        </div>
      </div>
      
      {/* بخش کپی رایت */}
      <div className="border-t border-yellow-700/50 pt-8 text-center text-zinc-500">
        <p>{t.footer}</p>
      </div>
    </div>
  </footer>
);