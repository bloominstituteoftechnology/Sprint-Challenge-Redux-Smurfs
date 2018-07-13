import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from './../actions';
import Smurf from './Smurf';
import AddSmurf from './AddSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs()
    console.log(this.props.smurfs);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <AddSmurf />
          <ul>
          {this.props.smurfs.map(smurf => {
            return <Smurf key={smurf.name} smurf={smurf}/>
          })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs.smurfs
}
}

const mapActionsToProps = {
  fetchSmurfs: fetchSmurfs
}

export default connect(mapStateToProps, mapActionsToProps)(App);
