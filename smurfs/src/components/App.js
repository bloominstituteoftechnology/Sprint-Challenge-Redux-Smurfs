import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {getSmurfs, addSmurf, updateSmurf, deleteSmurf} from '../actions';
import './App.css';



class App extends Component {

  componentDidMount () {
    this.props.getSmurfs(); 
  }

  resetFields = () => {
    this.name.value = ''
    this.age.value = ''
    this.height.value = ''
  }

  addingSmurf = () => {
    const name = this.name.value;
    const age = parseInt(this.age.value);
    const height = this.height.value; 
    const smurf = {name, age, height};
    this.resetFields(); 
    this.props.addSmurf(smurf); 
  }

  doubleClickingSmurf = (name,age,height) => {
    this.name.value = name;
    this.age.value = age; 
    this.height.value = height
  }
  deleteSmurf = id => {
    const sureToDelete = prompt('This can not be undone. To continue enter the word delete (just the word no extra characters)')
    if(sureToDelete.toLowerCase() === 'delete'){
      this.props.deleteSmurf(id); 
    }
  }

  render() {
    const smurfs = this.props.smurfs; 
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <input type="text" placeholder="...name" ref ={input => this.name = input}/>
        <input type="text" placeholder="...age" ref ={input => this.age = input}/>
        <input type="text" placeholder ="...height" ref ={input => this.height = input}/>
        <button onClick = {this.addingSmurf}>Add Smurf</button>
        <br/>
        <br/>
        <br/>
        <br/>
        {smurfs.map((smurf, i )=> 
        <div onDoubleClick = {() => this.doubleClickingSmurf(smurf.name, smurf.age, smurf.height)}key ={i} className = 'scene'>
          <div className ="card">
            <div className="card__face card__face--front">
            {smurf.name}
            </div> 
            <div className="card__face card__face--back">
              <h1>{smurf.name}</h1>
              
              <h1>{smurf.age}</h1>
              
              <h1>{smurf.height}</h1>
              
              
              <i onClick = {() => this.deleteSmurf(smurf.id)}className="fas fa-minus-circle"></i>
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state) // for now delete later.. 
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error,
  }
}



export default connect(mapStateToProps, {getSmurfs,addSmurf, updateSmurf,deleteSmurf})(App);
