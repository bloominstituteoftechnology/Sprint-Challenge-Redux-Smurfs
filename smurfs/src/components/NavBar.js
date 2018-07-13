import React from 'react';
import { connect } from 'react-redux';
import { addClicked } from '../actions';
import { Button } from 'reactstrap';

const NavBar = props => (
  <Button
    style={{ marginLeft: '-40%', position: 'fixed', top: '0' }}
    color="primary"
    onClick={props.addClicked}
  >
    Add/Delete Smurf
  </Button>
);

export default connect(
  null,
  { addClicked },
)(NavBar);
