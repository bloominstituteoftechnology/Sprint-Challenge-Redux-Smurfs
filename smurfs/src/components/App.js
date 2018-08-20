import React, { Component } from 'react';
import './App.css';
import SmurfsForm from './SmurfsForm/SmurfsForms';
import Smurfs from './Smurfs/Smurfs';

import { connect } from 'react-redux';
import { fetching_data, addSmurf } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newSmurf: [],
      name: '',
      age:'',
      height: '',
    }
  }

  componentDidMount() {
    this.props.fetching_data();
  }

  changeInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitDataHandler = () => {
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }

    this.props.addSmurf(newSmurf);

    this.setState({
      name: '',
      age: '',
      height: '',
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">SMURFS! 2.0 W/ Redux</h1>
        <div className="main-content">Welcome to your Redux version of Smurfs!</div>
        <SmurfsForm 
          smurfs={this.props.smurfs} 
          change={this.changeInputHandler} 
          submit={this.submitDataHandler}
        />
        <Smurfs smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      fetchingSmurfs: state.smurfsReducer.fetchingSmurfs,
      smurfs: state.smurfsReducer.smurfs,
  }
}

export default connect(mapStateToProps, { fetching_data, addSmurf })(App);
