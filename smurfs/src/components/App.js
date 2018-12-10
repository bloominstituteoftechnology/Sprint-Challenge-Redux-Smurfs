import React, { Component, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf, updateForm } from "../actions";
import Smurf from "./Smurf";
import AddSmurf from "./AddSmurf";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    console.log("running render function");
    if (this.props.fetchingSmurfs) {
      return <h2>Hold your horses, we are loading.</h2>;
    }
    if (this.props.error) {
      return <h1>WHOA BIG EXPLOSION THINGY THERE BE A ERROR MATEY!</h1>
    }
    return (
      <Fragment>
        <AddSmurf />
        { this.props.smurfs.map((smurf, id) => (
          <div className="App">
        
        <Smurf {...this.props} key={smurf.id} smurf={smurf} deleteSmurf={this.props.deleteSmurf} updateForm={this.props.updateForm} />
        
        {/* <h2>{this.props.smurfs[id].name}</h2>
        <p>{this.props.smurfs[id].age}</p>
        <p>{this.props.smurfs[id].height}</p> */}
      </div>
    ))})
    </Fragment>
    )
   
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf, updateForm }
)(App);
