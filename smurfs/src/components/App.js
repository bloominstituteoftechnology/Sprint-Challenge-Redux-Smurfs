import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
// connect allows us to link our global state to a component
import { getSmurfs } from '../actions/index'
import SmurfsContainer from './SmurfsContainer'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
 componentDidMount(){
  this.props.getSmurfs()
 }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Link to='/smurfs'/>
        {/* <SmurfsContainer smurfs={this.props.smurfs}/> */}
        <Route render={props => <SmurfsContainer smurfs={props.smurfs}/>} />
      </div>
    );
  }
}

const mapStateToProps = state => {
 const { smurfs } = state
 console.log(state)
 return {
  smurfs: smurfs,
 }
}

export default connect(mapStateToProps, { getSmurfs })(App);
