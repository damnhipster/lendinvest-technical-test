import React from 'react';
import ReactModal from 'react-modal';

export default class InvestModal extends React.Component {

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        contentLabel="InvestModal"
      />
    );
  }

}
