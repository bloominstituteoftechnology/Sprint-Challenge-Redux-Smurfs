import React, { Component } from 'react';
import './App.css';
import {getSmurfs,addSmurf,deleteSmurf,updateSmurf} from '../actions';
import {connect} from 'react-redux';

class App extends Component {
  constructor(){
    super();
    this.state={
      id:'',
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
    this.setState({id:'',name:'',age:'',height:''});
    this.props.addSmurf(newSmurfObj);
  }
  updateSmurfObj=()=>{
    const id=this.state.id;
    const updatedSmurfObj={
      name:this.state.name||undefined,
      age:this.state.age||undefined,
      height:this.state.height||undefined
    }
    this.props.updateSmurf(id,updatedSmurfObj);
  }
  render() {
    return (
      <div className="App">
        {
          this.props.fetchingSmurfs?
          <h1>Loading...</h1>:
          this.props.smurfs.map((e)=>
            <ul key={e.id}>
            <li>id:{e.id}</li>
            <li>{e.name}</li>
            <li>{e.age}</li>
            <li>{e.height}</li>
            <i className="fas fa-trash-alt" onClick={()=>this.props.deleteSmurf(e.id)}></i>
            </ul>
          )
        }
        <form>
        <input type='number' name='id' placeholder='Enter a Smurf id' value={this.state.id} onChange={this.handleInputChange}/>
        <input type='text' name='name' placeholder='Enter a name' value={this.state.name} onChange={this.handleInputChange}/>
        <input type='number' name='age' placeholder='Enter an age' value={this.state.age} onChange={this.handleInputChange}/>
        <input type='text' name='height' placeholder='Enter a height' value={this.state.height} onChange={this.handleInputChange}/>
        <button type='submit' onClick={(e)=>{e.preventDefault();this.makeSmurfObj()}}>Submit New Smurf</button>
        <button onClick={()=>{this.updateSmurfObj()}}>Update Smurf Info</button>
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
export default connect(mapStateToProps,{getSmurfs,addSmurf,deleteSmurf,updateSmurf})(App);
