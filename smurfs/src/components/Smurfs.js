import React, { Component } from 'react';





class Smurfs extends Component {   

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
                <li className="Smurf">
                    <h3>{smurf.name}</h3>
                    <strong>{smurf.height} tall</strong>
                    <p>{smurf.age} smurf years old</p>                
                </li>  
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;