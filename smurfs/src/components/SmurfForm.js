import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddSmurf = () => {
        const { name, age, height } = this.state;
        this.props.createSmurf({ name, age, height });
        this.setState({ name: '', age: '', height: '' })
    }


    render() {
        return (
            <div className="SmurfForm">
                <form onSubmit={event => event.preventDefault()}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"
                    />
                    <button onClick={() => this.handleAddSmurf()}>Add to the village</button>
                </form>
            </div>
        );
    }
}





const mapStateToProps = state => {
    return {
        error: state.error,
        addingSmurf: state.addingSmurf

    }
}

export default connect(mapStateToProps, { createSmurf })(SmurfForm);
