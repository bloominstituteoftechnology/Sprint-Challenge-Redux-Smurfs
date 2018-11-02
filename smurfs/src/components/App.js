import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";

import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.taget.value
  //   })
  // }
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs ? <h3>Getting your Smurfs...</h3> : null}
        {!this.props.fetchingSmurfs && this.props.smurfs.length ? 
          <div>
            {this.props.smurfs.map(smurf => {
              return(
              <div>
                <h4>{smurf.name}</h4>
                <h5>{smurf.age}</h5>
                <h6>{smurf.height}</h6>
              </div>);
            })}
          </div>
         : null}
        {/* <input placeholder="name" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
      <input placeholder="age" type="text" name="age" value={this.state.age} onChange={this.handleChange}/>
      <input placeholder="height" type="text" name="height" value={this.state.height} onChange={this.handleChange}/>
      <button onClick={() => this.props.addSmurf(this.state)}> Add New Smurf </button>
      {this.state.addingSmurf ? <p>adding a new smurf...</p> : null} */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
