import * as React from "react";
import { graphql, Link } from "gatsby";

import { ReactComponent as XBuilderBanner } from "../images/xbuilder-logo.svg";
import { ReactComponent as XSenderBanner } from "../images/xsender-logo.svg";
import { ReactComponent as SearchpeBanner } from "../images/searchpe-logo.svg";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  const zulip = data.site.siteMetadata.socialMedia.find(
    (e) => e.platform === "zulip"
  );

  const posts = [
    {
      title: "XBuilder",
      desc: "Crea y firma electrónicamente archivos XMLs basados en UBL y los estándares de la SUNAT. Soporte para boletas, facturas, notas de crédito, notas de débito, etc.",
      Icon: XBuilderBanner,
      href: "/docs/xbuilder",
    },
    {
      title: "XSender",
      desc: "Envía tus comprobantes electrónicos (archivos XML) a la SUNAT/OSE de manera sensilla y segura.",
      Icon: XSenderBanner,
      href: "/docs/xsender",
    },
    {
      title: "Searchpe",
      desc: "Consulta el DNI o RUC de cualquier persona natural o jurídica registrada en el territorio peruano. La información es obtenida del padrón reducido de la SUNAT.",
      Icon: SearchpeBanner,
      href: "/docs/searchpe",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gray-900">
        <section className="mx-auto max-w-screen-xl pt-12 pb-12 px-4 items-center lg:flex md:px-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
              Facturación electrónica
              <span className="text-indigo-400">&nbsp;Open Source</span>
            </h1>
            <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
              Hecho por desarrolladores, para desarrolladores. Incrementa tu
              productividad sin reinventar la rueda una y mil veces
            </p>
            <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <Link
                to="/docs"
                className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
              >
                Documentación
              </Link>
              <Link
                href={zulip.url}
                className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
              >
                Chatea con nosotros
              </Link>
            </div>
          </div>
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <StaticImage
              src="../images/cta1.png"
              className="w-full mx-auto sm:w-10/12 lg:w-full"
              alt="Image"
            />
          </div>
        </section>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1">
        <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl text-gray-800 font-semibold">Productos</h1>
            <p className="mt-3 text-gray-500">
              Todos nuestros productos son Open Source y pueden ser descargados
              gratuitamente.
            </p>
          </div>
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ title, desc, href, Icon }, key) => (
              <article
                className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
                key={key}
              >
                <a href={href}>
                  {<Icon className="w-full h-48 rounded-t-md p-4" />}
                  <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-gray-900">{title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{desc}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-sec relative max-w-screen-xl mx-auto py-4 px-4 sm:px-8 mt-20 mb-20">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
          <div className="relative z-10 gap-5 items-center lg:flex">
            <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
              <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                Tu propio software de{" "}
                <span className="text-indigo-600">facturación electrónica</span>
              </h3>
              <p className="text-gray-500 leading-relaxed mt-3">
                Utiliza las herramientas que te ofrece Project OpenUBL y úsalas
                para crear tu propio software de facturación electrónica
                adaptado a tu medida.
              </p>
              <Link
                className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                to="/docs"
              >
                Try it out
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-1 duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
              <img
                src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>

          <style jsx="true">{`
            .cta-sec {
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            }
          `}</style>
        </section>
      </div>
    </div>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        socialMedia {
          platform
          title
          url
        }
      }
    }
  }
`;

export default IndexPage;
