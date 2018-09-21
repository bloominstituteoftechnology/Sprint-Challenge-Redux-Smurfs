import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';
import { postSmurf, getSmurfs, putSmurf, deleteSmurf } from '../actions/';

import SmurfForm from './smurfform';
import SmurfsList from './smurfslist';

class App extends Component {
  state = {
    tmpSmurf: {
      name: '',
      age: '',
      height: '', 
      id: -1
    }
  };

  componentDidMount = () => {
    this.props.getSmurfs();
  }

  resetCompState = () => {
    this.setState({
      tmpSmurf: {
        name: '',
        age: '', 
        height: '', 
        id: -1
      }
    })
  };

  inputHandler = (event) => {
    if(event.target.name === 'age') {
      this.setState({
        ...this.state,
        tmpSmurf: {
          ...this.state.tmpSmurf,
          [event.target.name]: Number(event.target.value)
        }
      });
    } else {
      this.setState({
        ...this.state,
        tmpSmurf: {
          ...this.state.tmpSmurf,
          [event.target.name]: event.target.value.toString()
        }
      });
    }
  };

  submitHandler = (event) => {
    event.preventDefault();
    if(this.state.tmpSmurf.name && this.state.tmpSmurf.age && this.state.tmpSmurf.height) {
      if(this.state.tmpSmurf.id === -1) {
        this.props.postSmurf({name: this.state.tmpSmurf.name, age: this.state.tmpSmurf.age, height: this.state.tmpSmurf.height});
      } else {
        this.props.putSmurf(this.state.tmpSmurf);
      }
      this.resetCompState();
    }
  };

  editHandler = (smurfToEdit) => {
    this.setState({
      ...this.state,
      tmpSmurf: smurfToEdit
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        <SmurfForm 
          tmpSmurf={this.state.tmpSmurf} 
          inputHandler={this.inputHandler} 
          submitHandler={this.submitHandler} 
        />
        <SmurfsList 
          smurfsList={this.props.smurfsList} 
          crudStates={this.props.crudStates} 
          editHandler={this.editHandler} 
          deleteSmurf={this.props.deleteSmurf} 
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfsList: state.smurfs,
    crudStates: state.crudStates
  };
};

App.propTypes = {
  smurfsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number, 
    height: PropTypes.string
  })).isRequired,
  crudStates: PropTypes.shape({
    postingSmurf: PropTypes.bool, 
    postedSmurf: PropTypes.bool, 
    gettingSmurfs: PropTypes.bool, 
    gotSmurfs: PropTypes.bool, 
    puttingSmurf: PropTypes.bool, 
    putSmurf: PropTypes.bool, 
    deletingSmurf: PropTypes.bool, 
    deletedSmurf: PropTypes.bool, 
    error: PropTypes.string
  }).isRequired,
  postSmurf: PropTypes.func.isRequired,
  getSmurfs: PropTypes.func.isRequired, 
  putSmurf: PropTypes.func.isRequired, 
  deleteSmurf: PropTypes.func
};

export default connect(mapStateToProps, { postSmurf, getSmurfs, putSmurf, deleteSmurf })(App);
