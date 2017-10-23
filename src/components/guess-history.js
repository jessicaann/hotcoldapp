import React from 'react';

export const History = (props) => {
    return(
        <div>
            <ul>
            {props.GuessHistory.map((num,index) => {
                return (
                        <li key={index}>{num}</li>
                )
            })}
            </ul>
        </div>
    );
}