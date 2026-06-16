import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Settings, 
  Trash2, 
  Droplet, 
  Clock, 
  ShieldAlert, 
  Activity, 
  Calendar,
  Layers,
  Heart,
  BadgeAlert,
  Info
} from 'lucide-react';

export default function ClinicalCalculators() {
  const [activeCalc, setActiveCalc] = useState<'mgso4' | 'shock' | 'gestation'>('mgso4');

  // Calculator 1: MgSO4 continuous drip calculator
  const [targetDose, setTargetDose] = useState<number>(1); // g/hour
  const [bagVolume, setVolume] = useState<number>(500); // ml
  const [gInBag, setGInBag] = useState<number>(10); // grams in bag
  const [dropFactor, setDropFactor] = useState<number>(15); // drops/ml

  const dripResults = useMemo(() => {
    // Math logic: concentration = gInBag / bagVolume (g / ml)
    // mlPerHour = targetDose / concentration
    // dropsPerMin = (mlPerHour * dropFactor) / 60
    if (gInBag <= 0 || bagVolume <= 0) return { mlPerHour: 0, dropsPerMin: 0 };
    const concentration = gInBag / bagVolume; // grams per ml
    const mlPerHour = targetDose / concentration;
    const dropsPerMin = (mlPerHour * dropFactor) / 60;
    return {
      mlPerHour: Math.round(mlPerHour * 10) / 10,
      dropsPerMin: Math.round(dropsPerMin * 10) / 10
    };
  }, [targetDose, bagVolume, gInBag, dropFactor]);

  // Calculator 2: Hypovolemic Shock Stage Estimator
  const [heartRate, setHeartRate] = useState<number>(90);
  const [bloodLossPct, setBloodLossPct] = useState<number>(10);
  const [respiratoryRate, setRespiratoryRate] = useState<number>(16);
  const [hasHypotension, setHasHypotension] = useState<boolean>(false);
  const [mentalState, setMentalState] = useState<'normal' | 'anxious' | 'confused' | 'coma'>('normal');

  const shockStageResult = useMemo(() => {
    let stage = 1;
    let bloodLossVol = "< 750 mL";
    let advice = "Resuscitation probably not required beyond oral/minimal IV fluids. Keep warm and monitor.";
    let color = "border-emerald-100 bg-emerald-50/50 text-emerald-950";

    // Criteria logic based on curriculum stage cards
    if (bloodLossPct > 40 || heartRate > 140 || respiratoryRate > 35 || mentalState === 'coma') {
      stage = 4;
      bloodLossVol = "> 2000 mL";
      advice = "Severe, life-threatening decompensated shock (Class IV). Trigger MASSIVE TRANSFUSION PROTOCOL immediately (1:1:1 ratio). Run rapid blood/warmed crystalloids, turn patient to left lateral tilt, prepare for surgical control.";
      color = "border-red-200 bg-red-50 text-red-950";
    } else if (bloodLossPct >= 30 || heartRate > 120 || respiratoryRate > 30 || mentalState === 'confused' || hasHypotension) {
      stage = 3;
      bloodLossVol = "1500 - 2000 mL";
      advice = "Severe hemorrhagic shock (Class III). Require blood transfusion (PRBCs) and rapid IV fluid resuscitation immediately. Catheterize to monitor urine output (target >= 30mL/hr). Locate and treat the cause.";
      color = "border-orange-200 bg-orange-50 text-orange-950";
    } else if (bloodLossPct >= 15 || heartRate > 100 || respiratoryRate > 20 || mentalState === 'anxious') {
      stage = 2;
      bloodLossVol = "750 - 1500 mL";
      advice = "Incipient/mild shock (Class II). Secure IV access. Infuse warmed crystalloids (Ringer's Lactate). Monitor urine output and vitals carefully.";
      color = "border-amber-200 bg-amber-50 text-amber-950";
    }

    return { stage, bloodLossVol, advice, color };
  }, [heartRate, bloodLossPct, respiratoryRate, hasHypotension, mentalState]);

  // Calculator 3: Gestational Age & EDD Calculator
  const [lmpDate, setLmpDate] = useState<string>('2026-01-01');
  const [cycleLength, setCycleLength] = useState<number>(28);

  const datesResult = useMemo(() => {
    if (!lmpDate) return null;
    const lmp = new Date(lmpDate);
    if (isNaN(lmp.getTime())) return null;

    // Standard Naegele's rule calculation: LMP + 9 calendar months + 7 days + (cycleLength - 28) days
    const edd = new Date(lmp.getTime());
    edd.setMonth(edd.getMonth() + 9);
    edd.setDate(edd.getDate() + 7 + (cycleLength - 28));

    // Calculate current gestational age in weeks/days from today (using 2026-06-16 as current local time in mock metadata)
    const today = new Date('2026-06-16');
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let weeks = Math.floor(diffDays / 7);
    let days = diffDays % 7;

    return {
      eddString: edd.toLocaleDateString('ar-YE', { year: 'numeric', month: 'long', day: 'numeric' }),
      eddEnglish: edd.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      weeks,
      days,
      diffDays
    };
  }, [lmpDate, cycleLength]);

  return (
    <div className="space-y-6" id="calculators-tab">
      
      {/* Top Selector Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveCalc('mgso4')}
          className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 border-b-2 transition-all select-none cursor-pointer ${
            activeCalc === 'mgso4'
              ? 'border-indigo-600 text-indigo-600 bg-indigo-50/20'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Droplet className="w-4 h-4 text-indigo-600" />
          حاسبة نقرات المغنيسيوم
        </button>
        <button
          onClick={() => setActiveCalc('shock')}
          className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 border-b-2 transition-all select-none cursor-pointer ${
            activeCalc === 'shock'
              ? 'border-indigo-600 text-indigo-600 bg-indigo-50/20'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Activity className="w-4 h-4 text-indigo-600" />
          مقياس صدمة النزيف
        </button>
        <button
          onClick={() => setActiveCalc('gestation')}
          className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 border-b-2 transition-all select-none cursor-pointer ${
            activeCalc === 'gestation'
              ? 'border-indigo-600 text-indigo-600 bg-indigo-50/20'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Calendar className="w-4 h-4 text-indigo-600" />
          حاسبة عمر الحمل والولادة
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-250 p-5 md:p-6">
        
        {/* CALCULATOR 1: MGSO4 */}
        {activeCalc === 'mgso4' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b pb-3">
              <Droplet className="w-5 h-5 text-indigo-605" />
              <div>
                <h3 className="font-bold text-slate-900 text-base">حاسبة معدل تقطير كبريتات المغنيسيوم (MgSO4 Drip Rate)</h3>
                <p className="text-[10px] text-slate-400">تستخدم لحساب سرعة تنقيط المحلول بدون مضخة تسريب (Nursing Math)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inputs */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">منسوب الجرعة المستهدفة (g/hour)</label>
                  <select 
                    value={targetDose} 
                    onChange={(e) => setTargetDose(parseFloat(e.target.value))}
                    className="w-full text-xs rounded-lg border border-slate-205 p-2 bg-white text-slate-800"
                  >
                    <option value={1}>1.0 جرام / الساعة (جرعة الصيانة المعتادة)</option>
                    <option value={2}>2.0 جرام / الساعة (إعطاء بولس إضافي سريع)</option>
                    <option value={4}>4.0 جرام / الساعة (لأغراض تسريب أخرى)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">كمية مغذى الملح/المحلول بالـ (mL)</label>
                  <input 
                    type="number" 
                    value={bagVolume} 
                    onChange={(e) => setVolume(Math.max(1, parseInt(e.target.value)))}
                    className="w-full text-xs rounded-lg border border-slate-205 p-2 text-slate-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-705 block">كمية جرامات الـ MgSO4 في الكيس (grams)</label>
                  <input 
                    type="number" 
                    value={gInBag} 
                    onChange={(e) => setGInBag(Math.max(1, parseInt(e.target.value)))}
                    className="w-full text-xs rounded-lg border border-slate-205 p-2 text-slate-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">عامل سرعة التنقيط للعدة المستعملة (Drop Factor)</label>
                  <select 
                    value={dropFactor} 
                    onChange={(e) => setDropFactor(parseInt(e.target.value))}
                    className="w-full text-xs rounded-lg border border-slate-205 p-2 bg-white text-slate-805"
                  >
                    <option value={15}>15 نقطة / مل (عدة المحاليل العادية للبالغين)</option>
                    <option value={20}>20 نقطة / مل (عدة محاليل بديلة)</option>
                    <option value={10}>10 نقاط / مل (عدة نقل دم)</option>
                    <option value={60}>60 نقطة / مل (عدة الميكرودريب المخصصة للأطفال)</option>
                  </select>
                </div>
              </div>

              {/* Outputs */}
              <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <span className="font-bold text-xs text-indigo-900 block">النتائج والمعادلة الحسابية في عملي المنهج:</span>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg border border-indigo-100 text-center">
                      <span className="text-[10px] text-slate-450 block font-bold">معدل التدفق (mL/hour)</span>
                      <strong className="text-xl font-extrabold text-indigo-950 font-mono mt-1 block">{dripResults.mlPerHour}</strong>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-indigo-100 text-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-3 h-3 bg-indigo-500 rounded-bl-sm"></div>
                      <span className="text-[10px] text-slate-450 block font-bold">سرعة النقرات (Drops/min)</span>
                      <strong className="text-xl font-extrabold text-indigo-950 font-mono mt-1 block">{dripResults.dropsPerMin}</strong>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-650 bg-white p-2.5 rounded border border-indigo-100/60 leading-relaxed font-mono">
                    <strong className="block text-indigo-900 font-bold mb-1">المعادلة المطبقة:</strong>
                    <span>قوة الغرام في الكيس: {gInBag} غرام / {bagVolume} مل = {(gInBag/bagVolume).toFixed(3)} غرام/مل.</span><br/>
                    <span>سرعة التدفق: الجرعة ({targetDose} غرام/الساعة) ÷ القوة = {dripResults.mlPerHour} مل/الساعة.</span><br/>
                    <span>سرعة النقرات: ( {dripResults.mlPerHour} مل × {dropFactor} نقطة ) ÷ 60 دقيقة = {dripResults.dropsPerMin} نقطة في الدقيقة.</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 text-[11px] text-amber-900 rounded border border-amber-200">
                  <strong>تنبيه د. لمياء عبدالله:</strong> غرام واحد في الساعة بوضع 10 غرام مغنيسيوم في كيس 500 مل باستخدام سيت تنقيط 15 يساوي تقريباً <strong>13 نقطة في الدقيقة</strong>. احفظوا هذا الرقم للامتحان الشفوي!
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CALCULATOR 2: SHOCK STAGES */}
        {activeCalc === 'shock' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b pb-3">
              <Activity className="w-5 h-5 text-indigo-605" />
              <div>
                <h3 className="font-bold text-slate-900 text-base">مصنف ومدرج درجات الصدمة النزفية (Hypovolemic Shock Classifier)</h3>
                <p className="text-[10px] text-slate-400">يقيس الدرجة الإكلينيكية لفقد الدم التوليدي ويطابق معايير التدخل الفوري</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inputs */}
              <div className="space-y-4">
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">نبضات القلب (HR - bpm)</span>
                    <span className="font-mono font-bold text-indigo-600">{heartRate} bpm</span>
                  </div>
                  <input 
                    type="range" 
                    min="60" 
                    max="160" 
                    value={heartRate} 
                    onChange={(e) => setHeartRate(parseInt(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>60</span>
                    <span>100 (tachycardia)</span>
                    <span>120</span>
                    <span>140</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 text-slate-800">
                    <label className="text-xs font-bold text-slate-700 block">معدل التنفس (RR)</label>
                    <input 
                      type="number" 
                      value={respiratoryRate} 
                      onChange={(e) => setRespiratoryRate(Math.max(1, parseInt(e.target.value)))}
                      className="w-full text-xs rounded-lg border border-slate-205 p-2 text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">نسبة فقدان الدم المفرط (%)</label>
                    <input 
                      type="number" 
                      value={bloodLossPct} 
                      onChange={(e) => setBloodLossPct(Math.max(0, Math.min(100, parseInt(e.target.value))))}
                      className="w-full text-xs rounded-lg border border-slate-250 p-2 text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">الحالة العقلية واليقظة (Mental State)</label>
                  <select 
                    value={mentalState} 
                    onChange={(e) => setMentalState(e.target.value as any)}
                    className="w-full text-xs rounded-lg border border-slate-205 p-2 bg-white text-slate-800"
                  >
                    <option value="normal">طبيعية / قلق خفيف جداً (Normal/Slight Anxious)</option>
                    <option value="anxious">قلق واضح وتوتر (Mild Anxiety)</option>
                    <option value="confused">تشوش ذهني وخمول (Confusion/Lethargy)</option>
                    <option value="coma">غيبوبة أو فقدان وعي تام (Obtunded/Coma)</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 p-2 bg-slate-100 rounded-lg">
                  <input
                    type="checkbox"
                    id="hypotension"
                    checked={hasHypotension}
                    onChange={(e) => setHasHypotension(e.target.checked)}
                    className="w-4 h-4 text-indigo-650 cursor-pointer"
                  />
                  <label htmlFor="hypotension" className="text-xs font-bold text-slate-700 cursor-pointer select-none">
                    هل المريضة تعاني من هبوط ضغط الدم؟ (SBP &lt; 90 mmHg)
                  </label>
                </div>

              </div>

              {/* Output Card */}
              <div className={`p-5 rounded-xl border ${shockStageResult.color} flex flex-col justify-between space-y-4`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5">
                    <ShieldAlert className="w-5 h-5 shrink-0" />
                    <span className="font-bold text-xs">مطابقة التصنيف السريري والدرجة:</span>
                  </div>
                  
                  <div className="text-center py-4 border-y border-dashed border-slate-300">
                    <span className="text-xs block text-slate-500 font-semibold">المطابقة المنهجية للصدمة</span>
                    <strong className="text-3xl font-extrabold tracking-tight mt-1 block">
                      STAGE {shockStageResult.stage} / CLASS {shockStageResult.stage === 1 ? 'I' : shockStageResult.stage === 2 ? 'II' : shockStageResult.stage === 3 ? 'III' : 'IV'}
                    </strong>
                    <span className="text-xs font-mono font-bold mt-1 block">حجم الدم المفقود التقريبي: {shockStageResult.bloodLossVol}</span>
                  </div>

                  <p className="text-xs leading-relaxed font-sans mt-2">
                    <strong className="block text-sm font-semibold mb-1"> التدبير وخطة الطوارئ المطلوبة:</strong>
                    {shockStageResult.advice}
                  </p>
                </div>

                <div className="p-2.5 bg-slate-900 text-white rounded text-[10px] leading-relaxed">
                  <strong>مذكرة الامتحان:</strong> نبض المريضة المتسارع هو أول علامة لبدء الصدمة (Earliest sign of shock). هبوط ضغط الدم هو علامة متأخرة ودلالة على بدء انهيار الأنظمة الدفاعية للجسم.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CALCULATOR 3: GESTATION */}
        {activeCalc === 'gestation' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b pb-3">
              <Calendar className="w-5 h-5 text-indigo-605" />
              <div>
                <h3 className="font-bold text-slate-900 text-base">حاسبة عمر الحمل وموعد الولادة المتوقع (EDD & Gestational Calculator)</h3>
                <p className="text-[10px] text-slate-400">حساب دقيق وفقاً لقاعدة Naegele's التقويمية مع تفصيل هامش الخطأ</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inputs */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">أول يوم لآخر دورة شهرية للمريضة (First Day of LMP)</label>
                  <input
                    type="date"
                    value={lmpDate}
                    onChange={(e) => setLmpDate(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-205 p-2 text-slate-800 bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">طول الدورة الشهرية المعتادة (أيام)</span>
                    <span className="font-mono font-bold text-indigo-600">{cycleLength} يوم</span>
                  </div>
                  <input 
                    type="range" 
                    min="21" 
                    max="35" 
                    value={cycleLength} 
                    onChange={(e) => setCycleLength(parseInt(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>21 (قصيرة)</span>
                    <span>28 (المعيارية)</span>
                    <span>35 (طويلة)</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 text-[11px] text-slate-650 rounded border leading-relaxed">
                  <strong className="block text-slate-800 font-bold mb-1">المعادلة للتقويم الهجري:</strong>
                  نضيف 10 إلى 14 يوماً على أول يوم لآخر طمث، ونطرح 3 أشهر كاملة لنحصل على موعد الولادة التقريبي هجرياً.
                </div>
              </div>

              {/* Outputs */}
              {datesResult ? (
                <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 flex flex-col justify-between space-y-4 text-slate-800">
                  <div className="space-y-4">
                    <span className="font-bold text-xs text-indigo-900 block">حسابات عمر الحمل الحالي وموعد الولادة التقديري:</span>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-indigo-100 text-center">
                        <span className="text-[10px] text-slate-450 block font-bold">عمر الحمل الحالي (GA)</span>
                        <strong className="text-lg font-extrabold text-indigo-950 font-mono mt-1 block">
                          {datesResult.weeks} أسبوع {datesResult.days > 0 ? `و ${datesResult.days} أيام` : ''}
                        </strong>
                        <span className="text-[9px] text-slate-400 font-mono mt-1 block">مجموع: {datesResult.diffDays} يوم</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-indigo-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-3 h-3 bg-red-400 rounded-bl-sm"></div>
                        <span className="text-[10px] text-slate-450 block font-bold">موعد الولادة المتوقع (EDD)</span>
                        <strong className="text-xs font-bold text-indigo-950 mt-1 block">
                          {datesResult.eddEnglish}
                        </strong>
                        <span className="text-[10px] text-slate-450 mt-1 block leading-tight">
                          {datesResult.eddString}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-indigo-100/60 leading-relaxed text-xs">
                      <strong className="text-slate-850 font-bold block mb-1">هوامش الخطأ في تصحيح التواريخ (Ultrasound Errors):</strong>
                      <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-1">
                        <li>الأول من الحمل (T1): هامش الخطأ ± 5-7 أيام (يستخدم الـ CRL وهو الأكثر دقة).</li>
                        <li>الثاني من الحمل (T2): هامش الخطأ ± 7-14 يوماً.</li>
                        <li>الثالث من الحمل (T3): هامش الخطأ يصل لـ ± 3 أسابيع (غير دقيق لتحديد التجاوز).</li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-450 bg-slate-900 text-white p-2.5 rounded">
                    <strong>تنبيه د. أمة الله فضائل:</strong> التدقيق الشامل على تاريخ LMP من المريضة وتأكيد دقة الموعد هو نقطة الانطلاق الأساسية والمفضلة لديها لتقييم صحة المريضة.
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 p-6 rounded-xl border border-dashed flex flex-col justify-center items-center text-slate-500 text-xs text-center">
                  أدخل تاريخ آخر دورة طمث باليسار لعرض عمر المريضة وموعد الولادة بدقة متناهية.
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
