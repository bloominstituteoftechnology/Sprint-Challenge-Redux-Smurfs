import React, { Component } from 'react';
import './App.css';
import {getSmurfs,addSmurf} from '../actions';
import {connect} from 'react-redux';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      age:'',
      height:''
    }
  }
  componentDidMount(){
    this.props.getSmurfs();
  }
  handleInputChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  makeSmurfObj=()=>{
    const newSmurfObj={
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.setState({name:'',age:'',height:''});
    this.props.addSmurf(newSmurfObj);
  }
  render() {
    return (
      <div className="App">
        {
          this.props.fetchingSmurfs?
          <h1>Loading...</h1>:
          this.props.smurfs.map((e,i)=>
            <ul key={i}><li>{e.name}</li>
            <li>{e.age}</li>
            <li>{e.height}</li></ul>
          )
        }
        <form>
        <input type='text' name='name' placeholder='Enter a name' value={this.state.name} onChange={this.handleInputChange}/>
        <input type='number' name='age' placeholder='Enter an age' value={this.state.age} onChange={this.handleInputChange}/>
        <input type='text' name='height' placeholder='Enter a height' value={this.state.height} onChange={this.handleInputChange}/>
        <button type='submit' onClick={(e)=>{e.preventDefault();this.makeSmurfObj()}}>Submit New Smurf</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return {
    smurfs:state.smurfs,
    fetchingSmurfs:state.fetchingSmurfs 
  }
}
export default connect(mapStateToProps,{getSmurfs,addSmurf})(App);
