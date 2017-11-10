import React from 'react';
import {connect} from 'react-redux';
import {generateRand, setGuess, evaluateGuess, newGame, setToggle} from '../actions';
import { Feedback } from './feedback';
import { GuessInput } from './guess-input';
import { History } from './guess-history';
import { WhatPage } from './whatpage';

export class GameDisplay extends React.Component {
    
    componentWillMount(){
        this.props.dispatch(generateRand());
    }
    setGuess(guess) { 
        this.props.dispatch(setGuess(guess));
    }
    onGuess(guess){
        this.props.dispatch(evaluateGuess());
    }
    newGame(){
        this.props.dispatch(newGame());
    }
    setToggle(value){
        this.props.dispatch(setToggle(value));
    }
    render(){
        if(this.state.pageToggle === false) {
            return (
                <div> 
                    <nav>
                        <ul>
                            <li><a onClick={ () => this.setToggle(true)} href="#whatpage">What?</a></li>
                            <li><a onClick={ () => this.newGame() } href="#newgame">New Game</a></li>
                        </ul>
                    </nav>
                    <h1>Hot or Cold</h1>
                    <main className='game'>
                        <Feedback text={this.state.feedback} />
                        < GuessInput 
                        value={this.state.guess}
                        onGuess={guess => this.onGuess(guess)} 
                        setGuess={guess => this.setGuess(guess)}
                        />
                        <History GuessHistory={this.state.history} />
                    </main>
                </div>
                );
        }
        else return (
            <WhatPage onClick={ (value)=> this.setToggle(false)} />
        );
        
    }
}

console.log(state);

const mapStateToProps = state => {
    console.log(state);
    return {
    random: state.random,
    guess: state.guess,
    history: state.history,
    feedback: state.feedback,
    pageToggle: state.pageToggle
    }
};

export default connect(mapStateToProps)(GameDisplay);


//add a nav/header to the game-display for the What and the New Game buttons
// 1) on page load, generate a random number and store in the state
// 2) on submit of a guess, store the guess in the state
// 3) compare this.state.random to this.state.guess in the GameDisplay
//    and pass a response (hot, cold, kind of warm, you got it!) to Feedback as a prop
// 4) in the feedback file, based on what kind of prop was received (if hot, do x)
//    then, display a message that is stored as a variable (var hot = 'Hot!')
// 5) save the history of guesses in the state? Can I directly access the history or should the
//    state be set up as an array? Then when we do the comparison, we always take the last one in the
//    array (most recent)?
// 6) When someone guesses correctly and I have feedback saying new game, do I just have the new game link do a page refresh?

// go back to guess history and map over the array to get list items.

//What is written as text, and then you say <What /> create a property that toggles for the what page.