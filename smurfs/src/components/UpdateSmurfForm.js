import React from 'react';
import { connect } from 'react-redux';
import { editSmurf } from '../actions';

class UpdateSmurfForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            height: this.props.height,
            age: this.props.age
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    editSmurf = () => {
        const { name, height, age } = this.state;
        const smurf = { name, height, age, id: this.props.id };

        if (name === '' || height === '' || age === '') return;

        this.props.editSmurf(smurf);
        this.setState({ name: '', height: '', age: '' });
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <input onChange={this.handleInput} value={this.state.name} type='text' name='name' placeholder='name' />
                <input onChange={this.handleInput} value={this.state.height} type='text' name='height' placeholder='height' />
                <input onChange={this.handleInput} value={this.state.age} type='text' name='age' placeholder='age' />
                <button onClick={this.editSmurf}>Edit Smurf</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { editSmurf })(UpdateSmurfForm);