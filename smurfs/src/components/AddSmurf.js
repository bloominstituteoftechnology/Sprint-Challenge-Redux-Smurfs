import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addSmurfs } from '../actions/index'

class AddSmurf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            height:''
        }
    }
    
    inputHandler = event =>{
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = event =>{
        event.preventDefault()
        this.props.addSmurfs(this.state)
        this.setState({
            name:'',
            age:'',
            height:''
        })
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name" />
                <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="age" />
                <input type="text" name="height" value={this.state.height} onChange={this.inputHandler} placeholder="height" />
                <button type="submit">Add to the village</button>
            </form>
        )
    }
}

const mapStateToProps = state =>{
    return {}
}

export default connect(mapStateToProps, {addSmurfs})(AddSmurf)