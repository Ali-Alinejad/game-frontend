import React from 'react';
import { Button, Divider } from '@heroui/react';
import { OrbitControls, Stars, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-gradient-to-b from-black/10 via-purple-950/10 to-black/10 border-r border-purple-500/20 backdrop-blur-sm overflow-y-auto">
        <Canvas
          className="fixed inset-0 w-screen h-screen z-0 pointer-events-none"
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.4} color="#ff007f" />
          <Stars radius={50} depth={10} count={500} factor={3} fade speed={1.5} />
          <Sparkles count={200} scale={10} size={4} color="#ff007f" speed={1} />
          <OrbitControls enableZoom enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg transform rotate-12"></div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg transform -rotate-12 opacity-70"></div>
            </div>
            <div>
              <div className="text-white font-bold text-lg tracking-wide">PERSIAN</div>
              <div className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-bold text-lg">GAMING</div>
              <div className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold text-sm">NEWS HUB</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 mb-8">
          <Button 
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
            startContent={<span className="text-lg">👤</span>}
          >
            ورود
          </Button>
          
          <Button 
            variant="flat"
            className="w-full justify-start text-purple-400 bg-purple-500/20 hover:bg-purple-500/30"
            startContent={<span className="text-lg">🏠</span>}
          >
            خانه
          </Button>
          
          <Button 
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
            startContent={<span className="text-lg">🛒</span>}
          >
            فروشگاه
          </Button>
          
          <Button 
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-pink-400 hover:bg-pink-500/10"
            startContent={<span className="text-lg">📅</span>}
          >
            آینده
          </Button>
          
          <Button 
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-green-500/10"
            startContent={<span className="text-lg">💬</span>}
          >
            دیسکورد
          </Button>
        </nav>

        <Divider className="bg-white/10 mb-6" />

        {/* App Store Buttons */}
        <div className="space-y-4 mb-8">
          <Button 
            variant="solid"
            className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800"
            startContent={<span className="text-xl">🍎</span>}
          >
            <div className="text-right">
              <div className="text-xs text-gray-400">دریافت از</div>
              <div className="text-white font-semibold">App Store</div>
            </div>
          </Button>
          
          <Button 
            variant="solid"
            className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800"
            startContent={<span className="text-xl">📱</span>}
          >
            <div className="text-right">
              <div className="text-xs text-gray-400">دریافت از</div>
              <div className="text-white font-semibold">Google Play</div>
            </div>
          </Button>
        </div>

        <Divider className="bg-white/10 mb-6" />

        {/* Social Links */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <Button 
            isIconOnly
            variant="solid"
            className="w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white"
          >
            f
          </Button>
          <Button 
            isIconOnly
            variant="solid" 
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 text-white"
          >
            𝕏
          </Button>
          <Button 
            isIconOnly
            variant="solid"
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            📷
          </Button>
          <Button 
            isIconOnly
            variant="solid"
            className="w-12 h-12 bg-purple-600 hover:bg-purple-500 text-white"
          >
            💬
          </Button>
          <Button 
            isIconOnly
            variant="solid"
            className="w-12 h-12 bg-red-600 hover:bg-red-500 text-white"
          >
            ▶️
          </Button>
          <Button 
            isIconOnly
            variant="solid"
            className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
          >
            📡
          </Button>
        </div>

        <Divider className="bg-white/10 mb-6" />

        {/* Footer Links */}
        <div className="text-xs text-gray-400 space-y-2">
          <div className="hover:text-purple-400 cursor-pointer transition-colors">Privacy policies</div>
          <div className="hover:text-purple-400 cursor-pointer transition-colors">Terms & Conditions</div>
          <div className="hover:text-purple-400 cursor-pointer transition-colors">Community Guidelines</div>
          
          <div className="mt-6 flex items-center space-x-2">
            <span>🌐</span>
            <span className="text-purple-400">فارسی</span>
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute top-20 left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default Sidebar;