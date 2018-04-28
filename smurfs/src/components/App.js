import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {getSmurf} from '../actions/index';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    id: '',
    name: '',
    height: '',
    age: '',
  }

  componentDidMount(){
    this.props.getSmurf();
  }

  render() {
    return (
      <div className="App">
        <h1>The Smurfs</h1>
        {this.props.fetchingSmurfs ? (<h3>Getting Smurfs</h3>) 
        : (
          <ul>
            {console.log('smurf',this.props.smurfs)}
            {this.props.smurfs.map((smurf, index) => { 
              return <li key={ smurf.id }>{ smurf.name }  {/*<button onClick={() => this.deleteSmurf(smurf.id) }>X</button>*/} </li>
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    fetchedSmurfs: state.fetchedSmurfs,
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, {getSmurf})(App);
