import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';
import './App.css';
/*
  to wire this component up you're going to need a few things.
  I'll let you do this part on your own. 
  Just remember, `how do I `connect` my components to redux?`
  `How do I ensure that my component links the state to props?`
*/
class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addSmurfHandler = (smurf) => {
    smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    };
    this.props.addSmurf(smurf);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={this.addSmurfHandler}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input
            type="text"
            placeholder="Height"
            name="height"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <button type="submit">Add Smurf</button>
        </form>
        {this.props.smurfs.map((smurf) => {
          return (
            <div key={smurf.id}>
              <h3>{smurf.name}</h3>
              <p>age: {smurf.age}</p>
              <p>height: {smurf.height}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('STATE', state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);
