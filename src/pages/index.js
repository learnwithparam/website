import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/hero';
import SEO from '../components/seo';

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
      ]}
      image={heroImage}
    />
  </Layout>
);

export default IndexPage;
