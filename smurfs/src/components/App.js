import React, { Component } from 'react';
import './App.css';
import SmurfForm from './SmurfForm';
import SmurfsList from './SmurfsList';
import AddSmurfButton from './AddSmurfButton';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';



class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        {console.log("refresh app")}
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.add && <SmurfForm />}
        {!this.props.add && <SmurfsList />}
        {!this.props.add && !this.props.fetching && <AddSmurfButton />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps App ", state);
  const props = state;
  return props;
}

export default connect(mapStateToProps)(App);