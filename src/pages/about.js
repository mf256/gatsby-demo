import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
      <h3 className="row justify-content-center"> About </h3>

      <p className="row justify-content-center">
        This is example of second gatsby site.
      </p>

      <div className="row justify-content-center">
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
);

export default About;
