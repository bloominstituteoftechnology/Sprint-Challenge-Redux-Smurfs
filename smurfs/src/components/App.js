import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import {addSmurf} from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }
  componentDidMount(){
  this.props.getSmurfs();
  this.props.addSmurf();
  }
  render() {
    return (
      <div className="App">
      <ul>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.Smurfs.map((smurf, index) =>{
          return ( <div>
            <li key={index}>{smurf.name}</li>
            <li>{smurf.age}</li>
            <li>{smurf.height}</li>
            </div>
            )
          
        })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
 
  return {
    Smurfs: state.smurfs,
    // fetchingSmurfs: state.fetchingSmurfs
  }
}
export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
