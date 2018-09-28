import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        {this.props.gettingSmurfs ? <h2>Loading...</h2> : null}
        {!this.props.gettingSmurfs && this.props.smurfs.length ? (
          <Smurfs smurfs={this.props.smurfs} />
        ) : null}
        {this.props.error ? alert(this.props.error) : null}
        <br />
        <SmurfForm addSmurf={this.props.addSmurf} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  smurfs: state.smurfs,
  gettingSmurfs: state.gettingSmurfs,
  addingSmurf: state.addingSmurf,
  
});



export default connect(
  mapStateToProps,
  {getSmurfs}
)(App);