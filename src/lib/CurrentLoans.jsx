import React, {PropTypes} from 'react';

import Loan from './Loan.jsx';

export default class Index extends React.Component {

  render() {
    const loans = this.props.loans.map((loan) => {
      const props = { title: loan.title };
      return <Loan {...props}/>;
    })
    return (
      <div>
        <h1>{this.props.heading}</h1>
        <ul>{loans}</ul>
      </div>
    );
  }

}

Index.propTypes = {
  heading: PropTypes.string,
  loans: PropTypes.array
}
