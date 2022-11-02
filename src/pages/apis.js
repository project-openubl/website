import * as React from "react";

import { ReactComponent as SearchpeBanner } from "../images/searchpe-logo.svg";
import { ReactComponent as UblhubBanner } from "../images/ublhub-logo.svg";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApisPage = () => {
  const [schema, setSchema] = React.useState();

  const apis = [
    {
      title: "Searchpe",
      desc: "Consulta el DNI o RUC de cualquier persona natural o jurídica registrada en el territorio peruano. La información es obtenida del padrón reducido de la SUNAT.",
      Icon: SearchpeBanner,
      schema: require("../openapi/searchpe/openapi.yaml"),
    },
    {
      title: "Ublhub",
      desc: "Admnistra tus archivos XML. Crea, envia y almacena tus comprobantes electronicos y decláralos a la SUNAT.",
      Icon: UblhubBanner,
      schema: require("../openapi/ublhub/openapi.yaml"),
    },
  ];

  return (
    <div className="bg-white">
      <section className="pt-12 pb-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        {schema ? (
          <SwaggerUI spec={schema} />
        ) : (
          <>
            <div className="text-center">
              <h1 className="text-3xl text-gray-800 font-semibold">API</h1>
              <p className="mt-3 text-gray-500">
                Utiliza nuestros REST endpoints para integrar tu software con
                nuestras herramientas.
              </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {apis.map(({ api, title, desc, schema, Icon }, key) => (
                <article
                  className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
                  key={key}
                >
                  <button onClick={() => setSchema(schema)}>
                    {<Icon className="w-full h-48 rounded-t-md p-4" />}
                    <div className="pt-3 ml-4 mr-2 mb-3">
                      <h3 className="text-xl text-gray-900">{title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{desc}</p>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default ApisPage;
