import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';
import { connect } from 'react-redux';


class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    id: 0
  };
  
  componentDidMount() {
    this.props.getSmurfs();
  }
  
  updateInput = e => {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
  }
  
  createSmurf = e => {
    
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
    this.setState({ name: '', age: '', height: '' });
  }
  
  delete = id => {
    this.props.deleteSmurf(if);
  }
  
  render() {
    return (
      <div className="App">
        <h1>Smurfs</h1>
        <ul>
          { this.props.smurfs.map((smurf, index) => {
            return <li key={ smurf.id }>{ smurf.name } | { smurf.age } years old | { smurf.height } cm tall <button onClick={ () => this.delete(smurf.id) }>x</button></li>
          }) }
        </ul>
        
        
        <form>
          <h3>Populate the Smurf Village!</h3>
          <input type='text' name='name' placeholder='name' onChange={ this.updateInput } value={ this.state.name } />
          <input type='number' name='age' placeholder='age' onChange={ this.updateInput } value={ this.state.age } />
          <input type='number' name='height' placeholder='height' onChange={ this.updateInput } value={ this.state.height } />
          <button onClick={ this.createSmurf }>New Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurf: state.smurfs,
    error: state.error,
    pending: state.pending
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf })(App);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
