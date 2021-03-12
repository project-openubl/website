import React from "react";
import clsx from "clsx";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

const features = [
  {
    title: "XBuilder",
    imageUrl: "img/undraw_open_source_1qxw.svg",
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
    imageUrl: "img/undraw_Choose_bwbs.svg",
    description: (
      <Translate>
        Envía tus comprobantes electrónicos (archivos XML) a la SUNAT/OSE de
        manera sensilla y segura.
      </Translate>
    ),
  },
  {
    title: "Searchpe",
    imageUrl: "img/undraw_server_q2pb.svg",
    description: (
      <Translate>
        Consulta el RUC de cualquier persona jurídica en el territorio peruano.
        La información es obtenida del padrón reducido de la SUNAT.
      </Translate>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.tagline}
      description={siteConfig.customFields.description}
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            alt="Project OpenUBL"
            src="img/project-openubl-logo.png"
            style={{ height: 100 }}
          />
          <h2 className="hero__title">
            <Translate>
              Herramientas Open Source para la Facturación Electrónica
            </Translate>
          </h2>
          <p className="hero__subtitle">
            <Translate>De desarrolladores para desarrolladores</Translate>
          </p>
          <div className={styles.buttons}>
            <a
              className={clsx(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              target="_blank"
              rel="noopener noreferrer"
              href="https://projectopenubl.zulipchat.com/"
            >
              <Translate>Únete al chat</Translate>
            </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={classnames("margin-bottom--xl", styles.features)}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section>
          <div className="container text--center">
            <div>
              <h2>
                <Translate>
                  Crea tu propio software de facturación electrónica.
                </Translate>
              </h2>
            </div>
            <div className="row">
              <div className="col col--6">
                <div>
                  <img src="img/undraw_software_engineer_lvl5.svg" />
                </div>
              </div>
              <div className="col col--6">
                <div>
                  <img src="img/xml-example.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
