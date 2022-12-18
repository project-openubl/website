// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Project OpenUBL",
  tagline: "Crea XMLs basados en UBL y después envíalos a la SUNAT",
  url: "https://project-openubl.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "project-openubl", // Usually your GitHub org/user name.
  projectName: "project-openubl.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-152706512-2",
        },
        gtag: {
          trackingID: "UA-152706512-2",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: "searchpe",
            spec: "static/openapi/searchpe/openapi.yaml",
            route: "/api/searchpe",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Project OpenUBL",
        logo: {
          alt: "Project OpenUBL",
          src: "img/project-openubl-logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Docs",
          },
          { to: "/apis", label: "API Reference", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://katacoda.com/openubl",
            label: "Training",
            position: "left",
          },
          {
            to: "/community/support",
            label: "Community",
            position: "left",
            activeBaseRegex: `/community/`,
          },
          // right
          {
            to: "about",
            label: "About",
            position: "right",
          },
          {
            href: "https://github.com/project-openubl",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
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
                label: "Crear XMLs",
                to: "docs/xbuilder/",
              },
              {
                label: "Enviar XMLs",
                to: "docs/xsender/",
              },
              {
                label: "Consulta RUC",
                to: "docs/searchpe/",
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
                label: "Facebook",
                href: "https://www.facebook.com/Openubl/",
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
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/project-openubl",
              },
              {
                label: "SUNAT guías y manuales",
                href: "https://cpe.sunat.gob.pe/node/88",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project OpenUBL, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash", "java", "scala", "php"],
      },
      algolia: {
        appId: "T6D5AOPGJ0",
        apiKey: "eb158900ba04825f922b4c8c934f502b",
        indexName: "project-openubl",
        contextualSearch: false,
      },
    }),

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap",
    "https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap",
  ],
  scripts: [
    {
      src: "https://project-openubl.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/o2joag/b/24/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=bd3ea422",
      async: true,
    },
  ],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/project-openubl-logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "img/project-openubl-logo.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "img/project-openubl-logo.png",
            color: "rgb(62, 204, 94)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "img/project-openubl-logo.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "community",
        path: "community",
        routeBasePath: "community",
        editUrl: ({ versionDocsDirPath, docPath }) => {
          return `https://github.com/project-openubl/website/edit/master/${versionDocsDirPath}/${docPath}`;
        },
        editCurrentVersion: true,
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],
};

module.exports = config;
