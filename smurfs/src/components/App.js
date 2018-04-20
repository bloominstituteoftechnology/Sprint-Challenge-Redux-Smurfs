import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, createSmurf } from '../actions';
import CreateSmurfForm from '../components/CreateSmurfForm';
import Smurfs from '../components/Smurfs';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount() {
    this.props.fetchSmurfs();
  }
  
  handleNewSmurf = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log("What does this do?");
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <CreateSmurfForm 
          createSmurf={this.props.createSmurf}
          handleNewSmurf={this.handleNewSmurf}
          smurf={this.state}
        />

        <Smurfs smurfList={this.props.smurfs} />


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs, createSmurf })(App);