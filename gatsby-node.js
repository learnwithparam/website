const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const isBlog = ({ frontmatter: { page, type } }) => {
  return !!page || type !== 'video';
};

const isTypeVideo = ({ frontmatter: { page, type } }) => {
  return type === 'video';
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const blogList = path.resolve(`./src/templates/blog.js`);
  const TechTalks = path.resolve(`./src/templates/tech-talks.js`);

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

    posts.forEach((post, index) => {
      let previous = index === posts.length - 1 ? null : posts[index + 1].node;
      let next = index === 0 ? null : posts[index - 1].node;

      /*
      - Previous, Next shouldn't be a Page,
      - Also page doesn't need previous and next
      */
      if (previous && !isBlog(previous)) previous = null;
      if (next && !isBlog(next)) next = null;
      if (!isBlog(post.node)) {
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
    const blogPosts = posts.filter(post => {
      return isBlog(post.node);
    });
    const postsPerPage = 8;
    let numPages = Math.ceil(blogPosts.length / postsPerPage);

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

    // Tech Talks Page
    const videoPosts = posts.filter(post => {
      return isTypeVideo(post.node);
    });
    numPages = Math.ceil(videoPosts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tech-talks` : `/tech-talks/${i + 1}`,
        component: TechTalks,
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
