import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    this.props.fetchSmurfs()
  }
  render() {
    return (
        <div className="App">
          <h1>Smurfs! 2.0 W/ Redux</h1>
          {this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} /> )}
       </div>
      )
    }
  }            



const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, {fetchSmurfs}) (App);
