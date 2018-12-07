import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import { connect } from 'react-redux';
import {getSmurf, addSmurf, } from '../actions'
import SmurfList from './SmurfList'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'',
      age: '',
      height: ''
    }
  }
  componentDidMount(){
    this.props.getSmurf()
  }
  inputHandler=(event) =>{
    this.setState({ [event.target.name]: event.target.value})
    
  }
  submitHandler =(event) =>{
    event.preventDefault();
    this.props.addSmurf({name:this.state.name, age: this.state.age, height: this.state.height})
    this.setState({
      name:'',
      age: '',
      email:''
    })
  }
  render() {
    return (
      <div className="App">
      <h1>REDUX SMURF PROJECT</h1>
        <SmurfList list = {this.props.smurfs}/>
        <Form 
        height = {this.state.height} 
        age = {this.state.age} 
        name= {this.state.name} 
        inputHandler = {this.inputHandler}
        submitHandler = {this.submitHandler}
        />
      </div>
    );
  }
}

const mapStatetoProps = state =>{
  return{
    smurfs: state.smurfReducer.smurfs
  }
}

export default connect(mapStatetoProps,{
  addSmurf,
  getSmurf
})(App)
