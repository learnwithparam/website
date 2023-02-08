import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import TeachSection from '../components/teachSection';
import Header from '../components/header';
import { CarbonAdsWide } from '../components/carbonAds';
import EmailListForm from '../components/EmailListForm';

import heroImage from './../../images/programming.svg';
import htmlCSSImage from '../../images/html-css.svg';
import devOpsImage from '../../images/devops.svg';
import gatsbyImage from '../../images/gatsby.svg';
import graphQLImage from '../../images/graphql.svg';
import javascriptImage from '../../images/javascript.svg';
import nativeImage from '../../images/native.svg';
import reactImage from '../../images/react.svg';
import databaseImage from '../../images/database.svg';

class IndexPage extends React.Component {
  render() {
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
            `GCP, GKE, DevOps`,
            `Next Js learning`,
          ]}
        />
        <Header />
        <Hero image={heroImage} />
        <CarbonAdsWide />
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
              title: `Node Js and JS++`,
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
              title: `Platform Engineering`,
              description: `DO you judge me if I say, I love to learn/teach DevOps, GCP, GKE, serverless functions and CI/CD automation? Please don't, they are fun and hardcore!`,
              image: devOpsImage,
            },
            {
              title: `Flirting with Native`,
              description: `I use both react native and flutter for mobile development, I love both and felt flutter is better in some aspects. But so far, I have released only react native apps to production. Love to learn more and teach more in mobile development through React Native and flutter 😎`,
              image: nativeImage,
            },
            {
              title: `Next Js Party`,
              description: `Isn't Next Js belongs to React ecosystem? Yes it does. But I want to keep a special mention for this awesome framework. Oh boy, this is just a leaf out of whole Next Js plant, I can't wait to see when the plants becomes a beautiful garden.`,
              image: gatsbyImage,
            },
            {
              title: `MongoDB and Beyond`,
              description: `I love both SQL and NoSQL, I am a strong believer of horses for the courses. Still exploring the deep oceans of both marvels 😊`,
              image: databaseImage,
            },
          ]}
        />
        <EmailListForm />
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
      filter: { frontmatter: { published: { eq: true }, page: { ne: true } } }
      limit: 8
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
