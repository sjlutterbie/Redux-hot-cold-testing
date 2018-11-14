import hotColdReducer from './reducer';
import {restartGame, makeGuess, generateAuralUpdate} from './actions';

describe('Reducers', () => {
  
  describe('restartGame', () => {
    it('Should reset the initial state', () => {
      let state = {
        guesses: [1,2,3],
        feedback: 'foo',
        auralStatus: 'bar',
        correctAnswer: 5
      };
      state = hotColdReducer(state, restartGame(7));
      expect(state).toEqual({
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: 7
      });
    });
  });
  
  describe('makeGuess', () => {
    const state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: 30
    };
    let outputState;
    // Guess NaN -> feedback = 'Please enter a valid number.'
    it('Should provide correct feedback when guess is NaN', () => {
      outputState = hotColdReducer(state, makeGuess(NaN));
      expect(outputState.feedback).toEqual('Please enter a valid number.');
      expect(outputState.guesses).toEqual([NaN]);
    });
    // Guess: 90 -> feedback = 'You\'re Ice Cold...'
    it('Should provide correct feedback when guess is off by >=50', () => {
      outputState = hotColdReducer(state, makeGuess(90));
      expect(outputState.feedback).toEqual('You\'re Ice Cold...');
      expect(outputState.guesses).toEqual([90]);
    });
    // Guess: 60 -> feedback = 'You\'re Cold...'
    it('Should provide correct feedback when guess is off by >=30', () => {
      outputState = hotColdReducer(state, makeGuess(60));
      expect(outputState.feedback).toEqual('You\'re Cold...');
      expect(outputState.guesses).toEqual([60]);
    });
    // Guess: 40 -> feedback = 'You\'re Warm.'
    it('Should provide correct feedback when guess is off by >=10', () => {
      outputState = hotColdReducer(state, makeGuess(40));
      expect(outputState.feedback).toEqual('You\'re Warm.');
      expect(outputState.guesses).toEqual([40]);
    });
    // Guess: 35 -> feedback = 'You\'re Hot!'
    it('Should provide correct feedback when guess is off by >=1', () => {
      outputState = hotColdReducer(state, makeGuess(35));
      expect(outputState.feedback).toEqual('You\'re Hot!');
      expect(outputState.guesses).toEqual([35]);
    });
    // Guess: 30 -> feedback = 'You got it!'
    it('Should provide correct feedback when guess is correct', () => {
      outputState = hotColdReducer(state, makeGuess(30));
      expect(outputState.feedback).toEqual('You got it!');
      expect(outputState.guesses).toEqual([30]);
    });
  });

  describe('generateAuralUpdate', () => {
    const state = {
      guesses: [],
      feedback: 'foo',
      auralStatus: '',
      correctAnswer: 30
    };
    it('Should provide correct feedback when there are 0 guesses', () => {
      let action = hotColdReducer(state, generateAuralUpdate(state.guesses, state.feedback));
      expect(action.auralStatus).toEqual(
        `Here's the status of the game right now: ${state.feedback} `
        + `You've made ${state.guesses.length} guesses.`);
    });
    it('Should provide correct feedback when there is exactly 1 guess', () => {
      state.guesses = [5];
      let action = hotColdReducer(state, generateAuralUpdate(state.guesses, state.feedback));
      expect(action.auralStatus).toEqual(
        `Here's the status of the game right now: ${state.feedback} `
        + `You've made 1 guess. It was: 5`);
    });
    it('Should provide correct feedback when there are more multiple guesses', () => {
      state.guesses = [1,2,3];
      let action = hotColdReducer(state, generateAuralUpdate(state.guesses, state.feedback));
      expect(action.auralStatus).toEqual(
        `Here's the status of the game right now: ${state.feedback} `
        + `You've made 3 guesses. In order of most- to least-recent, they are: `
        + `3, 2, 1`);
    });
      
      // More than one guess
      
      
  });

  
  
});


