import React from 'react';
import { ExternalLink, Globe, BookMarked, GraduationCap, ArrowUpLeft } from 'lucide-react';
import { ResourceLink } from '../types';

const resources: ResourceLink[] = [
  {
    title: "منصة مدرستي",
    url: "https://schools.madrasati.sa/",
    description: "المنصة الوطنية الرائدة للتعليم الإلكتروني في المملكة."
  },
  {
    title: "الهيئة السعودية (SDAIA)",
    url: "https://sdaia.gov.sa/",
    description: "مرجعك الأول لكل ما يخص البيانات والذكاء الاصطناعي."
  },
  {
    title: "أكاديمية خان (Khan Academy)",
    url: "https://ar.khanacademy.org/",
    description: "دروس عالمية مجانية تدعم التعلم الذاتي."
  }
];

const ExternalResources: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16">
       <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
         <div>
            <h2 className="text-3xl font-extrabold text-slate-800 border-r-8 border-gold-500 pr-4">مصادر إثرائية</h2>
            <p className="text-slate-500 mt-2 mr-6 text-lg">روابط مختارة لزيادة المعرفة والاطلاع</p>
         </div>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {resources.map((res, idx) => (
           <a 
            key={idx} 
            href={res.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start overflow-hidden"
           >
             {/* Decorative blob on hover */}
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300 z-0"></div>

             <div className="relative z-10 w-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-royal-50 text-royal-800 rounded-xl group-hover:bg-royal-800 group-hover:text-white transition-colors duration-300">
                      {idx === 0 ? <GraduationCap size={28} /> : idx === 1 ? <Globe size={28} /> : <BookMarked size={28} />}
                   </div>
                   <ArrowUpLeft size={20} className="text-slate-300 group-hover:text-gold-500 transition-colors" />
                </div>
                
                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-royal-800 transition-colors">
                  {res.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {res.description}
                </p>
             </div>
           </a>
         ))}
       </div>
    </section>
  );
};

export default ExternalResources;