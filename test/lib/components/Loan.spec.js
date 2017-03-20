import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import Loan from '../../../src/lib/components/Loan.jsx';
import LoanValues from '../../../src/lib/components/LoanValues.jsx';
import InvestModal from '../../../src/lib/components/InvestModal.jsx';
import { Money } from '../../../src/lib/utils/formatter';

chai.use(spies);

describe('<Loan/>', function() {

  const defaultProps = {
    title: "",
    tranche: "",
    amount: 0,
    annualisedReturn: 0,
    invest: function() {}
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
    expect(wrapper.children().at(2).html()).to.equal(`<p>Amount: ${Money.format(99999)}</p>`);
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

  it('should contain an Invested label when loan has been invested in', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    wrapper.instance().handleInvest();
    expect(wrapper.contains(<p className="badge">Invested</p>)).to.be.true;
  });

  it('should not contain an Invested label when loan has not been invested in', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<Loan {...props} />);
    expect(wrapper.contains(<p className="badge">Invested</p>)).to.be.false;
  });

  describe('#handleInvest()', function() {

    it('should set invested to be true', function() {
      const props = { ...defaultProps }
      const wrapper = shallow(<Loan {...props} />);
      wrapper.instance().handleInvest();
      expect(wrapper.state('invested')).to.be.true;
    });

    it('should call the prop invest function', function() {
      const props = { ...defaultProps, id: 1, invest: chai.spy() }
      const wrapper = shallow(<Loan {...props} />);
      wrapper.instance().handleInvest(9999);
      expect(props.invest).to.have.been.called.with({ id: 1, amount: 9999 });
    });

  });

  describe('<InvestModal/>)', function() {

    it('should exist', function() {
      const props = { ...defaultProps }
      const wrapper = shallow(<Loan {...props} />);
      expect(wrapper.find(InvestModal).exists()).to.be.true;
    });

    it('should show  when the button is clicked', function() {
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

    it('should set a close function in <InvestModal/>', function() {
      const props = { ...defaultProps }
      const wrapper = shallow(<Loan {...props} />);
      expect(wrapper.find(InvestModal).prop('close'))
        .to.equal(wrapper.instance().handleCloseModal)
        .and.not.be.undefined;
    });

    it('should set an invest function in <InvestModal/>', function () {
      const props = { ...defaultProps }
      const wrapper = shallow(<Loan {...props} />);
      expect(wrapper.find(InvestModal).prop('invest'))
        .to.equal(wrapper.instance().handleInvest)
        .and.not.be.undefined;
    });

    it('should set title, amount available and remaining time in <InvestModal/>', function() {
      const props = { ...defaultProps }
      const wrapper = shallow(<Loan {...props} />);
      expect(wrapper.find(InvestModal).props()).to.contain.all.keys(['title', 'amountAvailable', 'remainingTime']);
    });

  });

});
