import React from 'react';
import './App.css';



const Smurfs= props => {
    return (
        <div>
            {smurfs.map(smurf => {
            return <div key={smurf.name} age={smurf.age} email={smurf.email}>{smurf.name}</div>;
            })}
        </div>
);
};

Smurfs.defaultProps = {
    name: '',
    email: '',
    age: ''
  };


export default Smurfs;