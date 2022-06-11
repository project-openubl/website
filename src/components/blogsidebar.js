import React from "react";

import FeaturedPosts from "../components/featuredposts";
import TagIndex from "../components/tagindex";

const BlogSidebar = () => {
  return (
    <>
      <hr className="mb-12 border border-base-300 md:hidden" />

      <div className="mb-8">
        <h2 className="my-4 border-b border-base-300 pb-2 text-xl md:text-base lg:text-lg font-semibold">
          Featured Posts
        </h2>
        <FeaturedPosts />
      </div>
      <div className="mb-8 md:sticky md:top-32">
        <h2 className="my-4 border-b border-base-300 pb-2 text-xl md:text-base font-semibold lg:text-lg">
          Filter by Topic
        </h2>
        <TagIndex />
      </div>
    </>
  );
};

export default BlogSidebar;
