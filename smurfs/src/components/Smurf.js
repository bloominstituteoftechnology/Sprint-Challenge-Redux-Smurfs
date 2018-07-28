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
	<td>{id}</td>
	<td>{name}</td>
	<td>{age}</td>
	<td>{height}</td>
	<Button onClick={() => this.handleDelete(id)}>Delete</Button>
      </tr>
  );
}
}

// This was my first successful attempt at taking something from one component and putting it into another so I was pleased with this. Basically, this tells my App.js file what information should go into the table. It also adds a delete button and delete functionality that works - at least on the smurfs that have an ID. For some reason, Brainy doesn't have one so you can't delete him.

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, { deleteSmurf })(Smurf);

// I figured if you're going to delete something you want to remove it from state so I left it blank. I'm not sure if my thinking was correct here, but it worked.
