import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf } from '../actions';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      smurfForm: {
        name: '',
        age: '',
        height: '',
      },
      eidtMode: false
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  formHandler = (ev) => {
    this.setState({ smurfForm: {...this.state.smurfForm, [ev.target.name]: ev.target.value }})
  }

  addSmurf= (ev) => {
    ev.preventDefault();

    this.props.addSmurf(this.state.smurfForm);
  }


  render() {
    return (
      <div className="App">
        <SmurfForm
          smurf={this.state.smurfForm}
          onChange={this.formHandler}
          onSubmit={this.addSmurf}
          isEditMode={this.state.editMode}
        />
        <Smurfs smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps , { getSmurfs, addSmurf })(App);
