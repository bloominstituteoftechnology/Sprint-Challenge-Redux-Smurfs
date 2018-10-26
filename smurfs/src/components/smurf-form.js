

//== SmurfForm Component =======================================================

//-- Dependencies --------------------------------
import React from "react";

//-- Lifecycle -----------------------------------
export default class extends React.Component {
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
        if(!this.props.update){
            header = <h2>Add Smurf:</h2>
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
                    value={this.state.height}
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
        submitEvent.preventDefault();
        let smurfData = {
            name: this.state.name,
            age: Number(this.state.age),
            height: this.state.height,
        };
        this.clearState();
        this.props.onSubmit(smurfData);
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
