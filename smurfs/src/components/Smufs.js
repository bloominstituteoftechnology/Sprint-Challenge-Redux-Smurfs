import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions:

// Components:
import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
  };

  // Load Smurfs once mounted:
  componentDidMount() {};


  render() {
    return(
      <div>
        <div>Smurfs List</div>
        <Smurf />
      </div>
    );
  };
};

// Pull in info to pass on as props:
const mapStateToProps = (state) => {};

// Finish the connection by passing to connect:
export default connect(mapStateToProps, {})(Smurfs);