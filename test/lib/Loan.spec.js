import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Loan from '../../src/lib/Loan.jsx';

describe('<Loan/>', function() {

  const defaultProps = {
    title: "",
    tranche: ""
  };

  it('should contain the title of the loan', function() {
    const props = { ...defaultProps, title: "test" }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.children().at(0).contains(
      <h2>test</h2>
    )).to.equal(true);
  });

  it('should contain the tranche of the loan', function() {
    const props = { ...defaultProps, tranche: "test" }
    const wrapper = shallow(<Loan {...props} />);
    //having problems with enzyme's contain assertion, using string assertion instead
    expect(wrapper.children().at(1).html()).to.equal("<p>Tranche: test</p>");
  });

});
