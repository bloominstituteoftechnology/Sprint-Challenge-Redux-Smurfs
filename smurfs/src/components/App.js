import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actions from '../actions';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    smurfs: this.props.smurfs
  }


  componentDidMount(){
    this.props.getSmurfs()
  }


  render() {
    const {smurfs } = this.props;
    return (
      <div className="App">
        {smurfs.map(smurf => <h1>{smurf.name}</h1>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, actions)(App);
