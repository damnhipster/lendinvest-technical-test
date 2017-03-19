import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import InvestModal from '../../src/lib/InvestModal.jsx';
import ReactModal from 'react-modal';

describe('<InvestModal/>', function() {

  const defaultProps = {
    isOpen: false,
    close: null
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

});
