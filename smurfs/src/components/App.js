import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions/index';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    age: 0,
    name: '',
    height: '',
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>Smurf List Maker</h1>
        <div>
          <input name="name" type="text" placeholder="text" value={this.state.name} onChange={this.handleChange} />
          <input name="age" type="text" placeholder="age" value={this.state.age} onChange={this.handleChange} />
          <input name="height" type="text" placeholder="height" value={this.state.height} onChange={this.handleChange} />
        </div>

        <div>
          {this.props.smurfs.map(smurf => (
            <div>
              <p>{smurf.name}</p>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  error: state.error
})




export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
