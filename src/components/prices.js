import React from 'react';

class Prices extends React.Component {
  state = {
    currency: 'USD',
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for :<span className="badge badge-primary"></span>
            <strong></strong>
          </li>
        </ul>
        <br />
        <select
          onChange={e => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>

        <style jsx>
          {`
            .badge {
              margin: 0 0.5em;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Prices;
