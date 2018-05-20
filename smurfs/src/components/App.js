import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";
import { connect } from "react-redux";
import AddSmurf from './AddSmurf';

class App extends Component {
  // state = {
  //   smurf: "",
  //   editSmurfData: {
  //     name: "",
  //     age: "",
  //     height: ""
  //   }
  // };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleSmurfInput = e => {
    this.setState({
      editSmurfData: {[e.target.name]: e.target.value}
    });
  };

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <div className="container">
          <h1 className="section-title h1 mt-sm-4">SMURFS!</h1>
          <div className="row justify-content-sm-center">
            <AddSmurf />
            {this.props.smurfs.map(smurf => {
              return <div key={smurf.name}  className="col-sm-4 friend-card mt-sm-4">
                  <div className="image-flip">
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <h4 className="card-title">
                              {smurf.name}
                            </h4>
                            <p className="card-title">
                              Age: {smurf.age}
                            </p>
                            <p className="card-title">
                              Height: {smurf.height}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center">
                            <h4 className="card-title">
                              Edit {smurf.name}
                            </h4>
                            <div>
                              {/* <div className="form-group">
                                <input onChange={this.handleSmurfInput} value={this.state.editSmurfData.name} name="name" className="form-control" placeholder={smurf.name} />
                                <input onChange={this.handleSmurfInput} value={this.state.editSmurfData.age} name="age" className="form-control" placeholder={smurf.age} />
                                <input onChange={this.handleSmurfInput} value={this.state.editSmurfData.height} name="height" className="form-control" placeholder={smurf.height} />
                              </div> */}
                              <button type="submit" className="btn btn-primary">
                                Edit Smurf
                              </button>
                            </div>
                            <button onClick={() => this.props.deleteSmurf(smurf.id)} className="btn btn-danger delete-button">
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
    );
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
export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf })(App);
