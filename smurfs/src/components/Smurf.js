import React, { Component } from 'react' ;
import { Button } from 'reactstrap';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';

class Smurf extends Component {
  handleDelete = (id) => {
    this.props.deleteSmurf(id);
  };

  render() {
    const {id, name, age, height} = this.props.smurf;
    return (

      <tr>
	<td>{name}</td>
	<td>{age}</td>
	<td>{height}</td>
	<Button onClick={() => this.handleDelete(id)}>Delete</Button>
      </tr>
  );
}
}

const mapStateToProps = state => {
  return {
  };
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf);
