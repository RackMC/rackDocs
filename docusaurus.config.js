// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RackMC',
  tagline: 'A Minecraft Server Network',
  url: 'https://docs.rackmc.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/r1.ico',
  organizationName: 'RackMC', // Usually your GitHub org/user name.
  projectName: 'rackDocs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/RackMC/rackDocs/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/RackMC/rackDocs/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({ announcementBar: {
      id: 'support_us',
      content:
        'Site is a work in progress, please be patient',
      backgroundColor: '#C175ED',
      textColor: '#ffffff', 
      isCloseable: true,
    },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        
        title: 'RackMC',
        logo: {
          alt: 'RackMC Logo',
          src: 'img/r1.png',
        },
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/staff',
            label: 'Staff',
            position: 'left',
          },
          {
            to: '/rules',
            label: 'Rules',
            position: 'left',
          },
          {
            href: 'https://store.rackmc.net',
            label: 'Store',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Factions',
                to: '/docs/factions-basics',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/PyeT9Dk2Dp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/rackmcnetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RackMC/rackDocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RackMC`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;