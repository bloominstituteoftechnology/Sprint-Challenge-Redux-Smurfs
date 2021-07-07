import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurf, addSmurf, deleteSmurf, updateSmurf } from '../actions';
import NewSmurf from './newSmurf';
import Smurfs from './smurfs';
import './App.css';
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
      smurfName: '',
      smurfAge: '',
      smurfHeight: '',
    }
  }

  componentDidMount() {
    this.props.getSmurf();
  }

  createSmurf = event => {
    event.preventDefault();
    const { smurfName, smurfAge, smurfHeight } = this.state
    const newSmurf = {
      name: smurfName,
      age: smurfAge,
      height: smurfHeight
    }
    this.props.addSmurf(newSmurf);
    this.setState({ smurfName: '', smurfAge: '', smurfHeight: '', });
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <NewSmurf
          smurfName={this.state.smurfName}
          smurfAge={this.state.smurfAge}
          smurfHeight={this.state.smurfHeight}
          handleInputChange={this.handleInputChange}
          createSmurf={this.createSmurf}
        />
        <div className="list" >
          <Smurfs 
            smurfs={this.props.smurfs}
            deleteSmurf={this.props.deleteSmurf}
            updateSmurf={this.props.updateSmurf}
          />
        </div>
      </div>
    );
  }
}

const stateProps = state => {
  console.log('state', state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    smurfsReadt: state.smurfsReady,
    error: state.error
  }
}

export default connect(stateProps, { getSmurf, addSmurf, deleteSmurf, updateSmurf })(App);