import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
import { Button, Input } from 'reactstrap';

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
            <form className='add-form' onSubmit={event => event.preventDefault()}>
                <Input className='add-field' onChange={this.handleInput} value={this.state.name} type='text' name='name' placeholder='Name' autoFocus />
                <Input className='add-field' onChange={this.handleInput} value={this.state.height} type='text' name='height' placeholder='Height' />
                <Input className='add-field' onChange={this.handleInput} value={this.state.age} type='text' name='age' placeholder='Age' />
                <Button color='primary' className='add-button' type='submit' onClick={this.addSmurf}>Add Smurf</Button>
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