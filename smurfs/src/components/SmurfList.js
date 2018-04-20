import React from 'react';
import { Table } from 'reactstrap';

import Smurf from './Smurf';

const SmurfList = props => {
  return (
    <Table>
       <thead>
         <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Age</th>
           <th>Height</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         {props.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
      </tbody>
    </Table>
  ); 
}

export default SmurfList;

