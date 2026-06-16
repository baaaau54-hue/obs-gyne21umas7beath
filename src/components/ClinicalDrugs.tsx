import React, { useState, useMemo } from 'react';
import { drugsData } from '../data/drugsData';
import { Drug } from '../types';
import { 
  Search, 
  Syringe, 
  HelpCircle, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  Info,
  Layers,
  Heart
} from 'lucide-react';

export default function ClinicalDrugs() {
  const [selectedDrugId, setSelectedDrugId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDrugs = useMemo(() => {
    return drugsData.filter(drg => {
      const query = searchQuery.toLowerCase();
      return (
        drg.name.toLowerCase().includes(query) ||
        drg.class.toLowerCase().includes(query) ||
        drg.mechanism.toLowerCase().includes(query) ||
        drg.contraindications.some(ci => ci.toLowerCase().includes(query)) ||
        drg.clinicalTips.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const activeDrug = useMemo(() => {
    return drugsData.find(dr => dr.id === selectedDrugId) || drugsData[0];
  }, [selectedDrugId]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="drugs-tab">
      
      {/* Sidebar List */}
      <div className="lg:col-span-5 space-y-4">
        
        {/* Search header tool */}
        <div className="bg-white p-4 rounded-xl border border-slate-205 space-y-2">
          <label className="text-xs font-bold text-slate-705 block">البحث في صيدلية المنهج والأدوية</label>
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث: Oxytocin, MgSO4, Misoprostol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-550 text-slate-800"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Catalog list */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 p-3 border-b border-slate-100 flex justify-between items-center">
            <span className="font-bold text-xs text-indigo-950 flex items-center gap-1.5">
              <Syringe className="w-4 h-4 text-indigo-650" />
              قائمة أدوية الطوارئ التوليدية ({filteredDrugs.length})
            </span>
          </div>

          <div className="divide-y divide-slate-100 max-h-[460px] overflow-y-auto pr-1">
            {filteredDrugs.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-xs text-slate-455">
                لا توجد نتائج مطابقة لبحثك. جرب اسماً آخر كـ Aldomet أو Labetalol
              </div>
            ) : (
              filteredDrugs.map((drg, dex) => {
                const isActive = drg.id === selectedDrugId;
                return (
                  <button
                    key={drg.id}
                    onClick={() => setSelectedDrugId(drg.id)}
                    className={`w-full text-right p-4 transition-colors flex items-center justify-between gap-3 select-none hover:bg-slate-50 border-r-4 cursor-pointer ${
                      isActive ? 'bg-indigo-50/50 border-indigo-650' : 'border-transparent'
                    }`}
                  >
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-900 block leading-tight">
                        {drg.name}
                      </h4>
                      <h5 className="text-[10px] text-slate-500 font-semibold font-mono tracking-wider block">
                        {drg.class}
                      </h5>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-widest shrink-0 font-bold">
                      {dex + 1} / 9
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>

      </div>

      {/* Main Focus Detail Display */}
      {activeDrug && (
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-202 p-5 md:p-6 space-y-6">
          
          {/* Header */}
          <div className="border-b pb-4 space-y-2">
            <span className="text-xs font-mono tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-sm font-bold uppercase">
              DRUG PROFILE {activeDrug.id} OF 9
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
              {activeDrug.name}
            </h2>
            <h3 className="text-xs font-bold font-mono text-indigo-650 bg-indigo-50 border border-indigo-100 px-2.0 py-1 rounded inline-block">
              {activeDrug.class}
            </h3>
          </div>

          {/* Molecular Mechanism */}
          <div className="text-xs leading-relaxed text-slate-655 p-3.5 bg-slate-50 border rounded-lg">
            <strong className="block text-slate-800 font-bold mb-1">الآلية الفيزيولوجية الجزيئية ومسار الدواء (Mechanism of Action):</strong>
            {activeDrug.mechanism}
          </div>

          {/* Specific Indications and Doses */}
          <div className="space-y-3">
            <span className="font-bold text-xs text-slate-900 block border-b pb-2">
              الاستطبابات المعتمدة وخطط الجرعات التفصيلية (Approved Dosing Guide):
            </span>
            <div className="space-y-3.5">
              {activeDrug.indications.map((ind, i) => (
                <div key={i} className="border border-slate-100 rounded-lg p-3 space-y-2 bg-slate-50/30">
                  <strong className="text-slate-950 text-xs block font-bold font-sans">
                    • {ind.condition}
                  </strong>
                  <div className="bg-emerald-50 border border-emerald-100 p-2.5 rounded text-emerald-950 font-mono text-xs font-bold leading-normal">
                    {ind.dose}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Contraindications */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-bold text-slate-700 block border-b pb-1">موانع الاستخدام المطلقة والخطيرة (Contraindications):</h5>
            <ul className="list-disc list-inside text-xs text-slate-600 pl-1 space-y-1 font-sans">
              {activeDrug.contraindications.map((ci, k) => (
                <li key={k} className="leading-relaxed">
                  {ci}
                </li>
              ))}
            </ul>
          </div>

          {/* Toxicity Limits & Protocols */}
          {activeDrug.toxicity && (
            <div className="p-4 bg-red-50 rounded-xl border border-red-100 space-y-3 text-xs leading-relaxed text-red-950">
              <span className="font-bold text-xs text-red-900 flex items-center gap-1.5">
                <ShieldAlert className="w-5 h-5 text-red-650 shrink-0" />
                معايير مراقبة السمية وعلامات فرط الجرعة (Toxicity & Monitoring):
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans my-2">
                <div className="bg-white/80 p-3 rounded-lg border border-red-100/50">
                  <strong className="text-red-950 font-bold block mb-1">علامات السمية ومؤشراتها:</strong>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs pl-1">
                    {activeDrug.toxicity.signs.map((sig, idx) => (
                      <li key={idx}>{sig}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/80 p-3 rounded-lg border border-red-100/50">
                  <strong className="text-red-950 font-bold block mb-1">الفحوصات والمراقبة الدورية الممنهجة:</strong>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs pl-1">
                    {activeDrug.toxicity.monitoring.map((mon, idx) => (
                      <li key={idx}>{mon}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-red-200">
                <strong className="text-red-955 text-xs block font-bold mb-1">المضاد السمي والبروتوكول (Antidote):</strong>
                <span className="font-mono bg-red-100 text-red-950 px-2 py-0.5 rounded font-bold">{activeDrug.toxicity.antidote}</span>
                <p className="text-slate-700 text-xs leading-relaxed mt-1.5 font-medium">{activeDrug.toxicity.antidoteProtocol}</p>
              </div>
            </div>
          )}

          {/* Expert Clinical Tips */}
          <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 space-y-1">
            <span className="font-bold text-xs text-orange-950 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-orange-650" />
              ملاحظة سريرية ذهبية (Clinical Pearl):
            </span>
            <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
              {activeDrug.clinicalTips}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}
