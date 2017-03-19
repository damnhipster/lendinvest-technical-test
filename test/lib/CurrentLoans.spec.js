import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Index from '../../src/lib/CurrentLoans.jsx';
import Loan from '../../src/lib/Loan.jsx';

describe('<Index/>', function() {

  const defaultProps = { heading: "test" };

  it('should contain a single heading', function() {
    const wrapper = shallow(<Index {...defaultProps} />);
    expect(wrapper.contains(
        <h1>test</h1>
    )).to.equal(true);
    expect(wrapper.contains(
        <h1>test</h1>
    )).to.equal(true);
  });

  it('should contain a list of loans', function() {
    const props = { ...defaultProps, loans: [1,2,3] }
    const wrapper = shallow(<Index {...props} />);
    expect(wrapper.find(Loan)).to.have.length(3);
  });

});
