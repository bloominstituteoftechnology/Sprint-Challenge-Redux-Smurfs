import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';
import './App.css';

/*to wire this component up you're going to need a few things. I'll let you do this part on your own. Just remember, `how do I connect my components to redux?``How do I ensure that my component links the state to props?`*/

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Kaitlyn's SMURFS! 2.0 W/ Redux</h1>
        <h3>{this.props.error ? 'Error on Server' : null}</h3>
        <h2>{(this.props.gettingSmurfs || this.props.creatingSmurf) ? 'Please wait a moment...' : null}</h2>
        <SmurfList smurfs={this.props.smurfs} />
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs.smurfs,
    gettingSmurfs: state.smurfs.gettingSmurfs,
    creatingSmurf: state.smurfs.creatingSmurf,
    error: state.smurfs.error,
  };
}

export default connect(mapStateToProps, { getSmurfs })(App);
