import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destroySmurf } from '../actions';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs-Container">
        {this.props.smurfs.length > 0 && <h2>Smurf Horde!</h2>}

        <ul>
          {this.props.gettingSmurfs ? (
            <p>Loading Smurfs...</p>
          ) : (
            this.props.smurfs.map((smurf) => {
              return (
                <li key={smurf.id} className="Smurf">
                  <b>Name:</b> {smurf.name} <br/>
                  <b>Age:</b> {smurf.age} <br/>
                  <b>Height:</b> {smurf.height} <br/>
                  <button onClick={() => {this.props.destroySmurf(smurf.id)}}>Destroy</button>
                </li>
              )
            }))}
        </ul>
      </div>
    )
  }
}

export default Smurfs;