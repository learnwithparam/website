const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const isPage = ({ frontmatter: { page } }) => {
  return !!page;
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const blogList = path.resolve(`./src/templates/blog-list.js`);

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
                series
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
          series: post.node.frontmatter.series || '',
        },
      });
    });

    // Create blog post list pages
    const postsWithoutPage = posts.filter(post => {
      return !isPage(post.node);
    });
    const postsPerPage = 5;
    const numPages = Math.ceil(postsWithoutPage.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: blogList,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
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
