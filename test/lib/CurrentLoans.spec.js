import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import CurrentLoans from '../../src/lib/CurrentLoans.jsx';
import Loan from '../../src/lib/Loan.jsx';

describe('<CurrentLoans/>', function() {

  const defaultProps = { heading: "", loans: [] };

  it('should render the heading passed in', function() {
    const props = { ...defaultProps, heading: "test" }
    const wrapper = shallow(<CurrentLoans {...props} />);
    expect(wrapper.first().contains(
      <h1>test</h1>
    )).to.equal(true);
  });

  it('should contain a list of loans', function() {
    const props = { ...defaultProps, loans: [1,2,3] }
    const wrapper = shallow(<CurrentLoans {...props} />);
    expect(wrapper.find(Loan)).to.have.length(3);
  });

});
