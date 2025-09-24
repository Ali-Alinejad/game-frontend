import React from 'react';
import { Gamepad2 } from 'lucide-react';

interface FooterProps {
  t: any;
}

export const Footer: React.FC<FooterProps> = ({ t }) => (
  <footer className="relative py-16 px-4 bg-zinc-900 z-10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 font-bold text-xl">
              {t.logo}
            </span>
          </div>
          <p className="text-gray-400 max-w-md leading-relaxed">
            {t.heroDescription}
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">{t.games}</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-rose-400 transition-colors">{t.browseGames}</a></li>
            <li><a href="#" className="hover:text-rose-400 transition-colors">{t.tournaments}</a></li>
            <li><a href="#" className="hover:text-rose-400 transition-colors">{t.leaderboards}</a></li>
            <li><a href="#" className="hover:text-rose-400 transition-colors">{t.achievements}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">{t.community}</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-rose-400 transition-colors">{t.forums}</a></li>
            <li><a href="#" className="hover:text-rose-400 transition-colors">{t.discord}</a></li>
            <li><a href="#" className="hover:text-rose-400 transition-colors">{t.support}</a></li>
            <li><a href="#" className="hover:text-rose-400 transition-colors">{t.feedback}</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
        <p>{t.footer}</p>
      </div>
    </div>
  </footer>
);