import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf} from '../actions'
import Smurf from './Smurf';

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
    this.props.getSmurfs();
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
    this.props.addSmurf(smurf);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <br/>
        <form>
          <input placeholder="name" name="name" value={this.state.name} onChange={this.smurfChangeHandler} type="text" />
          <input placeholder="age" name="age" value={this.state.age} onChange={this.smurfChangeHandler} type="number" />
          <input placeholder="height" name="height" value={this.state.height} onChange={this.smurfChangeHandler} type="text" />
          <button onClick={this.submitSmurf}>Add Smurf</button>
        </form>
        <div className="Smurfs">
        {this.props.smurfsFetched ? this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />
        }) : 'There seems to be an error fetching your smurfs. =/'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    smurfsFetched: state.smurfsFetched
  }
}
export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
