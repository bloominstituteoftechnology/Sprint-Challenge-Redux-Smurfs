import React, { Component } from 'react';
import './App.css';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import UpdateSmurf from './UpdateSmurf';

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
      newHeight: '',
      updated: null,
      updatedName: '',
      updatedAge: '',
      updatedHeight: ''
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

  deleteSmurf = event => {
    this.props.deleteSmurf(event.target.id);
  }

  toggleUpdate = event => {
    let foundSmurf = this.props.smurfs.filter(smurf => smurf.id === Number(event.target.id))[0];
    this.setState({
      updated: Number(event.target.id),
      updatedName: foundSmurf.name,
      updatedAge: foundSmurf.age,
      updatedHeight: foundSmurf.height
    });
  }

  updateSmurf = event => {
    event.preventDefault();
    let updatedSmurf = {
      name: this.state.updatedName,
      age: this.state.updatedAge,
      height: this.state.updatedHeight,
      id: this.state.updated
    }
    this.props.updateSmurf(updatedSmurf);
    this.setState({
      updated: null,
      updatedName: '',
      updatedAge: '',
      updatedHeight: ''
    })
  }

  cancelUpdate = () => {
    this.setState({
      updated: null
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs smurfs={this.props.smurfs} deleteSmurf={this.deleteSmurf} toggleUpdate={this.toggleUpdate} />
        <SmurfForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} newName={this.state.newName} newAge={this.state.newAge} newHeight={this.state.newHeight} />
        {this.state.updated !== null 
          ? <UpdateSmurf cancelUpdate={this.cancelUpdate} updateSmurf={this.updateSmurf} handleChange={this.handleChange} updatedName={this.state.updatedName} updatedAge={this.state.updatedAge} updatedHeight={this.state.updatedHeight}/> 
          : null
        }
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
