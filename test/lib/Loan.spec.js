import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Loan from '../../src/lib/Loan.jsx';
import LoanValues from '../../src/lib/LoanValues.jsx';

describe('<Loan/>', function() {

  const defaultProps = {
    title: "",
    tranche: "",
    amount: 0,
    annualisedReturn: 0
  };

  it('should contain the title', function() {
    const props = { ...defaultProps, title: "test" }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.children().at(0).contains(
      <h2>test</h2>
    )).to.be.true;
  });

  //having problems with enzyme's contain assertion, using string assertion below instead

  it('should contain the tranche', function() {
    const props = { ...defaultProps, tranche: "test" }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.children().at(1).html()).to.equal("<p>Tranche: test</p>");
  });

  it('should contain the amount', function() {
    const props = { ...defaultProps, amount: 99999 }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.children().at(2).html()).to.equal("<p>Amount: 99999</p>");
  });

  it('should contain the <LoanValues/>', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.find(LoanValues).exists()).to.equal(true);
  });

  it('should pass the annualisedReturn and loanToValue through to <LoanValues/>', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.find(LoanValues).props()).to.have.all.keys(['annualisedReturn', 'loanToValue']);
  });

});
