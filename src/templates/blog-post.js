import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { DiscussionEmbed } from 'disqus-react';

import { Container } from '../components/commonStyles';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Share from '../components/share';
import { CarbonAdsWide } from '../components/carbonAds';

import { formatReadingTime } from '../utils/helpers';

const BlogContainer = styled.div`
  padding: 2rem 0;
  background-color: #fcfcfc;
  .blog-content {
    margin: 2rem 0;
  }
  small {
    margin: 0;
    color: #828282;
    font-size: 0.9rem;
  }
  .sep {
    margin: 0 0.25rem;
  }
  @media (max-width: 575.98px) {
    padding: 1rem 0;
    .blog-content {
      margin: 1rem 0;
    }
  }
`;

const PreviousNextContainer = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  @media (max-width: 575.98px) {
    flex-direction: column;
  }
  li {
    border-radius: 6px;
    transition: all 0.2s ease-in;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: rgba(54, 91, 155, 0.1) 0px 18px 35px,
      rgba(0, 0, 0, 0.07) 0px 8px 15px;
    width: 50%;
    padding: 1rem;
    margin-bottom: 0;
    &:last-child {
      text-align: right;
      margin-left: 10px;
    }
    &:first-child {
      text-align: left;
      margin-right: 10px;
      margin-left: 0;
    }
    @media (max-width: 575.98px) {
      width: 100%;
      &:first-child,
      &:last-child {
        margin: 0 0 1rem 0;
      }
    }
  }
`;

const BlogContent = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin-bottom: 1.2rem;
  }
`;

const SeriesContainer = styled.blockquote`
  box-shadow: rgba(54, 91, 155, 0.1) 0px 18px 35px,
    rgba(0, 0, 0, 0.07) 0px 8px 15px;
`;

const EditLink = styled.div``;

const GITHUB_USERNAME = 'learnwithparam';
const GITHUB_REPO_NAME = 'website';

class BlogPostTemplate extends React.Component {
  render() {
    const {
      site: {
        siteMetadata: {
          siteUrl,
          social: { twitter },
          hashTags,
        },
      },
    } = this.props.data;
    const post = this.props.data.markdownRemark;
    const seriesArray = this.props.data.allMarkdownRemark.edges;
    const { previous, next } = this.props.pageContext;
    const slug = post.fields.slug;
    const { title, series } = post.frontmatter;
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content${slug}index.md`;

    const editLink = (
      <a href={editUrl} target="_blank" rel="noopener noreferrer">
        Edit this post on Github
      </a>
    );

    const shareUrl = siteUrl + slug;

    const disqusConfig = {
      shortname: 'learnwithparam',
      config: { identifier: slug, title },
    };

    const currentPartIndex = seriesArray.findIndex(part => {
      if (part.node.fields.slug === slug) return true;
      return false;
    });

    return (
      <Layout>
        <SEO title={title} description={post.excerpt} />
        <Header />
        <BlogContainer>
          <Container>
            <h1>{title}</h1>
            {!post.frontmatter.page && (
              <>
                <Share
                  title={title}
                  description={post.excerpt}
                  url={shareUrl}
                  author={twitter}
                  hashTags={hashTags}
                >
                  <strong>Share: </strong>
                </Share>
                <div>
                  <small>
                    {post.frontmatter.modifiedDate || post.frontmatter.date}
                  </small>
                  <small>
                    <span className="sep">{` • `}</span>
                    {formatReadingTime(post.timeToRead)}
                  </small>
                  <small>
                    <span className="sep">{` • `}</span>
                    {editLink}
                  </small>
                </div>
              </>
            )}

            {seriesArray.length ? (
              <SeriesContainer>
                <p>
                  This is part {currentPartIndex + 1} of {seriesArray.length} in
                  my series on "<strong>{series}</strong>"
                </p>
                <ul>
                  {seriesArray.map((part, index) => {
                    const partNode = part.node;
                    return (
                      <li key={index}>
                        Part {index + 1}:{' '}
                        {currentPartIndex === index ? (
                          <span>
                            {partNode.frontmatter.title} (
                            <strong>this post</strong>)
                          </span>
                        ) : (
                          <a href={partNode.fields.slug}>
                            {partNode.frontmatter.title}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </SeriesContainer>
            ) : null}

            {!post.frontmatter.page && <CarbonAdsWide />}

            <BlogContent
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {!post.frontmatter.page && (
              <>
                <Share
                  title={title}
                  description={post.excerpt}
                  url={shareUrl}
                  author={twitter}
                  hashTags={hashTags}
                >
                  <strong>Share: </strong>
                </Share>
                <EditLink>{editLink}</EditLink>
                <PreviousNextContainer>
                  {previous && (
                    <li>
                      <h5>Previous Article</h5>
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <h5>Next Article</h5>
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    </li>
                  )}
                </PreviousNextContainer>
                <DiscussionEmbed {...disqusConfig} />
              </>
            )}
          </Container>
        </BlogContainer>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $series: String) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        social {
          twitter
        }
        hashTags
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        modifiedDate(formatString: "MMMM DD, YYYY")
        tags
        page
        series
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        frontmatter: {
          published: { eq: true }
          page: { ne: true }
          series: { eq: $series }
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            modifiedDate(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
