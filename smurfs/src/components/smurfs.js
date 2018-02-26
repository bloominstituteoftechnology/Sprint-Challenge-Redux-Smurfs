import React, { Component } from 'react';

class Smurfs extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Smurfs-Container">
        Smurfs Container
        <ul>
          {this.props.gettingSmurfs ? (
            <p>Loading Smurfs...</p>
          ) : (
            (this.props.smurfs || []).map((smurf, i) => {
              return (
                <li key={i}>
                  {smurf.name} <br/>
                  {smurf.age} <br/>
                  {smurf.height}
                </li>
          )}))}
        </ul>
      </div>
    )
  }
}

export default Smurfs;