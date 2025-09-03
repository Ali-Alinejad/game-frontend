import React from 'react';
import { Button, Divider } from '@heroui/react';
import { OrbitControls, Stars, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const Sidebar: React.FC = () => {
  return (
    <div className="fixed -left-2    bg-black  w-55  h-full  border-r border-pink-600/40   backdrop-blur-sm overflow-y-hidden    
    "
    >
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
      <div className="p-4">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-700 to-rose-800 rounded-lg transform rotate-12"></div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-400 rounded-lg transform -rotate-12 opacity-70"></div>
            </div>
            <div>
              <div className="text-transparent bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text font-bold text-lg">GAMING</div>
              <div className="text-transparent bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text font-bold text-sm">NEWS HUB</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 mb-8 flex flex-col ">
          <Button 
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-rose-400  hover:bg-amber-500/10"
          >
            DASHBOARD
          </Button>
          
          <Button 
            variant="ghost"
            className="w-full justify-start text-rose-400  hover:text-rose-500/30"
          >
HOME
          </Button>
          
          <Button 
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
          >
            STORE
          </Button>
          
          <Button 
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-pink-400 hover:bg-pink-500/10"
          >
            COMING
          </Button>
          
          <Button 
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-green-500/10"
          >
            DISCORD
          </Button>
        </nav>

        <Divider className="bg-white/10 mb-6" />

        {/* App Store Buttons */}
        <div className="space-y-4 mb-8">
          <Button 
            variant="solid"
            className="w-full  text-white hover:from-gray-700 hover:to-gray-800"
          >
            <div className="">
              <div className="text-xs text-gray-400">دریافت از</div>
              <div className="text-white font-semibold">App Store</div>
            </div>
          </Button>
          
          <Button 
            variant="solid"
            className="w-full  text-white hover:from-gray-700 hover:to-gray-800"
          >
            <div className="">
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
            className="w-12 h-12 hover:scale-125 duration-300 text-white"
          >
            f
          </Button>
          <Button 
            isIconOnly
            variant="solid" 
                 className="w-12 h-12 hover:scale-125 duration-300 text-white"

          >
            Tell
          </Button>
          <Button 
            isIconOnly
            variant="solid"
                  className="w-12 h-12 hover:scale-125 duration-300 text-white"

          >
            insta
          </Button>

  
        </div>

        <Divider className="bg-white/10 mb-6" />

        {/* Footer Links */}
        <div className="text-xs text-gray-400 space-y-2">
          <div className="hover:text-purple-400 cursor-pointer transition-colors">Privacy policies</div>
          <div className="hover:text-purple-400 cursor-pointer transition-colors">Terms & Conditions</div>
          <div className="hover:text-purple-400 cursor-pointer transition-colors">Community Guidelines</div>
          
          <div className="mt-6 flex items-center space-x-2">
            <span>Lang</span>
            <span className="text-rose-400">فارسی</span>
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      {/* <div className="absolute top-20 left-4 w-50 h-50 overflow-hidden  bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-90 right-4 w-50 h-50 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-4 w-50 h-50 bg-orange-500/10 rounded-full blur-xl"></div> */}
    </div>
  );
};

export default Sidebar;