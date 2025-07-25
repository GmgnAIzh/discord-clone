'use client';

import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟加载进度
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="flex flex-col items-center space-y-8">
        {/* Discord Logo */}
        <div className="relative">
          <img
            src="https://ext.same-assets.com/1695138707/1651483769.svg"
            alt="Discord"
            className="w-16 h-16 animate-pulse"
          />
          <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 typewriter">
            Discord 正在加载...
          </h2>
          <p className="text-white/80 text-sm">
            群聊就是这么有趣好玩
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64">
          <div className="progress-bar">
            <div
              className="progress-fill transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="text-center mt-2 text-sm text-white/60">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading Animation */}
        <div className="spinner loading-spinner"></div>

        {/* Loading Tips */}
        <div className="text-center max-w-md">
          <p className="text-xs text-white/50">
            💡 小贴士：Discord 支持语音、视频聊天和屏幕共享
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
