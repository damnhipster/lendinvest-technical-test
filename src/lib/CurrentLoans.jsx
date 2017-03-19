import React, {PropTypes} from 'react';

import Loan from './Loan.jsx';

export default class Index extends React.Component {

  render() {
    const loans = this.props.loans.map((loan) => {
      let { title, tranche, amount, ltv, annualised_return: annualisedReturn } = loan;
      const props = {
        title: title,
        tranche: tranche,
        amount: amount,
        ltv: ltv,
        annualisedReturn: annualisedReturn
      };
      return <Loan {...props}/>;
    })
    return (
      <div>
        <h1>{this.props.heading}</h1>
        <ul>{loans}</ul>
      </div>
    );
  }

}

Index.propTypes = {
  heading: PropTypes.string,
  loans: PropTypes.array
}
