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
        ` learn javascript ecosystem`,
        `react`,
        `redux`,
      ]}
    />
    <Hero
      title={`Hi, I'm Param 👋`}
      descriptions={[
        `I help people to learn web and mobile technologies through workshops, webinars and courses.`,
        `I prefer to learn by doing things. I love to teach the same way by building practical and real world examples.`,
      ]}
      image={heroImage}
    />
  </Layout>
);

export default IndexPage;
