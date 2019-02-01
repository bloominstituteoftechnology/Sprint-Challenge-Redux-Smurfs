import React, { Component } from 'react';
import {deleteSmurf} from '../actions';
import Smurf from './Smurf';

export default class SmurfList extends Component {
  render() {
    return (
      <div>
        {
          this.props.smurfs.map(smurf => <Smurf key={smurf.name} smurf={smurf} deleteSmurf={this.props.deleteSmurf}/> )
        }
      </div>
    )
  }
}
