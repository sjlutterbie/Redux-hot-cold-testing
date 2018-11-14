import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';
import {restartGame, RESTART_GAME, generateAuralUpdate} from '../actions';

describe('<TopNav />', () => {
  
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });
  
  it('On clicking a.new, dispatches restartGame', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find('a.new').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(
      {
        correctAnswer: expect.any(Number),
        type: RESTART_GAME});
  });
  
  it('On clicking a.status-link, dispatches generateAuralUpdate', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find('a.status-link').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(generateAuralUpdate());
  });
  
});