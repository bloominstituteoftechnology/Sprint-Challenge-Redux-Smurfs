import React, { Component } from 'react';

class SmurfsForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    addSmurf = e => {
        e.preventDefault();
        console.log('state submit', this.state);
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="SmurfsForm">
                <form onSubmit={this.addSmurf}>
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
                    <button type="submit">Add to the village</button>
                </form>
            </div>
        );
    }
}

export default SmurfsForm;
