const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const isPage = ({ frontmatter: { page } }) => {
  return !!page;
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                page
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      let previous = index === posts.length - 1 ? null : posts[index + 1].node;
      let next = index === 0 ? null : posts[index - 1].node;

      /*
      - Previous, Next shouldn't be a Page,
      - Also page doesn't need previous and next
      */
      if (previous && isPage(previous)) previous = null;
      if (next && isPage(next)) next = null;
      if (isPage(post.node)) {
        previous = null;
        next = null;
      }

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
