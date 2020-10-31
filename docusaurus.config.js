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
    navbar: {
      title: "Project OpenUBL",
      logo: {
        alt: "Project OpenUBL Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
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
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
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
  ],
  plugins: [
    "@docusaurus/plugin-google-analytics",
    "@docusaurus/plugin-google-gtag",
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
};
