"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Eye } from 'lucide-react';
import { translations } from '@/lib/constants/admin/translations';

interface CommentsTabProps {
  lang: string;
}

const CommentsTab: React.FC<CommentsTabProps> = ({ lang }) => {
  const t = translations(lang);

  const comments = [
    { id: 1, user: 'علی احمدی', game: 'Cyberpunk 2077', text: 'این بازی واقعا عالیه! گرافیک و داستان فوق‌العاده است.', time: '2 ساعت پیش', status: 'pending' },
    { id: 2, user: 'Sara Smith', game: 'Red Dead Redemption 2', text: 'Amazing storyline and beautiful graphics!', time: '5 hours ago', status: 'approved' },
    { id: 3, user: 'محمد رضایی', game: 'The Witcher 3', text: 'یکی از بهترین بازی‌های RPG که تا حالا تجربه کردم.', time: '1 روز پیش', status: 'rejected' },
    { id: 4, user: 'Emma Wilson', game: 'Elden Ring', text: 'Challenging but incredibly rewarding gameplay!', time: '3 hours ago', status: 'approved' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          {t.commentManagement}
        </h2>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-sm">
            {t.all}
          </button>
          <button className="px-4 py-2 bg-amber-500/20 text-amber-400 rounded-lg transition-colors text-sm">
            {t.pending}
          </button>
          <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg transition-colors text-sm">
            {t.approved}
          </button>
          <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg transition-colors text-sm">
            {t.rejected}
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="grid gap-4">
        {comments.map((comment, idx) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700 hover:border-zinc-600 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <span className="font-bold">{comment.user[0]}</span>
                </div>
                <div>
                  <p className="font-semibold">{comment.user}</p>
                  <p className="text-sm text-gray-400">on {comment.game}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{comment.time}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  comment.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                  comment.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {comment.status === 'pending' ? t.pending : comment.status === 'approved' ? t.approved : t.rejected}
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{comment.text}</p>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-lg transition-colors">
                <CheckCircle className="w-4 h-4" />
                {t.approve}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-colors">
                <XCircle className="w-4 h-4" />
                {t.reject}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors">
                <Eye className="w-4 h-4" />
                {t.viewDetails}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CommentsTab;