

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
        let header;
        // Add a Smurf
        if(this.props.focus === null){
            header = <h2>Add Smurf:</h2>;
        // Update a Smurf
        } else{
            header = <h2>Update Smurf:</h2>
        }
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
        // Generate smurf data and clear state
        let smurfData = {
            name: this.state.name,
            age: Number(this.state.age),
            height: this.state.height,
        };
        this.clearState();
        // Send to server as new smurf or smurf update
        if(this.props.focus === null){
            this.props.addSmurf(smurfData);   
        } else{
            smurfData.id = this.props.focus;
            this.props.updateSmurf(smurfData);
        }
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
    updateSmurf: actions.updateSmurf,
    notReady: actions.notReady,
})(SmurfForm);

//-- Exporting -----------------------------------
export default SmurfForm;
