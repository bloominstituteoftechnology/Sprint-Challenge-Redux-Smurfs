import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import CreateSmurfForm from "./components/CreateSmurfForm";
import { fetching_smurf, deleteSmurf, editSmurf } from "./actions";
import EditSmurfForm from "./components/EditSmurfForm";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount = () => {
    this.props.fetching_smurf();
  };
  render() {
    const { Fetching, Editing, smurfs, deleteSmurf } = this.props;
    return (
      <div>
        <CreateSmurfForm />
        {!Fetching &&
          smurfs.map(smurf => {
            return smurf.Editing ? (
              <EditSmurfForm key={smurf.id} />
            ) : (
                <div key={smurf.id}>
                  <div>{smurf.name}</div>
                  <div>{smurf.age}</div>
                  <div>{smurf.height} </div>
                  <button onClick={() => this.props.deleteSmurf(smurf.id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => this.props.editSmurf(smurf.id, smurfs)}
                  >
                    Edit
                  </button>
                </div>
              );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfsReducer } = state;
  return smurfsReducer;
};
export default connect(mapStateToProps, {
  fetching_smurf,
  deleteSmurf,
  editSmurf
})(App);
                  
      