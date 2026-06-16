import React, { useState, useMemo } from 'react';
import { doctorsData } from '../data/doctorsData';
import { Doctor } from '../types';
import { 
  Search, 
  MapPin, 
  AlertCircle,
  Lightbulb, 
  Smile, 
  Award,
  ClipboardList,
  Sparkles,
  CheckCircle2,
  Filter
} from 'lucide-react';

export default function DoctorsHub() {
  const [selectedHospital, setSelectedHospital] = useState<'All' | 'Al-Sabeen' | 'Al-Thawra' | 'Al-Jumhouri'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDoctorId, setSelectedDoctorId] = useState<number>(1);

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter(doc => {
      const matchesHospital = selectedHospital === 'All' || doc.hospital === selectedHospital;
      const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            doc.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            doc.focusPoints.some(pt => pt.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            doc.advice.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesHospital && matchesSearch;
    });
  }, [selectedHospital, searchQuery]);

  const activeDoctor = useMemo(() => {
    return doctorsData.find(doc => doc.id === selectedDoctorId) || doctorsData[0];
  }, [selectedDoctorId]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="doctors-tab">
      
      {/* Sidebar List and Filters */}
      <div className="lg:col-span-5 space-y-4">
        
        {/* Filters Widget */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <Filter className="w-4 h-4 text-indigo-600" />
            <span>تصفية حسب المستشفيات والاسم</span>
          </div>
          
          <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-lg">
            {(['All', 'Al-Sabeen', 'Al-Thawra', 'Al-Jumhouri'] as const).map((hosp) => (
              <button
                key={hosp}
                onClick={() => setSelectedHospital(hosp)}
                className={`py-1.5 text-[10px] sm:text-xs font-bold rounded-md transition-all select-none cursor-pointer ${
                  selectedHospital === hosp 
                    ? 'bg-indigo-600 text-white shadow-xs' 
                    : 'text-slate-650 hover:bg-slate-200/60'
                }`}
              >
                {hosp === 'All' ? 'الكل' : hosp === 'Al-Sabeen' ? 'السبعين' : hosp === 'Al-Thawra' ? 'الثورة' : 'الجمهوري'}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="ابحث باسم الدكتور أو موضوع التركيز..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-800"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Doctor List */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 p-3 border-b border-slate-100 flex justify-between items-center">
            <span className="font-bold text-xs text-indigo-950 flex items-center gap-1.5">
              <Smile className="w-4 h-4 text-indigo-600 animate-bounce" />
              اختصاصيو الامتحان المتواجدين ({filteredDoctors.length})
            </span>
          </div>
          
          <div className="divide-y divide-slate-100 max-h-[460px] overflow-y-auto pr-1">
            {filteredDoctors.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-xs">
                لا توجد نتائج مطابقة لمؤشرات بحثك. جرب اسماً آخر
              </div>
            ) : (
              filteredDoctors.map((doc) => {
                const isActive = doc.id === selectedDoctorId;
                return (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDoctorId(doc.id)}
                    className={`w-full text-right p-4 transition-colors flex items-start justify-between gap-3 select-none hover:bg-slate-50 border-r-4 cursor-pointer ${
                      isActive ? 'bg-indigo-50/40 border-indigo-600' : 'border-transparent'
                    }`}
                  >
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-900 block leading-tight">
                        {doc.name}
                      </h4>
                      <p className="text-[10px] text-slate-505 font-medium flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {doc.hospital === 'Al-Sabeen' ? 'مستشفى السبعين للأمومة' : doc.hospital === 'Al-Thawra' ? 'مستشفى الثورة العام' : 'مستشفى الجمهوري التعليمي'}
                      </p>
                    </div>
                    <span className="text-[10px] text-indigo-650 bg-indigo-50 px-2 py-0.5 rounded-sm font-semibold shrink-0">
                      تفاصيل
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>

      </div>

      {/* Main Focus Detail Display */}
      {activeDoctor && (
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 md:p-6 space-y-6">
          
          {/* Header */}
          <div className="border-b pb-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-sm font-bold uppercase">
                EXAMINER PROFILE
              </span>
              <span className="text-[10px] font-bold text-slate-500 px-2 py-0.5 bg-slate-100 rounded-sm flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {activeDoctor.hospital} Hospital
              </span>
            </div>
            
            <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
              {activeDoctor.name}
            </h2>
            <p className="text-xs text-slate-500 font-medium">{activeDoctor.role}</p>
          </div>

          {/* Personality Box */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-150 flex gap-3 items-start">
            <Smile className="w-5 h-5 text-indigo-550 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-650 leading-relaxed font-sans">
              <strong className="block text-slate-800 font-bold mb-0.5">الأسلوب وإدارة المقابلة:</strong>
              {activeDoctor.personality}
            </div>
          </div>

          {/* Core Focus Checklist Points */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 border-b pb-2">
              <ClipboardList className="w-4 h-4 text-orange-500" />
              <span className="font-bold text-xs text-slate-900">المواضيع والأسئلة المفضلة لديه (Core Examiner Focus Checklist):</span>
            </div>
            <div className="space-y-2">
              {activeDoctor.focusPoints.map((pt, i) => (
                <div key={i} className="flex gap-2.5 items-start bg-amber-50/30 p-2.5 rounded-lg border border-amber-50">
                  <div className="p-1 rounded-full bg-amber-100 text-amber-700 mt-0.5 font-bold text-[10px] leading-none shrink-0 w-5 h-5 flex items-center justify-center">
                    {i + 1}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scenarios Vignettes */}
          {activeDoctor.scenarios && activeDoctor.scenarios.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 border-b pb-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="font-bold text-xs text-slate-900">طريقة طرح الأسئلة وطريقة الإجابة الذكية:</span>
              </div>
              <div className="space-y-3">
                {activeDoctor.scenarios.map((sc, index) => (
                  <div key={index} className="border border-emerald-100 rounded-lg p-3 bg-emerald-50/20 space-y-1.5">
                    <strong className="text-emerald-950 text-xs block font-bold">
                      {sc.title}
                    </strong>
                    <p className="text-xs text-slate-650 leading-relaxed">
                      {sc.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specific Advice */}
          <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 space-y-2">
            <span className="font-bold text-xs text-indigo-900 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-indigo-650" />
              نصيحة ذهبية للتعامل مع هذا المُمتحِن (Expert Advice):
            </span>
            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              {activeDoctor.advice}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}
