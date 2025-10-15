"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Percent } from 'lucide-react';
import { translations } from '../../lib/translations';

interface Step1BasicInfoProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  lang: string;
}

const Step1BasicInfo: React.FC<Step1BasicInfoProps> = ({ formData, onChange, lang }) => {
  const t = translations(lang);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }} 
      className="space-y-6"
    >
      {/* Title Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {t.title} (English)
          </label>
          <input 
            type="text" 
            value={formData.title.en} 
            onChange={(e) => onChange('title.en', e.target.value)} 
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" 
            placeholder="Game Title" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {t.title} (Persian)
          </label>
          <input 
            type="text" 
            value={formData.title.fa} 
            onChange={(e) => onChange('title.fa', e.target.value)} 
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" 
            placeholder="عنوان بازی" 
          />
        </div>
      </div>

      {/* Developer, Release Date, Beta Date */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {t.developer}
          </label>
          <input 
            type="text" 
            value={formData.developer} 
            onChange={(e) => onChange('developer', e.target.value)} 
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
            placeholder="Developer Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {t.releaseDate}
          </label>
          <input 
            type="date" 
            value={formData.releaseDate} 
            onChange={(e) => onChange('releaseDate', e.target.value)} 
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Beta Date (Optional)
          </label>
          <input 
            type="date" 
            value={formData.betaDate || ''} 
            onChange={(e) => onChange('betaDate', e.target.value)} 
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
          />
        </div>
      </div>

      {/* Price and Discount */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className=" text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            {t.price} (USD)
          </label>
          <input 
            type="number" 
            step="0.01" 
            value={formData.marketPrice} 
            onChange={(e) => onChange('marketPrice', parseFloat(e.target.value) || 0)} 
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
            placeholder="0.00"
          />
        </div>
        <div>
          <label className=" text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
            <Percent className="w-4 h-4" />
            {t.discount} {t.status}
          </label>
          <label className="flex items-center gap-3 p-3 bg-zinc-800 border border-zinc-700 rounded-lg cursor-pointer hover:border-amber-500 transition-colors">
            <input 
              type="checkbox" 
              checked={formData.hasDiscount} 
              onChange={(e) => onChange('hasDiscount', e.target.checked)} 
              className="w-5 h-5 rounded accent-amber-500" 
            />
            <span>Has Discount</span>
          </label>
        </div>
      </div>

      {/* Platforms */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Platforms (comma-separated)
        </label>
        <input 
          type="text" 
          value={formData.platform.join(', ')} 
          onChange={(e) => onChange('platform', e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean))} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
          placeholder="PC, PS5, Xbox Series X" 
        />
      </div>

      {/* Genres */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Genres (comma-separated)
        </label>
        <input 
          type="text" 
          value={formData.genres.join(', ')} 
          onChange={(e) => onChange('genres', e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean))} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
          placeholder="RPG, Action, Adventure" 
        />
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Tags (comma-separated)
        </label>
        <input 
          type="text" 
          value={formData.tags.join(', ')} 
          onChange={(e) => onChange('tags', e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean))} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
          placeholder="Open World, Story Rich, Multiplayer" 
        />
      </div>
    </motion.div>
  );
};

export default Step1BasicInfo;