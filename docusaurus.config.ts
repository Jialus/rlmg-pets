import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RLMG CUTE',
  tagline: 'Purrs, tail wags, and endless fun—our office in a nutshell!',
  favicon: 'img/rlmg-logo.ico',

  // Set the production url of your site here
  url: 'https://jialus.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rlmg-pets/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jialus', // Usually your GitHub org/user name.
  projectName: 'rlmg-pets', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // The following are all optional configurations
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/docs",
        indexBlog: true,
        indexPages: false,
        indexDocs: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/rlmg-logo.png',
    navbar: {
      title: 'RLMG',
      logo: {
        alt: 'RLMG Logo',
        src: 'img/rlmg-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'petSidebar',
          position: 'left',
          label: 'Pets',
        },
        {
          type: 'docSidebar',
          sidebarId: 'softwareSidebar',
          label: 'Software',
          position: 'left',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        {
          type: 'search',  // Add this line to show the search bar
          position: 'right', // You can adjust the position to 'left' or 'right'
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Useful Links',
          items: [
            {
              label: 'Company Website',
              href: 'https://www.rlmg.com/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/rlmg_media/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RLMG. All office furry friends are cute.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
