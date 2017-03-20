import React, {PropTypes} from 'react';

export default class LoanValues extends React.Component {

  render() {
    return (
      <div>
        <p>Annualised Return: {this.props.annualisedReturn}</p>
        <p>Loan to value: {this.props.loanToValue}</p>
      </div>
    );
  }

}

LoanValues.propTypes = {
  annualisedReturn: PropTypes.number,
  loanToValue: PropTypes.number
}
