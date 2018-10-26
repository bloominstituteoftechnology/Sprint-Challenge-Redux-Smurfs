

//== SmurfList =================================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Smurf from './smurf.js';


//== Component =================================================================

class SmurfList extends React.Component {

    //-- Lifecycle -----------------------------------
    componentDidMount() {
        this.props.getSmurfs();
    }

    //-- Rendering -----------------------------------
    render() {
        let loadNotifier;
        let classText = 'smurf-list';
        if(this.props.loading){
            loadNotifier = (<div className="load-notifier">(Loading)</div>);
            classText += ' smurf-list_loading';
        }
        if(this.props.focus !== null){
            classText += ' smurf-list_focus';
        }
        return (
            <div className={classText}>
                {loadNotifier}
                {this.focusFilter(this.props.smurfs, this.props.focus).map(smurf => (
                    <Smurf
                        key={smurf.name}
                        smurf={smurf}
                        onClick={() => this.props.onFocus(smurf.id)}
                    />
                ))}
                <div
                    className="smurf-list-cancel"
                    onClick={this.props.onCancel}
                    children="cancel"
                />
                <div className="smurf-list-delete">Delete</div>
            </div>
        );
    }

    //-- Interaction ---------------------------------
    focusFilter(smurfs, focusId) {
        if(focusId === null){ return smurfs;}
        smurfs.filter(smurf => smurf.id === focusId);
    }
}


//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        smurfs: state.smurfs,
        error: state.error,
        focus: state.focusId,
    };
}
SmurfList = connect(mapStateToProps, {
    getSmurfs: actions.getSmurfs,
    onFocus: actions.focusSmurf,
    onCancel: actions.focusCancel,
    onDelete: actions.deleteSmurf,
    /*notReady: actions.notReady,
*/})(SmurfList);

//-- Exporting -----------------------------------
export default SmurfList;
