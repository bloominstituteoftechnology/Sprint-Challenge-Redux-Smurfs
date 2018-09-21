import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, newSmurf, deleteSmurf, editSmurf } from '../actions';

import { Route, Link } from 'react-router-dom';
import SmurfList from './SmurfList';
import SmurfCard from './SmurfCard';

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
  
  handleInput = event => {
    event.preventDefault();

    if(event.target.name === 'age') {
      this.setState({
      age: Number(event.target.value)
      })} 
    else if (event.target.name === 'name'){
      this.setState({
          name: event.target.value
    })} else {
          this.setState({
              height: event.target.value
    })}
  }

  editSmurf = (id, event) => {
    event.preventDefault();
    this.props.editSmurf(id.id, this.state);
    console.log('editSmurf id', id.id);
    console.log('editSmurf state', this.state);
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.newSmurf(this.state);
  }

  deleteSmurf = (id) => {
    this.props.deleteSmurf(id);
  }
  
  render() {
    return (
      <div className="App">
        <h2>Welcome to <Link to='/smurfs'>Smurf Village</Link></h2>
        <Route exact path='/smurfs' render={props => (
          <SmurfList {...props} smurfs={this.props.smurfs} deleteSmurf={this.deleteSmurf} 
          addSmurf={this.addSmurf} fetchingSmurfs={this.props.fetchingSmurfs} handleInput={this.handleInput} />
        )} />
        <Route exact path='/smurf/:id' render={props => (
          <SmurfCard {...props} smurfs={this.props.smurfs} editSmurf={this.editSmurf} handleInput={this.handleInput}/>
        )} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  }
}

export default connect(mapStateToProps, {fetchSmurfs, newSmurf, deleteSmurf, editSmurf})(App);
