export const GENERATE_RAND = 'GENERATE_RAND';
export const generateRand = () => ({
    type: GENERATE_RAND
})

export const SET_GUESS = 'SET_GUESS';
export const setGuess = guess => ({
    type: SET_GUESS,
    guess
})

export const EVALUATE_GUESS = 'EVALUATE_GUESS';
export const evaluateGuess = guess => ({ //do I need to pass the guess in?
    type: EVALUATE_GUESS,
    guess
})

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME
})

export const SET_TOGGLE = 'SET_TOGGLE';
export const setToggle = value => ({
    type: SET_TOGGLE,
    pageToggle: value
})