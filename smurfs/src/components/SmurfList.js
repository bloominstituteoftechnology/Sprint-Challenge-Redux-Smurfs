import React from 'react';

const SmurfList = ({ smurfs, isFetching }) => {
  return(
    <div className="smurf-list">
      {isFetching ? <h3>Looking for smurfs</h3> :
        <ul>
          {smurfs.map(smurf => {
              return(
                <li>
                    {smurf.name}
                </li>
            )}
          )}
        </ul>
      }
    </div>
  );
}

export default SmurfList;
