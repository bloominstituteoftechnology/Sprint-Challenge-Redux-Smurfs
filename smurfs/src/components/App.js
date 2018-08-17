import React, { Component } from 'react';
import './App.css';
import { fetchStuff, addSmurf } from '../actions';
import { connect } from 'react-redux';
import SmurfVillage from './smurfVillage';
import SmurfForm from './smurfForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.fetchStuff();
  }

  inputChangeHandler = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addSmurfHandler = ev => {
    ev.preventDefault();
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Smurf Village 2.0 W/ Redux</h1>
        {this.props.fetchingSmurfs ? (<span className='fetching' >materializing smurfs...</span>) : (
          <SmurfVillage smurfs={this.props.smurfs} />
        )}
        <SmurfForm inputChangeHandler={this.inputChangeHandler} inputName={this.state.name} inputAge={this.state.age} inputHeight={this.state.height} addSmurfHandler={this.addSmurfHandler} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs
    
  };
};

export default connect(mapStateToProps, { fetchStuff, addSmurf })(App);
