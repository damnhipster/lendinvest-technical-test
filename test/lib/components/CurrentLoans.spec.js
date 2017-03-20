import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import CurrentLoans from '../../../src/lib/components/CurrentLoans.jsx';
import Loan from '../../../src/lib/components/Loan.jsx';
import AvailableInvestment from '../../../src/lib/components/AvailableInvestment.jsx';

describe('<CurrentLoans/>', function() {

  const defaultProps = { heading: "", loans: [] };

  it('should render the heading passed in', function() {
    const props = { ...defaultProps, heading: "test" }
    const wrapper = shallow(<CurrentLoans {...props} />);
    expect(wrapper.first().contains(
      <h1>test</h1>
    )).to.be.true;
  });

  it('should contain a list of loans', function() {
    const props = { ...defaultProps, loans: [1,2,3] }
    const wrapper = shallow(<CurrentLoans {...props} />);
    expect(wrapper.find(Loan)).to.have.length(3);
  });

  it('should pass loan information through to Loan', function() {
    const props = { ...defaultProps, loans: [1] }
    const wrapper = shallow(<CurrentLoans {...props} />);
    expect(wrapper.find(Loan).props()).to.have.all.keys(['title', 'tranche', 'amount', 'annualisedReturn', 'ltv', 'termRemaining', 'available']);
  });

  it('should contain the amount available to invest', function() {
    const props = { ...defaultProps, loans: [1] }
    const wrapper = shallow(<CurrentLoans {...props} />);
    expect(wrapper.find(AvailableInvestment).exists()).to.be.true;
  });

  it('should pass the loans through to <AvailableInvestment/>', function() {
    const loans = [1,2,3];
    const props = { ...defaultProps, loans: loans }
    const wrapper = shallow(<CurrentLoans {...props} />);
    expect(wrapper.find(AvailableInvestment).prop('loans')).to.equal(loans);
  });

});
