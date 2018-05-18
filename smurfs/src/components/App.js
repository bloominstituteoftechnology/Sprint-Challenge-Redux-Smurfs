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
  }
  handleSubmit = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }  
  handleAddSmurf = () => {
  const { name, age, height } = this.state;
  const newSmurf = { name, age, height };
  this.props.addSmurf(newSmurf);
  this.setState({name:'', age:'', height:''})
   }
  render() {
    return (
      <div className="App">
      <ul>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.Smurfs.map((smurf, index) =>{
          return ( <div key={index}>
            <li>{smurf.name}</li>
            <li>{smurf.age}</li>
            <li>{smurf.height}</li>
            </div>
            )          
          })}
        </ul>
        <input  name="name" value={this.state.name} placeholder ="name" onChange={this.handleSubmit} />
        <input  name="age" value={this.state.age} placeholder ="age" onChange={this.handleSubmit} />
        <input  name="height" value={this.state.height} placeholder ="height" onChange={this.handleSubmit} />
        <button type="submit" onClick={this.handleAddSmurf}>Add Smurfs</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
 
  return {
    Smurfs: state.smurfs,
     fetchingSmurfs: state.fetchingSmurfs
  }
}
export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
