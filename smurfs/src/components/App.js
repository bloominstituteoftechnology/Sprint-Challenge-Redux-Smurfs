import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, postSmurf } from '../actions';


import './App.css';
import { SmurfsList } from './SmurfsList';

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
    this.props.getSmurfs();
  }

  handleInputChange = event => this.setState({
    [event.target.name]: event.target.value
  });

  clickHandler = event => {
    event.preventDefault();
    // console.log('click handler', this.state)
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.postSmurf(newSmurf);
    this.setState({ name: '', age: null, height: '' });
  };

  render() {
    if (this.props.fetchingSmurfs) {
      console.log('fetching')
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Have fun!</div>
        <br />
        <SmurfsList smurfs={this.props.smurfs} />
        <form className='form' onSubmit={this.clickHandler}>
          <p>Add a Smurf</p>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='Name'
            onChange={this.handleInputChange}
          />
          <input
            type='number'
            name='age'
            value={this.state.age}
            placeholder='Age'
            onChange={this.handleInputChange}
          />
          <input
            type='text'
            name='height'
            value={this.state.height}
            placeholder='Height'
            onChange={this.handleInputChange}
          />
          <button onClick={this.clickHandler}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('the state', state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);