import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'; 
import {getSmurfs, addSmurf} from '../actions'; 
import Smurf from './Smurf'; 
import NewSmurfForm from './NewSmurfForm'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '', 
      age: '', 
      height: '', 
    }
  }

  componentDidMount(){
    this.props.getSmurfs(); 
  }

  changeInputHandler = (event)  => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitDataHandler = (event) => {
    const newSmurf = {
      name: this.state.name, 
      age: this.state.age, 
      height: this.state.height
    }

    this.props.addSmurf(newSmurf); 

    this.setState({
      name: '', 
      age: '', 
      height: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <NewSmurfForm  change = {this.changeInputHandler} submit = {this.submitDataHandler} />
        {this.props.loadingSmurfs ? (
          <p> Loading Smurfs.... </p>
        ): this.props.smurfs.map(smurf => {
          return <Smurf name = {smurf.name} age = {smurf.age} height = {smurf.height} />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
