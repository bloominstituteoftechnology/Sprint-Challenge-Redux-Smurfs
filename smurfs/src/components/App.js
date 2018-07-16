import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Smurf from './Smurf';
import { getSmurf, addSmurf } from '../actions/index';
import SmurfForm from './SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurf()
  }
  submit = values => {
    console.log("FORMS", values)
    console.log('PROPS IN SUBMIT',this.props)
    this.props.addSmurf(values)
  }

  render() {
    console.log(this.props.smurfs.smurfReducer)
    //const { smurfs } = this.props.smurfs.smurfReducer
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm  onSubmit = {this.submit}/>
        {this.props.smurfs.map( (smurf, index) => <Smurf smurf={smurf } key={ index } />
        )}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  smurfs : state.smurfReducer.smurfs,
  fetchingSmurfs : state.fetchingSmurfs
})

export default connect(mapStateToProps,{ getSmurf, addSmurf })(App);
