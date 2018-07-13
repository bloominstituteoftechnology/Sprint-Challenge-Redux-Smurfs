import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';

const StyleButton = styled(Button)`
    width: 100px;
`

const DeleteSmurf = props => {
    return (
        <Link to='/smurfs'><StyleButton color="danger" onClick={props.deleteSmurf(props.id)}>Delete</StyleButton></Link>
    )
}

export default connect(null, { deleteSmurf })(DeleteSmurf);