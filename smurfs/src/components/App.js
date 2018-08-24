import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchingSmurf, addSmurfs } from '../actions';
import AddSmurf from './addSmurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchingSmurf();
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li key={smurf.id}>
                {smurf.name}{' / '}
                {smurf.age}{' / '}
                {smurf.height}
              </li>
            )
          })}
        </ul>
        <AddSmurf />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfReducer.smurfs,
    addSmurfs: state.addSmurfs
  };
};

export default connect(mapStateToProps, { fetchingSmurf, addSmurfs })(App);
