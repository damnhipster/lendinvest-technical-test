import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import LoanValues from '../../../src/lib/components/LoanValues.jsx';

describe('<LoanValues/>', function() {

  const defaultProps = {
    annualisedReturn: 0
  };

  //having problems with enzyme's contain assertion, using string assertion below instead

  it('should contain the annualised return', function() {
    const props = { ...defaultProps, annualisedReturn: 3.14 }
    const wrapper = shallow(<LoanValues {...props} />);
    expect(wrapper.children().at(0).html()).to.equal("<p>Annualised Return: 3.14</p>");
  });

  it('should contain the loan to value', function() {
    const props = { ...defaultProps, loanToValue: 3.14 }
    const wrapper = shallow(<LoanValues {...props} />);
    expect(wrapper.children().at(1).html()).to.equal("<p>Loan to value: 3.14</p>");
  });

});
