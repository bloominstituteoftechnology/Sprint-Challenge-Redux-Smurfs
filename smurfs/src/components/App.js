import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchSmurfs } from '../actions';
import SmurfForm from './SmurfForm';

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
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        {this.props.error ? <h3>Error fetching smurfs</h3> : null}
        {this.props.fetching ? (
          <div>Fetching smurfs!</div>
        ) : (
            <div>
              {this.props.smurfs.map(smurf => {
                return (
                  <div key={smurf.name}>
                    <h3>{smurf.name}</h3>
                    <strong>{smurf.height} tall</strong>
                    <p>{smurf.age} smurf years old</p>
                  </div>
                );
              })}
            </div>
          )

        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
