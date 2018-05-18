import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs} from '../actions/index';
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
    const getSmurfs = axios.get('http://localhost:3333/smurfs'); 
    //this resolves into a Promise
    getSmurfs
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
        <Switch>
        <Route path = '/smurfs' component ={SmurfList}/>
        <Route path = '/smurfs/list/:id' component = {Smurf}/>
        </Switch>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    getSmurfs: state.getSmurf,
    smurfs: state.smurfs,
  }

}

export default connect(mapStateToProps)(App);
