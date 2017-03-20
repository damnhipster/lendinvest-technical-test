import React, {PropTypes} from 'react';
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

InvestModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  title: PropTypes.string,
  amountAvailable: PropTypes.number,
  remainingTime: PropTypes.number
}
