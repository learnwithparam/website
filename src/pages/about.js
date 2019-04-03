import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

import heroImage from './../../images/programming.svg';

const IndexPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[
        `teaching code`,
        `learn javaScript ecosystem`,
        `learn react`,
        `redux and mobx`,
        `learn with param`,
        `graphql`,
      ]}
    />
    <Hero image={heroImage} />
  </Layout>
);

export default IndexPage;
