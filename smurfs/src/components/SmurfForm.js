import React from 'react';
import {connect} from 'react-redux';

import {addSmurf} from '../actions/index';

class SmurfForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name : '',
            age : '',
            height: '',
        }
    }

    inputHandler = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }
    submitHandler = (event) =>{
        event.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({
            name : '',
            age : '',
            height: '',
        })

    }
    render(){
        return(
            <div className = 'form-container'>
                <form onSubmit = {this.submitHandler}>
                    <input 
                        type = 'text'
                        placeholder = 'add new Smurf name'
                        name = 'name'
                        value = {this.state.name}
                        onChange = {this.inputHandler}
                        />
                    <input 
                        type = 'text'
                        placeholder = 'add new Smurf age'
                        name = 'age'
                        value = {this.state.age}
                        onChange = {this.inputHandler}
                        />
                    <input 
                        type = 'text'
                        placeholder = 'add new Smurf height'
                        name = 'height'
                        value = {this.state.height}
                        onChange = {this.inputHandler}
                        />  
                    <button type = 'submit'>Add Smurf</button>          
                </form>
            </div>
        )
    }
}

const mapStateToProps = () =>{
    return {}
}
export default connect(mapStateToProps, {addSmurf})(SmurfForm)