

//== Smurfs ====================================================================
/*
    to wire this component up you're going to need a few things.
    I'll let you do this part on your own. 
    Just remember, `how do I `connect` my components to redux?`
    `How do I ensure that my component links the state to props?`
*/

//-- Dependencies --------------------------------
import React, { Component } from 'react';
import {SmurfList} from './smurf-list.js';
import {connect} from 'react-redux';
import * as actions from '../actions';


//== Component =================================================================

class Smurfs extends Component {
    
    //-- Lifecycle -----------------------------------
    constructor() {
      super(...arguments);
      this.state = {};
    }
    componentDidMount() {
      this.props.getSmurfs();
    }
  
    //-- Rendering -----------------------------------
    render() {
        return (
            <div className="smurfs">
                <div>
                    <h1>`SMURFS! 2.0 W/ Redux</h1>
                    <p>Welcome to your Redux version of Smurfs!</p>
                </div>
                <SmurfList
                    loading={!this.props.ready}
                    smurfs={this.props.smurfs}
                    onFocus={this.focusSmurf}
                />
            </div>
        );
    }
}


//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        smurfs: state.smurfs,
        //error: state.error,
        ready: !state.fetching,
    };
}
Smurfs = connect(mapStateToProps, {
    getSmurfs: actions.getSmurfs,
    /*addSmurf: actions.addSmurf,
    notReady: actions.notReady,
*/})(Smurfs);

//-- Exporting -----------------------------------
export default Smurfs;
  