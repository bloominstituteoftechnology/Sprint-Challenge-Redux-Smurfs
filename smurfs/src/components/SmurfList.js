import React, { Component } from "react";
import { Link } from "react-router-dom";
import Smurf from './Smurf';



class SmurfList extends Component {


  render() {
    return (
      <div className="SmurfList">
        <h1>Smurf Village</h1>
        <Link to={`/`}>
          <button>Head Back Home</button>
        </Link>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <Smurf
                  key={smurf.id}
                  name={smurf.name}
                  age={smurf.age}
                  height={smurf.height}
                />
                {/* <button onClick={() => this.deleteSmurf(smurf.id)}>
                  Delete
                </button> */}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
