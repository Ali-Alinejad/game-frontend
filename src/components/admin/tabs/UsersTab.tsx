"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, Eye, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { translations } from '@/lib/constants/admin/translations';
interface UsersTabProps {
  lang: string;
}

const UsersTab: React.FC<UsersTabProps> = ({ lang }) => {
  const t = translations(lang);

  const users = [
    { id: 1, name: 'علی کریمی', email: 'ali@example.com', role: 'Admin', status: 'active', comments: 45, joined: '2024-01-15' },
    { id: 2, name: 'Sara Smith', email: 'sara@example.com', role: 'User', status: 'active', comments: 23, joined: '2024-02-10' },
    { id: 3, name: 'محمد رضایی', email: 'mohammad@example.com', role: 'User', status: 'banned', comments: 12, joined: '2024-01-20' },
    { id: 4, name: 'Emily Johnson', email: 'emily@example.com', role: 'Moderator', status: 'active', comments: 67, joined: '2023-12-05' },
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
          {t.userManagement}
        </h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            {t.filter}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-lg transition-colors shadow-lg shadow-amber-500/30">
            <Plus className="w-4 h-4" />
            {t.addUser}
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-800/50 border-b border-zinc-700">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">{lang === 'fa' ? 'کاربر' : 'User'}</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">{t.email}</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">{t.role}</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">{t.status}</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">{t.comments}</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">{t.actions}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <motion.tr 
                key={user.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <span className="font-bold text-sm">{user.name[0]}</span>
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-400">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    user.role === 'Admin' ? 'bg-amber-500/20 text-amber-400' : 
                    user.role === 'Moderator' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${
                    user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {user.status === 'active' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                    {user.status === 'active' ? t.active : t.banned}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400">{user.comments}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-amber-500/20 text-amber-400 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersTab;