import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import spies from 'chai-spies';

import InvestModal from '../../../src/lib/components/InvestModal.jsx';
import Modal from 'react-modal';
import { Money } from '../../../src/lib/utils/formatter';
import moment from 'moment';

chai.use(spies);

describe('<InvestModal/>', function() {

  const defaultProps = {
    isOpen: false,
    close: null,
    title: '',
    amountAvailable: 0,
    remainingTime: 0
  };

  it('should pass the isOpen prop to <Modal/>', function() {
    const props = { ...defaultProps, isOpen: true }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find(Modal).prop('isOpen')).to.equal(wrapper.prop('isOpen'));
  });

  it('should pass the close prop to <Modal/>', function() {
    const close = function() {};
    const props = { ...defaultProps, close: close }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find(Modal).prop('onRequestClose')).to.equal(close);
  });

  it('should contain the title of the loan', function() {
    const props = { ...defaultProps, title: 'test' }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find(Modal).children().at(1).html()).to.equal("<p>test</p>");
  });

  it('should contain the amount available to invest in the loan', function() {
    const props = { ...defaultProps, amountAvailable: 99999 }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find(Modal).children().at(2).html()).to.equal(`<p>Amount available: ${Money.format(99999)}</p>`);
  });

  it('should contain the remaining time left for the loan', function() {
    const props = { ...defaultProps, remainingTime: 99999 }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find(Modal).children().at(3).html()).to.equal(`<p>Loan ends in: ${moment.duration(99999, 'seconds').humanize()}</p>`);
  });

  it('should contain a button to invest', function() {
    const props = { ...defaultProps }
    const wrapper = shallow(<InvestModal {...props} />);
    expect(wrapper.find('button').html()).to.contain('Invest');
  });

  describe('when Invest button is clicked', function() {

    it('should close the modal', function() {
      const props = { ...defaultProps, isOpen: true, close: chai.spy() }
      let wrapper = shallow(<InvestModal {...props} />);
      wrapper.find('button').simulate('click');
      expect(props.close).to.have.been.called.once;
    });

  });

});
