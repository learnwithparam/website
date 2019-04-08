import React from 'react';
import { Link } from 'gatsby';

import { Container } from '../components/commonStyles';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header />
    <Container>
      <h3>
        Truth is <strong>not found</strong> anywhere in this universe, thats why
        I wrote it here
      </h3>
      <ul>
        <li>Sun sets at west!</li>
        <li>Earth is flat!</li>
        <li>Thor is real and 9 realms exist!</li>
        <li>Last but not least, I am a secret billionaire!</li>
      </ul>
      <Link to="/blog">
        Don't tell anyone and get back to your normal life!
      </Link>
    </Container>
  </Layout>
);

export default NotFoundPage;
