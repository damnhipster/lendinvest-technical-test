import React from 'react';

export default class Loan extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>Tranche: {this.props.tranche}</p>
        <p>Amount: {this.props.amount}</p>
      </div>
    );
  }

}
