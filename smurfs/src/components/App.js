import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { getSmurfs, addSmurf } from '../actions';
import Smurfs from './Smurfs';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import Header from './Header';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      smurfForm: {
        name: '',
        age: '',
        height: '',
      }
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  formHandler = (ev) => {
    this.setState({ smurfForm: {...this.state.smurfForm, [ev.target.name]: ev.target.value }})
  }

  addSmurf= (ev, history) => {
    ev.preventDefault();
    this.props.addSmurf(this.state.smurfForm);
    this.setState({smurfForm: {name: '', age: '', height: ''}});
    history.push('/');
  }

  smurfClicked = (ev, history, id) => {
    ev.preventDefault();
    history.push(`/smurf/${id}`)
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={props => 
            <Smurfs 
              {...props} 
              smurfs={this.props.smurfs}
              onClick={this.smurfClicked}
            />
          
          }
        />
        
        <Route
          exact
          path="/smurf-form"
          render={(props) => 
            <SmurfForm
              {...props}
              smurf={this.state.smurfForm}
              onChange={this.formHandler}
              onSubmit={this.addSmurf}
            />
          }
        />

        <Route
          path="/smurf/:id"
          render={(props) => 
            <Smurf
              {...props}
              smurf={this.state.smurfForm}
              onChange={this.formHandler}
              onSubmit={this.addSmurf}
              isEditMode={this.state.editMode}
            />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default withRouter(connect(mapStateToProps , { getSmurfs, addSmurf })(App));
