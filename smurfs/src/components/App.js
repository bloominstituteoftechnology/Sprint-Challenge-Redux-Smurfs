import React, { Component } from 'react';
import { connect } from "react-redux";

import SmurfList from './smurfList';
import { getSmurfs,  addSmurf, deleteSmurf } from "../actions";
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      age: "",
      height: ""
    }
  }
  
  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  deleteSmurf = (id) => {
   
    this.props.deleteSmurf(id);
  }

  addAnotherSmurf = () => {

    const { name, age, height} = this.state;
    this.props.addSmurf({name, age, height})
    this.setState({name: "", age: "", height: ""})
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={()=>this.addAnotherSmurf()}>Add another Smurf</button>
        <input onChange={this.changeHandler} name="name" value={this.state.name}></input>
        <input onChange={this.changeHandler} name="age"  value={this.state.age}></input>
        <input onChange={this.changeHandler} name="height"  value={this.state.height}></input>
       <SmurfList smurfs={this.props.smurfs} delete={this.deleteSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state inside map",state)
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs,
    addSmurf,
    deleteSmurf }
)(App)
