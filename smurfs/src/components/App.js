import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, createSmurf } from "../actions";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  handleInput = event => {
    this.setState( {[event.target.name]: event.target.value })
  }

  handleNewSmurf = smurf => {
    console.log(this.props.smurfs)
    this.props.createSmurf(smurf);
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>Add a new smurf</h2>
        <input onChange={this.handleInput} name="name" value={this.props.value} placeholder="name" />
        <input onChange={this.handleInput} name="age" value={this.props.value} placeholder="age" />
        <input onChange={this.handleInput} name="height" value={this.props.value} placeholder="height" />
        <button onClick={this.handleNewSmurf}>add</button>
        {this.props.smurfs.map((smurf, index) => {
         return <h3 key={index}>{smurf.name} {smurf.age} {smurf.height}</h3>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    creatingSmurf: state.createSmurf,
  }
}

export default connect(mapStateToProps, {fetchSmurfs, createSmurf})(App);
