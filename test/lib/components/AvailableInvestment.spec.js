import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import AvailableInvestment from '../../../src/lib/components/AvailableInvestment.jsx';
import { Money } from '../../../src/lib/utils/formatter';

describe('<AvailableInvestment/>', function() {

  const defaultProps = { };

  it('should show the available amount that can be invested', function() {
    const props = {
      ...defaultProps,
      loans: [
        { available: 111 },
        { available: 222 },
      ]
    }
    const wrapper = shallow(<AvailableInvestment {...props} />);
    expect(wrapper.html()).to.contain(`${ 111 + 222 }`);
  });

  it('should convert the available amounts to numbers', function() {
    const props = {
      ...defaultProps,
      loans: [
        { available: "1,111" },
        { available: "2,222" },
      ]
    }
    const wrapper = shallow(<AvailableInvestment {...props} />);
    expect(wrapper.html()).to.contain(Money.format(`${1111 + 2222}`));
  });

});
