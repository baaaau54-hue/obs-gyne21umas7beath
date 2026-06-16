import React, { useState, useMemo } from 'react';
import { chaptersData } from '../data/chaptersData';
import { Chapter } from '../types';
import { 
  Search, 
  BookOpen, 
  Map, 
  AlertTriangle, 
  Key, 
  FileText,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Languages,
  BadgeAlert
} from 'lucide-react';

export default function CourseViewer() {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isEnglishOnly, setIsEnglishOnly] = useState<boolean>(false);

  // Filter or search chapters by title, description or content keywords
  const filteredChapters = useMemo(() => {
    return chaptersData.filter(ch => {
      const query = searchQuery.toLowerCase();
      return (
        ch.titleAr.toLowerCase().includes(query) ||
        ch.titleEn.toLowerCase().includes(query) ||
        ch.description.toLowerCase().includes(query) ||
        ch.content.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const activeChapter = useMemo(() => {
    return chaptersData.find(ch => ch.id === selectedChapterId) || chaptersData[0];
  }, [selectedChapterId]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="syllabus-tab">
      
      {/* Sidebar - Chapter Navigation and Search */}
      <div className="lg:col-span-4 space-y-4">
        
        {/* Search tool widget */}
        <div className="bg-white p-4 rounded-2xl border border-gray-250/60 space-y-2">
          <label className="text-xs font-bold text-gray-800 block">البحث عبر محتوى الكورس المتقدم</label>
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن: PET, Atony, PPH, Ectopic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-250/80 focus:outline-hidden focus:border-indigo-600 font-sans focus:ring-1 focus:ring-indigo-600 text-gray-900"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          </div>
          {searchQuery && (
            <div className="flex justify-between items-center text-[10px] text-gray-500 pt-1">
              <span>تم العثور على: {filteredChapters.length} وحدة</span>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-indigo-600 font-bold hover:underline"
              >
                مسح البحث
              </button>
            </div>
          )}
        </div>

        {/* Chapters list panel */}
        <div className="bg-white rounded-2xl border border-gray-250/60 overflow-hidden">
          <div className="bg-gray-50 p-3.5 border-b border-gray-200/60 flex justify-between items-center">
            <span className="font-bold text-xs text-gray-900 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              أبواب المنهج والوحدات ({filteredChapters.length})
            </span>
          </div>
          <div className="divide-y divide-gray-100 max-h-[450px] overflow-y-auto no-scrollbar">
            {filteredChapters.length === 0 ? (
              <div className="p-8 text-center text-gray-400 text-xs">
                لا توجد نتائج مطابقة لبحثك. جرب كتابة مصطلحات مثل: PET, AHP, IUD
              </div>
            ) : (
              filteredChapters.map((ch) => {
                const isActive = ch.id === selectedChapterId;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChapterId(ch.id)}
                    className={`w-full text-right p-3.5 transition-colors flex items-start gap-3 select-none hover:bg-gray-50 cursor-pointer ${
                      isActive ? 'bg-indigo-50/40 border-r-4 border-indigo-600' : ''
                    }`}
                  >
                    <span className={`font-mono text-[10px] font-bold leading-none px-1.5 py-1 rounded-sm mt-0.5 shrink-0 ${
                      isActive ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {ch.number}
                    </span>
                    <div className="space-y-1">
                      <h4 className={`text-xs font-bold leading-tight ${isActive ? 'text-indigo-950' : 'text-gray-900'}`}>
                        {ch.titleAr}
                      </h4>
                      <h5 className="text-[9px] text-gray-400 font-mono block">
                        {ch.titleEn}
                      </h5>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>

      </div>

      {/* Main Chapter Content Display */}
      <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-250/60 p-6 space-y-6">
        
        {/* Module Header info */}
        <div className="border-b border-gray-100 pb-4 space-y-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold font-mono tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                MODULE {activeChapter.number}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">الأوراق: {activeChapter.pages}</span>
            </div>
            <h2 className="text-lg md:text-xl font-extrabold text-gray-950 leading-snug">
              {activeChapter.titleAr}
            </h2>
            <h3 className="text-xs font-semibold font-mono text-gray-400 uppercase tracking-wide">
              {activeChapter.titleEn}
            </h3>
          </div>

          {/* Language Toggle switch */}
          <div className="flex items-center gap-2 self-start md:self-center">
            <button
              onClick={() => setIsEnglishOnly(!isEnglishOnly)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5 text-gray-500" />
              <span>{isEnglishOnly ? "تفعيل الشرح العربي" : "الشرح بالإنجليزية فقط"}</span>
            </button>
          </div>
        </div>

        {/* Chapter Overview description */}
        <div className="p-3.5 bg-gray-50 border border-gray-200/60 rounded-xl text-xs leading-relaxed text-gray-600">
          <strong className="font-bold text-gray-900">نبذة الفصل:</strong> {activeChapter.description}
        </div>

        {/* Dynamic HTML Document content */}
        <div 
          className={`prose prose-sm max-w-none text-gray-800 ${
            isEnglishOnly ? 'font-sans' : ''
          }`}
        >
          {isEnglishOnly ? (
            <div className="space-y-4">
              <div 
                className="chapter-rendered-html space-y-4 text-xs" 
                dangerouslySetInnerHTML={{ __html: activeChapter.content }} 
              />
            </div>
          ) : (
            <div 
              className="chapter-rendered-html space-y-4 text-xs font-sans" 
              dangerouslySetInnerHTML={{ __html: activeChapter.content }} 
            />
          )}
        </div>

        {/* Key takeaways segment */}
        <div className="p-5 bg-gray-50 rounded-2xl border border-gray-250/60 space-y-2">
          <span className="font-bold text-xs text-indigo-650 flex items-center gap-1.5">
            <Key className="w-4 h-4 text-indigo-600" />
            نقاط التركيز الذهبية للامتحانات العملي (Exam Takeaways):
          </span>
          <ul className="list-disc list-inside text-xs text-gray-700 space-y-1.5">
            {activeChapter.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="leading-relaxed">
                {takeaway}
              </li>
            ))}
          </ul>
        </div>

        {/* Clinical Case Scenarios */}
        {activeChapter.clinicalScenarios && activeChapter.clinicalScenarios.length > 0 && (
          <div className="border border-gray-250/60 rounded-2xl overflow-hidden">
            <div className="bg-gray-50 p-3.5 border-b border-gray-200/60 font-bold text-xs text-gray-900 flex items-center gap-1.5">
              <BadgeAlert className="w-4 h-4 text-indigo-600" />
              سيناريوهات وحالات سريرية مكررة من اللوك بوك (Vignettes Check):
            </div>
            <div className="divide-y divide-gray-100 text-xs text-gray-700">
              {activeChapter.clinicalScenarios.map((sc, i) => (
                <div key={i} className="p-4 space-y-3 last:border-b-0">
                  <div className="bg-gray-50 border border-gray-200/80 p-3 rounded-xl">
                    <strong className="text-gray-900 font-bold block mb-1">السيناريو / المشهد:</strong>
                    <p className="text-xs text-gray-750 leading-relaxed">{sc.scenario}</p>
                  </div>
                  <div className="bg-indigo-50/40 border border-indigo-100/60 p-3 rounded-xl">
                    <strong className="text-indigo-950 font-bold block mb-1">التدبير والإجراء الفوري المطلوب (Clinical Action):</strong>
                    <p className="text-xs text-indigo-900 leading-relaxed font-semibold">{sc.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
