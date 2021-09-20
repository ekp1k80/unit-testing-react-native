/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import TestRenderer, {act} from 'react-test-renderer';

describe('App', () => {
  const wrapper = TestRenderer.create(<App />);
  const instance = wrapper.root;

  it('renders correctly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  describe('when button is not clicked', () => {
    let square = instance.findByProps({testID: 'square'});
    expect(square.props.style.backgroundColor).toBe('black');
  });

  describe('when button is clicked', () => {
    it('setSquareColor() is called with opposite value', () => {
      let square = instance.findByProps({testID: 'square'});
      const button = instance.findByProps({testID: 'button'});
      act(() => {
        button.props.onPress();
      });
      square = instance.findByProps({testID: 'square'});
      expect(square.props.style.backgroundColor).toBe('yellow');
    });
  });
});
