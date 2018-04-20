import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {getSmurfs,addSmurf} from '../actions/index';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }
  componentDidMount() {
    this.props.getSmurfs();
  }
  updateValues = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  submitNewSmurf = () => {
    const smurf = {name: this.state.name, age: this.state.age, height: this.state.height}
    this.props.addSmurf(smurf);
    this.setState({name: '', age: '', height: ''});
  }
  render() {
    let displaySmurfs = null;
    if (this.props.smurfs.length > 0) {
      displaySmurfs = (
        <div>
          {this.props.smurfs.map((smurf) => {
            return (
              <div className='smurfContainer' key={smurf.id}>
                <p className='smurfName'>{smurf.name}</p>
                <p>Age: {smurf.age}</p>
                <p>height: {smurf.height}</p>
              </div>
            );
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <input
          name='name'
          value={this.state.name}
          onChange={this.updateValues}
          placeholder='name'
        />
        <input
          name='age'
          value={this.state.age}
          onChange={this.updateValues}
          placeholder='age'
        />
        <input
          name='height'
          value={this.state.height}
          onChange={this.updateValues}
          placeholder='height'
        />
        <button onClick={() => this.submitNewSmurf()}>add new smurf</button>
        {displaySmurfs}
      </div>
    );
  }
}
const stateToProps = state => {
  return {
    ...state
  }
}

export default connect(stateToProps, {getSmurfs, addSmurf})(App);
