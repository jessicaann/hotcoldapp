import React from 'react';
import {connect} from 'react-redux';


export const History = (props) => {
    return(
        <div>
            <ul className='history'>
            {props.GuessHistory.map((num,index) => {
                return (
                        <li key={index}>{num}</li>
                )
            })}
            </ul>
        </div>
    );
} 
const mapStateToProps = state => ({
    GuessHistory: state.history
})
export default connect(mapStateToProps)(History);
