import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Loan from '../../src/lib/Loan.jsx';

describe('<Loan/>', function() {

  const defaultProps = { title: "" };

  it('should contain the title of the loan', function() {
    const props = { ...defaultProps, title: "test" }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.first().contains(
      <h2>test</h2>
    )).to.equal(true);
  });

});
