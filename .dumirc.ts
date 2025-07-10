import { defineConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';


function generateNavItems() {
  const navItems = [
    { title: '指南', link: '/guide' }, 
    { title: 'Hooks', link: '/components/use-lock-fn' },
  ];

  // 如果是开发环境，插入 Playground 链接
  if (isDev) {
    navItems.push({ title: 'Playground', link: '/playground' });
  }

  // 添加 GitHub 链接
  navItems.push({ title: 'GitHub', link: 'https://github.com/shengzhangchen/use-hooks' });

  return navItems;
}


export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'use-hooks',
    footer: 'Copyright © 2025-present shengzhangchen',
    showLineNum: true,
    nav: generateNavItems(), 
    socialLinks: {
      github: 'https://github.com/Arktomson/use-hooks'
    }
  },
  styles: [
    `.dumi-default-sidebar .dumi-default-sidebar-group dt { font-size: 20px; text-transform: none; }`,
  ],
  base: '/use-hooks/',
  publicPath: '/use-hooks/',
});
