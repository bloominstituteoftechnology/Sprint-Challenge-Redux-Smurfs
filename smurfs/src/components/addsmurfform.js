import React from 'react';

class AddNewSmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',

        }
    }

    handleInput = event => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const smurf = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }

        this.props.add(smurf);

        this.setState({
            name: '',
            age: '',
            email: '',
        })
    }

render() {
    return (
        <form className= 'form' onSubmit= {this.handleSubmit}>

            <input className = 'input' 
                placeholder = 'name'
                name='name'
                type = 'text'
                value = {this.state.name}
                onChange = {this.handleInput}
            />

            <input className = 'input' 
                placeholder = 'age'
                name='age'
                type = 'number'
                value = {this.state.age}
                onChange = {this.handleInput}
            />

            <input className = 'input' 
                placeholder = 'email'
                name='email'
                type = 'email'
                value = {this.state.email}
                onChange = {this.handleInput}
            />

            <button> Add Smurf </button>   
        </form>

       
    )
}

}

export default AddNewSmurfForm;