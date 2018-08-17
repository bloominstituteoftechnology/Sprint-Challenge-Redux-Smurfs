import React from 'react';

const NewSmurf = props => {
  return (
    <div className='smurf-form'>
      <form onSubmit={props.submitHandler}>
        <input name='name' placeholder='Enter name' value={props.state.name} onChange={props.changeHandler} />
        <input name='age' placeholder='Enter age' value={props.state.age} onChange={props.changeHandler} type='number' />
        <input name='height' placeholder='Enter height' value={props.state.height} onChange={props.changeHandler} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewSmurf;
