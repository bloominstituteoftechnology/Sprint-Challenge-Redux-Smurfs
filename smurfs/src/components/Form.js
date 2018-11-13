import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index'

class CreateSmurf extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: '',
            height: ''
        } 
    }

    inputHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = event => {
        event.prevendDefault()
        this.props.createAvenger(this.state)
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input type = "text" name= "name" value ={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
                <input type = "text" name= "age" value ={this.state.name} onChange={this.inputHandler} placeholder="Age"/>
                <input type = "text" name= "height" value ={this.state.name} onChange={this.inputHandler} placeholder="Height"/>
                <button type = "submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {addSmurf: addSmurf})(CreateSmurf)