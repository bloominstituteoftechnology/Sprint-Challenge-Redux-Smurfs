import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { gettingSmurf } from '../actions/index';
import SmurfList from './SmurfList';
import Smurf from './Smurf';
import axios from 'axios';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    this.props.getSmurf();
        .then(response =>{
          this.setState({smurfs:response.data});
        })
        .catch(err =>{
          console.log(err);
        });
  }
  render() {
    return (
      <div className="App">
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Form />
        {this.props.smurfs.map(smurf => {
          return(
            <Smurf key = {smurf.id} smurf = {smurf} />
          )
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    getSmurf: state.gettingSmurf,
    smurfs: state.smurfs,
  }

}

export default connect(mapStateToProps, { gettingSmurf })(App);
