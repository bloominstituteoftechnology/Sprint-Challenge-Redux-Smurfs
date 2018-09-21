import React from 'react';

const SmurfForm = (props) => {
  return ( 
    <form className="form">
      <label>
      Name:
    <input type="text"
            onChange={props.textInputHandler}
            placeholder="name"
            name="name"
            value={props.name}
    />
    </label>
    <br />
    <label>
      Age:
    <input type="text"
            onChange={props.textInputHandler}
            placeholder="age"
            name="age"
            value={props.age}
    />
    </label>
    <br />
    <label>
      Height:
    <input type="text"
            onChange={props.textInputHandler}
            placeholder="height"
            name="height"
            value={props.height}
    />
    </label> 
    <br />
    <button onClick={props.saveSmurfData}>Add Friend</button> 
    </form>
   );
}
 
export default SmurfForm;