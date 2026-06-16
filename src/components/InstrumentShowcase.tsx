import React, { useState, useMemo } from 'react';
import { instrumentsData } from '../data/instrumentsData';
import { Instrument } from '../types';
import { 
  Search, 
  Settings, 
  AlertTriangle, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  Briefcase,
  ChevronRight,
  ShieldX
} from 'lucide-react';

export default function InstrumentShowcase() {
  const [selectedInstId, setSelectedInstId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredInstruments = useMemo(() => {
    return instrumentsData.filter(inst => {
      const query = searchQuery.toLowerCase();
      return (
        inst.nameEn.toLowerCase().includes(query) ||
        inst.nameAr.toLowerCase().includes(query) ||
        inst.synonyms.some(syn => syn.toLowerCase().includes(query)) ||
        inst.description.toLowerCase().includes(query) ||
        inst.uses.some(use => use.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  const activeInstrument = useMemo(() => {
    return instrumentsData.find(inst => inst.id === selectedInstId) || instrumentsData[0];
  }, [selectedInstId]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="instruments-tab">
      
      {/* Sidebar List */}
      <div className="lg:col-span-5 space-y-4">
        
        {/* Search Header */}
        <div className="bg-white p-4 rounded-xl border border-slate-205 space-y-2">
          <label className="text-xs font-bold text-slate-700 block">البحث في صينية الأدوات الجراحية</label>
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث: Cusco, Foley, Sound, Hegar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-850"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Instruments Panel List */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/60">
            <span className="font-bold text-xs text-indigo-950 flex items-center gap-1.5/5">
              <Briefcase className="w-4 h-4 text-indigo-650" />
              صندوق الأدوات الطبية ({filteredInstruments.length})
            </span>
          </div>

          <div className="divide-y divide-slate-100 max-h-[460px] overflow-y-auto pr-1">
            {filteredInstruments.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-xs text-slate-400">
                لا توجد أداة مطابقة لمعايير البحث. جرب كتابة اسم آخر.
              </div>
            ) : (
              filteredInstruments.map((inst, index) => {
                const isActive = inst.id === selectedInstId;
                return (
                  <button
                    key={inst.id}
                    onClick={() => setSelectedInstId(inst.id)}
                    className={`w-full text-right p-4 transition-colors flex items-center justify-between gap-3 select-none hover:bg-slate-50 border-r-4 cursor-pointer ${
                      isActive ? 'bg-indigo-50/50 border-indigo-650' : 'border-transparent'
                    }`}
                  >
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-900 block leading-tight">
                        {inst.nameEn}
                      </h4>
                      <h5 className="text-[10px] text-slate-500 font-semibold font-mono tracking-wider block">
                        {inst.nameAr}
                      </h5>
                    </div>
                    
                    <span className="text-[10px] text-slate-400 font-mono tracking-widest shrink-0 font-bold">
                      {index + 1} / 14
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>

      </div>

      {/* Main Focus Detail Display */}
      {activeInstrument && (
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 md:p-6 space-y-6">
          
          {/* Header */}
          <div className="border-b pb-4 space-y-2">
            <span className="text-xs font-mono tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-sm font-bold uppercase">
              INSTRUMENT {activeInstrument.id} OF 14
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
              {activeInstrument.nameEn}
            </h2>
            <h3 className="text-xs font-bold font-mono text-slate-400 tracking-wide bg-slate-100 px-2.0 py-1 rounded inline-block">
              {activeInstrument.nameAr}
            </h3>

            {/* Synonyms */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeInstrument.synonyms.map((syn, i) => (
                <span key={i} className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 rounded-lg px-2 py-0.5">
                  {syn}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="text-xs leading-relaxed text-slate-655 p-3.5 bg-slate-50 border rounded-lg">
            <strong className="block text-slate-800 font-bold mb-1">الوصف والتعريف السريري للأداة:</strong>
            {activeInstrument.description}
          </div>

          {/* Uses Bullet Checkbox list */}
          <div className="space-y-3">
            <span className="font-bold text-xs text-slate-900 block border-b pb-2">
              الاستخدامات السريرية والتوليدية الأساسية (Surgical Uses Checklists):
            </span>
            <div className="space-y-2.5">
              {activeInstrument.uses.map((use, i) => (
                <div key={i} className="flex gap-2.5 items-start bg-indigo-50/10 p-2.5 rounded-lg border border-indigo-50/30">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">{use}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <strong className="block text-slate-800 font-semibold mb-1">المواصفات الجراحية والمميزات:</strong>
              <p className="text-slate-600 leading-relaxed font-medium">{activeInstrument.specifications}</p>
            </div>
            
            {activeInstrument.contraindications && (
              <div className="bg-red-50/50 p-3.5 rounded-xl border border-red-100">
                <span className="font-bold text-red-950 flex items-center gap-1.5 mb-1">
                  <ShieldX className="w-4 h-4 text-red-650 shrink-0" />
                  محاذير هامة / Contraindications:
                </span>
                <p className="text-red-900 leading-relaxed font-medium">{activeInstrument.contraindications}</p>
              </div>
            )}
          </div>

          {/* Doctors Special note preferred triggers */}
          {activeInstrument.doctorSpecialNotes && activeInstrument.doctorSpecialNotes.length > 0 && (
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 space-y-2">
              <span className="font-bold text-xs text-orange-950 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange-650" />
                تجميع أسئلة وأسرار الامتحانات لهذه الأداة (Examiner Notes):
              </span>
              <div className="space-y-3">
                {activeInstrument.doctorSpecialNotes.map((note, idx) => (
                  <div key={idx} className="text-xs leading-relaxed border-t border-orange-100 pr-2 pt-2 first:border-t-0 first:pt-0">
                    <strong className="text-orange-900 block font-bold font-sans mb-0.5">
                      ✓ {note.doctor}
                    </strong>
                    <p className="text-slate-700 leading-relaxed font-medium">{note.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
