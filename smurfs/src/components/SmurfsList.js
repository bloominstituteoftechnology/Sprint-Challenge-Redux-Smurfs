import React, { Component } from 'react';
import Smurf from '.Smurfs';

import {connect} from 'react-redux';
import { fetchSmurfs } from '../actions';

class SmurfsList extends Component {
  componentDidMount() => {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div>
        {this.props.fetchingsmurfs ? (
          <h3>Hang on while we get your Smurfs</h3>
        ) : null}
        {this.props.smurf.map(smurf => {
          return <Smurf smurf={smurf} />;
        })}       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);