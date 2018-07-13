import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchReq, submitReq, deleteReq, updateReq } from '../actions';
import Smurfs from '../components/Smurfs';
import SmurfForm from '../components/SmurfForm';
import logo from '../logo.svg';

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
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    this.props.fetchReq();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.name === '' || this.state.age === '' || this.state.height === '') return null;

    const smurf = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    };

    this.props.submitReq(smurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleDelete = (id) => {
    this.props.deleteReq(id);
  };

  handleUpdate = (id) => {
    if(this.state.name === '' && this.state.age === '' && this.state.height === '') {
      return null;
    }

    const smurf = this.props.smurfs.filter((smurf) => smurf.id === id ? smurf : null);
    // console.log(smurf);
    const updatedSmurf = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    };

    for(let key in updatedSmurf) {
      if(updatedSmurf[key] === '') {
        updatedSmurf[key] = smurf[0][key]
      }  
    };
    
    this.props.updateReq(id, updatedSmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleClear = () => {
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div></div>
        {this.props.fetched
          ? <Smurfs smurfs={this.props.smurfs} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
          : <img src={logo} className="App-logo" alt="logo" />}
        {this.props.fetched
          ? <SmurfForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClear={this.handleClear} name={this.state.name} age={this.state.age} height={this.state.height} />
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    smurfs: state.smurfs,
    fetched: state.fetched
  };
};

export default connect(mapStateToProps, { fetchReq, submitReq, deleteReq, updateReq })(App);
