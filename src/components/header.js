import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
  <header>
    <Navbar siteTitle={siteTitle} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
