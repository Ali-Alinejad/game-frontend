import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Text3D, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Search, LogIn, LogOut, Gamepad2, Newspaper, Trophy, Calendar, Flame, Star, Home, ArrowDown, Play, Users, MessageCircle, TrendingUp, Zap, Globe, Menu, X, ChevronRight } from 'lucide-react';
import path from 'path';
import Link from 'next/link';



// Three.js Components
const AnimatedSphere = ({ position, color, size = 1 }) => {
  const meshRef = useRef();
  const { viewport } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} args={[size, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ParticleField = () => {
  const pointsRef = useRef();
  const particleCount = 2000;
  
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ef4444" transparent opacity={0.6} />
    </points>
  );
};

const Scene3D = ({ scrollY }) => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollY * 0.001;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <ParticleField />
      <AnimatedSphere position={[-4, 0, -2]} color="#ef4444" size={0.8} />
      <AnimatedSphere position={[4, -2, -1]} color="#f97316" size={0.6} />
      <AnimatedSphere position={[0, 3, -3]} color="#ec4899" size={1.2} />
      <AnimatedSphere position={[-2, -3, 1]} color="#8b5cf6" size={0.4} />
      <AnimatedSphere position={[3, 2, 2]} color="#06b6d4" size={0.7} />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
    </group>
  );
};

// Enhanced Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, delay = 0, gradient }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: -15 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
    whileHover={{ 
      scale: 1.05, 
      y: -10,
      rotateX: 5,
      transition: { duration: 0.3 }
    }}
    className="relative group cursor-pointer perspective-1000"
  >
    {/* Glow effect */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-30 scale-90 group-hover:scale-110`} />
    
    {/* Card content */}
    <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 group-hover:border-rose-500/50 transition-all duration-500 transform-gpu">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-red-500 transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
      
      {/* Hover arrow */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute bottom-4 right-4 text-rose-400"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.div>
    </div>
  </motion.div>
);

// Game Card Component
const GameCard = ({ title, genre, image, rating, players }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.98 }}
    className="relative bg-zinc-900/80 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-rose-500/50 transition-all duration-300 group cursor-pointer"
  >
    <div className="aspect-video bg-gradient-to-br from-rose-500/20 to-red-600/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-4 left-4 z-10">
        <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
        <p className="text-gray-300 text-sm">{genre}</p>
      </div>
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
        <div className="flex items-center text-yellow-400 text-sm">
          <Star className="w-4 h-4 mr-1 fill-current" />
          {rating}
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-400 text-sm">
          <Users className="w-4 h-4 mr-2" />
          {players} playing
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-rose-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-rose-500/25"
        >
          Play Now
        </motion.button>
      </div>
    </div>
  </motion.div>
);

// Main Gaming Hub Component
const GamingHub = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [activeItem, setActiveItem] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });

  // Track scroll and mouse position
  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', updateScrollY);
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('scroll', updateScrollY);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ name: "Ali Alinejad", avatar: "https://i.pravatar.cc/150?u=ali" });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleNavigation = (itemId: React.SetStateAction<string>) => {
    setActiveItem(itemId);
    // In a real app, use your router here
    // router.push(routes[itemId]);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, gradient: 'from-rose-500 to-red-600',path: '/' },
    { id: 'games', label: 'Games', icon: Gamepad2, gradient: 'from-purple-500 to-pink-600' , path: '/Pages/Games' },
    { id: 'news', label: 'News', icon: Newspaper, gradient: 'from-blue-500 to-cyan-600' , path: '/News'},
    { id: 'reviews', label: 'Reviews', icon: Star, gradient: 'from-yellow-500 to-orange-600' ,  path: '/Reviews'},
    { id: 'community', label: 'Community', icon: Users, gradient: 'from-green-500 to-emerald-600' ,path: '/Community' },
    { id: 'trending', label: 'Trending', icon: TrendingUp, gradient: 'from-red-500 to-pink-600',path: '/Trending' },
  ];

  const features = [
    {
      icon: Gamepad2,
      title: "Next-Gen Gaming",
      description: "Experience cutting-edge games with ray-tracing, 4K graphics, and immersive audio that brings virtual worlds to life.",
      gradient: "from-rose-500 to-red-600"
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with over 50 million gamers worldwide. Join clans, participate in events, and forge lasting friendships.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Trophy,
      title: "Epic Tournaments",
      description: "Compete in massive tournaments with prize pools exceeding $1M. Rise through ranks and become a legend.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience zero-lag gaming with our global CDN and advanced server infrastructure across 100+ regions.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Play anywhere, anytime. Seamless cross-platform gaming across PC, mobile, and console with cloud saves.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: MessageCircle,
      title: "Live Streaming",
      description: "Stream your gameplay to millions of viewers. Advanced streaming tools and monetization options included.",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const trendingGames = [
    { title: "Cyber Strike 2077", genre: "FPS", rating: 4.8, players: "1.2M" },
    { title: "Fantasy Realms", genre: "RPG", rating: 4.9, players: "800K" },
    { title: "Speed Legends", genre: "Racing", rating: 4.7, players: "650K" },
    { title: "Battle Royale X", genre: "Battle Royale", rating: 4.6, players: "2.1M" }
  ];

  const isScrolled = scrollY > 50;

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden relative">
      {/* Mouse follower */}
      <motion.div
        className="fixed w-6 h-6 bg-rose-500/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene3D scrollY={scrollY} />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>

      {/* Enhanced Header */}
      <AnimatePresence>
        <motion.header
          className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
            isScrolled 
              ? 'backdrop-blur-2xl bg-zinc-950/95 border-b border-zinc-800/50 shadow-2xl' 
              : 'backdrop-blur-sm bg-zinc-950/20'
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={`transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}>
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8">
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavigation('home')}
              >
                <div className="relative">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl shadow-2xl shadow-rose-500/50"
                    animate={{ 
                      boxShadow: isScrolled 
                        ? "0 10px 30px rgba(244, 63, 94, 0.4)" 
                        : "0 20px 50px rgba(244, 63, 94, 0.7)"
                    }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>
                <div className="flex flex-col">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 font-bold text-xl">
                    NEXUS GAMING
                  </span>
                  {!isScrolled && (
                    <motion.span 
                      className="text-xs text-gray-400 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Next-Gen Platform
                    </motion.span>
                  )}
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.nav 
                className="hidden lg:flex items-center space-x-2 bg-zinc-800/40 backdrop-blur-xl rounded-full px-3 py-2 border border-zinc-700/50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;
                  return (
                       <Link href={item.path} passHref>
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavigation(item.id)}
                      className={`relative flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm
                        ${isActive 
                          ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg shadow-rose-500/40` 
                          : "text-gray-300 hover:text-white hover:bg-zinc-700/60"
                        }
                      `}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </motion.button>
                    </Link>
                  );
                })}
              </motion.nav>

              {/* Right Section */}
              <div className="flex items-center space-x-4">
                {/* Search */}
                <motion.div 
                  className="relative hidden md:block"
                  whileHover={{ scale: 1.02 }}
                >
                  <input 
                    type="text" 
                    placeholder="Search games..." 
                    className={`bg-zinc-800/60 text-white placeholder-gray-400 rounded-full border border-zinc-700/50 focus:border-rose-400/50 focus:outline-none focus:ring-2 focus:ring-rose-400/20 transition-all duration-300 ${
                      isScrolled ? 'py-2 px-4 text-sm w-40' : 'py-2.5 px-5 text-base w-48'
                    }`}
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 text-gray-300 hover:text-white"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>

                {/* User Auth */}
                {isLoggedIn && user ? (
                  <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
                    <img 
                      src={user?.avatar || "https://i.pravatar.cc/150?u=default"}
                      alt="User Avatar" 
                      className="w-10 h-10 rounded-full border-2 border-rose-400/50 cursor-pointer" 
                    />
                    <button 
                      onClick={handleLogout}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <LogOut className="w-5 h-5" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(244, 63, 94, 0.3)" }} 
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogin}
                    className={`bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-rose-500/40 transition-all duration-300 flex items-center ${
                      isScrolled ? 'text-sm py-2 px-4' : 'text-base py-2.5 px-5'
                    }`}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </motion.header>
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-20 left-0 right-0 z-30 lg:hidden bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800/50"
          >
            <div className="p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02, x: 10 }}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-r ${item.gradient} text-white` 
                        : "text-gray-300 hover:text-white hover:bg-zinc-800/60"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4 z-10"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <motion.div
              className="text-5xl md:text-5xl lg:text-[8rem] font-black leading-tight"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-red-700"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                NEXUS
              </motion.span>
              <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 via-pink-800 to-red-500"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                GAMING
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Enter the future of gaming. Experience unlimited possibilities with AI-powered matchmaking, 
              photorealistic graphics, and a community of millions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(244, 63, 94, 0.5)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('games')}
                className="group relative px-12 py-4 bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold text-xl rounded-full shadow-2xl shadow-rose-500/50 overflow-hidden"
              >
                <motion.span 
                  className="relative z-10 flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <Play className="w-6 h-6 mr-3" />
                  Enter Nexus
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 border-2 border-white/20 text-white font-semibold text-xl rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 z-20"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-3 font-medium">Discover More</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Trending Games Section */}
      <section className="relative py-32 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
              🔥 Trending Now
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The hottest games everyone's playing right now
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingGames.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GameCard {...game} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
              Why Choose Nexus?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience gaming like never before with cutting-edge technology and an unmatched community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-4 ">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Revolution
            </h2>
            <p className="text-xl text-gray-300">
              Numbers that speak for our incredible community
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50M+", label: "Active Players", icon: Users, gradient: "from-green-500 to-emerald-600" },
              { number: "10K+", label: "Games Library", icon: Gamepad2, gradient: "from-purple-500 to-pink-600" },
              { number: "150+", label: "Countries", icon: Globe, gradient: "from-blue-500 to-cyan-600" },
              { number: "$100M+", label: "Prize Pools", icon: Trophy, gradient: "from-yellow-500 to-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-4">
                  <motion.div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2"
                  whileInView={{ scale: [0.5, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-32 px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative  backdrop-blur-xl rounded-3xl p-12 border border-zinc-700/50 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 " />
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #ef4444 2px, transparent 2px)`,
                backgroundSize: '50px 50px'
              }} />
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Stay in the Game
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get exclusive updates, early access to new games, and special offers delivered to your inbox
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4  text-white placeholder-gray-400 rounded-full border border-zinc-700/50 focus:border-rose-400/50 focus:outline-none focus:ring-2 focus:ring-rose-400/20 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold rounded-full shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-2xl rounded-3xl p-16 border border-zinc-700/50 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-rose-500 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-500 to-cyan-400 mb-6"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Ready to Ascend?
              </motion.h2>
              
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join millions of players in the ultimate gaming experience. 
                Your legendary journey starts with a single click.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 30px 60px rgba(244, 63, 94, 0.4)",
                    y: -8
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation('games')}
                  className="group relative px-16 py-5 bg-gradient-to-r from-rose-500 via-red-600 to-rose-500 text-white font-bold text-xl rounded-full shadow-2xl shadow-rose-500/50 overflow-hidden"
                >
                  <motion.span 
                    className="relative z-10 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <Zap className="w-6 h-6 mr-3" />
                    Enter Nexus Now
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 border-2 border-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-xl rounded-full backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Join Community
                  </span>
                </motion.button>
              </div>
              
              <motion.p
                className="text-gray-400 text-sm mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Free to play • No credit card required • Instant access
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-zinc-900 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 font-bold text-xl">
                  NEXUS GAMING
                </span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                The ultimate gaming platform where legends are born. 
                Experience next-generation gaming with unparalleled performance and community.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Gaming</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-rose-400 transition-colors">Browse Games</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Tournaments</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Leaderboards</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Achievements</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-rose-400 transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nexus Gaming. All rights reserved. Built with ❤️ for gamers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamingHub;