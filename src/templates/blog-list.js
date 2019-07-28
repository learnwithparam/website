import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import BlogContainer from '../components/blogContainer';
import { Container, ButtonLink } from '../components/commonStyles';
import { CarbonAdsWide } from '../components/carbonAds';

const StyledBlogContainer = styled.div`
  background-color: #fdfdfd;
`;

const PrevNextPageContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const PrevNextItem = styled.div`
  margin-bottom: 3rem;
  display: flex;
  @media (max-width: 575.98px) {
    margin-bottom: 2rem;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
      currentPage - 1 === 1 ? '/blog' : `/blog/${(currentPage - 1).toString()}`;
    const nextPage = `/blog/${(currentPage + 1).toString()}`;

    return (
      <Layout>
        <SEO
          title="Blog"
          keywords={[
            `javascript`,
            `react`,
            `skills`,
            `product`,
            `engineering`,
            `life lessons`,
            `UI`,
            `frontend`,
            `UX`,
            `design`,
            `coding`,
            `career`,
          ]}
        />
        <Header />
        <StyledBlogContainer>
          <CarbonAdsWide />
          <BlogContainer posts={posts} />
          <Container>
            <PrevNextPageContainer>
              <PrevNextItem>
                {!isFirst && (
                  <ButtonLink to={prevPage} rel="prev">
                    ← Previous Page
                  </ButtonLink>
                )}
              </PrevNextItem>
              <PrevNextItem>
                {!isLast && (
                  <ButtonLink to={nextPage} rel="next">
                    Next Page →
                  </ButtonLink>
                )}
              </PrevNextItem>
            </PrevNextPageContainer>
          </Container>
        </StyledBlogContainer>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, page: { ne: true } } }
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
          }
        }
      }
    }
  }
`;
