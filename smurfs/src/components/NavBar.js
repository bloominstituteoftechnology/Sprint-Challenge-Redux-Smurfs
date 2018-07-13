import React from 'react';
import { connect } from 'react-redux';
import { addClicked } from '../actions';
import { Button } from 'reactstrap';

const NavBar = props => (
  <Button
    style={{ marginLeft: '-65%' }}
    color="primary"
    onClick={props.addClicked}
  >
    Add Smurf
  </Button>
);

export default connect(
  null,
  { addClicked },
)(NavBar);
