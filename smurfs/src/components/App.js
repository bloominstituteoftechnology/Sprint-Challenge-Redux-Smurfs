import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchData, saveData} from '../actions';
import Smurfs from './Smurfs';

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
      height:''
    }
  }

  componentDidMount() {
    this.props.fetchData();
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    console.log(newSmurf)
    this.props.saveData(newSmurf);
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.fetching ? (
          <div>Loading...</div>
        ): <div>{<Smurfs smurfs={this.props.smurfs} />}</div>}
        <div className="add-friend">
          <form className="af-form" onSubmit={this.handleSubmit}>
            Name: <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange} className="as-input" />
            <br/>
            Age: <input
            type="number"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange} className="as-input" />
            <br/>
            Height: <input
            type="number"
            placeholder="height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange} className="as-input" />
            <button type="submit" className="addSmurf-button">Add Smurf</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    saving: state.addingSmurfs,
    updating: state.updatingSmurf,
    deleting: state.deletingSmurf,
    test: state
  }
}

export default connect(mapStateToProps, {fetchData, saveData})(App);
