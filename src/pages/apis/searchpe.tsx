import React from "react";
import Layout from "@theme/Layout";
import ApiReference from "../../components/ApiReference";

export default function ApiReferencePage() {
  return (
    <Layout
      title={`Searchpe API Reference`}
      description="Everything you'll need to start working with our Searchpe API."
    >
      <ApiReference spec="/openapi/searchpe/openapi.yaml" color="#00bf8c" />
    </Layout>
  );
}
