import React, { useState } from 'react';
import MainDashboard from './components/MainDashboard';
import CourseViewer from './components/CourseViewer';
import DoctorsHub from './components/DoctorsHub';
import ClinicalCalculators from './components/ClinicalCalculators';
import InstrumentShowcase from './components/InstrumentShowcase';
import PracticeQuiz from './components/PracticeQuiz';
import ClinicalDrugs from './components/ClinicalDrugs';

import { 
  Home, 
  BookOpen, 
  Stethoscope, 
  ClipboardList, 
  Syringe, 
  Calculator, 
  HelpCircle,
  Award,
  BookMarked,
  Layers,
  Heart
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab ] = useState<string>('home');

  const navigationItems = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'syllabus', label: 'الوحدات الدراسية', icon: BookOpen },
    { id: 'examiners', label: 'الممتحنين والمستشفيات', icon: Stethoscope },
    { id: 'instruments', label: 'الأدوات الجراحية', icon: ClipboardList },
    { id: 'drugs', label: 'صيدلية الطوارئ', icon: Syringe },
    { id: 'calculators', label: 'الحاسبات التوليدية', icon: Calculator },
    { id: 'quiz', label: 'أسئلة ومحاكاة OSCE', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7F6] text-gray-900 flex flex-col font-sans selection:bg-indigo-100 antialiased" dir="rtl">
      {/* Dynamic Global Notification Ticker - Clean Minimalism */}
      <div className="bg-white py-2 border-b border-gray-250 select-none">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs gap-1 sm:gap-4 font-bold text-gray-700">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping shrink-0"></span>
            <span className="text-gray-900">بوابة التحضير لاختبار OSCE العملي المتقدم</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400 font-mono">
            <span>الدفعتين الخامسة والسادسة</span>
            <span>قروب B • السبعين، الثورة، الجمهوري</span>
          </div>
        </div>
      </div>

      {/* Primary Top Header bar */}
      <header className="bg-white border-b border-gray-250 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight leading-none">
                بوابة التوليد السريري المتقدم
              </h1>
              <span className="text-[9px] text-gray-400 font-mono tracking-wider font-semibold block mt-0.5 uppercase">
                Obstetrics Practical Course Hub
              </span>
            </div>
          </div>

          {/* Quick Stats Summary badges */}
          <div className="flex items-center gap-2.5 text-[10px] font-mono font-bold text-gray-650 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-250/60 text-gray-600">
            <span>12 Modules</span>
            <span className="text-gray-300">•</span>
            <span>14 Instruments</span>
            <span className="text-gray-300">•</span>
            <span>9 Emergency Drugs</span>
            <span className="text-gray-300">•</span>
            <span>23 Examiners</span>
          </div>
        </div>
      </header>

      {/* Primary Responsive Navigation Menu tabs */}
      <div className="bg-white border-b border-gray-250 sticky top-[57px] sm:top-[63px] z-30 overflow-x-auto select-none no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 flex justify-start sm:justify-center items-center py-1 gap-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all shrink-0 select-none cursor-pointer ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-xs' 
                    : 'text-gray-600 hover:text-gray-905 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main content display blocks */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <MainDashboard onNavigate={(tab) => setActiveTab(tab)} />
        )}
        {activeTab === 'syllabus' && (
          <CourseViewer />
        )}
        {activeTab === 'examiners' && (
          <DoctorsHub />
        )}
        {activeTab === 'instruments' && (
          <InstrumentShowcase />
        )}
        {activeTab === 'drugs' && (
          <ClinicalDrugs />
        )}
        {activeTab === 'calculators' && (
          <ClinicalCalculators />
        )}
        {activeTab === 'quiz' && (
          <PracticeQuiz />
        )}
      </main>

      {/* Footer credits info */}
      <footer className="bg-white border-t border-gray-250 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
          <div className="flex justify-center items-center gap-1.5 text-xs text-gray-500 font-semibold">
            <Heart className="w-4 h-4 text-indigo-500 animate-pulse" />
            <span>إعداد الدفعة السابعة: دلال العواضي • ميلاد المؤيد • سارة سارية • نهى الحريبي</span>
          </div>
          <p className="text-[9px] text-gray-400 font-mono tracking-wide uppercase">
            Obstetrics Practical Course Hub © 2026. All medical protocols mapped directly to university syllabus requirements.
          </p>
        </div>
      </footer>
    </div>
  );
}
