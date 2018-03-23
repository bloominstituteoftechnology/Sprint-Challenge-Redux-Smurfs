import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';
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

  displayUpdateForm(id) {
    let form = document.getElementById(`updateSmurf${id}`);
    form.style.display === 'none'
      ? (form.style.display = 'inline-block')
      : (form.style.display = 'none');
  }

  submitUpdate(id, name, age, height) {
    console.log(id, name, age, height);
    this.props.updateSmurf({ id, name, age, height });
    this.displayUpdateForm(id);
  }
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
                        className="updateSmurf"
                        onClick={() => this.displayUpdateForm(smurf.id)}
                      >
                        <span> Update </span>
                      </button>

                      <div
                        id={`updateSmurf${smurf.id}`}
                        className={`updateSmurf `}
                        style={{ display: 'none' }}
                      >
                        <div className="">
                          <div>
                            <input
                              id={`updateName${smurf.id}`}
                              type="text"
                              ref={`updateName${smurf.id}`}
                              placeholder={smurf.name}
                            />
                          </div>
                          <div>
                            <input
                              id={`updateAge${smurf.id}`}
                              type="text"
                              ref={`updateAge${smurf.id}`}
                              placeholder={smurf.age}
                            />
                          </div>
                          <div>
                            <input
                              id={`updateHeight${smurf.id}`}
                              type="text"
                              ref={`updateHeight${smurf.id}`}
                              placeholder={smurf.height}
                            />
                          </div>
                          <div>
                            <button
                              onClick={() =>
                                this.submitUpdate(
                                  smurf.id,
                                  document.getElementById(
                                    `updateName${smurf.id}`
                                  ).value,
                                  document.getElementById(
                                    `updateAge${smurf.id}`
                                  ).value,
                                  document.getElementById(
                                    `updateHeight${smurf.id}`
                                  ).value
                                )
                              }
                            >
                              <span>submit update</span>
                            </button>
                          </div>
                        </div>
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
            <div>
              <input type="text" ref="newName" placeholder="Name" />
            </div>

            <div>
              <input type="text" ref="newAge" placeholder="Age" />
            </div>
            <div>
              <input type="text" ref="newHeight" placeholder="Height" />
            </div>
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
  deleteSmurf,
  updateSmurf
})(App);
