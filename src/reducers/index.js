import * as actions from '../actions';

const initialState = {
    random: Math.floor(Math.random()* (100-1) + 1),
    guess: 0,
    history: [],
    feedback: 'Give it a shot!',
    pageToggle: false
};
export const gameReducer = (state = initialState, action) => {
    if (action.type === actions.GENERATE_RAND) {
        return Object.assign({}, state, {
            random: Math.floor(Math.random()* (100-1) + 1)
        });
    }
    else if (action.type === actions.EVALUATE_GUESS) {
        let guess = action.guess;
        let {random, feedback} = state; //this.state or just state?
        const difference = Math.abs(guess - random);
        if(guess > 100){
            feedback = 'Take it down a notch.'
        }
        else if (difference >= 50) {
            feedback = 'Very cold!';
        }
        else if (difference >= 30) {
            feedback = 'Cold...';
        }
        else if (difference >= 10) {
            feedback = 'Kinda warm...';
        }
        else if (difference >= 1) {
            feedback = 'Hot!';
        }
        else {
            feedback = 'You got it! Play again?';
        }
        return Object.assign({}, state, {
            history: [...state.history, guess],//do I want to combine to the initial state or the real state? What is the real state?
            feedback: feedback, //is there a feedback variable?
            guess: guess
        });
    }
    else if (action.type === actions.SET_GUESS) {
        return Object.assign({}, state, {
            guess: action.guess
        })
    }
    else if (action.type === actions.NEW_GAME) {
        return Object.assign({}, state, {initialState}
        );
    }
    return state;
}