import React, { Component } from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';
import { fetching_data } from '../../actions/index';

class Smurfs extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    this.props.fetching_data();
  }

  render() {
    return (
      <div className="smurfs-list">
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
            <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
            />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      fetchingSmurfs: state.smurfsReducer.fetchingSmurfs,
      smurfs: state.smurfsReducer.smurfs,
  }
}

export default connect(mapStateToProps, { fetching_data })(Smurfs);