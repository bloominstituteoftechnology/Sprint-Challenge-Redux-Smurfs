import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';
import Smurfs from './Smurfs';
import CreateSmurfForm from './CreateSmurfForm';
import UpdateSmurf from './UpdateSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: '',
      updated: null,
      updatedName: '',
      updatedAge: '',
      updatedHeight: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let newSmurf = {
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

  deleteSmurf = e => {
    this.props.deleteSmurf(e.target.id);
  }

  updateSmurf = e => {
    e.preventDefault();
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

  toggleUpdate = e => {
    this.setState({
      updated: Number(e.target.id)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs 
          smurfs={this.props.smurfs}
          deleteSmurf={this.deleteSmurf}
          toggleUpdate={this.toggleUpdate}
        />
        <CreateSmurfForm 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          name={this.state.name} 
          age={this.state.age} 
          height={this.state.height} 
        />
        {this.state.updated !== null ?
        <UpdateSmurf 
          updateSmurf={this.updateSmurf} 
          handleChange={this.handleChange} 
          updatedName={this.state.updatedName} 
          updatedAge={this.state.updatedAge} 
          updatedHeight={this.state.updatedHeight}
        /> 
        : null}
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

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf, UpdateSmurf }) (App);