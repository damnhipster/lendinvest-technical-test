import React from 'react';
import ReactModal from 'react-modal';

export default class InvestModal extends React.Component {

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        contentLabel="InvestModal"
      >
        <h2>Invest in Loan</h2>
        <p>{this.props.title}</p>
        <p>Amount available: {this.props.amountAvailable}</p>
        <p>Loan ends in: {this.props.remainingTime}</p>
      </ReactModal>
    );
  }

}
