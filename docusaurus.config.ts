// 导入必要的依赖
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// 这是Node.js环境下运行的配置文件 - 不要使用客户端代码（浏览器API，JSX等）

const config: Config = {
  // 网站的基本信息配置
  title: 'Raptor',                           // 网站标题
  tagline: '', // 网站标语1
  favicon: 'img/favicon.ico',                      // 网站图标

  // 设置网站的生产环境URL
  url: 'https://your-docusaurus-site.example.com',
  // 设置网站的基础URL路径
  // 对于GitHub pages部署，通常是'/<projectName>/'
  baseUrl: '/',

  // GitHub pages 部署配置
  // 如果不使用GitHub pages，可以忽略这些配置
  organizationName: 'facebook', // 通常是你的GitHub组织/用户名
  projectName: 'docusaurus',    // 通常是你的仓库名

  // 链接检查配置
  onBrokenLinks: 'warn',        // 断开的链接处理方式：警告
  onBrokenMarkdownLinks: 'warn', // Markdown中断开链接的处理方式：警告

  // 国际化配置
  // 即使不使用国际化，也可以用这个字段设置有用的元数据
  // 例如，如果你的网站是中文的，可以将"en"替换为"zh-Hans"
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // 预设配置
  presets: [
    [
      'classic',
      {
        // 文档配置
        docs: {
          sidebarPath: './sidebars.ts',  // 侧边栏配置文件路径
          // 修改此处为你的仓库地址
          // 删除此项可以移除"编辑此页"链接
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // 博客配置
        blog: {
          showReadingTime: true,     // 显示阅读时间
          feedOptions: {             // RSS feed选项
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 修改此处为你的仓库地址
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 博客最佳实践强制选项
          onInlineTags: 'warn',      // 内联标签警告
          onInlineAuthors: 'warn',   // 内联作者警告
          onUntruncatedBlogPosts: 'warn', // 未截断博客文章警告
        },
        // 主题配置
        theme: {
          customCss: './src/css/custom.css', // 自定义CSS文件路径
        },
      } satisfies Preset.Options,
    ],
  ],

  // 主题配置
  themeConfig: {
    // 替换为你项目的社交卡片
    image: 'img/docusaurus-social-card.jpg',
    // 导航栏配置
    navbar: {
      title: 'Raptor',
      logo: {
        alt: 'Raptor Logo',
        src: 'img/Raptor200.png',
      },
      items: [
        // 文档链接
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Raptor World',
        },
        // 博客链接
        {to: '/blog', label: 'Blog', position: 'left'},
        // GitHub链接
        {
          href: 'https://github.com/raptor-io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // 页脚配置
    footer: {
      style: 'light',
      copyright: `Copyright ${new Date().getFullYear()}  Raptor`,
      links: [],
    },
    // 代码高亮主题配置
    prism: {
      theme: prismThemes.github,     // 亮色主题
      darkTheme: prismThemes.dracula,// 暗色主题
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
