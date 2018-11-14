import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', () => {
  
  it('Renders without crashing', () => {
    const guessCount = 5;
    shallow(<Feedback guessCount={guessCount}/>);
  });
  
  it('Renders the correct text', () => {
    const guessCount = 5;
    const feedback = 'foo';
    const wrapper = shallow(<Feedback guessCount={guessCount}
                                      feedback = {feedback} />);
    expect(wrapper.text()).toEqual('foo Guess again!');
  });
  
});