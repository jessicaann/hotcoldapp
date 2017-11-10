import React from 'react';
import {connect} from 'react-redux';


export const Feedback = (props) => {
    return(
        <h2> {props.text} </h2>
    );
}
const mapStateToProps = state => ({
    text: state.feedback
});
export default connect(mapStateToProps)(Feedback);

//module.exports = { Feedback }