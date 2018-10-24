import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf, deleteSmurf} from '../actions'
 
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

    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => <p>{smurf.name}</p>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    got: state.got
  }
}

export default connect(mapStateToProps, {getSmurfs, addSmurf, deleteSmurf})(App);