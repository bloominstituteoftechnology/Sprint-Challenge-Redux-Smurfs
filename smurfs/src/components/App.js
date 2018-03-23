import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { getSmurfs, addSmurf, deleteSmurf } from '../actions';
/* APP
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  handleNewSmurf = event => {
    event.preventDefault();

    if (this.refs.newName.value !== '') {
      let newSmurf = {
        height: this.refs.newHeight.value,
        age: this.refs.newAge.value,
        name: this.refs.newName.value
      };

      this.props.addSmurf(newSmurf);
    }
    this.refs.newHeight.value = '';
    this.refs.newAge.value = '';
    this.refs.newName.value = '';
  };

  handleSelected(id) {}

  render() {
    return (
      <div className="App">
        <h1 className="card-title appTitle">Smurfs</h1>
        <div className="smurfList">
          <ul className="list-group list-group-flush ">
            {this.props.smurfs
              ? this.props.smurfs.map((smurf, index) => {
                  return (
                    <li className="card" key={index}>
                      <h4 className="card-header"> {smurf.name} </h4>
                      <div className="card-body">
                        <div className=""> Age: {smurf.age} </div>
                        <div className=""> Height: {smurf.height} </div>
                      </div>

                      <button
                        className="deleteSmurf"
                        onClick={() => this.props.deleteSmurf(smurf.id)}
                      >
                        <span> X </span>
                      </button>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
        <div className="card addSmurf">
          <div className="card-footer">
            <input type="text" ref="newName" placeholder="Name" />
            <input type="text" ref="newAge" placeholder="Age" />
            <input type="text" ref="newHeight" placeholder="Height" />
            <div>
              <button onClick={this.handleNewSmurf}>
                <span>Add Smurf </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    smurfs: state.smurfs,
    error: state.errorMessage
  };
};

export default connect(mapStateToProps, {
  getSmurfs,
  addSmurf,
  deleteSmurf
})(App);
