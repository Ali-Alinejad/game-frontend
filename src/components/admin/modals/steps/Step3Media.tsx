"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, LinkIcon, Languages } from 'lucide-react';
import Image from 'next/image';

interface Step3MediaProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  lang: string;
}

const Step3Media: React.FC<Step3MediaProps> = ({ formData, onChange }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -20 }} 
      className="space-y-6"
    >
      {/* Cover Image */}
      <div>
        <label className=" text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
          <ImageIcon className="w-4 h-4" />
          Cover Image URL
        </label>
        <input 
          type="url" 
          value={formData.image || ''} 
          onChange={(e) => onChange('image', e.target.value)} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
          placeholder="https://example.com/image.jpg" 
        />
        {formData.image && (
          <div className="mt-3 p-4 bg-zinc-800 rounded-lg border border-zinc-700">
            <Image src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
          </div>
        )}
      </div>

      {/* Background Image */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Background Image URL
        </label>
        <input 
          type="url" 
          value={formData.backgroundImage || ''} 
          onChange={(e) => onChange('backgroundImage', e.target.value)} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
          placeholder="https://example.com/background.jpg" 
        />
      </div>

      {/* Screenshots */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Screenshots (comma-separated URLs)
        </label>
        <textarea 
          value={formData.screenshots?.join(', ') || ''} 
          onChange={(e) => onChange('screenshots', e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean))} 
          rows={3} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors resize-none" 
          placeholder="https://example.com/ss1.jpg, https://example.com/ss2.jpg"
        />
      </div>

      {/* Trailer URL */}
      <div>
        <label className=" text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
          <LinkIcon className="w-4 h-4" />
          Trailer URL
        </label>
        <input 
          type="url" 
          value={formData.trailerUrl || ''} 
          onChange={(e) => onChange('trailerUrl', e.target.value)} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
          placeholder="https://youtube.com/watch?v=..." 
        />
      </div>

      {/* Official Website */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Official Website URL
        </label>
        <input 
          type="url" 
          value={formData.officialWebsiteUrl || ''} 
          onChange={(e) => onChange('officialWebsiteUrl', e.target.value)} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
          placeholder="https://game-website.com" 
        />
      </div>

      {/* Supported Languages */}
      <div>
        <label className=" text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
          <Languages className="w-4 h-4" />
          Supported Languages (comma-separated)
        </label>
        <input 
          type="text" 
          value={formData.supportedLanguages.join(', ')} 
          onChange={(e) => onChange('supportedLanguages', e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean))} 
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
          placeholder="English, Persian, Spanish, French" 
        />
      </div>

      {/* Developer Info */}
      <div className="border-t border-zinc-700 pt-6">
        <h4 className="text-lg font-semibold mb-4 text-amber-400">Developer Information</h4>
        <div className="space-y-4">
          <input 
            type="text" 
            value={formData.developerInfo?.website || ''} 
            onChange={(e) => onChange('developerInfo.website', e.target.value)} 
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
            placeholder="Developer Website URL" 
          />
          <input 
            type="text" 
            value={formData.developerInfo?.founded || ''} 
            onChange={(e) => onChange('developerInfo.founded', e.target.value)} 
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" 
            placeholder="Founded Year (e.g., 2010)" 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Step3Media;