import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs} from '../actions';

import Smurf from './Smurf';

class SmurfsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        {this.props.error ? <p>{this.props.error}</p> : null}
        
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <Smurf smurf={smurf}  />
              
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetching,
  error: state.error
});

export default connect(
  mapStateToProps,
  {
    getSmurfs,
   
  }
)(SmurfsList);