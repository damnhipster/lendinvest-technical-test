import React from 'react';

import LoanValues from './LoanValues.jsx';

export default class Loan extends React.Component {

  render() {
    let { annualisedReturn, ltv: loanToValue } = this.props;
    const props = {
      annualisedReturn: annualisedReturn,
      loanToValue: loanToValue
    };
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>Tranche: {this.props.tranche}</p>
        <p>Amount: {this.props.amount}</p>
        <LoanValues {...props} />
        <button>Invest in Loan</button>
      </div>
    );
  }

}
