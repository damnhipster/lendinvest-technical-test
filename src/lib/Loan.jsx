import React from 'react';

import LoanValues from './LoanValues.jsx';
import InvestModal from './InvestModal.jsx';

export default class Loan extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

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
        <button onClick={this.handleOpenModal}>
          Invest in Loan
        </button>
        <InvestModal
           isOpen={this.state.showModal}
        />
      </div>
    );
  }

}
