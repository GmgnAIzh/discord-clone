'use client';

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Control Panel */}
      <div className={`
        absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 space-y-3
        transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}
      `}>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-between w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 ripple micro-bounce"
          title={theme === 'dark' ? '切换到浅色模式' : '切换到深色模式'}
        >
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {theme === 'dark' ? '🌙 深色' : '☀️ 浅色'}
          </span>
          <div className={`
            w-12 h-6 rounded-full transition-colors duration-300
            ${theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-300'}
          `}>
            <div className={`
              w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 mt-0.5
              ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'}
            `} />
          </div>
        </button>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-between w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 ripple micro-bounce"
          title={language === 'zh' ? 'Switch to English' : '切换到中文'}
        >
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {language === 'zh' ? '🇨🇳 中文' : '🇺🇸 English'}
          </span>
          <div className={`
            w-12 h-6 rounded-full transition-colors duration-300
            ${language === 'zh' ? 'bg-red-500' : 'bg-blue-500'}
          `}>
            <div className={`
              w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 mt-0.5
              ${language === 'zh' ? 'translate-x-0.5' : 'translate-x-6'}
            `} />
          </div>
        </button>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center justify-center w-full p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-all duration-200 ripple micro-bounce"
          title="回到顶部"
        >
          <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="ml-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            顶部
          </span>
        </button>
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fab magnetic hover-glow ripple
          ${isOpen ? 'rotate-45' : 'rotate-0'}
        `}
        title="设置"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          )}
        </svg>

        {/* Notification Badge for Settings */}
        <div className="notification-badge">
          2
        </div>
      </button>
    </div>
  );
};

export default FloatingControls;
