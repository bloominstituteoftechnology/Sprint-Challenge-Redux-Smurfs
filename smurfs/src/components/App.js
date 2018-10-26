import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurfs from './Smurfs';


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
      <div className='App'>
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App)