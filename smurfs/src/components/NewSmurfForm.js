import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class NewSmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }
    handleChange = (el) => {
        this.setState({[el.target.name]: el.target.value});
    }
    handleSubmit = (el) => {
        let newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.addSmurf(newSmurf)
        this.setState({name: "", age: "", height: ""})
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}>
                </input>,
                <input type="text" placeholder="age" name="age" value={this.state.age} onChange={this.handleChange}>
                </input>,
                <input type="text" placeholder="height" name="height" value={this.state.height} onChange={this.handleChange}>
                </input>
                <button onClick={this.handleSubmit}>Add a Smurf!</button>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, { addSmurf })(NewSmurfForm);