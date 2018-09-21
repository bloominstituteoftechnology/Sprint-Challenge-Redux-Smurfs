import React from "react";
import PropTypes from "prop-types";

const SmurfPage = props => {
  return (
    <a href={`/smurfs/${props.id >= 0 ? props.id : ""}`}>
      <div className="Smurf">
        <h3>{props.smurf.name}</h3>
        <strong>{props.smurf.height} tall</strong>
        <p>{props.smurf.age} smurf years old</p>
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

SmurfPage.defaultProps = {
  name: "",
  height: "",
  age: ""
};

SmurfPage.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired
};

export default SmurfPage;
