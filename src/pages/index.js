import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "XBuilder",
    imageUrl: "img/xbuilder-logo.svg",
    description: (
      <>
        Create XML files based on the Universal Bussiness Language (UBL).
        Supported documents: Invoices, Credit Notes, Debit Notes, Voided
        Document, SummaryDocument, etc.
      </>
    ),
  },
  {
    title: "XSender",
    imageUrl: "img/xsender-logo.svg",
    description: (
      <>
        Tools used for sending XML files based on UBL (Universal Bussiness
        Language) to Superintendencia Nacional de Aduanas y de Administración
        Tributaria (SUNAT, Perú). No SOAP knowledge required.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--6", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <a
              className={clsx(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              target="_blank"
              rel="noopener noreferrer"
              href="https://projectopenubl.zulipchat.com/join/iwvosgykfucbi2wqwfjg2rza/"
            >
              Join the chat
            </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <main style={{ padding: 80 }}>
        <section>
          <div className="container text--center">
            <div>
              <h2>Create and send XMLs based on UBL</h2>
              <p>
                You can use <strong>XBuilder</strong> for creating XML files and
                the <strong>XSender</strong> to send them to the SUNAT.
              </p>
            </div>
            <div className="row">
              <div className="col col--12">
                <div className="text--center">
                  <img alt="Declarative" src="img/xml-example.png" />
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
