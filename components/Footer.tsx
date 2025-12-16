import React from 'react';
import { GraduationCap, Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t-4 border-gold-600">
      <div className="container mx-auto px-6 text-center">
        
        <div className="max-w-3xl mx-auto mb-10 p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50">
          <h3 className="text-white font-bold text-2xl mb-4">كلمة الختام</h3>
          <p className="text-lg leading-relaxed text-slate-300 font-light">
            إن دمج الذكاء الاصطناعي في التعليم ليس ترفاً، بل هو خطوة ضرورية لبناء جيل مبتكر. 
            نتمنى أن يكون هذا العرض قد قدم لكم فائدة ورؤية واضحة حول مستقبل التعليم.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-3 text-white bg-slate-800 px-6 py-2 rounded-full shadow-lg">
                <GraduationCap size={24} className="text-blue-400" />
                <span className="font-bold text-lg">مشروع مادة الحاسب وتقنية المعلومات</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6 text-sm text-slate-500">
               <span className="flex items-center gap-1 hover:text-white transition-colors">
                 <Code2 size={14} /> تصميم وتطوير الطالب
               </span>
               <span className="hidden md:inline">•</span>
               <span className="flex items-center gap-1 hover:text-white transition-colors">
                  تم الإعداد بكل <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
               </span>
            </div>
            
            <p className="text-xs text-slate-600 mt-4 font-mono">© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;