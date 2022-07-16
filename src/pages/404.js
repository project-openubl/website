import React from "react";

const NotFoundPage = () => (
  <div className="max-w-screen-md page-wrapper my-6 text-center flex flex-col h-full items-center justify-center">
    <div className="my-8 border-2 rounded-lg border-base-400 px-6 py-16 space-y-4 ">
      <h1 className="font-headings font-bold text-3xl tracking-wide">
        Page not Found
      </h1>
      <p>
        You just hit a route that doesn&#39;t exist. If the content has been
        moved, try using the search bar to find it.
      </p>
    </div>
  </div>
);

export default NotFoundPage;
