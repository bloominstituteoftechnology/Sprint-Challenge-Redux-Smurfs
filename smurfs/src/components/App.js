import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    this.props.getSmurf()
  }
  render (){
    return (
      <div>
        {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                 <li>{smurf.name} name:</li>
                 <li>{smurf.age} age:</li>
                  <li>{smurf.height} height:</li>
              </div>
            )      
          })}  
       </div>
      );
    }
  }            



const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, {getSmurf}) (App);
