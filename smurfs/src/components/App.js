import React, { Component } from 'react';
import { connect } from 'react-redux';

//components & styling
import Loading from './Loading';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import './App.css';

//actions
import { getSmurfs } from '../actions';

class App extends Component {
  
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs || this.props.addingSmurf ? <Loading /> : <SmurfList smurfs={this.props.smurfs} />}
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf
  }
}
export default connect(mapStateToProps, { getSmurfs })(App);
