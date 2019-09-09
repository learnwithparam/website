import { graphql } from 'gatsby';

import VideosIndex from './blog-template';

export default VideosIndex;

export const pageQuery = graphql`
  query VideosQuery($skip: Int!, $limit: Int!) {
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
          type: { eq: "Videos" }
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
