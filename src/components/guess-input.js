import React from 'react';

export const GuessInput = (props) => {
    const submitGuess = e => {
        e.preventDefault();
        props.onGuess();
    }
    return(
        <form onSubmit={ submitGuess }>
            <input className='text' placeholder="Enter Guess" value={props.value}
            onChange={ e => props.setGuess( e.target.value ) } />
            <button type="submit">Guess</button>
        </form>
    );
}
