import React, { Component } from 'react';
import ReactRedux from 'react-redux';
import './App.css';
const connect = ReactRedux.connect;
import axios from 'axios';
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
      input: '',
      smurfs: []
    }
  }

  handleChange = (e) => {
    this.setState({
      input: event.target.value
    })
  }

  submitSmurf = () => {
    const currentSmurf = this.state.input;
    this.setState({
      input: '',
      smurfs: this.state.smurfs.concat(currentSmurf)
    })
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
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// const messageReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [
//         ...state,
//         action.message
//       ];
//     default:
//       return state;
//   }
// };

const ADD = 'ADD'
const DELETE = 'DELETE'

const submitSmurfAction = (smurf) => {
  return {
    type: ADD,
    smurf: smurf
  }
}

const deleteSmurfAction = (smurfid) => {
  return {
    type: DELETE,
    smurfid: smurfid
  }
}

const defaultSmurfs = () => {
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log('error with retrieving default smurfs!');
    })
}

const smurfReducer = (state = defaultsmurfs, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.smurf];
    case DELETE:
      return state.filter(item=> item != state[action.index]);
    default:
      return state;
  }
}


const mapStateToProps = (state) => {
  return {
    smurflist: state
  }
};

 const mapDispatchToProps = (dispatch) => {
  return {
    addNewSmurf: (smurf) => {
      dispatch(submitSmurfAction(smurf))
    }
  }

const Container = (prop) => {
  return connect(mapStateToProps, mapDispatchToProps)(App);
};

export default Container;