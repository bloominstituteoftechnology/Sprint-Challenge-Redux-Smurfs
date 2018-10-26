import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class SmurfForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
            id: ''
        }
    }

    nameChangeHandler = event => {
        this.setState({ name: event.target.value });
    }
    ageChangeHandler = event => {
        this.setState({ age: event.target.value });
    }
    heightChangeHandler = event => {
        this.setState({ height: event.target.value });
    }

    submitHandler = event => {
        event.preventDefault();
        let currentId = Math.floor(Math.random() * 1000000);
        this.props.addSmurf(this.state);
        this.setState({name:'', age:'', height: '', id: currentId});
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    type='text'
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.nameChangeHandler}
                />
                <input 
                    type='text'
                    placeholder="age"
                    value={this.state.name}
                    onChange={this.ageChangeHandler}
                />
                <input 
                    type='text'
                    placeholder="height"
                    value={this.state.name}
                    onChange={this.heightChangeHandler}
                />
                <button type="submit">Add Smurf</button>
            </form>
        );
    }
}
export default connect(null, {addSmurf})(SmurfForm);