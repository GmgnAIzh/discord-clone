import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discord - 群聊就是这么有趣好玩",
  description: "Discord 非常适合和朋友一起玩游戏聊天，甚至可以建立一个全球社区。自定义专属聊天空间，畅谈、游戏、一起玩耍。",
  keywords: "Discord, 游戏聊天, 语音聊天, 视频通话, 社区, 免费下载, 群聊软件, 游戏语音",
  authors: [{ name: "Discord Clone" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Discord - 群聊就是这么有趣好玩",
    description: "Discord 非常适合和朋友一起玩游戏聊天，甚至可以建立一个全球社区。",
    type: "website",
    locale: "zh_CN",
    siteName: "Discord",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord - 群聊就是这么有趣好玩",
    description: "Discord 非常适合和朋友一起玩游戏聊天，甚至可以建立一个全球社区。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#32379d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//ext.same-assets.com" />
        <link rel="dns-prefetch" href="//ui-avatars.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
