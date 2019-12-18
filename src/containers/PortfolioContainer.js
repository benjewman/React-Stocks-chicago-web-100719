import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.stocks.map(stock => <Stock handleClick={this.props.handleClick} details={stock} />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
