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
                  {smurf.name} <br/>
                  {smurf.age} <br/>
                  {smurf.height} <br/>
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