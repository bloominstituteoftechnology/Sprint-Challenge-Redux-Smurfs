import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddSmurf = () => {
        const { name, age, height } = this.state;
        this.props.addSmurfs({ name, age, height });
        this.setState({ name: '', age: '', height: '', });
    }

    render() {
        return (
            <form onSubmit={() => this.handleAddSmurf()}>
                <input
                    name='name'
                    value={this.state.name}
                    type="text"
                    placeholder="Name"
                    onChange={this.handleInputChange}
                />
                <input
                    name='age'
                    value={this.state.age}
                    type="number"
                    placeholder="Age"
                    onChange={this.handleInputChange}
                />
                <input
                    name='height'
                    value={this.state.height}
                    type="number"
                    placeholder="Height"
                    onChange={this.handleInputChange}
                />
                <button type='submit'>
                    Add New Smurf
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        addSmurfs: state.addSmurfs
    };
}

export default connect(mapStateToProps, { addSmurfs })(SmurfForm);