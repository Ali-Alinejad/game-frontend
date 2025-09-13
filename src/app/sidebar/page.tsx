import React, { useState } from 'react';
import { Button, Divider } from '@heroui/react';
import { OrbitControls, Stars, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Calendar, Newspaper, Trophy, Gamepad2, Flame, Star, Home, Users, MessageCircle, Send, Instagram, Youtube } from 'lucide-react';

const FloatingParticles = () => {
  return (
    <>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.4} color="#ff007f" />
          <Sparkles count={50} scale={7} size={6} color="#EA0054" speed={1} />
          <Sparkles count={100} scale={7} size={4} color="#fff" speed={1} />

    </>
  );
};

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', label: 'خانه', icon: Home, color: 'rose' },
    { id: 'news', label: 'اخبار', icon: Newspaper, color: 'pink' },
    { id: 'releases', label: 'تاریخ عرضه', icon: Calendar, color: 'orange' },
    { id: 'collection', label: 'کالکشن', icon: Trophy, color: 'red' },
    { id: 'trending', label: 'ترندینگ', icon: Flame, color: 'orange' },
    { id: 'reviews', label: 'نقد و بررسی', icon: Star, color: 'red' }
  ];

  const weeklyGames = [
    { name: 'Cyberpunk 2077', score: '9.2', rank: 1 },
    { name: 'Elden Ring', score: '9.8', rank: 2 },
    { name: 'God of War', score: '9.5', rank: 3 },
    { name: 'Horizon Zero', score: '8.9', rank: 4 },
    { name: 'Spider-Man', score: '9.1', rank: 5 }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      rose: isActive 
        ? 'text-rose-400  border-l-4 border-rose-400' 
        : 'text-gray-300 hover:text-rose-600 hover:bg-rose-500/10',
      pink: isActive 
        ? 'text-pink-400 border-l-4 border-pink-400' 
        : 'text-gray-300 hover:text-pink-400 hover:bg-pink-500/10',
      orange: isActive 
        ? 'text-orange-400  border-l-4 border-orange-400' 
        : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10',
      red: isActive 
        ? 'text-red-400  border-l-4 border-red-400' 
        : 'text-gray-300 hover:text-red-400 hover:bg-red-500/10'
    };
    return colors[color as keyof typeof colors];
  };

  const getRankColor = (rank: number) => {
    switch(rank) {
      case 1: return 'text-yellow-400';
      case 2: return 'text-gray-300';
      case 3: return 'text-amber-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="fixed left-0 top-0  w-66 h-screen backdrop-blur-lg  border-gray-800/50 overflow-hidden">
      {/* Three.js Background */}
      <Canvas
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ position: "absolute" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <ambientLight intensity={0.2} color="#ff007f" />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#EC4899" />
        <FloatingParticles />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>

      <div className="relative z-10 p-4 h-full flex flex-col ">
        {/* Logo Section */}
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-600 to-pink-600 rounded-xl transform rotate-12 shadow-lg shadow-rose-500/50"></div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-rose-500 to-red-500 rounded-xl transform -rotate-12 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white z-20" />
              </div>
            </div>
            <div>
              <div className="text-transparent bg-gradient-to-r from-rose-400 to-rose-700 bg-clip-text font-bold text-lg">
                GAMING
              </div>
              <div className="text-transparent bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text font-semibold text-xs">
                NEWS HUB
              </div>
            </div>
          </div>
          
          {/* Stats Bar - Compact */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-1.5 border border-gray-700/30">
              <div className="text-rose-300 font-bold text-sm">1.2K</div>
              <div className="text-gray-400 text-xs">بازدید</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-1.5 border border-gray-700/30">
              <div className="text-rose-300 font-bold text-sm">847</div>
              <div className="text-gray-400 text-xs">اعضا</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-1.5 border border-gray-700/30">
              <div className="text-rose-300 font-bold text-sm">234</div>
              <div className="text-gray-400 text-xs">بازی</div>
            </div>
          </div>
        </div>

        {/* Main Navigation - Compact */}
        <nav className="space-y-1 mb-4 flex-shrink-0">
       
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={`w-full justify-start h-9 px-3 transition-all duration-300 text-sm ${getColorClasses(item.color, isActive)}`}
                onClick={() => setActiveItem(item.id)}
              >
                <Icon className="w-4 h-4 ml-4 -mb-5" />
                <span className="font-medium">{item.label}</span>
                {isActive && <div className="mr-auto   rounded-full bg-current animate-pulse"></div>}
              </Button>
            );
          })}
        </nav>


    

        {/* Weekly Games Table */}
        <div className="my-3 flex-1 min-h-0">
          <div className="text-rose-400/90 text-xs font-semibold uppercase tracking-wider mb-3 px-2 justify-center flex">
            بازی های هفته
          </div>
          <div className="rounded-xl p-3 border border-gray-700/30 backdrop-blur-sm">
            <div className="space-y-2">
              {weeklyGames.map((game, index) => (
                <div key={index} className="flex items-center justify-between py-1.5 px-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-bold w-4 ${getRankColor(game.rank)}`}>
                      {game.rank}
                    </span>
                    <span className="text-gray-300 text-xs font-medium">{game.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span className="text-white/80 text-xs font-semibold">{game.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Community & Social - Icons Only */}
        <div className="mb-4 flex-shrink-0">
          <div className="text-rose-400/80 text-xs font-semibold uppercase tracking-wider mb-3 justify-center flex">
            کامیونیتی و شبکه های اجتماعی
          </div>
          
          {/* Community Row */}
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Button
              variant="ghost"
              className="w-10 h-10 p-0 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
              title="کامیونیتی"
            >
              <Users className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-10 h-10 p-0 text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 transition-colors"
              title="چت گروهی"
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="ghost"
              className="w-8 h-8 p-0 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 transition-colors"
              title="Discord"
            >
              <div className="w-4 h-4 bg-purple-500 rounded-sm flex items-center justify-center">
                <MessageCircle className="w-2.5 h-2.5 text-white" />
              </div>
            </Button>
            <Button
              variant="ghost"
              className="w-8 h-8 p-0 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-colors"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-8 h-8 p-0 text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-8 h-8 p-0 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Footer - Compact */}
        <div className="border-t border-gray-800/50 pt-3 flex-shrink-0">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">زبان:</span>
              <span className="text-rose-400 font-semibold">فارسی</span>
            </div>
            <div className="text-gray-600">
              © 2025 Gaming Hub
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-2 text-xs text-gray-500">
            <span className="hover:text-rose-400 cursor-pointer transition-colors">حریم خصوصی</span>
            <span className="hover:text-pink-400 cursor-pointer transition-colors">قوانین</span>
          </div>
        </div>
      </div>

      {/* Animated Background Overlays - Reduced */}
      <div className="absolute top-16 left-4 w-24 h-24 bg-rose-500/3 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-4 w-20 h-20 bg-pink-500/3 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Sidebar;