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
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    let { annualisedReturn, ltv, title, tranche, amount, available, termRemaining } = this.props;
    const props = {
      loanValue: {
        annualisedReturn: annualisedReturn,
        loanToValue: ltv
      },
      investModal: {
        title: title,
        amountAvailable: available,
        remainingTime: termRemaining
      }
    };
    return (
      <div>
        <h2>{title}</h2>
        <p>Tranche: {tranche}</p>
        <p>Amount: {amount}</p>
        <LoanValues {...props.loanValue} />
        <button onClick={this.handleOpenModal}>
          Invest in Loan
        </button>
        <InvestModal
          {...props.investModal}
          isOpen={this.state.showModal}
          close={this.handleCloseModal}
        />
      </div>
    );
  }

}
