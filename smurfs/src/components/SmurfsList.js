import React from 'react';

const SmurfsList = (props) => {
  const smurfs = props.smurfs.slice(); 
  return (
    <div className="smurfs-container">
        
          {smurfs.map(smurf => <div className={"smurf"} key={smurf.id} smurf={smurf} >
            {/* Friend's Info Here */}
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>)}

        </div>
   );
}
 
export default SmurfsList;