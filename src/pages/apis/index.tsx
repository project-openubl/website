import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import apiStyles from "./apis.module.css";
import ItemGrid from "../../components/GridItem";

const ApiList = [
  {
    title: "Searchpe",
    description: "Consulta RUC/DNI",
    Svg: require("../../../static/img/searchpe-logo.svg").default,
    style: apiStyles.apiSvg,
    link: "/apis/searchpe",
  },
];

function Header() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", apiStyles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Project OpenUBL APIs</h1>
        <p className="hero__subtitle">Empieza a contruir con OpenUBL</p>
      </div>
    </header>
  );
}

export default function Apis() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Project OpenUBL APIs"
      description="Project OpenUBL API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Project OpenUBL."
    >
      <Header />
      <main>
        <ItemGrid itemList={ApiList} className={apiStyles.apis} />
      </main>
    </Layout>
  );
}
