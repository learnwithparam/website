import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';

import { Container } from '../components/commonStyles';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogContainer = styled.div`
  padding: 4rem 0;
`;

const GITHUB_USERNAME = 'learnwithparam';
const GITHUB_REPO_NAME = 'website';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const slug = post.fields.slug;
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/blog${slug}index.md`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Header />
        <BlogContainer>
          <Container>
            <h1>{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />

            <a href={editUrl} target="_blank" rel="noopener noreferrer">
              Edit on GitHub
            </a>

            <hr />

            <ul>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </Container>
        </BlogContainer>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
