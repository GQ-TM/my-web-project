import React from 'react';
import { Bot, Sparkles, BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-bl from-slate-900 via-royal-900 to-blue-900 text-white overflow-hidden shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 pt-24 pb-32 relative z-10 flex flex-col items-center text-center">
        {/* Icon Badge */}
        <div className="bg-white/10 p-4 rounded-2xl mb-8 backdrop-blur-md border border-white/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <BrainCircuit size={56} className="text-blue-200" />
        </div>
        
        {/* Titles */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-sm">
          الذكاء الاصطناعي <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">في التعليم</span>
        </h1>
        
        <div className="w-24 h-1 bg-gold-500 rounded-full mb-8 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>

        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mb-10 font-light leading-relaxed">
          نستكشف كيف تُعيد التكنولوجيا تشكيل مستقبل الفصول الدراسية وتصنع تجربة تعليمية مخصصة لكل طالب.
        </p>

        {/* Project Tag */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md shadow-lg hover:bg-white/10 transition-colors cursor-default">
          <Sparkles size={20} className="text-gold-500" />
          <span className="text-base font-medium tracking-wide">مشروع مادة الحاسب وتقنية المعلومات</span>
        </div>
      </div>
      
      {/* Modern Curvy Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f8fafc" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;