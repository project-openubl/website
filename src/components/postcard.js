import React from "react";
import { Link } from "gatsby";
import HeroImage from "./hero-image";

const PostCard = ({ post, condensed }) => {
  const url = `/blog${post.fields.slug}`;

  return (
    <>
      <div className={condensed ? "" : "md:first:col-span-2"}>
        <article className="mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
          <Link
            to={url}
            className="shadow-post hover:shadow-post-hover flex flex-col bg-base-100 h-full p-4 group rounded-lg focus:ring-2 focus:ring-primary-400"
          >
            <HeroImage
              className="before:text-transparent before:absolute before:pointer-events-none before:z-[1] before:w-full before:h-full before:shadow-image before:rounded-md relative rounded-md overflow-hidden"
              image={post.frontmatter.image}
            />
            <div className="flex items-center mt-2 pt-3 ml-2 mr-2">
              <div className="ml-3">
                <span className="block text-gray-900">
                  {post.frontmatter.date}
                </span>
              </div>
            </div>
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">
                {post.frontmatter.title}
              </h3>
              {condensed !== true && (
                <p className="line-clamp-3">
                  {post.frontmatter.description
                    ? post.frontmatter.description
                    : post.excerpt}
                </p>
              )}
            </div>
          </Link>
        </article>
      </div>
    </>
  );
};

export default PostCard;
