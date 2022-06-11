import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID || "T6D5AOPGJ0",
  process.env.GATSBY_ALGOLIA_SEARCH_KEY || "eb158900ba04825f922b4c8c934f502b"
);

export const Search = () => {
  return (
    <InstantSearch indexName="project-openubl" searchClient={searchClient}>
      <SearchBox className="hidden"/>
    </InstantSearch>
  );
};
