import { graphql } from 'gatsby';

import CodepenIndex from './blog-template';

export default CodepenIndex;

export const pageQuery = graphql`
  query CodepenQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          page: { ne: true }
          type: { eq: "Codepen" }
        }
      }
      limit: $limit
      skip: $skip
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
