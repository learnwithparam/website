const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const checkType = ({ frontmatter: { page, type } }, value) => {
  if (value) {
    // Other than blogs
    return type === value;
  } else {
    // Blogs
    return !page || !type;
  }
};

const createBlogListPages = (createPage, posts, url, type, template) => {
  const blogListTemplate = path.resolve(
    `./src/templates/${template || url}.js`
  );
  const filterPosts = posts.filter(post => {
    return checkType(post.node, type);
  });
  const postsPerPage = 8;
  const numPages = Math.ceil(filterPosts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${url}` : `/${url}/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

// Create blog posts
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

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
                type
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
    const blogTemplate = path.resolve(`./src/templates/blog-post.js`);

    posts.forEach((post, index) => {
      let previous = index === posts.length - 1 ? null : posts[index + 1].node;
      let next = index === 0 ? null : posts[index - 1].node;

      /*
      - Previous, Next shouldn't be a Page,
      - Also page doesn't need previous and next
      */
      if (previous && !checkType(previous)) previous = null;
      if (next && !checkType(next)) next = null;
      if (!checkType(post.node)) {
        previous = null;
        next = null;
      }

      createPage({
        path: post.node.fields.slug,
        component: blogTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
          series: post.node.frontmatter.series || '',
        },
      });
    });

    createBlogListPages(createPage, posts, `blog`);
    createBlogListPages(createPage, posts, `tech-talks`, `Tech Talks`);
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
