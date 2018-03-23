import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import { getSmurfs } from '../actions';
import './Smurfs.css';

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

//   handleDelete(smurf) {
//     this.props.deleteSmurf(smurf);
//     this.props.getSmurfs();
//   }

  render() {
    return (
      <div className="Smurfs">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.name}>
                          <b>{smurf.name}</b><br/>
                          {`Age: ${smurf.age}`}<br/>
                          {`Height: ${smurf.height}`}
                    </li>
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    smurfs: state.smurfs,
    error: state.errorMessage,
  };
};

export default connect(mapStateToProps, { 
          getSmurfs,
        })(Smurfs);
