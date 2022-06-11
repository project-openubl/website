import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Banner } from "../components/banner";
import { Header } from "../components/header";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          news {
            linkTitle
            linkURL
            shortTitle
            title
          }
        }
      }
    }
  `);

  return (
    <>
      <Banner {...data.site.siteMetadata.news} />
      <Header />
      {children}
    </>
  );
}
