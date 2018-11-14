import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
  
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });
  
  it('Submitting form dispatches makeGuess action', () => {
    const dispatch = jest.fn();
    const guessValue = 5;
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    // Set form value
    wrapper.find('input[type="number"]').instance().value = guessValue;
    wrapper.update();
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(String(guessValue)));
  });
});