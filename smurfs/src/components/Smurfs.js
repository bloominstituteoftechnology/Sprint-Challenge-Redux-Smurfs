import React from 'react';

import Smurf from './Smurf';

import '../styles/Smurfs.css';

export default function Smurfs(props) {
  const smurfs = props.smurfs;

  return (
    <div className="Smurfs">
      {!smurfs ? null : smurfs.length > 0 ? (
        smurfs.map((smurf, index) => {
          return (
            <div className="SmurfContainer" key={smurf.id}>
              <Smurf smurf={smurf} />
            </div>
          );
        })
      ) : (
        <div className="NoSmurfs">
          <h2>&#x21E7; No smurfs. Add some smurfs! &#x21E7;</h2>
        </div>
      )}
    </div>
  );
}
