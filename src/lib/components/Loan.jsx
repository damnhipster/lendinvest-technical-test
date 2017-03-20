import React, {PropTypes} from 'react';

import { Money } from '../utils/formatter.js';
import LoanValues from './LoanValues.jsx';
import InvestModal from './InvestModal.jsx';

export default class Loan extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      invested: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleInvest = this.handleInvest.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleInvest(amount) {
    this.props.invest({ id: this.props.id, amount: amount });
    this.setState({ invested: true });
  }

  render() {
    let { annualisedReturn, ltv, title, tranche, amount, available, termRemaining, invest } = this.props;
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
      <div className="loan">
        <h2>{title}</h2>
        <p>Tranche: {tranche}</p>
        <p>Amount: {Money.format(amount)}</p>
        <LoanValues {...props.loanValue} />
        <button onClick={this.handleOpenModal}>
          Invest in Loan
        </button>
        { this.state.invested ? <p className="badge">Invested</p> : null }
        <InvestModal
          {...props.investModal}
          isOpen={this.state.showModal}
          close={this.handleCloseModal}
          invest={this.handleInvest}
        />
      </div>
    );
  }

}

Loan.propTypes = {
  annualisedReturn: PropTypes.number,
  ltv: PropTypes.number,
  title: PropTypes.string,
  tranche: PropTypes.string,
  amount: PropTypes.number,
  available: PropTypes.number,
  termRemaining: PropTypes.number,
  invest: PropTypes.func
}
