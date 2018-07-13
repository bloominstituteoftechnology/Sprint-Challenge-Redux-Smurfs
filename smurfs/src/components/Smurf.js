import React from "react";

class Smurf extends React.Component {
  constructor() {
    super();
    this.state = {
      updatedName: "",
      updatedAge: "",
      updatedHeight: "",
      update: false
    };
  }
  render() {
    return (
      <div>
        <p>
          <strong>Name:</strong> {this.props.smurf.name}
        </p>
        <p>
          <strong>Age:</strong> {this.props.smurf.age}
        </p>
        <p>
          <strong>Height:</strong> {this.props.smurf.height}
        </p>
      </div>
    );
  }
}

export default Smurf;
