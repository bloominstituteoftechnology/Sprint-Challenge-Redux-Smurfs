import React from 'react';

import '../styles/Smurfs.css';

export default function Smurfs(props) {
  const smurfs = props.smurfs;

  return (
    <div className="Smurfs">
      {smurfs
        ? smurfs.map((smurf, index) => {
            return <div key={smurf.id}>{smurf.name}</div>;
          })
        : null}
    </div>
  );
}
