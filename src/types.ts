export interface Chapter {
  id: number;
  number: string;
  titleAr: string;
  titleEn: string;
  pages: string;
  description: string;
  content: string; // HTML-safe clinical notes content
  keyTakeaways: string[];
  clinicalScenarios?: {
    scenario: string;
    action: string;
  }[];
}

export interface Doctor {
  id: number;
  name: string;
  hospital: 'Al-Sabeen' | 'Al-Thawra' | 'Al-Jumhouri';
  role: string;
  personality: string;
  focusPoints: string[];
  scenarios: {
    title: string;
    description: string;
  }[];
  advice: string;
}

export interface Instrument {
  id: number;
  nameEn: string;
  nameAr: string;
  synonyms: string[];
  description: string;
  uses: string[];
  specifications: string;
  contraindications?: string;
  doctorSpecialNotes?: {
    doctor: string;
    note: string;
  }[];
}

export interface Drug {
  id: number;
  name: string;
  class: string;
  mechanism: string;
  indications: {
    condition: string;
    dose: string;
  }[];
  toxicity?: {
    signs: string[];
    monitoring: string[];
    antidote: string;
    antidoteProtocol: string;
  };
  contraindications: string[];
  clinicalTips: string;
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string;
}
