import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import TeachSection from '../components/teachSection';
import BlogContainer from '../components/blogContainer';
import Header from '../components/header';
import { CarbonAdsWide } from '../components/carbonAds';

import heroImage from './../../images/programming.svg';
import htmlCSSImage from '../../images/html-css.svg';
import cssInJSImage from '../../images/css-in-js.svg';
import gatsbyImage from '../../images/gatsby.svg';
import graphQLImage from '../../images/graphql.svg';
import javascriptImage from '../../images/javascript.svg';
import nativeImage from '../../images/native.svg';
import reactImage from '../../images/react.svg';
import djangoImage from '../../images/django.svg';

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[
            `teaching code`,
            `learn javaScript ecosystem`,
            `learn react`,
            `redux and mobx`,
            `learn with param`,
            `graphql`,
            `django`,
          ]}
        />
        <Header />
        <Hero image={heroImage} />
        <CarbonAdsWide />
        <BlogContainer posts={posts} sectionTitle={`Blog`} />
        <TeachSection
          title={`What I teach and Learn`}
          description={`In the large JavaScript Ocean, I am exploring few of the Islands. On my way, I love to guide through those islands for beginners and professionals`}
          contents={[
            {
              title: `HTML, CSS and Everything`,
              description: `User interface is an art. HTML5 and CSS3 are the tools to create UI for web. Most web developers start their learning journey with HTML and CSS. Its easy to learn HTML and CSS, but takes a lot of practice to master this art.`,
              image: htmlCSSImage,
            },
            {
              title: `JavaScript++`,
              description: `JavaScript world has grown into an multi-verse. You can create any kind of applications targeting desktop, web and mobile using JS. Lot of people have JS fatigue too due to number of frameworks and libraries in JS 😉`,
              image: javascriptImage,
            },
            {
              title: `React and Move Faster`,
              description: `Ease of development and maintainability is the key for software development. React has been the game changer in developer experience. More and more developers are learning react based web and mobile stack to boost up their career opportunities.`,
              image: reactImage,
            },
            {
              title: `GraphQL and its Networks`,
              description: `GraphQL become buzzword in tech for recent times along with React. I foresee graphql is here to stay for long with strong communities and companies backing it. A nice to have knowledge will become must have skill on every job description in near future.`,
              image: graphQLImage,
            },
            {
              title: `CSS-in-JS and CSS++`,
              description: `What CSS in JS? Are you kidding me? No, I am not. HTML is JS and CSS in JS aren't bad anymore. It solves lot of development problems in recent times and one of the technologies for future along with React and GraphQL`,
              image: cssInJSImage,
            },
            {
              title: `Flirting with Native`,
              description: `I use both react native and flutter for mobile development, I love both and felt flutter is better in some aspects. But so far, I have released only react native apps to production. Love to learn more and teach more in mobile development through React Native and flutter 😎`,
              image: nativeImage,
            },
            {
              title: `Gatsby Party`,
              description: `Isn't Gatsby belongs to React ecosystem? Yes it does. But I want to keep a special mention for this awesome framework. Gatsby along with headless CMS will replace a lot of traditional decades old websites very soon. Oh boy, this is just a leaf out of whole Gatsby plant, I can't wait to see when the plants becomes a beautiful garden.`,
              image: gatsbyImage,
            },
            {
              title: `Django++ for rapid prototyping`,
              description: `I believe in horses for the courses, if there is a requirement for rapid prototyping for basic rest API or website. I prefer Python / Django over JS based stack. After all, tools are chosen based on what we want to accomplish 😊`,
              image: djangoImage,
            },
          ]}
        />
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
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
          type: { eq: null }
        }
      }
      limit: 6
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
