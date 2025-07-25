'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import FloatingControls from '@/components/FloatingControls';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const NitroPage = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const nitroFeatures = [
    {
      icon: '⬆️',
      title: language === 'zh' ? '更大的文件上传' : 'Bigger File Uploads',
      description: language === 'zh' ? '上传最大 500MB 的文件，分享高质量内容' : 'Upload files up to 500MB and share high-quality content'
    },
    {
      icon: '🎨',
      title: language === 'zh' ? '自定义表情包' : 'Custom Emojis',
      description: language === 'zh' ? '在任何服务器使用自定义表情包和动画表情' : 'Use custom emojis and animated emojis anywhere'
    },
    {
      icon: '📺',
      title: language === 'zh' ? '高清屏幕共享' : 'HD Screen Share',
      description: language === 'zh' ? '1080p 60fps 的屏幕共享体验' : '1080p 60fps screen sharing experience'
    },
    {
      icon: '🎵',
      title: language === 'zh' ? '高质量音频' : 'High Quality Audio',
      description: language === 'zh' ? '享受无损音质的语音聊天' : 'Enjoy lossless audio quality voice chat'
    },
    {
      icon: '💎',
      title: language === 'zh' ? '服务器增强' : 'Server Boosts',
      description: language === 'zh' ? '获得服务器增强来解锁更多功能' : 'Get server boosts to unlock more features'
    },
    {
      icon: '👤',
      title: language === 'zh' ? '个人资料装饰' : 'Profile Decorations',
      description: language === 'zh' ? '使用动画头像和个人资料横幅' : 'Use animated avatars and profile banners'
    }
  ];

  return (
    <>
      <SEOHead
        title={language === 'zh' ? 'Discord Nitro - 解锁全新体验' : 'Discord Nitro - Unlock New Features'}
        description={language === 'zh' ? '升级到 Discord Nitro，享受更大文件上传、高清屏幕共享、自定义表情包等高级功能。' : 'Upgrade to Discord Nitro for bigger file uploads, HD screen sharing, custom emojis and more premium features.'}
      />
      <div className={`min-h-screen theme-transition ${
        theme === 'light'
          ? 'bg-gradient-to-br from-[#5865f2] via-[#7c3aed] to-[#ec4899]'
          : 'bg-gradient-to-br from-[#32379d] via-[#575ee1] to-[#4f46e5]'
      } text-white relative overflow-hidden`}>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/6 w-4 h-4 bg-blue-400 rounded-full float-animation"></div>
        </div>

        <Navbar />

        {/* Hero Section */}
        <section className="relative z-10 px-6 py-32 lg:py-40">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                💎 {language === 'zh' ? 'NITRO' : 'NITRO'}
              </div>
            </div>

            <h1 className="text-5xl lg:text-8xl font-black mb-8 gradient-text-animated">
              {language === 'zh' ? (
                <>升级你的<br />Discord 体验</>
              ) : (
                <>UPGRADE YOUR<br />DISCORD</>
              )}
            </h1>

            <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
              {language === 'zh'
                ? 'Discord Nitro 为你带来更大的文件上传、高清屏幕共享、自定义表情包和更多专属功能。'
                : 'Discord Nitro gives you bigger file uploads, HD screen sharing, custom emojis, and more exclusive features.'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 ripple micro-bounce magnetic shadow-2xl">
                {language === 'zh' ? '立即升级 Nitro' : 'Upgrade to Nitro'}
              </button>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {language === 'zh' ? '￥40/月' : '$9.99/month'}
                </div>
                <div className="text-sm opacity-80">
                  {language === 'zh' ? '随时可取消' : 'Cancel anytime'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black text-center mb-16 gradient-text-animated">
              {language === 'zh' ? 'Nitro 功能' : 'Nitro Features'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nitroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 advanced-card glass"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
              {language === 'zh' ? '功能对比' : 'Feature Comparison'}
            </h2>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 bg-white/5">
                <div></div>
                <div className="text-center font-bold">
                  {language === 'zh' ? '免费版' : 'Free'}
                </div>
                <div className="text-center font-bold text-yellow-400">
                  {language === 'zh' ? 'Nitro' : 'Nitro'}
                </div>
              </div>

              {[
                { feature: language === 'zh' ? '文件上传大小' : 'File Upload Size', free: '25MB', nitro: '500MB' },
                { feature: language === 'zh' ? '屏幕共享质量' : 'Screen Share Quality', free: '720p', nitro: '1080p 60fps' },
                { feature: language === 'zh' ? '自定义表情包' : 'Custom Emojis', free: '❌', nitro: '✅' },
                { feature: language === 'zh' ? '服务器增强' : 'Server Boosts', free: '0', nitro: '2' },
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-6 border-t border-white/10">
                  <div className="font-medium">{row.feature}</div>
                  <div className="text-center text-white/70">{row.free}</div>
                  <div className="text-center text-yellow-400 font-bold">{row.nitro}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">
              {language === 'zh' ? '准备好升级了吗？' : 'Ready to Upgrade?'}
            </h2>
            <p className="text-xl mb-12 opacity-90">
              {language === 'zh'
                ? '加入数百万用户，体验 Discord 的完整功能。'
                : 'Join millions of users experiencing Discord at its fullest.'
              }
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-5 rounded-full font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 ripple micro-bounce magnetic shadow-2xl">
              {language === 'zh' ? '开始免费试用' : 'Start Free Trial'}
            </button>
          </div>
        </section>

        <FloatingControls />
      </div>
    </>
  );
};

export default NitroPage;
