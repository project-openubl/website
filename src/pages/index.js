import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Open source</>,
    imageUrl: "img/opensource.png",
    description: (
      <>
        All projects under the umbrella of <i>Project OpenUBL</i> are and always
        be Open Source.
      </>
    ),
  },
  {
    title: <>Focus on making you productive</>,
    imageUrl: "img/developer.png",
    description: (
      <>
        All projects are focused on making you more productive and let you focus
        on your bussiness.
      </>
    ),
  },
  {
    title: <>For big and small companies</>,
    imageUrl: "img/company.png",
    description: (
      <>
        Project OpenUBL is focused in solving problem and it easily can be
        adapter to your company architecture regardless of the size of it.
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
      <h3>{title}</h3>
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
          <div className="row">
            <div className="col padding-top--lg">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div style={{ textAlign: "left", fontSize: "1.2rem" }}>
                <h2>Supported countries</h2>
                <ul>
                  <li>Perú</li>
                  <li>Request support for your country</li>
                </ul>
              </div>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    "button button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl(
                    "https://en.wikipedia.org/wiki/Universal_Business_Language"
                  )}
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="col text--center">
              <img alt="Wallpaper Logo" src="/img/boxes.png" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--5 padding-vert--xl">
                <div className="text--center">
                  <img alt="Declarative" src="/img/xbuilder-server-black.svg" />
                </div>
              </div>
              <div className="col col--5 col--offset-2 padding-vert--xl text--justify">
                <h2>Create XMLs</h2>
                <p>
                  You can use <strong>XBuilder</strong> for creating XML files
                  based on Universal Bussiness Language (UBL). If your software
                  is written in Java, then{" "}
                  <a
                    href="https://project-openubl.github.io/xbuilder-docs/"
                    target="_blank"
                  >
                    <strong>XBuilder</strong>
                  </a>{" "}
                  is the best option for you; on the other hand, if your
                  software is not written in Java you can use{" "}
                  <a
                    href="https://project-openubl.github.io/xbuilder-server-docs/"
                    target="_blank"
                  >
                    <strong>XBuilder Server</strong>
                  </a>{" "}
                  and then consume its REST endpoints.
                </p>
                <p>
                  <ul>
                    <li>
                      <a
                        href="https://project-openubl.github.io/xbuilder-docs/"
                        target="_blank"
                      >
                        XBuilder
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://project-openubl.github.io/xbuilder-server-docs/"
                        target="_blank"
                      >
                        XBuilder Server
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col col--5 padding-vert--xl text--justify">
                <h2>Send your XML files to SUNAT</h2>
                <p>
                  Superintendencia Nacional de Aduanas y de Administración
                  Tributaria, also known as SUNAT, is the organization which
                  enforces customs and taxation in Perú.
                </p>
                <p>
                  If your software is written in Java, then{" "}
                  <a
                    href="https://project-openubl.github.io/xsender-docs/"
                    target="_blank"
                  >
                    XSender
                  </a>{" "}
                  is the best option for you. On the other hand, if your
                  software is not written in Java or you want full automation
                  then
                  <a
                    href="https://project-openubl.github.io/xsender-server-docs/"
                    target="_blank"
                  >
                    XSender Server
                  </a>{" "}
                  is the best option for you.
                </p>
                <p>
                  <ul>
                    <li>
                      <a
                        href="https://project-openubl.github.io/xsender-docs/"
                        target="_blank"
                      >
                        XSender
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://project-openubl.github.io/xsender-server-docs/"
                        target="_blank"
                      >
                        XSender Server
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
              <div className="col col--5 col--offset-2 padding-vert--xl">
                <div className="text--center">
                  <img alt="Declarative" src="/img/xsender-server-black.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--5 col--offset-2">
                <h2>Youtube playlist</h2>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?list=PLnRgWcnYy6saOv7fR80bNAVUbOwwkjLIc"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
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
    </Layout>
  );
}

export default Home;
