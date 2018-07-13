import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSmurfs } from '../actions/index'
class AddSmurfForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }
    handleSubmitsmurf = (e) => {
        e.preventDefault();
        const smurf = { name: this.state.name, age: this.state.age, height: this.state.height }
        this.props.addSmurfs(smurf);
        this.setState({ name: '', age: '', height: '' })
    }
    handleNameChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <form className="form">
                    <input
                        className="field"
                        type="text"
                        placeholder="name"
                        name="name"
                        onChange={this.handleNameChange}
                        value={this.state.name}
                    />
                    <input
                        className="field"
                        type="number"
                        placeholder="age"
                        name="age"
                        onChange={this.handleNameChange}
                        value={this.state.age}
                    />
                    <input
                        className="field"
                        type="text"
                        placeholder="height"
                        name="height"
                        onChange={this.handleNameChange}
                        value={this.state.height}
                    />
                    <button className="field-btn" onClick={this.handleSubmitsmurf}>Submit smurf</button>
                </form>
            </div>);
    }
}


export default connect(null, { addSmurfs })(AddSmurfForm);