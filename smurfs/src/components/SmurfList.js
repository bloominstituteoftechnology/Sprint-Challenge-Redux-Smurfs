import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Smurf from './Smurf';

class SmurfList extends Component {
      render() {
        return (
          <div className="Smurfs">
            <h1>Smurf Village</h1>
            <ul>
              Hello
            </ul>
          </div>
        );
      }
    }
    
    Smurf.defaultProps = {
     smurfs: [],
    };
    
    export default SmurfList;