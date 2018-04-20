import React, { Component } from 'react';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { fetchSmurfs, postSmurfs } from '../actions/index';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '', 
      height: ''
    }
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <input 
        type='text'
        placeholder='Name'
        name='name'
        value={this.state.name}
        />
        <input 
        type='text'
        placeholder='Age'
        name='age'
        value={this.state.age}
        />
        <input 
        type='text'
        placeholder='Height'
        name='height'
        value={this.state.height}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs, postSmurfs }) (App);
