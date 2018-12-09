import React from 'react';
import {addingSmurf} from '../actions/';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addSmurf = () => {
        this.props.addingSmurf(this.state)
    }

    render() {
        return (
            <div>
                <h2>ADD SMURF</h2>
                <form onSubmit={this.addSmurf(this.state)}>
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                 <input
                    name='age'
                    type='text'
                    placeholder='Age'
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                 <input
                    name='height'
                    type='text'
                    placeholder='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <button>Add Smurf</button>
                </form>
            </div>
        );
    }
}


export default connect(null, {addingSmurf})(SmurfForm)