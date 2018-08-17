import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import  {getSmurfs, addSmurf} from '../store/actions'
import Smurfs from './Smurfs'
import Form from './Form'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : ' ',
      age : ' ',
      height : ' '
    }
  }
  componentDidMount() {
    this.props.getSmurfs( );
  }
  change = e => {
    this.setState({[e.target.name]: e.target.value})
  }
   submit  = e => {
     e.preventDefault()
     this.props.addSmurf( {
       name: this.state.name,
       age: this.state.age,
       height: this.state.height
     })
     this.setState({
       name: ' ',
       age: ' ',
       height: ' '
     })
   }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs smurfs = {this.props.smurfs} />
        <Form submit = {this.submit} change = {this.change} name = {this.state.name} age= {this.state.age} height = {this.state.height} />
      </div>
    );
  }
}


const mapDispatchtoProps = state => {
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error:state.error
  }
}

export default connect(mapDispatchtoProps, {getSmurfs, addSmurf})(App);
