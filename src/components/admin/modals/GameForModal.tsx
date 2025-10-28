"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Gamepad2, MessageSquare, ImageIcon, Monitor, ArrowLeft, ArrowRight, Save } from 'lucide-react';
import { Game } from '@/app/types/Game';
import Step1BasicInfo from './steps/Step1BasicInfo';
import Step2Description from './steps/Step2Description';
import Step3Media from './steps/Step3Media';
import { Step4Technical } from './steps/Step4Technical';
import { translations } from '@/lib/types/constants/translations';

interface GameFormModalProps {
  game: Game | null;
  isAddMode: boolean;
  onClose: () => void;
  onSave: (game: Game) => void;
  lang: string;
}

const GameFormModal: React.FC<GameFormModalProps> = ({ game, isAddMode, onClose, onSave, lang }) => {
  const t = translations(lang);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Game>(
    game || {
      id: Date.now().toString(),
      title: { en: '', fa: '' },
      marketPrice: 0,
      hasDiscount: false,
      platform: [],
      releaseDate: '',
      developer: '',
      genres: [],
      tags: [],
      supportedLanguages: [],
      description: {
        short: { english: '', persian: '' },
        long: { english: '', persian: '' },
        storyline: { english: '', persian: '' }
      },
      developerInfo: {
        description: { en: '', fa: '' },
        website: '',
        founded: ''
      },
      systemRequirements: {
        minimum: { os: '', ram: '', cpu: '', gpu: '', storage: '', typeStorage: '' },
        recommended: { os: '', ram: '', cpu: '', gpu: '', storage: '', typeStorage: '' }
      }
    }
  );

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => {
      const keys = field.split('.');
      if (keys.length === 1) return { ...prev, [field]: value };
      
      const newData = { ...prev };
      let current: any = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  const steps = [
    { id: 1, label: t.basicInfo, icon: Gamepad2 },
    { id: 2, label: t.description, icon: MessageSquare },
    { id: 3, label: t.media, icon: ImageIcon },
    { id: 4, label: t.technical, icon: Monitor }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-zinc-900 rounded-2xl max-w-5xl w-full my-8 border border-amber-500/50 shadow-2xl shadow-amber-500/20"
        dir={lang === 'fa' ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-gradient-to-r from-zinc-900 to-zinc-800">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            {isAddMode ? t.addNewGame : t.editGame}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="p-6 border-b border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center justify-between">
            {steps.map((s, idx) => (
              <React.Fragment key={s.id}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all ${
                    step === s.id ? 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/30' : 
                    step > s.id ? 'bg-green-500/20 text-green-400 border-2 border-green-500' : 'bg-zinc-800 text-gray-400'
                  }`}>
                    {step > s.id ? <CheckCircle className="w-6 h-6" /> : <s.icon className="w-6 h-6" />}
                  </div>
                  <span className={`text-xs font-medium ${step === s.id ? 'text-amber-400' : step > s.id ? 'text-green-400' : 'text-gray-400'}`}>
                    {s.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 rounded-full transition-all ${step > s.id ? 'bg-green-500' : 'bg-zinc-800'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === 1 && <Step1BasicInfo formData={formData} onChange={handleChange} lang={lang} />}
            {step === 2 && <Step2Description formData={formData} onChange={handleChange} lang={lang} />}
            {step === 3 && <Step3Media formData={formData} onChange={handleChange} lang={lang} />}
            {step === 4 && <Step4Technical formData={formData} onChange={handleChange} lang={lang} />}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-zinc-800 flex justify-between bg-zinc-900/50">
          <button onClick={onClose} className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors font-medium">
            {t.close}
          </button>
          <div className="flex gap-3">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)} 
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                {t.previous}
              </button>
            )}
            {step < 4 ? (
              <button 
                onClick={() => setStep(step + 1)} 
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-xl transition-colors font-medium shadow-lg shadow-amber-500/30"
              >
                {t.next}
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <motion.button 
                onClick={handleSubmit} 
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl transition-colors font-medium shadow-lg shadow-green-500/30" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Save className="w-4 h-4" />
                {isAddMode ? t.create : t.saveChanges}
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameFormModal;