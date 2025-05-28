// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)  

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pacific Cinemas',
  tagline: 'Onde a magia do cinema ganha vida.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Pacific-Cinema-Site/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Guga212006', // Usually your GitHub org/user name.
  projectName: 'Pacific-Cinema-Site', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
          
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
        alt: 'Pacific Cinemas Logo',
        src: 'img/Logo.png',
        },
        items: [
          { 
            to: '/docs/filmes', label: '🎬 Filmes', position: 'left'
          },
          { 
            to: '/app', label: '📱 Aplicação', position: 'left'
          },
          { 
            to: '/faq', label: '🗒️ FAQ', position: 'left'
          },
          {
            to: '/about', label: 'ℹ️ Sobre Nós', position: 'left'
          },
          {
            href: 'https://github.com/Guga212006/Pacific-Cinema-Site/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pacific Cinemas',
            items: [
              {
                label: 'Aplicação',
                to: '/app',
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
              {
                label: 'Sobre Nós',
                to: '/about',
              },
            ],
          },
          {
            title: 'Filmes',
            items: [
              {
                label: 'Em Cartaz',
                to: '/docs/filmes',
              },
            ],
          },
          {
            title: 'Repositórios',
            items: [
              {
                label: 'Pacific Cinemas Site',
                href: 'https://github.com/Guga212006/Pacific-Cinema-Site/',
              },
              {
                label: 'Pacific Cinemas App',
                href: 'https://github.com/Guga212006/Pacific-Cinema',
              }
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Pacific Cinemas. Todos os direitos reservados.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
