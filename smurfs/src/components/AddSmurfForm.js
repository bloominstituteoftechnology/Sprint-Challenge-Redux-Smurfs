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

    render() {
        return (
            <div>
                <form>
                    <input name='name' value={this.state.name} placeholder='Add name...' />
                    <input name='age' value={this.state.age} placeholder='Add age...' />
                    <input name='height' value={this.state.height} placeholder='Add height...' />
                    <button>Register Smurf</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addSmurf })(AddSmurfForm);