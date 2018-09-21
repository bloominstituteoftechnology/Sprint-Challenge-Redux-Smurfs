import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';

import SmurfForm from './SmurfForm';
import SmurfsList from './SmurfsList';
import { fetchSmurfs, addNewSmurf } from '../store/actions';

class App extends Component {
  state = {
    smurfs: [],
    name: '',
    age: '',
    height: ''

  };

  componentDidMount() {
    // call our action
    this.props.fetchSmurfs();
  }

  textInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveSmurfData = (event) => {
    event.preventDefault();
    console.log('firing')
    const smurf = {name: this.state.name, age: this.state.age, height: this.state.height};
    this.props.addNewSmurf(smurf);
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>
        <SmurfForm 
            name={this.props.name} 
            age={this.props.age} 
            height={this.props.height} 
            saveFriendData={this.saveFriendData}
            textInputHandler={this.textInput}
        />
        </div>
        {this.props.fetchingSmurfs ? (
          <h1>Kindly wait as we fetch your Smurfs...</h1>
        ) : (
          <div>
             <SmurfsList smurfs={this.props.smurfs} />
          </div>

        )}
      </div>
    );
  }
}

// export default App;

// our mapDispatchToProps needs to have two properties inherited from state
// the smurfs and the fetching boolean
const mapDispatchToProps = state => {
  return {
    smurfs: state.smurfsReducer.smurfs,
    fetchingSmurfs: state.smurfsReducer.fetchingSmurfs,
    error: state.smurfsReducer.error
  };
};

export default connect(mapDispatchToProps, {
  /* actions go here */
  fetchSmurfs,
  addNewSmurf
})(App);

