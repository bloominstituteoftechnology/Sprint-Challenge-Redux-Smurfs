import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createSmurf } from '../actions/index'

class CreateSmurf extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    inputHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = event =>{
        event.preventDefault()
        this.props.createSmurf(this.state)
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name" />
                <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="250"/>
                <input type="text" name="height" value={this.state.height} onChange={this.inputHandler} placeholder="5cm" />
                <button type="submit">Add Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { createSmurf: createSmurf})(CreateSmurf);