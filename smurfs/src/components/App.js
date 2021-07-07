import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, createSmurf } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm'; 
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  componentDidMount() {
    this.props.fetchSmurfs();
    console.log(this.props);
  }
  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onFormSubmit = () => {
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({ name: "", age: "", height: "" })
  }
  render() {
    return (
      <div className="App">
      <h1>HOLY SMURFS, BATMAN!</h1>
      <SmurfForm />
      {this.props.smurfs.map(smurf => { 
      <Smurf key={smurf.id} smurf={smurf} />
      })}
      </div>
   
    );
    
  }
}

const mapStateToProps = state => {
  return {
    fetchSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
   };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
