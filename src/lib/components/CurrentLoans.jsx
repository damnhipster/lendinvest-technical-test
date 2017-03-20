import React, {PropTypes} from 'react';

import Loan from './Loan.jsx';
import AvailableInvestment from './AvailableInvestment.jsx';

export default class CurrentLoans extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loans: props.loans.map((loan) => {
        let { id="0", title, tranche, amount="0", ltv="0", annualised_return: annualisedReturn="0", term_remaining: termRemaining="0", available="0" } = loan;
        return {
          ...loan,
          key: Number.parseInt(id),
          id: Number.parseInt(id),
          title: title,
          tranche: tranche,
          amount: Number.parseInt(amount.replace(/,/g, "")),
          ltv: Number.parseFloat(ltv),
          annualisedReturn: Number.parseFloat(annualisedReturn),
          termRemaining: Number.parseInt(termRemaining),
          available: Number.parseInt(available.replace(/,/g, ""))
        };
      })
    }
    this.handleInvest = this.handleInvest.bind(this);
  }

  handleInvest({ id, amount }) {
    const loanIndex = this.state.loans.findIndex((loan) => loan.id == id);
    let loans = this.state.loans;
    let available = loans[loanIndex].available;
    if(available < amount) amount = available;
    loans[loanIndex].available = available - amount;
    this.setState({
      loans: loans
    });
  }

  render() {
    const loans = this.state.loans.map((loan) => {
      const props = { ...loan, invest: this.handleInvest };
      return <Loan { ...props }/>;
    })
    return (
      <div>
        <h1>{this.props.heading}</h1>
        <ul>{loans}</ul>
        <AvailableInvestment loans={this.state.loans}/>
      </div>
    );
  }

}

CurrentLoans.propTypes = {
  heading: PropTypes.string,
  loans: PropTypes.array
}
