import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';
import Smurfs from './Smurfs';
import CreateSmurfForm from './CreateSmurfForm';
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
      height: ''
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

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs 
          smurfs={this.props.smurfs}
          deleteSmurf={this.deleteSmurf}
        />
        <CreateSmurfForm 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          name={this.state.name} 
          age={this.state.age} 
          height={this.state.height} 
        />
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

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf }) (App);