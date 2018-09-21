import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/index';

class AddSmurfForm extends React.Component {
    
    constructor(props){
        
        super(props);

        this.state = {
            input: '',
            name: '',
            age: '',
            height: '',
        }
    }

    // componentDidMount(){
    //     console.log(this.state);
    // }

    handleInput = event => {
        event.preventDefault();
        let newInput = event.target.value;
        if(event.target.name === 'input-name'){
            this.setState( { 
                name: newInput
            })
        }

        if(event.target.name === 'input-age'){
            this.setState({
                age: newInput
            })
        }

        if(event.target.name === 'input-height'){
            this.setState({
                height: newInput
            })
        }

        
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        let currentState = this.state;

        let newSmurf = {
            name: currentState.name,
            age: currentState.age,
            height: currentState.height
        }
        
        this.props.addSmurf(newSmurf);

        console.log(newSmurf);

        this.setState({
            input: '',
            name: '',
            age: '',
            height: '',
        })

        window.location.reload();
    }
    render(){

    return (
        <div className = 'add-smurf-form'>
            <form onSubmit={this.handleSubmit}>
            
            <input type = 'text' placeholder='Name' name='input-name' onChange={this.handleInput} value={this.state.name}></input>
            <input type = 'number' placeholder='Age' name='input-age' onChange={this.handleInput} value={this.state.age}></input>
            <input type = 'text' placeholder='Height' name='input-height' onChange={this.handleInput} value={this.state.height}></input>
            <button type = 'submit'>Add Smurf</button>
            
            </form>
        </div>
    )
}
}

const mapStateToProps = () => {
    return {}
}

export default connect(
    mapStateToProps, {addSmurf}
)(AddSmurfForm);