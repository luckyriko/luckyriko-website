export const site = {
  name: "幸运理子",
  nameEn: "LuckyRiko",
  slogan: "TECH OTAKUS SAVE THE WORLD",
  sloganZh: "技术宅拯救世界",
  url: "https://www.luckyriko.com",
  description:
    "幸运理子致力于为用户提供美好的、超出预期的产品与内容，以原创 IP 打造游戏、动画、音乐及多元文化产品。",
  locale: "zh-CN",
  nav: [
    { label: "首页", href: "/", section: "home" },
    { label: "产品信息", href: "/products", section: "products" },
    { label: "了解我们", href: "/about", section: "about" },
    { label: "加入我们", href: "/careers", section: "careers" },
    { label: "新闻动态", href: "/news", section: "news" },
  ],
  social: [
    { label: "角色对话", href: "https://chat.luckyriko.com/" },
    { label: "招聘官网", href: "https://jobs.luckyriko.com/" },
  ],
  footerLinks: [
    { label: "产品信息", href: "/products" },
    { label: "了解我们", href: "/about" },
    { label: "加入我们", href: "/careers" },
    { label: "新闻动态", href: "/news" },
  ],
} as const;
