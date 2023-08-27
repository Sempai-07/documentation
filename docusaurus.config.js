// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Telegramsjs",
  tagline: "I welcome you all to this documentation",
  favicon: "img/telegramsjs.png",
  url: "https://docs-telegramsjs.surge.sh",
  baseUrl: "/",
  organizationName: "Sempai-07",
  projectName: "Telegramsjs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Sempai-07/telegramsjs-docs/tree/new",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/telegramsjs.jpg",
      announcementBar: {
        id: "join_us",
        content:
          'Like Telegramsjs? Join our <a target="_blank" rel="noopener noreferrer" href="https://t.me/sempaika_telegrams_js">Telegram chat</a>',
        backgroundColor: "#7494ec",
        textColor: "#FFFFFF",
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "telegramsjs",
        logo: {
          alt: "tsjs logo",
          src: "img/Telegramsjs.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Home",
          },
          {
            href: "https://github.com/Sempai-07/telegramsjs",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://npmjs.com/package/telegramsjs",
            label: "NPM",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "telegramsjs",
          src: "img/telegramsjs.png",
          href: "https://opensource.fb.com",
          width: 60,
          height: 60,
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                to: "/docs/home",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/sTznMCy6vy",
              },
              {
                label: "Telegram",
                href: "https://t.me/sempaika_telegrams_js",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Sempai-07/telegramsjs",
              },
            ],
          },
        ],
        copyright: `Sempai-07 © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
    // ... Your other plugins.
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
        searchResultLimits: 20
      },
    ],
  ],
};

module.exports = config;
