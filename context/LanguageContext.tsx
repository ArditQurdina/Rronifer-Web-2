'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import en from '@/lib/translations/en.json';
import al from '@/lib/translations/al.json';
import ge from '@/lib/translations/ge.json';

type Language = 'en' | 'al' | 'ge';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en,
  al,
  ge,
};

const defaultLanguage: Language = 'en';

const defaultContextValue: LanguageContextType = {
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = (localStorage.getItem('language') as Language) || defaultLanguage;
    setLanguageState(savedLanguage);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return typeof value === 'string' ? value : key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    return defaultContextValue;
  }
  return context;
}
