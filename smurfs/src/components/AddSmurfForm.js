import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

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

    addSmurf = () => {
        const { name, height, age } = this.state;
        const smurf = { name, height, age };

        if (name === '' || height === '' || age === '') return;

        this.props.addSmurf(smurf);
        this.setState({ name: '', height: '', age: '' });
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <input onChange={this.handleInput} value={this.state.name} type='text' name='name' placeholder='name' />
                <input onChange={this.handleInput} value={this.state.height} type='text' name='height' placeholder='height' />
                <input onChange={this.handleInput} value={this.state.age} type='text' name='age' placeholder='age' />
                <button onClick={this.addSmurf}>Add Smurf</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);