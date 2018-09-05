import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/actions';

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  
  render() {
    console.log('Smurfs Props: ', this.props);

    if (this.props.smurfData.fetchingSmurf) {
      return (
        <h1>Loading smurf data</h1>
      )
    }
    else {
      return (
        <div>
          {
            this.props.smurfData.smurfs.map(smurf => {
              return (
                <ul key={ smurf.id }>
                  <li>{ smurf.name }</li>
                  <li>{ smurf.age }</li>
                  <li>{ smurf.height }</li>
                </ul>
              )
            })
          }
        </div>
      )
    }
  }
};

const mapStateToProps = state => {
  return {
    smurfData: state
  }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);