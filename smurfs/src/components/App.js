import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';
import { SmurfChar } from './SmurfChar';

import './App.css';
import { SmurfForm } from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
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

  updateInputState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  resetInputForm = () => {
    this.setState({ name: '', age: '', height: '' });
  }

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => (
          <SmurfChar smurf={smurf} />
        ))}
        <SmurfForm
          formInput={this.state}
          resetInputForm={this.resetInputForm}
          updateInputState={this.updateInputState}
          addSmurf={this.props.addSmurf}
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

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);
