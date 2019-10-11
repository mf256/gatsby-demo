import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Prices from '../components/prices';

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div class="container">
      <h3 class="row justify-content-center"> Welcome to demo gatsby site! </h3>
      <br />
      <Prices></Prices>
    </div>
  </Layout>
);

export default IndexPage;
