const mdxQuery = `{
  pages: allMdx(
    filter: {
      filter: { internal: { contentFilePath: { regex: "/docs/" } } }
    }
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          description
          subtitle
          tags
          title
          keywords
        }
        rawBody
      }
    }
  }
}`;

const unnestFrontmatter = (node) => {
  const { frontmatter, ...rest } = node;

  return {
    ...frontmatter,
    ...rest,
  };
};

const handleRawBody = (node) => {
  // We want to split `rawBody` from the node
  const { rawBody, ...rest } = node;

  // To improve search with smaller record sizes, we will divide all
  // blog posts into sections (essentially by paragraph).

  // Since the body of my posts is markdown, we will split
  // whereever there are two adjacent new lines, this is a
  // reasonable proxy for paragraphs
  const sections = rawBody.split("\n\n");

  // Now, we're goint to map over each section, returning
  // an object that contains all the frontmatter and excerpt,
  // but only has the specific content on that key.
  // This way the results are still associated with the
  // correct post.
  const records = sections.map((section) => ({
    ...rest,
    content: section,
  }));

  return records;
};

const queries = [
  {
    query: mdxQuery,
    settings: {
      attributeForDistinct: "slug",
      distinct: true,
    },
    transformer: ({ data }) =>
      data.allMdx.edges
        .map((edge) => edge.node)
        .map(unnestFrontmatter)
        .map(handleRawBody)
        .reduce((acc, cur) => [...acc, ...cur], []),
  },
];

module.exports = queries;
