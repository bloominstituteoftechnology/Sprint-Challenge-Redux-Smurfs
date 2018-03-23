import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'masonry-layout';

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
        <div className="grid smurfList">
          <div className="grid-sizer"> </div>

          {this.props.smurfs
            ? this.props.smurfs.map((smurf, index) => {
                return (
                  <div className="card grid-item" key={index}>
                    <h4 className="card-header"> {smurf.name} </h4>
                    <div className="card-body">
                      <div> Age: {smurf.age} </div>
                      <div> Height: {smurf.height} </div>
                    </div>
                    <button
                      className="updateButton"
                      onClick={() => this.displayUpdateForm(smurf.id)}
                    >
                      <span> Update </span>
                    </button>

                    <div
                      id={`updateSmurf${smurf.id}`}
                      style={{ display: 'none' }}
                      className="updateForm"
                    >
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
                          className="submitUpdateButton"
                          onClick={() =>
                            this.submitUpdate(
                              smurf.id,
                              document.getElementById(`updateName${smurf.id}`)
                                .value,
                              document.getElementById(`updateAge${smurf.id}`)
                                .value,
                              document.getElementById(`updateHeight${smurf.id}`)
                                .value
                            )
                          }
                        >
                          <span>Submit Update</span>
                        </button>
                      </div>
                    </div>

                    <button
                      className="deleteSmurf"
                      onClick={() => this.props.deleteSmurf(smurf.id)}
                    >
                      <span> X </span>
                    </button>
                  </div>
                );
              })
            : null}
        </div>
        <div>
          <div className="card grid-item--width2 addSmurf">
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
      </div>
    );
  }
}

var msnry = new Masonry('.grid', {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPostion: true
});

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
