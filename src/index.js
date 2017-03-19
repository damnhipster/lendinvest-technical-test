import React from 'react';
import ReactDOM from 'react-dom';

import styles from './css/style.css';
import CurrentLoans from './lib/CurrentLoans.jsx';

const defaultProps = {
  heading: 'Current Loans',
  loans: []
};

ReactDOM.render(<CurrentLoans {...defaultProps}/>, document.getElementById('main'));
