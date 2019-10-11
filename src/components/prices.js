import React from 'react';
import axios from 'axios';
import Price from './price';
import Loading from './loading';

class Prices extends React.Component {
  state = {
    loading: true,
    error: false,
    currency: 'USD',
    bpi: {},
  };

  componentDidMount() {
    this.getInitialData();
  }

  getInitialData = () => {
    this.setState({ loading: true });
    axios
      .get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then(res => {
        this.setState({
          loading: false,
          bpi: res.data.bpi,
        });
      })
      .catch(error => {
        this.setState({ loading: false, error });
      });
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            {this.state.loading ? (
              <Loading />
            ) : (
              <Price
                description={this.state.bpi[this.state.currency].description}
                code={this.state.bpi[this.state.currency].code}
                rate={this.state.bpi[this.state.currency].rate}
              />
            )}
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
      </div>
    );
  }
}

export default Prices;
