import { graphql } from 'gatsby';

import TagsIndex from './blog-template';

export default TagsIndex;

export const pageQuery = graphql`
  query tagPageQuery($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            modifiedDate(formatString: "MMMM DD, YYYY")
            title
            description
            type
            duration
          }
        }
      }
    }
  }
`;
