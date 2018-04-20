import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addSmurf } from '../actions'

class SmurfForm extends Component {
    state = {
        name: '',
        height: '',
        age: ''
    }

    handdleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createSmurf = () => {
        const { name, age, height } = this.state;
        const smurf = { name, age, height };
        console.log('SMURF', smurf);
        this.props.addSmurf(smurf);
        this.setState({
            name: '',
            height: '',
            age: ''
        });
    };

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder="Smurf name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handdleInputChange}
                />
                <input
                    type='text'
                    placeholder="Smurf height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handdleInputChange}
                />
                <input
                    type='text'
                    placeholder="Smurf age"
                    name="age"
                    value={this.state.age}
                    onChange={this.handdleInputChange}
                />
                <button onClick={this.createSmurf}>Create Smurf</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf, 
    }
}
export default connect(mapStateToProps, { addSmurf } )(SmurfForm);