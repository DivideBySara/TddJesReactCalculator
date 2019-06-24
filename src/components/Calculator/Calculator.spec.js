import React from 'react';
import {
  shallow
} from 'enzyme';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('should render a <div />', () => {
    // Arrange
    const wrapper = shallow( < Calculator / > );

    // Act
    const expectedDiv = wrapper.find('div');

    // Assert
    expect(expectedDiv.length).toEqual(1);

    // Cleanup
    wrapper.unmount();
  });
});