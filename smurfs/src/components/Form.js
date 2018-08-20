import React from 'react';
import './App.css';

const Form = props => {
  return (
    <div className="forms">
      <section>
        <h3>Add A Smurf to the Village</h3>
        <form action="submit" onSubmit={props.addSmurf}>
          <label htmlFor="SmurfName">Smurf Name:</label><br />
          <input 
            type="text"
            id="SmurfName"
            name="addSmurfName"
            onChange={props.onChange}
            value={props.addSmurfName}
          /><br />
          <label htmlFor="SmurfAge">Smurf Age:</label><br />
          <input 
            type="number"
            id="SmurfAge"
            name="addSmurfAge"
            onChange={props.onChange}
            value={props.addSmurfAge}
          /><br />
          <label htmlFor="SmurfHeight">Smurf Height:</label><br />
          <input 
            type="text"
            id="SmurfHeight"
            name="addSmurfHeight"
            onChange={props.onChange}
            value={props.addSmurfHeight}
          /><br />
          <button type="submit">Add Smurf</button>
        </form>
      </section>
      <section>
        <h3>Remove A Smurf to the Village</h3>
        <form action="submit" onSubmit={props.deleteSmurf}>
          <label htmlFor="SmurfIdDelete">Smurf Id:</label><br />
          <input 
            type="number"
            id="SmurfIdDelete"
            name="deleteSmurfId"
            onChange={props.onChange}
            value={props.deleteSmurfId}
          /><br />
          <button type="submit">Delete Smurf</button>
        </form>
      </section>
      <section>
        <h3>Edit A Smurf from the Village</h3>
        <form action="submit" onSubmit={props.editSmurf}>
          <label htmlFor="SmurfIdEdit">Smurf Id:</label><br />
          <input 
            type="number"
            id="SmurfIdEdit"
            name="editSmurfId"
            onChange={props.onChange}
            value={props.editSmurfId}
          /><br />
          <label htmlFor="SmurfNameEdit">Smurf Name:</label><br />
          <input 
            type="text"
            id="SmurfNameEdit"
            name="editSmurfName"
            onChange={props.onChange}
            value={props.editSmurfName}
          /><br />
          <button type="submit">Edit Smurf</button>
        </form>
      </section>
    </div>
  );
}

export default Form;