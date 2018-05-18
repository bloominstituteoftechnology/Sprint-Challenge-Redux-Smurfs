import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";
import AddSmurf from './AddSmurf';

class App extends Component {

  state = {
    smurf: ''
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
      return <div className="App">
          <div className="container">
            <h1 className="section-title h1 mt-sm-4">SMURFS!</h1>
            <div className="row justify-content-sm-center">
              <AddSmurf />
              {this.props.smurfs.map(smurf => {
                return <div class="col-sm-4 friend-card mt-sm-4">
                    <div class="image-flip">
                      <div class="mainflip">
                        <div class="frontside">
                          <div class="card">
                            <div class="card-body text-center">
                              <h4 class="card-title">
                                {smurf.name}
                              </h4>
                              <p class="card-title">
                                Age: {smurf.age}
                              </p>
                              <p class="card-title">
                                Height: {smurf.height}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="backside">
                          <div class="card">
                            <div class="card-body text-center">
                              <h4 class="card-title">
                                Name: {smurf.name}
                              </h4>
                              <button class="btn btn-danger delete-button">
                                Delete Friend
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>;
              })}
            </div>
          </div>
        </div>
    // console.log(this.props)
    // return <div className="App">
    //     <h1>SMURFS!</h1>
    //     <ul>
    //       {this.props.smurfs.map(smurf => {
    //         return <div key={smurf.name}>{smurf.name}</div>;
    //       })}
    //     </ul>
    //   </div>;
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    pending: state.pending
  };
};
export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
