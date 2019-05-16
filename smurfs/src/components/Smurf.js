import React from 'react';

const smurf = props => {
   const {smurf} = props
    return (
       <div key={smurf.id}>
        <div>Name: {smurf.name}</div>
        <div>Age: {smurf.age} </div>
        <div>Height: {smurf.height}</div>
       </div>
   )
}
export default smurf;