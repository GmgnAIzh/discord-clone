export interface Translation {
  nav: {
    download: string;
    nitro: string;
    discover: string;
    safety: string;
    quests: string;
    support: string;
    blog: string;
    developers: string;
    careers: string;
    login: string;
  };
  hero: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
    downloadMac: string;
    openBrowser: string;
  };
  sections: {
    makeGroupChats: {
      title1: string;
      title2: string;
      title3: string;
      description: string;
    };
    streamRoom: {
      title1: string;
      title2: string;
      title3: string;
      description: string;
    };
    hopIn: {
      title1: string;
      title2: string;
      title3: string;
      title4: string;
      description: string;
    };
    seeWhos: {
      title1: string;
      title2: string;
      title3: string;
      description: string;
    };
    alwaysHave: {
      title1: string;
      title2: string;
      title3: string;
      description: string;
    };
  };
  cta: {
    title1: string;
    title2: string;
    downloadLinux: string;
  };
  footer: {
    language: string;
    social: string;
    product: string;
    company: string;
    resources: string;
    policies: string;
    signup: string;
  };
  dropdowns: {
    safety: {
      familyCenter: { label: string; description: string };
      safetyLibrary: { label: string; description: string };
      safetyNews: { label: string; description: string };
      teenCharter: { label: string; description: string };
    };
    quests: {
      advertising: { label: string; description: string };
      successStories: { label: string; description: string };
      questsFaq: { label: string; description: string };
    };
    support: {
      helpCenter: { label: string; description: string };
      feedback: { label: string; description: string };
      submitRequest: { label: string; description: string };
    };
    blog: {
      featured: { label: string; description: string };
      community: { label: string; description: string };
      discordHq: { label: string; description: string };
      engineering: { label: string; description: string };
      howTo: { label: string; description: string };
      policy: { label: string; description: string };
    };
    developers: {
      socialSdk: { label: string; description: string };
      appsActivities: { label: string; description: string };
      docs: { label: string; description: string };
      applications: { label: string; description: string };
      helpCenter: { label: string; description: string };
    };
  };
}

export const translations: Record<'zh' | 'en', Translation> = {
  zh: {
    nav: {
      download: '下载',
      nitro: 'Nitro',
      discover: '发现',
      safety: '安全',
      quests: '任务',
      support: '支持',
      blog: '博客',
      developers: '开发者',
      careers: '招聘',
      login: '登录',
    },
    hero: {
      title1: '群聊',
      title2: '就是这么',
      title3: '有趣好玩',
      description: 'Discord 非常适合和朋友一起玩游戏聊天，甚至可以建立一个全球社区。自定义专属聊天空间，畅谈、游戏、一起玩耍。',
      downloadMac: '下载 Windows 版',
      openBrowser: '在浏览器中打开 Discord',
    },
    sections: {
      makeGroupChats: {
        title1: '让你的',
        title2: '群聊',
        title3: '更有趣',
        description: '使用自定义表情符号、贴纸、音效板等为你的语音、视频或文字聊天增添个性。设置头像和自定义状态，编写个人资料，以自己的方式在聊天中展现。',
      },
      streamRoom: {
        title1: '直播如同',
        title2: '身在',
        title3: '同一房间',
        description: '高质量低延迟的流媒体让你感觉就像和朋友坐在沙发上一起玩游戏、看节目、看照片，或者做作业什么的。',
      },
      hopIn: {
        title1: '有空就',
        title2: '随时进入',
        title3: '无需',
        title4: '打电话',
        description: '轻松进入和退出语音或文字聊天，无需打电话或邀请任何人，让你的聊天在游戏前、游戏中和游戏后持续进行。',
      },
      seeWhos: {
        title1: '看看谁',
        title2: '有空',
        title3: '一起玩',
        description: '看看谁在线、正在玩游戏或者只是闲逛。对于支持的游戏，你可以看到朋友正在玩什么模式或角色，直接加入。',
      },
      alwaysHave: {
        title1: '总有',
        title2: '事情可以',
        title3: '一起做',
        description: '看视频、玩内置游戏、听音乐，或者一起刷刷表情包。无缝地进行文字、语音、视频聊天和游戏，全部在一个群聊中。',
      },
    },
    cta: {
      title1: '你已经滑到底了。',
      title2: '不如去聊天吧。',
      downloadLinux: '下载 Windows 版',
    },
    footer: {
      language: '语言',
      social: '社交媒体',
      product: '产品',
      company: '公司',
      resources: '资源',
      policies: '政策',
      signup: '注册',
    },
    dropdowns: {
      safety: {
        familyCenter: { label: '家庭中心', description: '为家长和监护人提供的工具' },
        safetyLibrary: { label: '安全库', description: '了解 Discord 上的安全知识' },
        safetyNews: { label: '安全新闻', description: '最新安全更新' },
        teenCharter: { label: '青少年章程', description: '青少年用户指南' },
      },
      quests: {
        advertising: { label: '广告', description: '推广你的品牌' },
        successStories: { label: '成功案例', description: '查看成功的营销活动' },
        questsFaq: { label: '任务常见问题', description: '常见问题解答' },
      },
      support: {
        helpCenter: { label: '帮助中心', description: '找到问题的答案' },
        feedback: { label: '反馈', description: '分享你的想法' },
        submitRequest: { label: '提交请求', description: '获取个人帮助' },
      },
      blog: {
        featured: { label: '精选', description: '热门文章' },
        community: { label: '社区', description: '社区亮点' },
        discordHq: { label: 'Discord 总部', description: '公司更新' },
        engineering: { label: '工程与开发者', description: '技术内容' },
        howTo: { label: '如何使用 Discord', description: '技巧和教程' },
        policy: { label: '政策与安全', description: '安全和政策更新' },
      },
      developers: {
        socialSdk: { label: 'Discord 社交 SDK', description: '集成 Discord 功能' },
        appsActivities: { label: '应用和活动', description: '构建 Discord 应用' },
        docs: { label: '开发者文档', description: '技术指南' },
        applications: { label: '开发者应用', description: '管理你的应用' },
        helpCenter: { label: '开发者帮助中心', description: '获取开发帮助' },
      },
    },
  },
  en: {
    nav: {
      download: 'Download',
      nitro: 'Nitro',
      discover: 'Discover',
      safety: 'Safety',
      quests: 'Quests',
      support: 'Support',
      blog: 'Blog',
      developers: 'Developers',
      careers: 'Careers',
      login: 'Log In',
    },
    hero: {
      title1: 'GROUP CHAT',
      title2: "THAT'S ALL",
      title3: 'FUN & GAMES',
      description: 'Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.',
      downloadMac: 'Download for Windows',
      openBrowser: 'Open Discord in your browser',
    },
    sections: {
      makeGroupChats: {
        title1: 'MAKE YOUR',
        title2: 'GROUP CHATS',
        title3: 'MORE FUN',
        description: 'Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.',
      },
      streamRoom: {
        title1: 'STREAM LIKE',
        title2: "YOU'RE IN THE",
        title3: 'SAME ROOM',
        description: "High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.",
      },
      hopIn: {
        title1: 'HOP IN WHEN',
        title2: "YOU'RE FREE,",
        title3: 'NO NEED TO',
        title4: 'CALL',
        description: 'Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session.',
      },
      seeWhos: {
        title1: "SEE WHO'S",
        title2: 'AROUND TO',
        title3: 'CHILL',
        description: "See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.",
      },
      alwaysHave: {
        title1: 'ALWAYS HAVE',
        title2: 'SOMETHING TO',
        title3: 'DO TOGETHER',
        description: 'Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat.',
      },
    },
    cta: {
      title1: "YOU CAN'T SCROLL ANYMORE.",
      title2: 'BETTER GO CHAT.',
      downloadLinux: 'Download for Windows',
    },
    footer: {
      language: 'Language',
      social: 'Social',
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      policies: 'Policies',
      signup: 'Sign up',
    },
    dropdowns: {
      safety: {
        familyCenter: { label: 'Family Center', description: 'Tools for parents and caregivers' },
        safetyLibrary: { label: 'Safety Library', description: 'Learn about safety on Discord' },
        safetyNews: { label: 'Safety News', description: 'Latest safety updates' },
        teenCharter: { label: 'Teen Charter', description: 'Guidelines for teen users' },
      },
      quests: {
        advertising: { label: 'Advertising', description: 'Promote your brand' },
        successStories: { label: 'Success Stories', description: 'See successful campaigns' },
        questsFaq: { label: 'Quests FAQ', description: 'Common questions answered' },
      },
      support: {
        helpCenter: { label: 'Help Center', description: 'Find answers to your questions' },
        feedback: { label: 'Feedback', description: 'Share your thoughts' },
        submitRequest: { label: 'Submit a Request', description: 'Get personal help' },
      },
      blog: {
        featured: { label: 'Featured', description: 'Top articles' },
        community: { label: 'Community', description: 'Community highlights' },
        discordHq: { label: 'Discord HQ', description: 'Company updates' },
        engineering: { label: 'Engineering & Developers', description: 'Technical content' },
        howTo: { label: 'How to Discord', description: 'Tips and tutorials' },
        policy: { label: 'Policy & Safety', description: 'Safety and policy updates' },
      },
      developers: {
        socialSdk: { label: 'Discord Social SDK', description: 'Integrate Discord features' },
        appsActivities: { label: 'Apps and Activities', description: 'Build Discord apps' },
        docs: { label: 'Developer Documentation', description: 'Technical guides' },
        applications: { label: 'Developer Applications', description: 'Manage your apps' },
        helpCenter: { label: 'Developer Help Center', description: 'Get development help' },
      },
    },
  },
};

export type Language = keyof typeof translations;

export const getTranslation = (lang: Language): Translation => {
  return translations[lang] || translations.zh;
};
