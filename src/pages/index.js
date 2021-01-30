import React from "react";
import clsx from "clsx";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Open Source",
    imageUrl: "img/undraw_open_source_1qxw.svg",
    description: (
      <>
        Todos los proyectos dentro de <i>Project OpenUBL</i> son Open Source.
      </>
    ),
  },
  {
    title: "Coge solo lo que necesitas",
    imageUrl: "img/undraw_Choose_bwbs.svg",
    description: (
      <>
        <i>Project OpenUBL</i> está diseñado para no obligarte a "todo o nada".
        Ya sea que desees solamente crear XMLs o solamente enviar XMLs{" "}
        <i>Project OpenUBL</i> te permite hacerlo.
      </>
    ),
  },
  {
    title: "Híbrido",
    imageUrl: "img/undraw_server_q2pb.svg",
    description: (
      <>
        Sin importar el lenguaje de programación en el que esté hecho tu
        software, siempre podrás integrar tu software con <i>Project OpenUBL</i>
      </>
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
            Herramientas Open Source para la Facturación Electrónica
          </h2>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
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
              Únete al chat
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
        <section className="margin-bottom--xl">
          <div className="container text--center">
            <div className="row">
              <div className="col col--4">
                <div>
                  <img
                    className={styles.logoImage}
                    src="img/xbuilder-logo.svg"
                  />
                </div>
                <h3>XBuilder</h3>
                <p>
                  <Link to="docs/xbuilder">XBuilder</Link> te permite{" "}
                  <strong>crear y firmar XMLs</strong> basados en UBL según los
                  estándares de la{" "}
                  <a
                    href="http://www.sunat.gob.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SUNAT
                  </a>
                  . Soporte para boletas, facturas, notas de crédito, notas de
                  débito, bajas, resúmenes diarios, etc.
                </p>
              </div>
              <div className="col col--4">
                <div>
                  <img
                    className={styles.logoImage}
                    src="img/xsender-logo.svg"
                  />
                </div>
                <h3>XSender</h3>
                <p>
                  <Link to="docs/xsender">XSender</Link> te permite{" "}
                  <strong>enviar XMLs</strong> a la{" "}
                  <a
                    href="http://www.sunat.gob.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SUNAT
                  </a>{" "}
                  o cualquier OSE haciendo uso de sus servicios web SOAP. No
                  necesitas saber SOAP, <a href="docs/xsender">XSender</a> lo
                  hace todo automáticamente por ti.
                </p>
              </div>
              <div className="col col--4">
                <div>
                  <img
                    className={styles.logoImage}
                    src="img/xsender-logo.svg"
                  />
                </div>
                <h3>XSender</h3>
                <p>
                  <Link to="docs/xsender">XSender</Link> te permite{" "}
                  <strong>enviar XMLs</strong> a la{" "}
                  <a
                    href="http://www.sunat.gob.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SUNAT
                  </a>{" "}
                  o cualquier OSE haciendo uso de sus servicios web SOAP. No
                  necesitas saber SOAP, <a href="docs/xsender">XSender</a> lo
                  hace todo automáticamente por ti.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container text--center">
            <div>
              <h2>
                Crea tu propio software de Facturación Electrónica usando las
                librerias y herramientas de Project OpenUBL
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
