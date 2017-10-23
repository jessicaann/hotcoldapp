import React from 'react';

export const WhatPage = (props) => {
    return(
        <div className='overlay'>
            <div className='what'>
                <h1>Here's how to play</h1>
                <div className='instructions'>
                    <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
                    <ul>
                        <li>1. I pick a random secret number between 1 to 100 and keep it hidden.</li>
                        <li>2. You need to guess until you can find the hidden secret number.</li>
                        <li>3. You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
                    </ul>
                    <p>So, Are you ready?</p>
                </div>
                <button onClick={props.onClick}>Let's play!</button>
            </div>
        </div>
    );
}
