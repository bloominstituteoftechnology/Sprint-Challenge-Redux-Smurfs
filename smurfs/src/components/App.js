import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { DELETE_SMURF, ADD_SMURF, addSmurf } from '../actions';

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
      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  submitSmurf = () => {
    const currentSmurf = this.state.input;
    this.props.submitNewSmurf(currentSmurf);
    this.setState({
      input: '',
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Type in a new smurf:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitSmurf}>Submit</button>
        <ul>
          {this.props.smurfList.map( (smurf, idx) => {
              return (
                 <li key={idx}>{smurf}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    smurfList: state.smurfs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewSmurf:(smurf) => {
      dispatch(addSmurf(smurf))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App);
export default Container;