import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {
  
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
  });
  
  it('Renders a list of the correct length', () => {
    const guesses = [1,2,3];
    const wrapper = shallow(<GuessList guesses={guesses} />);
    expect(wrapper.find('ul').children().length).toEqual(guesses.length);
  });

});