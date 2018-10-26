import React from 'react';

export default ({ smurfs }) => {
  return (
    <div>
      <h1>Smurfs List</h1>
      {smurfs.map(item => {
        return (
          <div>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
            <h1>{item.height}</h1>
          </div>
        );
      })}
    </div>
  );
};
