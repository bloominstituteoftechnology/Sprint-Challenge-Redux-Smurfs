import React from 'react';

function Form(props) {
  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(props.fields).map(([key, value]) => (
        <div key={key}>
          <label for={key} key>
            {key}
          </label>
          <input id={key} name={key} value={value} onChange={props.onChange} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
