import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
  
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });
  
  it('Renders the correct text for 0 guesses', () => {
    const guessCount = 0;
    const wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toEqual('You\'ve made 0 guesses!');
  });
  
  it('Renders the correct text for 1 guess', () => {
    const guessCount = 1;
    const wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toEqual('You\'ve made 1 guess!');    
  });
  
  it('Renders the correct text for multiple guess', () => {
    const guessCount = 3;
    const wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toEqual('You\'ve made 3 guesses!');    
  });
});