import React, {PropTypes} from 'react';

import Loan from './Loan.jsx';
import AvailableInvestment from './AvailableInvestment.jsx';

export default class CurrentLoans extends React.Component {

  render() {
    const loans = this.props.loans.map((loan) => {
      let { title, tranche, amount, ltv, annualised_return: annualisedReturn, term_remaining: termRemaining, available } = loan;
      const props = {
        title: title,
        tranche: tranche,
        amount: amount,
        ltv: ltv,
        annualisedReturn: annualisedReturn,
        termRemaining: termRemaining,
        available: available
      };
      return <Loan {...props}/>;
    })
    return (
      <div>
        <h1>{this.props.heading}</h1>
        <ul>{loans}</ul>
        <AvailableInvestment loans={this.props.loans}/>
      </div>
    );
  }

}

CurrentLoans.propTypes = {
  heading: PropTypes.string,
  loans: PropTypes.array
}
