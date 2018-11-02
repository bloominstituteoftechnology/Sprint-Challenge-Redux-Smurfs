import React from 'react';

const AddSmurf = ( props ) =>
{
  const handleSubmit = ( event ) =>
  {
    event.preventDefault();
    props.addSmurf
    ({
      name: props.name,
      age: props.age,
      height: props.height
    });
  }
  return(
    <div>
      <form>
        <input 
          type = "text"
          name = "name"
          placeholder = "Name" 
          onChange = { props.onChange }
          value = { props.name }
        />
        <input 
          type = "number"
          name = "age"
          placeholder = "Age" 
          onChange = { props.onChange }
          value = { props.age }
        />
        <input 
          type = "text"
          name = "height"
          placeholder = "Height"
          onChange = { props.onChange }
          value = { props.height }
        />
        <button onClick = { handleSubmit }>Add Smurf</button>
      </form>
    </div>
  )
}

export default AddSmurf;