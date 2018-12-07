import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetch_smurfs, onHandleSubmit } from '../actions';
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
      height: ''
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

  render() {
    console.log('state name', this.state.name)
    return (
      <div className="App">
        {this.props.smurfs.map((smurf, index) => {
          return <Smurf smurf={smurf} key={index}/>
        })}
        <SmurfForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapstate =", state)
  return {
    smurfs: state.smurfReducer.smurfs,
    fetchingSmurfs: state.smurfReducer.smurfs
  }
}

export default connect(
  mapStateToProps,
  {
    fetch_smurfs,
    onHandleSubmit
  }
)(App)