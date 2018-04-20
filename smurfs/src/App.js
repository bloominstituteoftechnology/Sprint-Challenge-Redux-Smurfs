import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {smurfsFetchingActionCreator} from './allActions';
import {createNewSmurfActionCreator} from './createNewSmurf'
import ListOfSmurfs from './listOfSmurfs';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
    constructor(props){
      super(props)
     
      this.state={
        smurf:"",
        age:'',
        height:''
      }
    }
 componentDidMount =()=>{
   this.props.smurfsFetchingActionCreator()
 }
addSmurfHandler =(event)=>{
  this.setState({[event.target.name]:event.target.value})
}
  render() {
   
    return (
      <div className="App">
        <h1>List of Smurfs</h1>       
        <input type=""text
        placeholder="add smurf"
          name="smurf"
          value={this.state.smurf}
          onChange={this.addSmurfHandler}       
        /> 
        <input type="" text
            placeholder="add age"
            name="age"
            value={this.state.age}
            onChange={this.addSmurfHandler}
        /> 
        <input type="" text
          placeholder="add height"
          name="height"
          value={this.state.height}
          onChange={this.addSmurfHandler}
        /> 

        <button onClick={()=>{this.props.createNewSmurfActionCreator({name: this.state.smurf,
         age:this.state.age, height: this.state.height});
          this.setState({smurf: '', age:"", height:''})}}> Add a smurf</button>
       <ListOfSmurfs/>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{ 
return {
  smurfs: state.smurfsReducer.smurfs,
  fetchingSmurfs: state.smurfsReducer.fetchingSmurfs,
  fetchedSmurf: state.smurfsReducer.fetchedSmurfs,
  addingSmurf: state.smurfsReducer.addingSmurf,
  updatingSmurf: state.smurfsReducer.updatingSmurf,
  error: state.smurfsReducer.error
}
}
export default connect(mapStateToProps, { smurfsFetchingActionCreator, createNewSmurfActionCreator})(App)
