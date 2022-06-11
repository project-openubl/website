import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

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
    <div className="bg-gray-50">
      <Banner {...data.site.siteMetadata.news} />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
