import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/hero';
import SEO from '../components/seo';

import heroImage from './../images/programming.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero
      title={`Hi, I'm Param 👋`}
      descriptions={[
        `I help people to learn web and mobile technologies through workshops, webinars, and courses.`,
        `One of the best way to learn is to build and break things. I love to teach practical real world applications through my content.`,
      ]}
      image={heroImage}
    />
  </Layout>
);

export default IndexPage;
