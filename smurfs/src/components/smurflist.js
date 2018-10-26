import React from 'react';

const SmurfList = props => {
    console.log(props);
   return (
   <div>{
       props.smurfs.map(smurf => 
       <div 
        id={smurf.id} 
        key={smurf.name}
        >
        {smurf.name}
        </div>
        )
   }</div>);
}
export default SmurfList;