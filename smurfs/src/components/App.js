import React, { Component } from 'react';
import './App.css';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

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
      newName: '',
      newAge: '',
      newHeight: ''
    }
  }

  componentDidMount(){
    this.props.getSmurfs();
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    let newSmurf = {
      name: this.state.newName,
      age: this.state.newAge,
      height: this.state.newHeight
    }
    this.props.addSmurf(newSmurf);
    this.setState({
      newName: '',
      newAge: '',
      newHeight: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs smurfs={this.props.smurfs} />
        <SmurfForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} newName={this.state.newName} newAge={this.state.newAge} newHeight={this.state.newHeight} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}
 

export default connect(mapStateToProps, actions)(App);
