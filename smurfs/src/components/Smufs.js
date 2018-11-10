import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions:
import { getSmurfs } from '../actions';

// Components:
import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
  };

  // Load Smurfs once mounted:
  componentDidMount() {
    this.props.getSmurfs();
  };


  render() {
    return(
      <div className='smurfsList'>
        { this.props.fetching ? <h1 className='fullAlert'>The Smurfs are on their way...</h1> : null }
        { this.props.error !== null ? <h1 className='fullAlert'>{this.props.error}</h1> : null }
        <Smurf />
      </div>
    );
  };
};

// Pull in info to pass on as props:
// const initialState = {
//   smurfs: [],
//   fetching: false,
//   adding: false,
//   updating: false,
//   deleting: false,
//   error: null
// };
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};


// Finish the connection by passing to connect:
export default connect(mapStateToProps, { getSmurfs })(Smurfs);