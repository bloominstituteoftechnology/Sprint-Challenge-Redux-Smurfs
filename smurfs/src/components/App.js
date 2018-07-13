import React, { Component } from 'react';
import './App.css';
import {getSmurfs, addSmurf} from '../actions';
import { connect } from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentWillMount() {
    console.log('mounted');
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {console.log(this.props.smurfs)}
        {this.props.smurfs.map(smurf=> {
             <li>{smurf.name}</li>
             {console.log(smurf.name)}
          
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}


export default connect(mapStateToProps, { getSmurfs }) (App);
