import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions';
import SmurfForm from './SmurfForm';
//import SmurfyVillage from './SmurfyVillage';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  componentDidMount(){
    this.props.fetchSmurfs();
  }
  
  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf=>(
          <p>
            {smurf.name}<br/>
            {smurf.age}<br/>
            {smurf.height}
          </p>
        ))}
        <SmurfForm />
        
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    smurfs: state.smurfs,
    fetchSmurfs: state.fetchSmurfs
    

  }
}
export default connect(mapStateToProps, {fetchSmurfs})(App);
