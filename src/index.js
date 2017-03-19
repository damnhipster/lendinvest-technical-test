import React from 'react';
import ReactDOM from 'react-dom';

import Index from './lib/index.jsx';

ReactDOM.render(<Index {...{heading: 'hello world'}}/>, document.getElementById('main'));
