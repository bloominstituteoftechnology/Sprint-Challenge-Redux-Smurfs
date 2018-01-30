import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { grabSmurfs, createSmurf } from '../actions';
import Smurf from './smurfs';


class App extends Component {


constructor(props) {
  super(props);
  this.state = {
    name: '',
    age: '',
    height: ''
  }
}

componentDidMount() {
  this.props.grabSmurfs();
}

smurfChangeHandler = event => {
  const { name, value } = event.target;
  this.setState({[name]: value});
}

submitSmurf = event => {
  event.preventDefault();
  const smurf = {
    name: this.state.name,
    age: this.state.age,
    height: this.state.height
  }
  this.props.createSmurf(smurf);
  this.setState({
    name: '',
    age: '',
    height: ''
  });
}




render() {
  return (
    <div className="App">
      <h1>Smurf Killing Village</h1>
      <br/>
      <form>
        <input placeholder="name" name="name" value={this.state.name} onChange={this.smurfChangeHandler} type="text" />
        <input placeholder="age" name="age" value={this.state.age} onChange={this.smurfChangeHandler} type="number" />
        <input placeholder="height" name="height" value={this.state.height} onChange={this.smurfChangeHandler} type="text" />
        <button onClick={this.submitSmurf}>Create Smurf</button>
      </form>
      <div className="smurfs">
      {this.props.smurfsGrabbed ? this.props.smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />
      }) : 'There seems to be an error grabbing your Smurf.'}
      </div>
    </div>
  );
}
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    smurfsGrabbed: state.smurfsGrabbed
  }
}
export default connect(mapStateToProps, {grabSmurfs, createSmurf})(App);
