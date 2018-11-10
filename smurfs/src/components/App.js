import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions/index';
import {addSmurf} from '../actions/index';
import { connect } from 'react-redux';
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
      name: '',
      age: 0,
      height: '',
    }
  }

  componentDidMount() {

    this.props.getSmurfs()
  }

  inputHander = (e) => {
    e.preventDefault();
   this.setState({[e.target.name]: e.target.value,})
  }

  submitHander = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state)
  }


  render() {

      console.log(this.props);
  
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {return (
        <div key={smurf.id}>
        {smurf.name}
        {smurf.age}
        {smurf.height}
        </div>)})}
        <form onSubmit={this.submitHander}>
          <input type="text" name="name" placeHolder="name" onInput={this.inputHander}></input>
          <input type="text" name="age" placeHolder="age" onInput={this.inputHander}></input>
          <input type="text" name="height" placeHolder="height" onInput={this.inputHander}></input>
          <button type="submit">SMURFIN</button>
        </form>
      </div> //app wrap 
   
    );
  }
}

const mapStateToProps = (state) => {
  return {
      smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
