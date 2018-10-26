import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getSmurf, addSmurf } from '../actions';
import SmurfForm from '../views/SmurfForm';
import Smurf from '../views/Smurf';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    editId: null
  };

  componentDidMount() {
    this.props.getSmurf();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurfs Village</h1>
        <div>
          {this.props.fetching ? (
            <h2>La la la-la la la</h2>
          ) : (
            <Fragment>
              {this.props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
              ))}
            </Fragment>
          )}
        </div>
        <SmurfForm
          input={this.state}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurf, addSmurf }
)(App);
