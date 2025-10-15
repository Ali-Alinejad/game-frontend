"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Monitor, Activity, Target, Tag, Award, Users as UsersIcon,
  Clock, Download
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, PieChart, Pie, Cell, BarChart, Bar, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { translations } from '../../lib/translations';
import { CHART_COLORS } from '../../lib/constants';

interface OverviewTabProps {
  stats: any[];
  lang: string;
  games: any[];
}

const OverviewTab: React.FC<OverviewTabProps> = ({ stats, lang, games }) => {
  const t = translations(lang);

  // Data for charts
  const userGrowthData = [
    { month: lang === 'fa' ? 'فروردین' : 'Jan', users: 4200, revenue: 18500 },
    { month: lang === 'fa' ? 'اردیبهشت' : 'Feb', users: 5800, revenue: 24300 },
    { month: lang === 'fa' ? 'خرداد' : 'Mar', users: 7100, revenue: 31200 },
    { month: lang === 'fa' ? 'تیر' : 'Apr', users: 8900, revenue: 38900 },
    { month: lang === 'fa' ? 'مرداد' : 'May', users: 10200, revenue: 45600 },
    { month: lang === 'fa' ? 'شهریور' : 'Jun', users: 12500, revenue: 52800 },
  ];

  const platformData = games.reduce((acc: any, game: any) => {
    game.platform.forEach((platform: string) => {
      acc[platform] = (acc[platform] || 0) + 1;
    });
    return acc;
  }, {});
  const platformChartData = Object.entries(platformData).map(([name, value]) => ({ name, value }));

  const genreData = games.reduce((acc: any, game: any) => {
    game.genres.forEach((genre: string) => {
      acc[genre] = (acc[genre] || 0) + 1;
    });
    return acc;
  }, {});
  const genreChartData = Object.entries(genreData).map(([name, value]) => ({ name, value }));

  const performanceData = [
    { category: lang === 'fa' ? 'کیفیت' : 'Quality', value: 92 },
    { category: lang === 'fa' ? 'محبوبیت' : 'Popularity', value: 85 },
    { category: lang === 'fa' ? 'تنوع' : 'Variety', value: 88 },
    { category: lang === 'fa' ? 'نوآوری' : 'Innovation', value: 78 },
    { category: lang === 'fa' ? 'پشتیبانی' : 'Support', value: 95 },
  ];

  const activityData = [
    { day: lang === 'fa' ? 'شنبه' : 'Sat', downloads: 420, comments: 89, users: 156 },
    { day: lang === 'fa' ? 'یکشنبه' : 'Sun', downloads: 380, comments: 102, users: 178 },
    { day: lang === 'fa' ? 'دوشنبه' : 'Mon', downloads: 510, comments: 125, users: 203 },
    { day: lang === 'fa' ? 'سه‌شنبه' : 'Tue', downloads: 490, comments: 118, users: 189 },
    { day: lang === 'fa' ? 'چهارشنبه' : 'Wed', downloads: 560, comments: 142, users: 224 },
    { day: lang === 'fa' ? 'پنج‌شنبه' : 'Thu', downloads: 620, comments: 156, users: 241 },
    { day: lang === 'fa' ? 'جمعه' : 'Fri', downloads: 580, comments: 148, users: 227 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          {t.dashboardOverview}
        </h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
            <Clock className="w-4 h-4" />
            {t.realtime}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            {t.export}
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700 hover:border-amber-500/50 transition-all overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all"></div>
            <div className="relative">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                stat.color === 'purple' ? 'from-purple-500 to-purple-600' :
                stat.color === 'blue' ? 'from-blue-500 to-blue-600' :
                stat.color === 'amber' ? 'from-amber-500 to-orange-600' :
                'from-green-500 to-green-600'
              } flex items-center justify-center mb-4 shadow-lg`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.trend === 'up' ? '↗' : '↘'} {stat.change}
                </span>
                <span className="text-xs text-gray-500">{t.vsLastMonth}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth & Revenue */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-500" />
            {t.userGrowthRevenue}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={userGrowthData}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="month" stroke="#71717a" />
              <YAxis yAxisId="left" stroke="#3b82f6" />
              <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
              <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px' }} />
              <Area yAxisId="left" type="monotone" dataKey="users" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUsers)" strokeWidth={2} />
              <Area yAxisId="right" type="monotone" dataKey="revenue" stroke="#10b981" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Platform Distribution */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-amber-500" />
            {t.platformDistribution}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={platformChartData} 
                cx="50%" 
                cy="50%" 
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100} 
                dataKey="value"
              >
                {platformChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CHART_COLORS.primary[index % CHART_COLORS.primary.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Activity */}
        <div className="lg:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-500" />
            {t.weeklyActivity}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="day" stroke="#71717a" />
              <YAxis stroke="#71717a" />
              <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px' }} />
              <Legend />
              <Bar dataKey="downloads" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              <Bar dataKey="comments" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="users" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Radar */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-amber-500" />
            {t.performance}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
              <PolarGrid stroke="#3f3f46" />
              <PolarAngleAxis dataKey="category" stroke="#71717a" />
              <PolarRadiusAxis stroke="#71717a" />
              <Radar name="Score" dataKey="value" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
              <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

<div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Tag className="w-5 h-5 text-amber-500" />
          {t.genreDistribution}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={genreChartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis type="number" stroke="#71717a" />
            <YAxis dataKey="name" type="category" stroke="#71717a" width={100} />
            <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px' }} />
            <Bar dataKey="value" fill="#8b5cf6" radius={[0, 8, 8, 0]}>
              {genreChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={CHART_COLORS.primary[index % CHART_COLORS.primary.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold text-purple-400">A+</span>
          </div>
          <h4 className="text-lg font-semibold mb-1">{t.overallRating}</h4>
          <p className="text-gray-400 text-sm">{t.excellentPerformance}</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <UsersIcon className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-blue-400">+28%</span>
          </div>
          <h4 className="text-lg font-semibold mb-1">{t.userGrowth}</h4>
          <p className="text-gray-400 text-sm">{t.highestInMonths}</p>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold text-green-400">$52.8K</span>
          </div>
          <h4 className="text-lg font-semibold mb-1">{t.monthlyRevenue}</h4>
          <p className="text-gray-400 text-sm">{t.increaseFromLast}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OverviewTab;