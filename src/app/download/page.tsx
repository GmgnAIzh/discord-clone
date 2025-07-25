'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FloatingControls from '@/components/FloatingControls';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const DownloadPage = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [selectedPlatform, setSelectedPlatform] = useState('windows');

  const platforms = [
    {
      id: 'windows',
      name: 'Windows',
      icon: '🪟',
      versions: [
        { name: 'Windows 10/11', size: '95.2 MB', download: '#' },
        { name: 'Windows 7/8', size: '89.1 MB', download: '#' }
      ]
    },
    {
      id: 'mac',
      name: 'macOS',
      icon: '🍎',
      versions: [
        { name: 'macOS 10.13+', size: '78.4 MB', download: '#' },
        { name: 'Apple Silicon', size: '72.1 MB', download: '#' }
      ]
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: '🐧',
      versions: [
        { name: 'Ubuntu/Debian (.deb)', size: '85.7 MB', download: '#' },
        { name: 'CentOS/RHEL (.rpm)', size: '87.2 MB', download: '#' },
        { name: 'AppImage', size: '92.3 MB', download: '#' }
      ]
    },
    {
      id: 'mobile',
      name: language === 'zh' ? '移动端' : 'Mobile',
      icon: '📱',
      versions: [
        { name: 'iOS App Store', size: '', download: '#' },
        { name: 'Google Play', size: '', download: '#' },
        { name: 'APK', size: '45.2 MB', download: '#' }
      ]
    }
  ];

  const features = [
    {
      icon: '🎤',
      title: language === 'zh' ? '语音聊天' : 'Voice Chat',
      description: language === 'zh' ? '清晰的语音通话' : 'Crystal clear voice calls'
    },
    {
      icon: '📹',
      title: language === 'zh' ? '视频通话' : 'Video Calls',
      description: language === 'zh' ? '面对面交流' : 'Face-to-face communication'
    },
    {
      icon: '📺',
      title: language === 'zh' ? '屏幕共享' : 'Screen Share',
      description: language === 'zh' ? '分享你的屏幕' : 'Share your screen'
    },
    {
      icon: '💬',
      title: language === 'zh' ? '文字聊天' : 'Text Chat',
      description: language === 'zh' ? '实时消息传递' : 'Real-time messaging'
    }
  ];

  return (
    <>
      <SEOHead
        title={language === 'zh' ? 'Discord 下载 - 适用于所有平台' : 'Download Discord - Available for All Platforms'}
        description={language === 'zh' ? '下载 Discord 应用，支持 Windows、macOS、Linux、iOS 和 Android。免费使用，轻松与朋友保持联系。' : 'Download Discord app for Windows, macOS, Linux, iOS and Android. Free to use and stay connected with friends.'}
      />
      <div className={`min-h-screen theme-transition ${
        theme === 'light'
          ? 'bg-gradient-to-br from-[#5865f2] via-[#7c3aed] to-[#ec4899]'
          : 'bg-gradient-to-br from-[#32379d] via-[#575ee1] to-[#4f46e5]'
      } text-white relative overflow-hidden`}>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <Navbar />

        {/* Hero Section */}
        <section className="relative z-10 px-6 py-32 lg:py-40">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl lg:text-8xl font-black mb-8 gradient-text-animated">
              {language === 'zh' ? (
                <>下载<br />Discord</>
              ) : (
                <>DOWNLOAD<br />DISCORD</>
              )}
            </h1>

            <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
              {language === 'zh'
                ? '适用于所有设备和平台。无论你在哪里，都能与朋友保持联系。'
                : 'Available for all devices and platforms. Stay connected with friends wherever you are.'
              }
            </p>

            {/* Quick Download Buttons */}
            <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 ripple micro-bounce magnetic shadow-2xl flex items-center">
                🪟 {language === 'zh' ? '下载 Windows 版' : 'Download for Windows'}
              </button>
              <button className="bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-700 transition-all duration-300 ripple micro-bounce magnetic shadow-2xl flex items-center">
                🍎 {language === 'zh' ? '下载 Mac 版' : 'Download for Mac'}
              </button>
            </div>
          </div>
        </section>

        {/* Platform Selection */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
              {language === 'zh' ? '选择你的平台' : 'Choose Your Platform'}
            </h2>

            {/* Platform Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 ${
                    selectedPlatform === platform.id
                      ? 'bg-white text-gray-900 shadow-2xl scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <span className="text-2xl">{platform.icon}</span>
                  {platform.name}
                </button>
              ))}
            </div>

            {/* Platform Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12">
              {platforms.map((platform) => (
                selectedPlatform === platform.id && (
                  <div key={platform.id} className="fade-in-up">
                    <div className="text-center mb-8">
                      <div className="text-6xl mb-4">{platform.icon}</div>
                      <h3 className="text-3xl font-bold">{platform.name}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {platform.versions.map((version, index) => (
                        <div key={index} className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 advanced-card">
                          <h4 className="text-xl font-bold mb-2">{version.name}</h4>
                          {version.size && (
                            <p className="text-white/70 mb-4">{language === 'zh' ? '大小: ' : 'Size: '}{version.size}</p>
                          )}
                          <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg font-bold hover:from-green-300 hover:to-blue-400 transition-all duration-300 ripple">
                            {language === 'zh' ? '下载' : 'Download'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-16 gradient-text-animated">
              {language === 'zh' ? '为什么选择 Discord？' : 'Why Choose Discord?'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white/10 hover:bg-white/15 transition-all duration-300 advanced-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
              {language === 'zh' ? '系统要求' : 'System Requirements'}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  🪟 Windows
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Windows 7 SP1 {language === 'zh' ? '或更高版本' : 'or higher'}</li>
                  <li>• 2GB RAM</li>
                  <li>• 200MB {language === 'zh' ? '可用存储空间' : 'available storage'}</li>
                  <li>• {language === 'zh' ? '网络连接' : 'Internet connection'}</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  🍎 macOS
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li>• macOS 10.13 {language === 'zh' ? '或更高版本' : 'or higher'}</li>
                  <li>• 2GB RAM</li>
                  <li>• 200MB {language === 'zh' ? '可用存储空间' : 'available storage'}</li>
                  <li>• {language === 'zh' ? '网络连接' : 'Internet connection'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">
              {language === 'zh' ? '立即开始使用' : 'Get Started Today'}
            </h2>
            <p className="text-xl mb-12 opacity-90">
              {language === 'zh'
                ? '下载 Discord，加入数亿用户的全球社区。'
                : 'Download Discord and join the global community of millions.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 ripple micro-bounce magnetic shadow-2xl">
                {language === 'zh' ? '立即下载' : 'Download Now'}
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 ripple micro-bounce">
                {language === 'zh' ? '在浏览器中使用' : 'Use in Browser'}
              </button>
            </div>
          </div>
        </section>

        <FloatingControls />
      </div>
    </>
  );
};

export default DownloadPage;
