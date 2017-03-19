import React from 'react';
import ReactDOM from 'react-dom';

import styles from './css/style.css';
import Index from './lib/index.jsx';

ReactDOM.render(<Index {...{heading: 'hello world'}}/>, document.getElementById('main'));
