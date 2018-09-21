import React from "react";
import PropTypes from "prop-types";

const Smurf = props => {
  return (
    <a href={`/smurfs/${props.id >= 0 ? props.id : ""}`}>
      {console.log(props)}
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <div
          className="delete"
          onClick={e => {
            e.preventDefault();
            props.deleteSmurf(props.id);
          }}
          href="#"
        >
          Delete
        </div>
      </div>
    </a>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

Smurf.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired
};

export default Smurf;
