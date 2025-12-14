import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const handleConsultationClick = () => {
    // In a real scenario, this would link to LINE
    window.open('https://lin.ee/EwSR70X', '_blank');
  };

  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center bg-teal-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="皮拉提斯與團體運動空間" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        {/* Updated Gradient: Warmer and Deep Teal */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-slate-900/50 to-teal-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl flex flex-col items-center">
        {/* H1 Headline */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-wide shadow-sm drop-shadow-lg">
          高雄火車站站前<br />
          <span className="text-orange-400">喚醒深層核心</span><br />
          皮拉提斯 ＆ 團體課程
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-2xl mb-10 text-gray-100 font-light leading-relaxed">
          下班不用趕路，走路即達的運動空間。<br className="block md:hidden" />
          透過<span className="font-bold text-white border-b-2 border-orange-400 mx-1">精緻小班制</span>與專業指導，找回身體的控制權。
        </p>
        
        {/* CTA Button - Updated to Orange for Action */}
        <button 
          onClick={handleConsultationClick} 
          className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl md:text-2xl py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1 animate-pulse-custom"
        >
          <MessageCircle className="mr-2 w-6 h-6 md:w-8 md:h-8" />
          查看課表與方案
        </button>
      </div>
    </header>
  );
};

export default Hero;