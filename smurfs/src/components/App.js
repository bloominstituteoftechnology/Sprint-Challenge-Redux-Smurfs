import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchSmurfs } from '../actions';
import AddSmurf from './AddSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    console.log("this.props:", this.props)
    return (
      <div className="App">
        <div>
          <h1>Welcome to Smurf Village!</h1>
          <p>Behold, our Smurfs:</p>
          <AddSmurf />
          {this.props.smurfs.map(smurf => {
            return (
              <div className="smurf-card" key={smurf.id}>
                <li>{smurf.name}</li>
                <li>{smurf.age} smurfs old</li>
                <li>{smurf.height} smurf tall</li>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State:", state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}
export default connect(mapStateToProps, { fetchSmurfs })(App);
