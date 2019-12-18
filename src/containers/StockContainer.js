import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = stocks => {
    return stocks.map(stock => <Stock handleClick={this.props.handleClick} details={stock} />)
  }
  
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.renderStocks(this.props.stocks)
        }
      </div>
    );
  }

}

export default StockContainer;
