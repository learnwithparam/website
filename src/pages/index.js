import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/hero';
import SEO from '../components/seo';

import heroImage from './../images/programming.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero
      title={`Learning is an endless process`}
      description={`Hi, I'm Param. I help people to learn web and mobile technologies through workshops, webinars and courses.`}
      image={heroImage}
    />
  </Layout>
);

export default IndexPage;
