

//== SmurfForm =================================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


//== Component =================================================================

class SmurfForm extends React.Component {

    //-- Lifecycle -----------------------------------
    constructor() {
        super(...arguments);
        this.state = {
            name: '',
            age: null,
            height: null,
        }    
    }

    //-- Rendering -----------------------------------
    render() {
        let header = <h2>Add Smurf:</h2>;
        return (
            <form onSubmit={this.handleSubmit}>
                {header}
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    placeholder="name"
                    value={this.state.name}
                    name="name"
                />
                <input
                    type="number"
                    onChange={this.handleInputChange}
                    placeholder="age"
                    value={this.state.age || ''}
                    name="age"
                />
                <input
                    type="number"
                    onChange={this.handleInputChange}
                    placeholder="height"
                    value={this.state.height || ''}
                    name="height"
                />
                <button type="submit">Submit</button>
            </form>
        );
    }

    //-- Interaction ---------------------------------
    handleInputChange = changeEvent => {
        this.setState({
            [changeEvent.target.name]: changeEvent.target.value 
        });
    }
    handleSubmit = submitEvent => {
        // Prevent page refresh
        submitEvent.preventDefault();
        // Cancel if UI isn't ready
        if(!this.props.ready){
          this.props.notReady('You cannot add a smurf right now');
          return;
        }
        // Generate smurf data and send to server
        let smurfData = {
            name: this.state.name,
            age: Number(this.state.age),
            height: this.state.height,
        };
        this.clearState();
        this.props.addSmurf(smurfData);   
    }

    //-- Utility Methods -----------------------------
    clearState() {
        this.setState({
            name: '',
            age: null,
            height: '',
        });
    }
}
  
//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        ready: !state.fetching,
        focus: state.focus,
    };
}
SmurfForm = connect(mapStateToProps, {
    addSmurf: actions.addSmurf,
})(SmurfForm);

//-- Exporting -----------------------------------
export default SmurfForm;
