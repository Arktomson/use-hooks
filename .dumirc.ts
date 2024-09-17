import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'use-hooks',
    footer: 'Copyright © 2024-present shengzhangchen',
    showLineNum: true,
    nav: [
      { title: '指南', link: '/guide' },
      { title: 'Hooks', link: '/components/use-lock-fn' },
    ],
  },
  styles: [
    `.dumi-default-sidebar .dumi-default-sidebar-group dt { font-size: 20px; text-transform: none; }`,
  ],
  base: './',
  publicPath: './',
});
