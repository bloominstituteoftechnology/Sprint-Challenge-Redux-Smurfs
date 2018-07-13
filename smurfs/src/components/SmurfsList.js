import React, { Component } from 'react';
import Smurfs from './Smurfs';

class SmurfsList extends Component {
    render() {
      return (
        <div className="Smurfs">
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurfs
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

export default SmurfsList;