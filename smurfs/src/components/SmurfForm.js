import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
        id: ''
    };
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddSmurf = _ => {
        const { name, age, height, id } = this.state;
        this.props.createSmurf({ name, age, height, id });
        this.setState({ name: '', age: '', height: '', id:'' });
    };

    render() {
        return (
            <form className="Column-Layout">
                <input
                    className="input"
                    value={this.state.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={this.handleInputChange}
                />
                <input
                    className="input"
                    value={this.state.age}
                    name="age"
                    type="text"
                    placeholder="Age"
                    onChange={this.handleInputChange}
                />
                <input
                    className="input"
                    value={this.state.height}
                    name="height"
                    type="text"
                    placeholder="height"
                    onChange={this.handleInputChange}
                />
                <input
                    className="input"
                    value={this.state.id}
                    name="id"
                    type="text"
                    placeholder="ID"
                    onChange={this.handleInputChange}
                />
                <button onClick={() => this.handleAddSmurf()} type="button">
                    Add Smurf
        </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingSmurf: state.creatingSmurf
    };
};

export default connect(mapStateToProps, { createSmurf })(SmurfForm);
