import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Loan from '../../src/lib/Loan.jsx';
import LoanValues from '../../src/lib/LoanValues.jsx';
import InvestModal from '../../src/lib/InvestModal.jsx';

describe('<Loan/>', function() {

  const defaultProps = {
    title: "",
    tranche: "",
    amount: 0,
    annualisedReturn: 0
  };

  describe('#constructor', function() {

    it('should not show the modal', function() {
      const props = { ...defaultProps }
      const wrapper = shallow(<Loan {...props} />);
      expect(wrapper.state().showModal).to.be.false;
    });

  });

  it('should contain the title', function() {
    const props = { ...defaultProps, title: "test" }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.children().at(0).matchesElement(
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
    expect(wrapper.find(LoanValues).exists()).to.be.true;
  });

  it('should set annualisedReturn and loanToValue in <LoanValues/>', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.find(LoanValues).props()).to.have.all.keys(['annualisedReturn', 'loanToValue']);
  });

  it('should contain a button to invest', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.find('button').exists()).to.be.true;
    expect(wrapper.find('button').text()).to.equal('Invest in Loan');
  });

  it('should contain an <InvestModal/>', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.find(InvestModal).exists()).to.be.true;
  });

  it('should show the <InvestModal/> when the button is clicked', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().showModal).to.be.true;
  });

  it('should set isOpen in <InvestModal/>', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    let showModal = wrapper.state().showModal;
    expect(wrapper.find(InvestModal).prop('isOpen')).to.equal(showModal);
  });

  it('should set close in <InvestModal/>', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.find(InvestModal).prop('close')).to.equal(wrapper.instance().handleCloseModal);
  });

  it('should set title, amount available and remaining time in <InvestModal/>', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.find(InvestModal).props()).to.contain.all.keys(['title', 'amountAvailable', 'remainingTime']);
  });

});
