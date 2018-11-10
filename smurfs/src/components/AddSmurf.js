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
                <input type="text" name="name" placeholder="Smurf's Name" value={this.state.name}></input>
                <input></input>
                <input></input>
                <button type="submit">Add New Smurf</button>
            </form>
        )
    }
}

export default connect( ()=>({}), {addSmurf})(AddSmurf);