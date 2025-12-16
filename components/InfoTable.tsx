import React from 'react';
import { TableData } from '../types';
import { CheckCircle2, Monitor, LayoutGrid, Zap } from 'lucide-react';

const tableContent: TableData[] = [
  {
    benefit: "التعلم الشخصي (Personalized Learning)",
    usage: "تخصيص المحتوى الدراسي بناءً على نقاط قوة وضعف الطالب.",
    example: "أنظمة التعلم الذكية مثل Knewton."
  },
  {
    benefit: "توفير وقت المعلم",
    usage: "أتمتة المهام الإدارية وتصحيح الاختبارات الموضوعية.",
    example: "التصحيح التلقائي في نماذج Microsoft."
  },
  {
    benefit: "الدعم المتاح 24/7",
    usage: "روبوتات الدردشة (Chatbots) للإجابة على الأسئلة في أي وقت.",
    example: "بوتات الجامعات للرد على الاستفسارات."
  },
  {
    benefit: "تعزيز تعلم اللغات",
    usage: "ممارسة المحادثة وتصحيح النطق بشكل فوري ودقيق.",
    example: "تطبيق Duolingo الذكي."
  },
  {
    benefit: "تحليل الأداء (Analytics)",
    usage: "التنبؤ بمستويات الطلاب وتحديد من يحتاج لدعم إضافي.",
    example: "لوحات بيانات منصات إدارة التعلم."
  }
];

const InfoTable: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white shadow-md mb-4 text-gold-600 border border-slate-100">
             <LayoutGrid size={28} />
          </div>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-3">مقارنة شاملة</h2>
          <div className="w-16 h-1.5 bg-royal-800 mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">
            جدول يوضح الفوائد الرئيسية واستخداماتها العملية في الواقع التعليمي
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-right min-w-[800px]">
              <thead>
                <tr className="bg-royal-900 text-white">
                  <th className="p-6 font-bold text-lg w-1/3 border-b-4 border-gold-500">
                    <div className="flex items-center gap-3">
                      <Zap size={20} className="text-gold-500" />
                      الفائدة
                    </div>
                  </th>
                  <th className="p-6 font-bold text-lg w-1/3 border-b-4 border-gold-500">الاستخدامات</th>
                  <th className="p-6 font-bold text-lg w-1/3 border-b-4 border-gold-500">أمثلة تطبيقية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableContent.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`group hover:bg-blue-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                  >
                    <td className="p-6 align-top">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-slate-800 text-lg group-hover:text-royal-800 transition-colors">{row.benefit}</span>
                      </div>
                    </td>
                    <td className="p-6 text-slate-600 align-top leading-relaxed group-hover:text-slate-900">
                      {row.usage}
                    </td>
                    <td className="p-6 align-top">
                      <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg w-fit group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-slate-200">
                         <Monitor size={16} className="text-royal-800" />
                         <span className="text-sm font-semibold text-slate-700">{row.example}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoTable;