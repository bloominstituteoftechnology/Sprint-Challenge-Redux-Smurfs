import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createSmurf } from '../actions';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = { 
            name:"",
            age: "",
            height:"",
     }
    }

    saveInfo = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    render() { 
        return ( 
        <div>
            <form onSubmit={(event)=> {
                event.preventDefault();
                this.props.createSmurf(this.state);
            }}>
            <input name='name' placeholder='Name' onChange={this.saveInfo}></input>
            <input name='age' placeholder='Age' onChange={this.saveInfo}></input>
            <input name='height' placeholder='Height' onChange={this.saveInfo}></input>
            <button type='submit'>Enter</button>
            </form>
        </div> );
    }
}

const mapToStateProps = state => {
    return{
        smurfs: state.smurfs,
        adding: state.adding,
        error: state.error
    };
};
 
export default connect(mapToStateProps, {createSmurf})(Form);