import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import NewSmurfForm from './NewSmurfForm';
import { getSmurfs } from '../actions';
import SmurfList from './SmurfList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  
  render() {
    console.log("this.props" ,this.props);
    return (
      <div className="App">
        {/* {!this.props.fetchingSmurfs ? <NewSmurfForm /> : <SmurfList smurfs={this.props.smurfs} />} */}
        <NewSmurfForm />
        <SmurfList smurfs={this.props.smurfs} />
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}
export default connect(mapStateToProps, { getSmurfs })(App);
