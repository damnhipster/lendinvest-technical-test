import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Index from '../lib/index.js';

describe('<Index/>', function() {

  const defaultProps = { heading: "test" };

  it('should return a single node', function() {
    const wrapper = shallow(<Index {...defaultProps} />);
    expect(wrapper.nodes.length).to.equal(1);
  });

  it('should return <h1>test</h1>', function() {
    const wrapper = shallow(<Index {...defaultProps} />);
    expect(wrapper.contains(
        <h1>test</h1>
    )).to.equal(true);
  });

});
