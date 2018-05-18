import React, { Component } from 'react';
import './App.css';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: '',
                name: '',
                age: '',
                height: ''
        }

    //Important to bind the correct this
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        const newSmurf = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        };
        console.log(newSmurf);
        this.setState({
            id: '',
            name: '',
            age: '',
            height: ''
        })
    }


    render() { 
        return (
            <div className="SmurfCard-container">
                <form className="SmurfCard-form" onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    </label>
                    <input
                        value={this.state.name} 
                        placeholder="Smurf Name"
                        name="name" 
                        onChange={this.handleInputChange}/>
                    <label>
                        Age:
                    </label>
                    <input
                        value={this.state.age}
                        placeholder="Smurf Age"
                        name="age" 
                        onChange={this.handleInputChange}/>
                    <label>
                        Height:
                    </label>
                    <input value={this.state.height} 
                        placeholder="Smurf Height in cm"
                        name="height" 
                        onChange={this.handleInputChange}/>
                    </form>
                    <div>
                        <button 
                            className="ok-button"
                            onClick={this.handleSubmit}>
                            Submit
                        </button>
                        <button 
                            className="cancel-button"
                            onClick={this.handleCancel}>
                            Cancel
                        </button>
                    </div>
            </div>
          )
    }
}
 
export default SmurfForm;