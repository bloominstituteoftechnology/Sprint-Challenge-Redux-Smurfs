import React from 'react';
import { Media, Button } from 'reactstrap';
import './smurfs.css';


const Smurfs = (props) => {
  return(
    <div className="smurfs" >
      <Button color="success" onClick={props.addButton} >Add Smurf</Button>
      {props.smurfData.map((smurf, index) => {
        return (
          <div key={Date.now()} className="mt-5 smurf">
            <Media>
              <Media left>
                <img src="https://picsum.photos/64/64/?random" alt="Random placeholder" className="mr-1" />
              </Media>
              <Media body>
                <Media heading>
                  {smurf.name}
                </Media>
                <p>age: {smurf.age}</p>
                <p>height: {smurf.height}</p>
              </Media>
            </Media>
            <Button color="warning" onClick={() => props.editButton(index)} >Edit Smurf</Button>
            <Button color="danger" onClick={() => props.deleteButton('http://localhost:3333/smurfs/' + smurf.id)} >Delete Smurf</Button>
          </div>
        );
      })}
    </div>
  );
}



export default Smurfs;
