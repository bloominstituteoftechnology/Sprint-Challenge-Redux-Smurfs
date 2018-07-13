import React from 'react';

class AddSmurfForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            height: '',
            age: ''
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <input onChange={this.handleInput} value={this.state.name} type='text' name='name' placeholder='name' />
                <input onChange={this.handleInput} value={this.state.height} type='text' name='height' placeholder='height' />
                <input onChange={this.handleInput} value={this.state.age} type='text' name='age' placeholder='age' />
                <button>Add Smurf</button>
            </form>
        );
    }
}

export default AddSmurfForm;