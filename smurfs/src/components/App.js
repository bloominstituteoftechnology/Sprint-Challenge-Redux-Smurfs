import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

import Smurf from './Smurfs';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(){
    super();
    this.state= {
      name: '',
      age: 0,
      height: ''
    }
  }
  componentDidMount() {
    this.props.getSmurfs()
  }
  handleFormInput = e => {
    e.preventDefault();
    this.setState({ [e.target.placeholder]: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          this.props.addSmurf(this.state)
          }
        }>
          <input type="text" onChange={this.handleFormInput} placeholder="name" />
          <input type="text" onChange={this.handleFormInput} placeholder="age" />
          <input type="text" onChange={this.handleFormInput} placeholder="height" />
          <button>Let's Smurf</button>
        </form>
        {(this.props.smurfs) ? this.props.smurfs.map(smurf=> <Smurf key={smurf.id} smurf={smurf} /> ) : null}
      </div>
    );
  }
}

const mapStateToProps= (state)=> {
  return({
    smurfs: state.smurfs,
  })
}

export default connect(mapStateToProps, { 
  getSmurfs, 
  addSmurf
})(App);
