"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface Step2DescriptionProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  lang: string;
}

const Step2Description: React.FC<Step2DescriptionProps> = ({ formData, onChange }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }} 
      className="space-y-6"
    >
      {/* Short Description - English */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Short Description (English)
        </label>
        <textarea 
          value={typeof formData.description.short === 'string' ? formData.description.short : formData.description.short.english} 
          onChange={(e) => onChange('description.short.english', e.target.value)} 
          rows={3} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none" 
          placeholder="Brief description of the game..."
        />
      </div>

      {/* Short Description - Persian */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Short Description (Persian)
        </label>
        <textarea 
          value={typeof formData.description.short === 'string' ? '' : formData.description.short.persian} 
          onChange={(e) => onChange('description.short.persian', e.target.value)} 
          rows={3} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none" 
          placeholder="توضیح مختصر درباره بازی..."
        />
      </div>

      {/* Long Description - English */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Long Description (English)
        </label>
        <textarea 
          value={typeof formData.description.long === 'string' ? formData.description.long : formData.description.long.english} 
          onChange={(e) => onChange('description.long.english', e.target.value)} 
          rows={5} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none" 
          placeholder="Detailed description of the game..."
        />
      </div>

      {/* Long Description - Persian */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Long Description (Persian)
        </label>
        <textarea 
          value={typeof formData.description.long === 'string' ? '' : formData.description.long.persian} 
          onChange={(e) => onChange('description.long.persian', e.target.value)} 
          rows={5} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none" 
          placeholder="توضیحات کامل درباره بازی..."
        />
      </div>

      {/* Storyline - English */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Storyline (English)
        </label>
        <textarea 
          value={typeof formData.description.storyline === 'string' ? formData.description.storyline : formData.description.storyline?.english || ''} 
          onChange={(e) => onChange('description.storyline.english', e.target.value)} 
          rows={4} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none" 
          placeholder="Game storyline and plot..."
        />
      </div>

      {/* Storyline - Persian */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Storyline (Persian)
        </label>
        <textarea 
          value={typeof formData.description.storyline === 'string' ? '' : formData.description.storyline?.persian || ''} 
          onChange={(e) => onChange('description.storyline.persian', e.target.value)} 
          rows={4} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none" 
          placeholder="خط داستانی و داستان بازی..."
        />
      </div>
    </motion.div>
  );
};

export default Step2Description;