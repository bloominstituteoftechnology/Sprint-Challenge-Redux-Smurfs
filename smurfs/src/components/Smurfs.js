import React from 'react';
import './App.css';
import SelectedSmurf from './SelectedSmurf';
import { connect } from 'react-redux';

class Smurfs extends React.Component {
  handleShowSmurf = smurf => {

  };
  render () {
    return(
      <div>  
        <h1>Smurf Village</h1>
        <ul className='smurfList' >
          {this.props.smurfs.map( (smurf,i) => {
            return(
              <li key={i} i={i}>
                {smurf.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Smurfs;