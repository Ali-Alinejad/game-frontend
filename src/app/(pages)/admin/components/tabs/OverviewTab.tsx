"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Monitor, Activity, Tag, Users as UsersIcon, Clock, MessageSquare, Gamepad, Download
} from 'lucide-react';
import { 
  ResponsiveContainer, Tooltip, PieChart, Pie, Cell, 
  BarChart, Bar, Legend, CartesianGrid, XAxis, YAxis,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  LineChart,
  Line
} from 'recharts';
import { translations } from '../../lib/translations'; // مطمئن شوید مسیر ترجمه صحیح است

// --- ثوابت و استایل‌ها ---
const PRIMARY_ACCENTS = ['#F59E0B', '#67696b', '#a8a8a8', '#67696b', '#F59E0B', '#67696b']; 
const NEUTRAL_COLOR = '#67696b'; 
const CHART_BG = '#18181b';
const CARD_BG_CLASS = "bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-4 border border-zinc-700 hover:border-amber-500/50 transition-all shadow-2xl";
const CHART_HEIGHT_LG = 300;
const CHART_HEIGHT_XL = 300;
const CHART_HEIGHT_SM = 100; 
const ACCENT_COLOR = '#F59E0B';
const CustomTooltip = React.memo(({ active, payload, label, lang }: any) => {
  const t = translations(lang);
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-800/95 p-3 rounded-lg border border-amber-500 shadow-xl text-xs backdrop-blur-sm">
        <p className="font-bold text-amber-400 mb-1">{label}</p>
        {payload.map((pld: any, index: number) => (
          <p key={index} style={{ color: pld.color }}>
            {pld.name}: <span className="font-semibold">{(typeof pld.value === 'number') ? pld.value.toLocaleString(lang) : pld.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
});


// --- StatCard (همانند قبل) ---
interface StatCardProps {
  stat: {
    label: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    color: 'purple' | 'blue' | 'amber' | 'green';
    icon: React.ElementType;
  };
  t: (key: string) => string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = React.memo(({ stat, t, delay }) => {
  const ICON_CLASS = 
    stat.color === 'purple' ? 'bg-purple-600/70' :
    stat.color === 'blue' ? 'bg-blue-600/70' :
    stat.color === 'amber' ? 'bg-amber-600/70' :
    'bg-green-600/70';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className={`
        bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-5 shadow-lg
        hover:border-amber-500/80 transition-all cursor-pointer
        ${stat.color === 'amber' ? 'shadow-amber-900/20' : 'shadow-zinc-900/20'}
      `}
    >
      <div className="flex justify-between items-start">
        <p className="text-sm text-gray-400">{stat.label}</p>
          <stat.icon className="w-5 h-5 text-white" />
      </div>
      
      <h3 className="text-3xl font-extrabold my-1">{stat.value}</h3>
      
      <div className="flex items-center gap-2 mt-2">
        <span className={`text-sm font-semibold flex items-center gap-1 
          ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}
        >
          {stat.trend === 'up' ? <TrendingUp className='w-4 h-4'/> : '↘'} {stat.change}
        </span>
        <span className="text-xs text-zinc-500">۱۲</span>
      </div>
    </motion.div>
  );
});


// --- GameCard (کمپوننت کوچک برای نمایش سریع بازی‌ها) ---
interface Game {
  id: string;
  title: { en: string; fa?: string };
  image?: string;
  backgroundImage?: string;
  platform: string[];
  genres: string[];
  releaseDate?: string;
  marketPrice?: number;
  hasDiscount?: boolean;
}

const GameCard: React.FC<{ game: Game; lang: string }> = React.memo(({ game, lang }) => {
  const title = lang === 'fa' && game.title.fa ? game.title.fa : game.title.en;
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="flex gap-3 items-center border-1 border-zinc-700 rounded-xl p-2">
      <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
        {game.image ? (
          // next/image provides optimization; جایگزین src محلی مناسب
          <Image src={game.image} alt={title} fill style={{ objectFit: 'cover' }} />
        ) : (
          <div className="w-full h-full bg-zinc-700 flex items-center justify-center text-xs text-zinc-300">No Image</div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="text-sm font-semibold">{title}</h4>
          <span className="text-xs text-zinc-400">{game.releaseDate ? new Date(game.releaseDate).getFullYear() : ''}</span>
        </div>
        <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{game.genres.join(' • ')}</p>
       
      </div>
    </motion.div>
  );
});
const MiniLineChartCard: React.FC<{ t: (key: string) => string; lang: string }> = React.memo(({ t, lang }) => {
    // داده‌های ساختگی برای 7 روز اخیر
    const trendData = React.useMemo(() => [
        { name: lang === 'fa' ? '۷ روز قبل' : 'Day -7', value: 120 },
        { name: lang === 'fa' ? '۶ روز قبل' : 'Day -6', value: 150 },
        { name: lang === 'fa' ? '۵ روز قبل' : 'Day -5', value: 135 },
        { name: lang === 'fa' ? '۴ روز قبل' : 'Day -4', value: 190 },
        { name: lang === 'fa' ? '۳ روز قبل' : 'Day -3', value: 160 },
        { name: lang === 'fa' ? 'دیروز' : 'Yesterday', value: 220 },
        { name: lang === 'fa' ? 'امروز' : 'Today', value: 245 },
    ], [lang]);

    const total = trendData.reduce((sum, item) => sum + item.value, 0).toLocaleString(lang);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={CARD_BG_CLASS}
        >
            <div className="flex items-start justify-between py-5 ">
                <div>
                    <h3 className="  text-amber-400 flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        {'Recent Downloads'}
                    </h3>
                    <p className="text-xl font-extrabold mt-2">{total}</p>
                    <p className="text-sm text-zinc-500">{'Last 7 Days'}</p>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={CHART_HEIGHT_SM}>
                <LineChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={ACCENT_COLOR} stopOpacity={0.8}/>
                            <stop offset="95%" stopColor={ACCENT_COLOR} stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke={NEUTRAL_COLOR} tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                    <YAxis stroke={NEUTRAL_COLOR} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                    <Tooltip content={<CustomTooltip lang={lang} />} />
                    <Line
                        type="monotone"
                        dataKey="value"
                        name={'Downloads'}
                        stroke={ACCENT_COLOR}
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6, fill: ACCENT_COLOR, strokeWidth: 2 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
});



// --- کامپوننت اصلی OverviewTab (افزوده‌شده: panel و گرید بازی‌ها) ---
interface OverviewTabProps {
  stats: {
    label: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    color: 'purple' | 'blue' | 'amber' | 'green';
    icon: React.ElementType;
  }[];
  lang: string;
  games: {
    id: string;
    title: { en: string; fa?: string };
    image?: string;
    backgroundImage?: string;
    screenshots?: string[];
    supportedLanguages?: string[];
    platform: string[];
    releaseDate?: string;
    developer?: string;
    genres: string[];
    tags?: string[];
    marketPrice?: number;
    hasDiscount?: boolean;
    description?: any;
    developerInfo?: any;
    systemRequirements?: any;
  }[];
}

const OverviewTab: React.FC<OverviewTabProps> = React.memo(({ stats, lang, games }) => {
  const t = translations(lang);
  
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // داده‌های فعالیت هفتگی
  const activityDataStatic = React.useMemo(() => [
    { day: lang === 'fa' ? 'شنبه' : 'Sat', downloads: 420, comments: 89, users: 156 },
    { day: lang === 'fa' ? 'یکشنبه' : 'Sun', downloads: 380, comments: 102, users: 178 },
    { day: lang === 'fa' ? 'دوشنبه' : 'Mon', downloads: 510, comments: 125, users: 203 },
    { day: lang === 'fa' ? 'سه‌شنبه' : 'Tue', downloads: 490, comments: 118, users: 189 },
    { day: lang === 'fa' ? 'چهارشنبه' : 'Wed', downloads: 560, comments: 142, users: 224 },
    { day: lang === 'fa' ? 'پنج‌شنبه' : 'Thu', downloads: 620, comments: 156, users: 241 },
    { day: lang === 'fa' ? 'جمعه' : 'Fri', downloads: 580, comments: 148, users: 227 },
  ], [lang]);

  const activityMapped = React.useMemo(() => activityDataStatic.map(item => ({
    [t.users]: item.users,
    [t.downloads]: item.downloads,
    [t.comments]: item.comments,
    day: item.day,
  })), [activityDataStatic, t]);

  // platform chart data
  const platformChartData = React.useMemo(() => {
    const platformData = games.reduce((acc: any, game: any) => {
      game.platform.forEach((platform: string) => {
        acc[platform] = (acc[platform] || 0) + 1;
      });
      return acc;
    }, {});
    return Object.entries(platformData)
      .map(([name, value]) => ({ 
        name: name.length > 15 ? `${name.substring(0, 15)}...` : name, 
        value: value as number 
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);
  }, [games]);

  // genre chart data
  const genreChartData = React.useMemo(() => {
    const genreData = games.reduce((acc: any, game: any) => {
      game.genres.forEach((genre: string) => {
        acc[genre] = (acc[genre] || 0) + 1;
      });
      return acc;
    }, {});
    return Object.entries(genreData)
      .map(([genre, count]) => ({ genre, count: count as number }))
      .sort((a, b) => b.count - a.count);
  }, [games]);

  const maxGenreCount = React.useMemo(() => {
    const max = Math.max(...genreChartData.map(d => d.count), 0);
    return max > 0 ? max + Math.ceil(max * 0.1) : 100;
  }, [genreChartData]);

  if (!isClient) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-zinc-950 text-amber-500 text-2xl font-semibold">
        {t.loading || 'Loading...'}
      </div>
    );
  }

  // انتخاب یک بازی فیچر (اولین بازی از props یا undefined)
  const featuredGame = games && games.length ? games[0] : undefined;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -10 }} 
      className="space-y-4 text-white  lg:px-3  py-2 bg-zinc-950 max-h-[90vh] overflow-hidden rounded-2xl shadow-lg" 
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} t={t} delay={i * 0.08} />
        ))}
      </div>

      {/* Main area: left charts, right featured panel */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left (charts) spans 3 cols on lg */}
        <div className="lg:col-span-3 space-y-6">

          {/* charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Weekly Activity */}
            <div className={CARD_BG_CLASS + " lg:col-span-2"}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-amber-400">
                <Activity className="w-5 h-5" />
                {t.weeklyActivity}
              </h3>
              <ResponsiveContainer width="100%" height={CHART_HEIGHT_LG}>
                <BarChart data={activityMapped} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="day" stroke={NEUTRAL_COLOR} tickLine={false} axisLine={false} />
                  <YAxis stroke={NEUTRAL_COLOR} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip lang={lang} />} />
                  <Legend 
                    iconType="circle" 
                    wrapperStyle={{ paddingTop: '15px' }} 
                    formatter={(value) => <span className="text-zinc-400 text-xs">{value}</span>}
                  />
                  <Bar dataKey={t.users} fill={PRIMARY_ACCENTS[1]} radius={[6, 6, 0, 0]} />
                  <Bar dataKey={t.downloads} fill={PRIMARY_ACCENTS[0]} radius={[6, 6, 0, 0]} />
                  <Bar dataKey={t.comments} fill={PRIMARY_ACCENTS[2]} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Platform Pie */}
            <div className={CARD_BG_CLASS + " lg:col-span-1"}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-amber-400">
                <Monitor className="w-5 h-5" />
                {t.platformDistribution}
              </h3>
              <div className="relative h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie 
                      data={platformChartData} 
                      cx="50%" 
                      cy="50%" 
                      innerRadius={60} 
                      outerRadius={90} 
                      paddingAngle={3}
                      dataKey="value"
                      labelLine={false}
                      label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {platformChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={PRIMARY_ACCENTS[index % PRIMARY_ACCENTS.length]} stroke={CHART_BG} strokeWidth={2} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip lang={lang} />} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-4xl font-extrabold text-gray-200">
                      {platformChartData.reduce((sum, item) => sum + item.value, 0).toLocaleString(lang)}
                    </span>
                    <span className="text-sm text-zinc-400">{t.totalGames}</span>
                </div>
              </div>
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center" 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle"
                formatter={(value) => <span className="text-zinc-400 text-xs">{value}</span>}
              />
            </div>

            {/* Genre Radar */}
          
          </div>

          {/* Games grid (compact list) */}
          <div className={CARD_BG_CLASS}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-amber-400">{'Recent Games'}</h4>
              <div className="text-xs text-zinc-400">{games.length} {'items'}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {games.slice(0, 4).map((g) => (
                <GameCard key={g.id} game={g} lang={lang} />
              ))}
            </div>

            {/* اگر دیتای بیشتر داری میشه pagination یا load-more اضافه کرد */}
          </div>


        </div>
      <div className="grid grid-cols-1   ">
        

        <div className="lg:col-span-1">
            <div className={CARD_BG_CLASS + " lg:col-span-1"}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-amber-400">
                <Tag className="w-5 h-5" />
                {t.genreDistribution}
              </h3>
              <ResponsiveContainer width="100%" height={CHART_HEIGHT_XL}>
                <RadarChart 
                  cx="50%" 
                  cy="50%" 
                  outerRadius="80%" 
                  data={genreChartData}
                >
                  <PolarGrid stroke={NEUTRAL_COLOR} strokeDasharray="3 3" />
                  <PolarAngleAxis dataKey="genre" stroke={NEUTRAL_COLOR} tickLine={false} tick={{ fontSize: 10 }} />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, maxGenreCount]} 
                    stroke={NEUTRAL_COLOR} 
                    tick={false}
                  />
                  <Radar 
                    dataKey="count" 
                    stroke={PRIMARY_ACCENTS[0]} 
                    fill={PRIMARY_ACCENTS[0]} 
                    fillOpacity={0.6} 
                    strokeWidth={3}
                  />
                  <Tooltip content={<CustomTooltip lang={lang} />} />
                  <Legend 
                    iconType="circle" 
                    wrapperStyle={{ paddingTop: '10px' }} 
                    formatter={(value) => <span className="text-zinc-400 text-xs">{value}</span>}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
        </div>
<div className="lg:col-span-2  mt-4">
      <MiniLineChartCard t={t} lang={lang} />

        </div>

        </div>

      </div>
      
    </motion.div>
  );
});

export default OverviewTab;
