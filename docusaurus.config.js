// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SPTechBlogs",
  tagline: "Shivam Pawar's Blog",
  url: "https://shivam-pawar.github.io",
  baseUrl: "/sptechblogs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
  favicon: "img/logonav.png",
  organizationName: "shivam-pawar",
  projectName: "sptechblogs",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: [
    {
      src: "/sptechblogs/js/loadtags.js",
      async: false,
    },
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-J12Q30FK82",
      async: true,
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/shivam-pawar/sptechblogs/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.9,
          filename: "sitemap.xml",
        },
        googleAnalytics: {
          trackingID: "G-CCPEFZV5Q8",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: "G-CCPEFZV5Q8",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SPTechBlogs",
        logo: {
          alt: "SPTechBlogs",
          src: "img/logonav.png",
          className: "custom-navbar-logo-class",
        },
        items: [
          { to: "/about", label: "About", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/contact", label: "Contact", position: "left" },

          {
            href: "https://github.com/shivam-pawar/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/12633305/shivam-pawar",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/shivam-prakash-pawar/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Shivampawar1038/",
              },
              {
                label: "Dev.to",
                href: "https://dev.to/shivampawar",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/shivam-pawar/",
              },
              {
                to: "/privacypolicy",
                label: "Privacy Policy",
                position: "right",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Build with ❤️ in Pune, India`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
