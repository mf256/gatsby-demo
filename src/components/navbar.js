import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Navbar = ({ siteTitle }) => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          fontSize: '1.5rem',
        }}
      >
        {siteTitle}
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about/" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
