import React from 'react';
import { Media, Button } from 'reactstrap';
import './smurfs.css';

//The main component of the app.  It loops over the smurfs array and generates cards for each smurf as well as
//displaying a welcome message and add smurf button
//These could have been seperate components, and if the project were to grow they would probably end up refactored.
const Smurfs = (props) => {
  return(
    <div className="smurfs" >
      <div className="greeting">
        <h1 className="display-5">Welcome</h1>
        <h1 className="display-5">to Smurf Village!</h1>
      </div>
      <div className="add-button">
        <Button color="primary" onClick={props.addButton} >Add Smurf</Button>
      </div>
      {props.smurfData.map((smurf, index) => {
        const picString = "https://picsum.photos/64/64/?" + smurf.id;
        return (
          <div key={smurf.id} className="mt-5 smurf">
            <Media>
              <Media left>
                <img src={picString} alt="Random placeholder" className="mr-1" />
              </Media>
              <Media body>
                <Media heading>
                  {smurf.name}
                </Media>
                <p>age: {smurf.age}</p>
                <p>height: {smurf.height}</p>
              </Media>
            </Media>
            <Button color="info" onClick={() => props.editButton(index)} >Edit Smurf</Button>
            <Button color="secondary" onClick={() => props.deleteButton('http://localhost:3333/smurfs/' + smurf.id)} >Delete Smurf</Button>
          </div>
        );
      })}
    </div>
  );
}



export default Smurfs;
