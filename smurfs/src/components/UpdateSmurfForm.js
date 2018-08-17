import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

class UpdateSmurfForm extends Component {
    constructor(props) {
    super(props);

    this.state = {
        name: '',
        age: '',
        height: ''
    }
}

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    submitForm = (event) => {
        event.preventDefault();
        this.props.updateSmurf(this.props.id, this.state.name, this.state.age, this.state.height);
        this.setState({name: '', age: '', height: ''})
    }

    render() {
    return (
        <div className={"form " + (this.props.hidden ? "formHidden" : "formShown")}>
            <h4>Update this Smurf</h4>
            <form onSubmit={this.submitForm}>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler}/>
            <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.changeHandler}/>
            <input type="number" name="height" placeholder="Height" value={this.state.height} onChange={this.changeHandler}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
    }
}


export default connect(null, {updateSmurf})(UpdateSmurfForm);
