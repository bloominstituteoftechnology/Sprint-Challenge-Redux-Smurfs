import React from 'react';

const SmurfForm = props => {
  return (
    <div>
      <form>
        <input
          name='name'
          text='text'
          placeholder='name'
          value={props.state.name}
        />
        <input
          name='age'
          text='text'
          placeholder='age'
          value={props.state.age}
        />
        <input
          name='height'
          text='text'
          placeholder='height'
          value={props.state.height}
        />
        <button type='submit'>Add Smurf</button>
      </form>
    </div>
  );
}

export default SmurfForm;