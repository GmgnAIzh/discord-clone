'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translation, getTranslation } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  t: Translation;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('zh'); // 默认中文

  useEffect(() => {
    // 从 localStorage 读取语言设置
    const savedLanguage = localStorage.getItem('discord-language') as Language;
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // 检测浏览器语言偏好
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        setLanguageState('zh');
      } else {
        setLanguageState('zh'); // 仍然默认中文
      }
    }
  }, []);

  useEffect(() => {
    // 保存到 localStorage
    localStorage.setItem('discord-language', language);

    // 更新 HTML lang 属性
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const t = getTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
