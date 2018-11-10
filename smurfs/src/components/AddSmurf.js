import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class AddSmurf extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input onChange={this.inputHandler} type="text" name="name" placeholder="Smurf's Name" value={this.state.name}></input>
                <input onChange={this.inputHandler} type="number" name="age" value={this.state.age}></input>
                <input onChange={this.inputHandler} type="text" name="height" placeholder="How short is this smurf?" value={this.state.height}></input>
                <button type="submit">Add New Smurf</button>
            </form>
        )
    }
}

export default connect( ()=>({}), {addSmurf})(AddSmurf);