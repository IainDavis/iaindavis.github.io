import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import copyStylesPlugin from './src/buildUtils/docusaurus/postBuild/copyStylesPlugin';
import removeTruncateMarker from './src/buildUtils/docusaurus/remark/removeTruncateMarker';

const  truncateRegex: RegExp = /\s*TRUNCATE_HERE\s*/;

const config: Config = {
  title: 'Iain Davis',
  tagline: 'Full-Stack Software Engineer',
  favicon: 'img/logo-favicon.svg',

  url: 'https://iaindavis.github.io',
  baseUrl: '/',

  organizationName: 'IainDavis', 
  projectName: 'iaindavis.github.io', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    copyStylesPlugin,
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogSidebarCount: 10,
          feedOptions: {
            type: 'rss',
            title: 'IainDavis.dev | Developer Blog',
            description: 'A Blog where I will document what I am working on and looking forward to as I develop my personal website',
            copyright: `Copyright © ${new Date().getFullYear()} Iain S. Davis. Built with Docusaurus.`,
          },
          truncateMarker: truncateRegex,
          remarkPlugins: [
            [ removeTruncateMarker, { regex: truncateRegex, } ],
          ],
          authorsMapPath: 'authors.yml',
          authorsBasePath: 'authors',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'IainDavis.dev',
      logo: {
        alt: 'IainDavis.dev compact logo',
        src: 'img/logo/logo-compact-light.svg',
        srcDark: 'img/logo/logo-compact-dark.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Projects'
        },
        {
          type: 'docSidebar',
          sidebarId: 'brandSidebar',
          position: 'left',
          label: 'Brand'
        },
        {
          to: '/blog',
          label: 'Blog'
        },
        {
          href: 'https://github.com/IainDavis',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Iain S. Davis Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      magicComments: [
        {
          className: 'code-block-diff-add-line',
          line: 'diff-add',
        },
        {
          className: 'code-block-diff-remove-line',
          line: 'diff-remove'
        }
      ]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
