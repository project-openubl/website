import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

import HomepageAnnouncementBar from "../components/HomepageAnnouncementBar";
import HomepagePosibilities from "../components/HomepagePosibilities";

import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={clsx(styles.HeaderHero)}>
          <div className={clsx("row", styles.TwoColumns, styles.reverse)}>
            <div
              className={clsx(
                "col text--center",
                styles.column,
                styles.first,
                styles.right
              )}
            >
              <img
                alt="Project OpenUBL"
                src="img/project-openubl-logo.png"
                style={{ height: 209 }}
              />
            </div>
            <div
              className={clsx("col", styles.column, styles.last, styles.left)}
            >
              <h1 className="hero__title">
                <Translate>Facturación Electrónica Open Source</Translate>
              </h1>
              <p className="hero__subtitle">
                <Translate>De desarrolladores para desarrolladores</Translate>
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/"
                >
                  <Translate>Documentación</Translate>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}: Crea XMLs basados en UBL y después envíalos a la SUNAT`}
      description="Herramientas open source para facturación electrónica. Project OpenUBL te ayuda a crear XMLs basados en UBL y después enviarlos a la SUNAT | Project OpenUBL"
    >
      <HomepageHeader />
      <main>
        <HomepageAnnouncementBar />
        <HomepageFeatures />
        <HomepagePosibilities />
      </main>
    </Layout>
  );
}
