module.exports = {
  title: "Project OpenUBL",
  tagline: "Crea XMLs basados en UBL y después envíalos a la SUNAT",
  url: "https://project-openubl.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  customFields: {
    description:
      "Herramientas para facturación electrónica. Project OpenUBL te ayudará a crear XMLs basados en UBL y después enviarlos a la SUNAT | Project OpenUBL",
  },
  organizationName: "project-openubl", // Usually your GitHub org/user name.
  projectName: "project-openubl.github.io", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: "supportus",
      content:
        '⭐️ Si te gusta Project OpenUBL, danos una estrella en <a target="_blank" rel="noopener noreferrer" href="https://github.com/project-openubl">GitHub</a>! ⭐️',
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
          to: "about",
          label: "About",
          position: "right",
        },
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
          title: "Documentación",
          items: [
            {
              label: "Crear XMLs",
              to: "docs/xbuilder/",
            },
            {
              label: "Enviar XMLs",
              to: "docs/xsender/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Youtube",
              href:
                "https://www.youtube.com/channel/UChq3xxjyDgjcU346rp0bbtA?view_as=subscriber",
            },
            {
              label: "Únete al chat",
              href:
                "https://projectopenubl.zulipchat.com/join/iwvosgykfucbi2wqwfjg2rza/",
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
      apiKey: "6e010168a70995156309a77c5164c443",
      indexName: "project-openubl",

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
