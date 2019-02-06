import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import { addSmurf } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  state = {
    name: '',
    age: '',
    height: '',
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  render() {
    const {name, age, height } = this.state;
    return (
      <div className="App">

        <h1>Welcome to Smurf Villiage!</h1>

        <input placeholder="Smurf Name" type="text" name="name" value={name} onChange={this.changeHandler} />
        <input placeholder="Smurf Age" type="number" name="age" value={age} onChange={this.changeHandler} />
        <input placeholder="Smurf Height" type="text" name="height" value={height} onChange={this.changeHandler} />
        <button onClick={()=> this.props.addSmurf(this.state)}> Add Smurf to Villiage </button>
       
    
        <ul>
          {this.props.smurfs.map(smurf => (
          <li>
            <h2>Name: {smurf.name}</h2>
            <h2>Age: {smurf.age}</h2>
            <h2>Height: {smurf.height}</h2>
            </li>
           ))}
          </ul>
        
     
        
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf
  
  }};



export default connect(mapStateToProps, {getSmurfs,addSmurf})(App);