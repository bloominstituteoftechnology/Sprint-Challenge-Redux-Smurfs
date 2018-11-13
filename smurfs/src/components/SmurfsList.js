import React, { Component } from 'react';
import {connect} from 'react-redux'

import Smurf from './Smurf';

const Smurfs = props =>{


    return (
      <div className="Smurfs">
        <ul>
          {props.smurfs.map(smurf => {
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

const mapStateToProps = state =>{
  return{
    smurfs : state.smurfs
  }
  
}

export default connect(mapStateToProps)(Smurfs) 
