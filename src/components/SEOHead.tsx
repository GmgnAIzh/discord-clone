import Head from 'next/head';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = '/discord-og-image.jpg',
  url = 'https://same-6ciubvgfcsp-latest.netlify.app'
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const defaultTitle = language === 'zh'
    ? 'Discord - 群聊就是这么有趣好玩'
    : 'Discord - Group Chat That\'s All Fun & Games';

  const defaultDescription = language === 'zh'
    ? 'Discord 非常适合和朋友一起玩游戏聊天，甚至可以建立一个全球社区。自定义专属聊天空间，畅谈、游戏、一起玩耍。免费下载，支持语音、视频聊天。'
    : 'Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out. Free voice, video and text chat.';

  const defaultKeywords = language === 'zh'
    ? 'Discord, 游戏聊天, 语音聊天, 视频通话, 社区, 免费下载, 群聊软件, 游戏语音'
    : 'Discord, gaming chat, voice chat, video calls, community, free download, group chat, gaming voice';

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Discord Clone" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language === 'zh' ? 'zh-CN' : 'en'} />

      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content={theme === 'dark' ? '#32379d' : '#5865f2'} />
      <meta name="color-scheme" content={theme} />

      {/* Apple Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Discord" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === 'zh' ? 'zh_CN' : 'en_US'} />
      <meta property="og:site_name" content="Discord" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@discord" />

      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="origin-when-cross-origin" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//ext.same-assets.com" />
      <link rel="dns-prefetch" href="//ui-avatars.com" />

      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Discord",
            "description": pageDescription,
            "url": url,
            "applicationCategory": "CommunicationApplication",
            "operatingSystem": ["Windows", "macOS", "Linux", "iOS", "Android"],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "Discord Inc."
            }
          })
        }}
      />

      {/* Performance Hints */}
      <link rel="preload" href="/fonts/whitney-medium.woff2" as="font" type="font/woff2" crossOrigin="" />

      {/* Critical CSS */}
      <style jsx>{`
        /* Critical above-the-fold styles */
        body {
          margin: 0;
          font-family: 'Whitney', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
        }

        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(132deg, #32379d 0%, #575ee1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-left: 4px solid #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Head>
  );
};

export default SEOHead;
