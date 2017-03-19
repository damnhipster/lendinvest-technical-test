import React, {PropTypes} from 'react';

export default class AvailableInvestment extends React.Component {

  calculateAvailableInvestment(loans) {
    return loans.reduce(function (total, loan) {
      const available = loan.available;
      let amount = available.replace ? Number.parseInt(available.replace(/,/g, "")) : available;
      return total + amount;
    }, 0);
  }

  render() {
    const { loans } = this.props;
    const total = this.calculateAvailableInvestment(loans);
    return (
      <div>
        <p>Total amount available for investments: {total}</p>
      </div>
    );
  }

}
