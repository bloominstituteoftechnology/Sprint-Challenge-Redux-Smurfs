

//== Error - Display for errr messages =========================================

//-- Dependencies --------------------------------
import React from "react";
import {connect} from 'react-redux';

//-- Component -----------------------------------
function Error(props) {
    if(!props.error){ return null;}
    return (
        <div className="error">
            {props.error}
        </div>
    );
}

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        error: state.error,
    };
}
let ReduxError = connect(mapStateToProps, {})(Error);

//-- Exporting -----------------------------------
export default ReduxError;
