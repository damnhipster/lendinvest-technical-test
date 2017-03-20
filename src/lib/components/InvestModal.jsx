import React, {PropTypes} from 'react';

import Modal from 'react-modal';
import { Money } from '../utils/formatter';
import moment from 'moment';

export default class InvestModal extends React.Component {

  constructor() {
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { isOpen, close, title, invest, amountAvailable, remainingTime } = this.props;
    const buttonProps = {}
    if(this.state.value == '') {
      buttonProps.disabled = true;
      buttonProps.onClick = null;
    } else {
      buttonProps.disabled = false;
      buttonProps.onClick = (function() {
        invest(this.state.value);
        close();
      }).bind(this);
    }
    return (
      <Modal
        className="modal"
        isOpen={isOpen}
        onRequestClose={close}
        contentLabel="InvestModal"
      >
        <h2>Invest in Loan</h2>
        <p>{title}</p>
        <p>Amount available: {Money.format(amountAvailable)}</p>
        <p>Loan ends in: {moment.duration(Number.parseInt(remainingTime), 'seconds').humanize()}</p>
        <form>
          <label className="with-input">
            <span>Investment amount (£)</span>
            <input type="text" placeholder="0" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button { ...buttonProps }>Invest</button>
        </form>
      </Modal>
    );
  }

}

InvestModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  invest: PropTypes.func,
  title: PropTypes.string,
  amountAvailable: PropTypes.number,
  remainingTime: PropTypes.number
}
