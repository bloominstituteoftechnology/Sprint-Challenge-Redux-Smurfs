import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRegisterSmurf = () => {
        const newSmurf = this.state;
        this.props.addSmurf(newSmurf);
        this.setState({ name: '', age: '', height: '' })
    }

    render() {
        return (
            <div>
                <form>
                    <input name='name' value={this.state.name} onChange={this.handleInputChange} placeholder='Add name...' />
                    <input name='age' value={this.state.age} onChange={this.handleInputChange} placeholder='Add age...' />
                    <input name='height' value={this.state.height} onChange={this.handleInputChange} placeholder='Add height...' />
                    <button onClick={this.handleRegisterSmurf}>Register Smurf</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addSmurf })(AddSmurfForm);