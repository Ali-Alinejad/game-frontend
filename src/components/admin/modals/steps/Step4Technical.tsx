"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu } from 'lucide-react';

interface Step4TechnicalProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  lang: string;
}

export const Step4Technical: React.FC<Step4TechnicalProps> = ({ formData, onChange }) => {
 return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
      <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700">
        <h4 className="text-lg font-semibold mb-4 text-amber-400 flex items-center gap-2"><Monitor className="w-5 h-5" />Minimum Requirements</h4>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" value={formData.systemRequirements?.minimum.os || ''} onChange={(e) => onChange('systemRequirements.minimum.os', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="OS" />
          <input type="text" value={formData.systemRequirements?.minimum.ram || ''} onChange={(e) => onChange('systemRequirements.minimum.ram', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="RAM" />
          <input type="text" value={formData.systemRequirements?.minimum.cpu || ''} onChange={(e) => onChange('systemRequirements.minimum.cpu', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="CPU" />
          <input type="text" value={formData.systemRequirements?.minimum.gpu || ''} onChange={(e) => onChange('systemRequirements.minimum.gpu', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="GPU" />
          <input type="text" value={formData.systemRequirements?.minimum.storage || ''} onChange={(e) => onChange('systemRequirements.minimum.storage', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="Storage (e.g., 50 GB)" />
          <input type="text" value={formData.systemRequirements?.minimum.typeStorage || ''} onChange={(e) => onChange('systemRequirements.minimum.typeStorage', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="Storage Type (SSD/HDD)" />
        </div>
      </div>

      <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700">
        <h4 className="text-lg font-semibold mb-4 text-green-400 flex items-center gap-2"><Cpu className="w-5 h-5" />Recommended Requirements</h4>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" value={formData.systemRequirements?.recommended.os || ''} onChange={(e) => onChange('systemRequirements.recommended.os', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="OS" />
          <input type="text" value={formData.systemRequirements?.recommended.ram || ''} onChange={(e) => onChange('systemRequirements.recommended.ram', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="RAM" />
          <input type="text" value={formData.systemRequirements?.recommended.cpu || ''} onChange={(e) => onChange('systemRequirements.recommended.cpu', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="CPU" />
          <input type="text" value={formData.systemRequirements?.recommended.gpu || ''} onChange={(e) => onChange('systemRequirements.recommended.gpu', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="GPU" />
          <input type="text" value={formData.systemRequirements?.recommended.storage || ''} onChange={(e) => onChange('systemRequirements.recommended.storage', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="Storage (e.g., 50 GB)" />
          <input type="text" value={formData.systemRequirements?.recommended.typeStorage || ''} onChange={(e) => onChange('systemRequirements.recommended.typeStorage', e.target.value)} className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" placeholder="Storage Type (SSD/HDD)" />
        </div>
      </div>
    </motion.div>
  );
}