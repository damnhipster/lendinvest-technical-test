import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import InvestModal from '../../src/lib/InvestModal.jsx';
import ReactModal from 'react-modal';

describe('<InvestModal/>', function() {

  const defaultProps = {
    isOpen: false,
    close: null,
    title: '',
    amountAvailable: 0,
    remainingTime: 0
  };

  it('should pass the isOpen prop to <ReactModal/>', function() {
    const props = { ...defaultProps, isOpen: true }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find(ReactModal).prop('isOpen')).to.equal(wrapper.prop('isOpen'));
  });

  it('should pass the close prop to <ReactModal/>', function() {
    const close = function() {};
    const props = { ...defaultProps, close: close }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find(ReactModal).prop('onRequestClose')).to.equal(close);
  });

  it('should contain the title of the loan', function() {
    const props = { ...defaultProps, title: 'test' }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find(ReactModal).children().at(1).html()).to.equal("<p>test</p>");
  });

  it('should contain the amount available to invest in the loan', function() {
    const props = { ...defaultProps, amountAvailable: 99999 }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find(ReactModal).children().at(2).html()).to.equal("<p>Amount available: 99999</p>");
  });

  it('should contain the remaining time left for the loan', function() {
    const props = { ...defaultProps, remainingTime: 99999 }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find(ReactModal).children().at(3).html()).to.equal("<p>Loan ends in: 99999</p>");
  });

});
