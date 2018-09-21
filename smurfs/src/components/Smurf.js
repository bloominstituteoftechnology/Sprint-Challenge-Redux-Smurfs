import React from 'react';

const Smurf = (props) => {
  return (
    <div>
      <h1>
        {props.smurf.name}
      </h1>

      {/* <h1 onClick={() => props.updateForm(props.friend)}>
        {props.friend.name}
      </h1> */}
      
    </div>
  );
};

export default Smurf;