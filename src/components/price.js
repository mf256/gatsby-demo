import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ description, code, rate }) => (
  <>
    Bitcoin rate for {description}:
    <span
      className="badge badge-primary"
      style={{
        margin: '0 0.5rem',
      }}
    >
      {code}
    </span>
    <strong>{rate}</strong>
  </>
);

Price.propTypes = {
  description: PropTypes.string,
  code: PropTypes.string,
  rate: PropTypes.string,
};

Price.defaultProps = {
  description: ``,
  code: ``,
  rate: ``,
};

export default Price;
