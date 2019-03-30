import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import TeachSection from '../components/teachSection';

import heroImage from './../images/programming.svg';

const IndexPage = () => (
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
      ]}
    />
    <Hero
      title={`Hi, I'm Param 👋`}
      descriptions={[
        `I help people to learn web and mobile technologies through workshops, webinars and courses.`,
        `I prefer teaching through practical examples and encourage everyone to learn by doing.`,
      ]}
      image={heroImage}
    />
    <TeachSection
      title={`What I teach`}
      description={`In the large JavaScript Ocean, I explored few of the islands. I love to guide through those islands for beginners and professionals`}
      contents={[
        {
          title: `HTML and CSS`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
          title: `JavaScript and DOM`,
          description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        },
        {
          title: `React Ecosystem`,
          description: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.`,
        },
        {
          title: `GraphQL Ecosystem`,
          description: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire`,
        },
        {
          title: `CSS-in-JS and Styling`,
          description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested`,
        },
      ]}
    />
  </Layout>
);

export default IndexPage;
