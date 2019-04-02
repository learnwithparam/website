import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import { Container } from '../components/commonStyles';

const BlogContainer = styled.div`
  padding: 4rem 0;
`;

const BlogPost = styled.section`
  padding: 2rem 4rem;
  border-radius: 5px;
  transition: all 0.3s linear;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: rgba(54, 91, 155, 0.1) 0px 18px 35px,
    rgba(0, 0, 0, 0.07) 0px 8px 15px;
  transform: translateY(-2px);
  margin-bottom: 1rem;
  h3 {
    margin-bottom: 0.75rem;
  }
  small {
    margin: 0;
    color: #555;
  }
  a {
    text-decoration: none;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
        <BlogContainer>
          <Container>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <BlogPost key={node.fields.slug}>
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <p>
                    <small>{node.frontmatter.date}</small>
                  </p>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </BlogPost>
              );
            })}
          </Container>
        </BlogContainer>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
