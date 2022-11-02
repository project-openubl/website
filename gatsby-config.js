const buildEnv = process.env.GATSBY_BUILD_ENV
  ? process.env.GATSBY_BUILD_ENV
  : process.env.NODE_ENV;
const pathPrefix = process.env.GATSBY_PATH_PREFIX;

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    title: `Project OpenUBL Community`,
    siteUrl: `https://project-openubl.github.io`,
    description: `Open Source que incluye un conjunto de herramientas, librerias, microservicios asociados a la Facturación Electrónica en el Perú.`,
    author: "Project OpenUBL Community",
    twitterCreator: "openubl",
    image: "/images/home-social-media.jpg",
    postsPerPage: 7,
    news: {
      title:
        "!Buenas noticias! Estamos felices de anunciar nuestra nueva página web.",
      shortTitle: "!Tenemos página web nueva!",
      linkTitle: "Conoce más",
      linkURL: "https://project-openubl.github.io//blog",
    },
    socialMedia: [
      {
        platform: "zulip",
        url: "https://projectopenubl.zulipchat.com/",
        title: "Únete en Zulip",
      },
      {
        platform: "github",
        url: "https://github.com/project-openubl",
        title: "Visita nuestros repositorios en GitHub",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/openubl",
        title: "Conéctate con nosotros en Twitter",
      },
    ],
    products: {
      xbuilder: [
        {
          title: "XBuilder",
          description:
            "Crea y firma electrónicamente archivos XMLs basados en UBL y los estándares de la SUNAT. Soporte para boletas, facturas, notas de crédito, notas de débito, etc.",
          version: "2.0.0.Alpha4",
          downloadURL:
            "https://mvnrepository.com/artifact/io.github.project-openubl/xbuilder",
        },
        {
          title: "XSender",
          description:
            "Envía tus comprobantes electrónicos (archivos XML) a la SUNAT/OSE de manera sensilla y segura.",
          version: "3.0.3.Final",
          downloadURL:
            "https://mvnrepository.com/artifact/io.github.project-openubl/xsender",
        },
        {
          title: "Searchpe",
          description:
            "Consulta el DNI o RUC de cualquier persona natural o jurídica registrada en el territorio peruano. La información es obtenida del padrón reducido de la SUNAT.",
          version: "v4.0.0",
          downloadURL:
            "https://github.com/project-openubl/searchpe/releases/tag/v4.0.0",
          containerRegistry:
            "https://quay.io/repository/projectopenubl/searchpe?tab=tags",
        },
      ],
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-152706512-2",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Project OpenUBL Community",
        short_name: "OpenUBL",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/content/blog`,
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "openapi",
        path: `${__dirname}/src/openapi`,
      },
      __key: "openapi",
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-svgr",
    "gatsby-plugin-layout",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => buildEnv,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: "/" }],
            sitemap: null,
            host: null,
          },
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
                disallow: ["/tags/"],
              },
            ],
          },
        },
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          pages: require.resolve("./src/templates/page.js"),
        },
        gatsbyRemarkPlugins: [],
      },
    },
    "gatsby-awesome-pagination",
    {
      resolve: "@gatsby-contrib/gatsby-plugin-elasticlunr-search",
      options: {
        // Fields to index
        fields: ["title", "description", "tags", "content"],
        // How to resolve each field"s value for a supported node type
        resolvers: {
          Mdx: {
            title: (node) => node.frontmatter.title,
            slug: (node) => node.fields.slug,
            description: (node) => node.frontmatter.description,
            tags: (node) => node.frontmatter.tags,
            content: (node) => node.rawBody,
            hidefromsearch: (node) => node.frontmatter.hidefromsearch,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.hidefromsearch !== true,
      },
    },
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: "project-openubl",
        queries: require("./src/utils/algolia"),
        chunkSize: 10000,
      },
    },
  ],
};
