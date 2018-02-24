import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import './App.css';
import AddSmurfForm from './AddSmurfForm';
import SmurfList from './SmurfList';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    const { smurfs } = this.props;

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurfForm />
        <SmurfList smurfs={smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);

/*
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
