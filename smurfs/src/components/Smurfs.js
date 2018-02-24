import React from 'react';

const Smurfs = props => {
    return (
             <div className="smurfs">
                 {props.smurfs ? props.smurfs.map((smurf) => {
                     return (
                         <ul key={smurf.smurfId} className="friend">
                         <li>name: {smurf.name}</li>
                         <li>age: {smurf.age}</li>
                         <li>height: {smurf.height}</li>
                         </ul>
                     )}
                 ) :
                 <div></div> }
             </div>
     )
 }
 
     
 
 export default Smurfs;