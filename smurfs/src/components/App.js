import React, { Component } from 'react';
import SmurfsList from '../components/SmurfsList';
import Smurf from '../components//Smurf';
import SmurfForm from '../components/SmurfForm'
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
  }
  
  componentDidMount () {
    this.props.fetchSmurfs()
  }
  render() {
    return (
      <div className="App">
        <SmurfForm/>
          <SmurfsList 
          smurfs={this.props.smurfs}
          />
        
      

        </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, 'inside mSTP')
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, {fetchSmurfs}) (App);
