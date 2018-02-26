import React from 'react';
import axios from 'axios';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.removeSmurf = this.removeSmurf.bind(this);
  }

  render() {
    return (
      <div className="Smurf row">
        <div className="col-md-4">
          <strong>{this.props.name}</strong>
          <span className="info">
            <strong>{this.props.height} tall</strong>,&nbsp;
            <span>{this.props.age} years old</span>
          </span>
        </div>
        <div className="col-md-1">
        <span className="buttons">
          <i
            className="fa fa-trash"
            onClick={this.removeSmurf}
          ></i>
        </span>
        </div>
      </div>
    );
  }

  removeSmurf() {
    // add code to create the smurf using the api
    axios
      .delete('http://localhost:3333/smurfs/' + this.props.id)
      .then(response => {
        this.props.actions.getSmurfData();
      })
      .catch(error => {
        console.error('error deleting the data');
      });
  }
}

export default Smurf;
