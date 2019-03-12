import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';


/* import { getSmurfs } from '../actions';
import { addSmurf } from '../actions';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';
 */



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
        {this.props.smurfs.map(smurf => {
         return  <Smurf key={smurf.id} smurf={smurf} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs

  };

};


export default connect(mapStateToProps, { fetchSmurfs})(App);

