import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
    }


    render() {
        return (
            <div>
                <form onSubmit={this.createSmurf}>
                    <input type="text"
                    placeholder="Name"
                    onChange={this.updateSmurf}
                    name="name"
                    value={this.state.name}
                    />
                    <input type="text"
                    placeholder="Age"
                    onChange={this.updateSmurf}
                    name="age"
                    value={this.state.age}
                    />
                    <input type="text"
                    placeholder="Height"
                    onChange={this.updateSmurf}
                    name="height"
                    value={this.state.height}
                    />
                    <button type="submit">Add to the village!</button>
                </form>
            </div>
        );
    }

    updateSmurf = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    };

    createSmurf = event => {
        event.preventDefault();
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        };

        this.props.addSmurf(newSmurf);

        this.setState({
            name: '',
            age: '',
            height: '',
        });
    };

}

export default connect(null, { addSmurf }) (SmurfForm)
