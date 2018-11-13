import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions/index'

class CreateSmurf extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
            id: 0,
        }
    }
    inputHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.createSmurf(this.state)
    }


    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <input type='text' name='name' value={this.state.name} onChange={this.inputHandler} placeholder='Name your Smurf!' />
                <input type='text' name='age' value={this.state.age} onChange={this.inputHandler} placeholder='How old is your Smurf?' />
                <input type='text' name='height' value={this.state.height} onChange={this.inputHandler} placeholder='How tall is Smurf?' />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        smurf: state.smurf
    }
}
export default connect(mapStateToProps, { createSmurf: createSmurf })(CreateSmurf);