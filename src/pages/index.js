import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Prices from '../components/prices';

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h3 className="row justify-content-center">
        Welcome to gatsby demo site!
      </h3>
      <br />
      <Prices></Prices>
    </div>
  </Layout>
);

export default IndexPage;
