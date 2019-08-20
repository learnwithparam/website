import React from 'react';
import styled from '@emotion/styled';

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
    const { currentPage = 1, numPages = 1, url } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    let urlPath = url ? url : `blog`;

    const prevPage =
      currentPage - 1 === 1
        ? `/${urlPath}`
        : `/${urlPath}/${(currentPage - 1).toString()}`;
    const nextPage = `/${urlPath}/${(currentPage + 1).toString()}`;

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
