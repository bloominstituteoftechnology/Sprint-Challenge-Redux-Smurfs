import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addANewSmurf, getTheSmurfs } from '../actions';
import './App.css';
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
      height: '',
    }
  }

  componentDidMount() {
    this.props.getTheSmurfs();
  }


  submitHandler = e => {
  e.preventDefault ();
  this.props.addANewSmurf(this.state);
  this.setState ({ name: '', age: '', height: '', });
  };
  
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value});
  };



  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;

const mapStateToProps = state => {
  console.log(state);
  console.log(state.smurfs);
  console.log(state.loading);
  return {
    smurfs: state.smurfs,
    error: state.error,
    loading: state.loading,
  }
};

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {addANewSmurf, getTheSmurfs}) (App);
