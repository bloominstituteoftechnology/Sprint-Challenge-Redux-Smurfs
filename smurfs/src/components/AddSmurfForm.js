import React from 'react';
import './App.css'



class AddSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value }) 
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.age && this.state.height) {
            this.props.addSmurf({ name : this.state.name, 
                                  age : this.state.age, 
                                  height: `${this.state.height}cm`})
            this.setState({ name: '', age: '', height: ''})
        } else {
            alert('Need correct data');
        }
    }

    render() {
        return (
            <div>
                <form className = "form-div" onSubmit={this.handleSubmit}>
                   <input
                        onChange = {this.handleChange}
                        value = {this.state.name}
                        placeholder = "name"
                        name = "name"
                    />

                    <input
                        onChange = {this.handleChange}
                        value = {this.state.age}
                        placeholder = "age"
                        name = "age"
                    />
            
                    <input
                        onChange = {this.handleChange}
                        value = {this.state.height}
                        placeholder = "height"
                        name = "height"
                    />

                    <button type="submit">Add Friend</button>
                </form>
            </div>
        )
    }//render() end...
}

export default AddSmurfForm;