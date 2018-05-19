import React from 'react';
import { Alert } from 'reactstrap';

//A loading screen for when we're waiting for the server
const Front = (props) => {
  return(
    <div className="mt-5">
      <Alert color="primary">
        Loading ...
      </Alert>
    </div>
  );
}



export default Front;
