import React from 'react';
import { 
  BookOpen, 
  Stethoscope, 
  Syringe, 
  Award, 
  ChevronRight, 
  AlertCircle, 
  ClipboardList, 
  Calculator,
  ShieldCheck,
  Flame
} from 'lucide-react';

interface MainDashboardProps {
  onNavigate: (tab: string) => void;
}

export default function MainDashboard({ onNavigate }: MainDashboardProps) {
  const stats = [
    { label: "كورس ومقاطع علمية", value: "12", sub: "Chapters", icon: BookOpen, color: "text-indigo-650 bg-indigo-50 border-indigo-100/30", tab: "syllabus" },
    { label: "أطباء ومستشفيات", value: "23", sub: "Examiners", icon: Stethoscope, color: "text-indigo-650 bg-indigo-50 border-indigo-100/30", tab: "examiners" },
    { label: "آلات جراحية", value: "14", sub: "Instruments", icon: ClipboardList, color: "text-indigo-650 bg-indigo-50 border-indigo-100/30", tab: "instruments" },
    { label: "أدوية الطوارئ بروتوكولات", value: "9", sub: "Drugs", icon: Syringe, color: "text-indigo-650 bg-indigo-50 border-indigo-100/30", tab: "drugs" },
  ];

  const corePearls = [
    { title: "قاعدة الـ 10 لحقنة الكالسيوم جلوكونات", detail: "يعطى 10 مل بتركيز 10% ببطء شديد خلال 10 دقائق لمعالجة تسمم المغنيسيوم." },
    { title: "قسطرة فولي (محبوبة قسم الولادة)", detail: "تترك لمدة 10-14 يوماً بعد الولادة المتعسرة (Obstructed labor) لمنع حدوث النواصير (VVF)." },
    { title: "منظار كيسكو ثنائي الطرف", note: "الطرف العريض للنساء اللواتي أنجبن سابقاً، والطرف الضيق لتسهيل الفحص للبكريات." },
    { title: "ممنوع الفحص المهبلي باليد (Digital PV) نهائياً!", detail: "ممنوع تماماً في حالات النزيف (APH) حتى يتم استبعاد المشيمة المزاحة (Placenta Previa) عبر الأشعة لمنع نزيف قاتل." }
  ];

  return (
    <div className="space-y-6" id="dashboard-tab">
      {/* Hero Welcome banner - Clean Minimalism Edition */}
      <div className="relative overflow-hidden bg-gray-900 rounded-2xl p-6 md:p-8 text-white border border-gray-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-indigo-305 bg-indigo-900/50 rounded-md border border-indigo-800/80">
            <Flame className="w-3.5 h-3.5 animate-pulse text-indigo-400" />
            تحديث شامل للدفعتين الخامسة والسادسة
          </span>
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
            بوابة التميز لعملي النسائية والتوليد <br className="hidden sm:inline"/>
            <span className="text-indigo-400 font-sans font-medium text-lg block mt-1">Obstetrics Practical Course Hub</span>
          </h2>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
            منصة مخصصة لتنظيم وتسهيل محتوى الكتاب العملي المتقدم. تشمل شرح تفصيلي لـ 12 وحدة منهجية، الأدوات الجراحية، أدوية الطوارئ بجرعاتها الدقيقة، ومحاكي أسئلة OSCE مع تجميع تركيز دكاترة مستشفيات السبعين، الثورة، والجمهوري.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("syllabus")}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs transition-colors cursor-pointer"
            >
              ابدأ دراسة الوحدات
            </button>
            <button
              onClick={() => onNavigate("quiz")}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-750 text-gray-200 font-semibold rounded-lg text-xs border border-gray-700 transition-colors cursor-pointer"
            >
              محاكي أسئلة الـ OSCE
            </button>
          </div>
        </div>
      </div>

      {/* High-yield Clinical Statistics widgets */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div 
              key={idx}
              onClick={() => onNavigate(stat.tab)}
              className="group p-4 bg-white rounded-2xl border border-gray-250/60 hover:border-gray-300 transition-all cursor-pointer text-gray-900"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] text-gray-400 font-semibold">{stat.label}</p>
                  <h3 className="text-2xl font-extrabold text-gray-950 mt-1">{stat.value}</h3>
                  <span className="text-[9px] text-gray-400 font-mono tracking-wider block mt-0.5">{stat.sub}</span>
                </div>
                <div className={`p-2 rounded-lg border ${stat.color} transition-transform group-hover:scale-105`}>
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-end text-xs text-indigo-600 font-bold group-hover:translate-x-1 transition-transform">
                <span>استعرض الآن</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Feature Navigation splits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Quick Advice / High-yield Tips */}
        <div className="bg-white rounded-2xl border border-gray-250/60 p-5 space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <ClipboardList className="w-5 h-5 text-indigo-600" />
            <span className="font-extrabold text-gray-950 text-sm">درر سريرية وخطوط حمراء في الكورس (Must-Know Pearls)</span>
          </div>
          <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
            {corePearls.map((pearl, i) => (
              <div key={i} className="flex gap-3 items-start border-b border-dashed border-gray-100 last:border-0 pb-3 last:pb-0">
                <div className="p-1.5 rounded-full bg-indigo-50 text-indigo-600 mt-0.5 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-950">{pearl.title}</h5>
                  <p className="text-[11px] text-gray-600 leading-relaxed mt-1">{pearl.detail || pearl.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Calculators Promotion Box */}
        <div className="bg-white border border-gray-250/60 rounded-2xl p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
              <Calculator className="w-5 h-5 text-indigo-600" />
              <span className="font-extrabold text-gray-955 text-sm">حاسبات صيدلانية وسريرية مساعدة</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              تطبيق عملي ذكي لتبسيط أصعب الأسئلة السريرية والحسابية من المنهج:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-200/40">
                <ShieldCheck className="w-4 h-4 text-indigo-650" />
                <span>حاسبة معدل تنقيط المغنيسيوم تفصيلياً (Drops per minute).</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-200/40">
                <ShieldCheck className="w-4 h-4 text-indigo-655" />
                <span>مصنف درجات الصدمة التوليدية من الأولى للرابعة وتدابيرها الفورية.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-200/40">
                <ShieldCheck className="w-4 h-4 text-indigo-655" />
                <span>حساب عمر الحمل بالتاريخ الميلادي والهجري مع توضيح هامش الخطأ.</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigate("calculators")}
            className="w-full mt-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>افتح صندوق الحاسبات التوليدية</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>

      {/* Quick notice of exam success strategy */}
      <div className="p-4 bg-white rounded-2xl border border-gray-250/60 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
        <div className="text-xs text-gray-750 leading-relaxed space-y-1">
          <strong className="font-bold block text-gray-950">سر النجاح في امتحان عملي التوليد (OSCE):</strong>
          <span>
            لا تكتفِ بيقينك النظري فقط! تذكّر دائماً: ابدأ أي فحص توليدي سريري بالوقوف على اليد اليمنى للمريضة، الاستئذان والتعريف بنفسك، التأكد من التدفئة والغسيل، وتغطية خصوصية المريضة. احرص على ارتداء البالطو مغلقاً، والتدقيق الجيد على بروتوكولات الأدوية وحفظ جرعات الـ MgSO4 بالتفصيل.
          </span>
        </div>
      </div>
    </div>
  );
}

