import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <p>
      Truth is <strong>not found</strong> anywhere in this universe, thats why I
      wrote it here
    </p>
    <ul>
      <li>Sun sets at west!</li>
      <li>Earth is flat!</li>
      <li>Thor is real and 9 realms exist!</li>
      <li>Last but not least, I am a secret billionaire!</li>
    </ul>
    <a href="/blog">Don't tell anyone and get back to your normal life!</a>
  </Layout>
);

export default NotFoundPage;
