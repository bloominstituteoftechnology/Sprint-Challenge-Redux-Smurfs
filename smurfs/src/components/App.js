import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      newSmurf: {
        name: '',
        age: null,
        height: null
      }
    };
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleAddInputFieldChange = e => {
    const newSmurfData = { [e.target.name]: e.target.value };  
    this.setState({ newSmurf: {...this.state.newSmurf, ...newSmurfData} });
  }

  handleAddSmurfSubmit = () => {
    this.props.addSmurf(this.state.newSmurf);
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.props.smurfs.map(smurf => <li>{smurf.name}</li>) }
        </ul>
        <input name='name' onChange={this.handleAddInputFieldChange} value={this.state.newSmurf.name} />
        <input name='age' onChange={this.handleAddInputFieldChange} value={this.state.newSmurf.age} />
        <input name='height' onChange={this.handleAddInputFieldChange} value={this.state.newSmurf.height} />
        <button onClick={this.handleAddSmurfSubmit}>Add A Smurf!</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);
