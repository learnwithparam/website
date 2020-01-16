import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/core';

import { Container } from '../components/commonStyles';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Share from '../components/share';
import { CarbonAdsWide } from '../components/carbonAds';
import EmailListForm from '../components/EmailListForm';
import FollowMe from '../components/followMe';

import { formatReadingTime } from '../utils/helpers';

const BlogContainer = styled.div`
  padding: 2rem 0;
  background-color: #fdfdfd;
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
  .carbonAdsContainer {
    margin-top: 1rem;
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
  margin-bottom: 3rem;
  display: flex;
  @media (max-width: 575.98px) {
    flex-direction: column;
    margin-bottom: 2rem;
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

const BlogContent = styled(Box)`
  p {
    margin-bottom: 1.2rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Bitter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', 'Helvetica', 'Arial', serif;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  h6 {
    font-size: 1rem;
  }
  ul {
    margin-left: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const SeriesContainer = styled(Box)``;

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
    const { title, series, description, type, duration } = post.frontmatter;
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content${slug}index.md`;

    const editLink = (
      <a href={editUrl} target="_blank" rel="noopener noreferrer">
        Edit this post on Github
      </a>
    );

    const shareUrl = siteUrl + slug;

    const currentPartIndex = seriesArray.findIndex(part => {
      if (part.node.fields.slug === slug) return true;
      return false;
    });

    return (
      <Layout>
        <SEO
          title={title}
          description={description}
          slug={slug}
          url={shareUrl}
        />
        <Header />
        <BlogContainer>
          <Container>
            <Heading as="h1" fontSize="4xl" mb={4}>
              {title}
            </Heading>
            {!post.frontmatter.page && (
              <>
                <div>
                  <small>
                    {post.frontmatter.modifiedDate || post.frontmatter.date}
                  </small>
                  <small>
                    <span className="sep">{` • `}</span>
                    {type && (type === 'Videos' || type === 'Tech Talks')
                      ? formatReadingTime(duration, type)
                      : formatReadingTime(post.timeToRead)}
                  </small>
                  <small>
                    <span className="sep">{` • `}</span>
                    {editLink}
                  </small>
                </div>
              </>
            )}

            {seriesArray.length ? (
              <SeriesContainer my={6} p={6} bg="blue.100">
                <Text as="p" fontSize="xl">
                  This is part {currentPartIndex + 1} of {seriesArray.length} in
                  my series on "<strong>{series}</strong>"
                </Text>
                <List styleType="disc" mt={6} px={3}>
                  {seriesArray.map((part, index) => {
                    const partNode = part.node;
                    return (
                      <ListItem mb={3} key={index}>
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
                      </ListItem>
                    );
                  })}
                </List>
              </SeriesContainer>
            ) : null}

            {!post.frontmatter.page && <CarbonAdsWide />}

            <FollowMe />

            <BlogContent
              fontSize="lg"
              lineHeight="1.6"
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <Box mb={4}>
              <EmailListForm />
            </Box>
            {!post.frontmatter.page && (
              <Box py={3}>
                <Share
                  title={title}
                  description={description}
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
                      <Heading as="h5" fontSize="lg" mb={3}>
                        Previous Article
                      </Heading>
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Heading as="h5" fontSize="lg" mb={3}>
                        Next Article
                      </Heading>
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    </li>
                  )}
                </PreviousNextContainer>
              </Box>
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
      html
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        modifiedDate(formatString: "MMMM DD, YYYY")
        tags
        page
        series
        type
        duration
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
