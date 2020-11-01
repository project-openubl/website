module.exports = {
  title: "Project OpenUBL",
  tagline:
    "Open Source set of projects for helping you to use Universal Business Language (UBL)",
  url: "https://project-openubl.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "project-openubl", // Usually your GitHub org/user name.
  projectName: "project-openubl.github.io", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: "supportus",
      content:
        '⭐️ If you like Project OpenUBL, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/project-openubl">GitHub</a>! ⭐️',
    },
    navbar: {
      title: "Project OpenUBL",
      logo: {
        alt: "Project OpenUBL Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "xbuilder/index",
          label: "XBuilder",
          position: "left",
        },
        {
          type: "doc",
          docId: "xsender/index",
          label: "XSender",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        // right
        {
          href: "https://github.com/project-openubl",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "XBuilder",
              to: "docs/xbuilder/index/",
            },
            {
              label: "XSender",
              to: "docs/xsender/index/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UChq3xxjyDgjcU346rp0bbtA?view_as=subscriber",
            },
            {
              label: "Join the chat",
              href: "https://projectopenubl.zulipchat.com/join/iwvosgykfucbi2wqwfjg2rza/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/openubl",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/project-openubl",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project OpenUBL, Inc.`,
    },
    googleAnalytics: {
      trackingID: "UA-152706512-2",
    },
    gtag: {
      trackingID: "UA-152706512-2",
    },
    algolia: {
      apiKey: "YOUR_API_KEY",
      indexName: "YOUR_INDEX_NAME",

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap",
    "https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap",
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/project-openubl/website/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/project-openubl/website/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: "weekly",
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
  plugins: [],
};
