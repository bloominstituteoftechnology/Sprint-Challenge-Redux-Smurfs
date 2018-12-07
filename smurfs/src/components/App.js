import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetch_smurfs, onHandleSubmit, onUpdateSmurf, onDeleteSmurf } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      height: '',
      id: ''
    }
  }

  componentDidMount() {
    this.props.fetch_smurfs();
  }


  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handle submit this.state = ', this.state)
    this.props.onHandleSubmit(this.state);
  }

  updateSmurf = (event) => {
    event.preventDefault();
    this.props.onUpdateSmurf(this.state)
  }

  deleteSmurf = (event) => {
    event.preventDefault();
    this.props.onDeleteSmurf(this.state)
  }

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map((smurf, index) => {
          return <Smurf smurf={smurf} key={index}/>
        })}
        <SmurfForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          updateSmurf={this.updateSmurf}
          deleteSmurf={this.deleteSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfReducer.smurfs,
    fetchingSmurfs: state.smurfReducer.fetchingSmurfs,
    addingSmurf: state.smurfReducer.addingSmurf,
    updatingSmurf: state.smurfReducer.updatingSmurf,
    deletingSmurf: state.smurfReducer.deletingSmurf
  }
}

export default connect(
  mapStateToProps,
  {
    fetch_smurfs,
    onHandleSubmit,
    onUpdateSmurf,
    onDeleteSmurf
  }
)(App)