import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfList from './SmurfList';
import AddSmurfForm from './AddSmurfForm';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.isFetching) {
      return (<h1>Loading smurfs...</h1>);
    }
    return (
      <div className="App">
        <AddSmurfForm />
        <SmurfList smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}
  
  
export default connect(mapStateToProps, { getSmurfs })(App);
