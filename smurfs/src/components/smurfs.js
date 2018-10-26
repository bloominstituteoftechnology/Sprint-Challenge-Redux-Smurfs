

//== Smurfs ====================================================================
/*
    to wire this component up you're going to need a few things.
    I'll let you do this part on your own. 
    Just remember, `how do I `connect` my components to redux?`
    `How do I ensure that my component links the state to props?`
*/

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
//import * as actions from '../actions';
import SmurfList from './smurf-list.js';
import SmurfForm from './smurf-form.js';
import Error from './error.js';


//== Component =================================================================

class Smurfs extends React.Component {
    
    //-- Lifecycle -----------------------------------\
  
    //-- Rendering -----------------------------------
    render() {
        return (
            <div className="smurfs">
                <div>
                    <h1>`SMURFS! 2.0 W/ Redux</h1>
                </div>
                <SmurfForm />
                <Error error={this.props.error} />
                <SmurfList />
            </div>
        );
    }

    //-- Interaction ---------------------------------
}


//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        error: state.error,
    };
}
Smurfs = connect(mapStateToProps, {
})(Smurfs);

//-- Exporting -----------------------------------
export default Smurfs;