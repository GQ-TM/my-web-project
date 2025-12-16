import React from 'react';
import { Lightbulb, BookOpen, Target, Cpu } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12 -mt-10 relative z-20">
      <div className="flex flex-col lg:flex-row items-stretch gap-10">
        
        {/* Main Content Card */}
        <div className="flex-1 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-royal-800 text-white rounded-2xl shadow-lg">
              <Cpu size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">مفهوم الذكاء الاصطناعي</h2>
          </div>
          
          <p className="text-lg text-slate-600 leading-8 text-justify mb-8">
            الذكاء الاصطناعي في التعليم هو استخدام الخوارزميات الذكية لمحاكاة القدرات البشرية في الفهم والتحليل، بهدف <span className="font-bold text-royal-800">تحسين العملية التعليمية</span>. 
            <br /><br />
            هو ليس مجرد أداة تقنية، بل هو مساعد ذكي يوفر بيئة تعليمية مخصصة، ويساعد المعلمين في التركيز على الجوانب الإبداعية والتربوية بدلاً من المهام الروتينية.
          </p>

          <div className="bg-blue-50 border-r-4 border-royal-800 p-6 rounded-xl">
             <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-royal-900">
               <Target size={24} className="text-gold-600" />
               أبرز المميزات للطالب:
             </h3>
             <ul className="grid md:grid-cols-2 gap-4">
               <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <span className="text-slate-700">تصحيح فوري للاختبارات</span>
               </li>
               <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <span className="text-slate-700">مسارات تعلم مخصصة</span>
               </li>
               <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <span className="text-slate-700">دعم اللغات الأجنبية</span>
               </li>
               <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <span className="text-slate-700">مساعد ذكي 24/7</span>
               </li>
             </ul>
          </div>
        </div>

        {/* Image Card */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-xl group">
             <div className="absolute inset-0 bg-royal-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="طلاب يستخدمون التكنولوجيا" 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
              <p className="text-white font-medium text-lg">"التعليم هو جواز السفر للمستقبل"</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-royal-800 to-royal-900 p-8 rounded-3xl text-white shadow-xl flex-1 flex flex-col justify-center text-center">
            <BookOpen size={40} className="mx-auto mb-4 text-gold-500" />
            <h3 className="text-xl font-bold mb-2">رؤية 2030</h3>
            <p className="text-blue-100 text-sm">
              يساهم الذكاء الاصطناعي في تحقيق رؤية المملكة لتطوير التعليم وبناء مجتمع رقمي حيوي.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Introduction;