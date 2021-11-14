import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: "XBuilder",
    Svg: require("../../static/img/undraw_open_source_1qxw.svg").default,
    description: (
      <Translate>
        Crea y firma electrónicamente archivos XMLs basados en UBL y los
        estándares de la SUNAT. Soporte para boletas, facturas, notas de
        crédito, notas de débito, etc.
      </Translate>
    ),
  },
  {
    title: "XSender",
    Svg: require("../../static/img/undraw_Choose_bwbs.svg").default,
    description: (
      <Translate>
        Envía tus comprobantes electrónicos (archivos XML) a la SUNAT/OSE de
        manera sensilla y segura.
      </Translate>
    ),
  },
  {
    title: "Searchpe",
    Svg: require("../../static/img/undraw_server_q2pb.svg").default,
    description: (
      <Translate>
        Consulta el DNI o RUC de cualquier persona natural o jurídica registrada
        en el territorio peruano. La información es obtenida del padrón reducido
        de la SUNAT.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
