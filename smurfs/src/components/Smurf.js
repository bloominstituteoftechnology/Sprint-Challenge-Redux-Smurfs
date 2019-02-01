import React from 'react'
import { updateSmurf, toggleForm, deleteSmurf } from './../actions';
import { connect } from 'react-redux';
import UpdateSingleSmurf from './UpdateSmurf';
import Styled from 'styled-components';

const SmurfContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    background: white;
    margin: 20px;
    padding: 20px;
    box-shadow: 5px 5px 5px;
`;

const Title = Styled.h2`
color: deepskyblue;
text-shadow: 2px 2px #000000;
font-family: 'Boogaloo', sans-serif;
font-size: 32px;
`;

const Smurf = props => {
    return (
        <SmurfContainer>
       <Title> {props.smurf.name} </Title>
       <p>Age: {props.smurf.age}</p>
       <p>Height: {props.smurf.height}</p>
       {console.log(props.smurfs[props.smurf.id])}
       {props.showForm ? <UpdateSingleSmurf id={props.smurfs[props.smurf.id-1].id}/> : null}
       <div>
           <button onClick={() => props.toggleForm()}>Edit</button>
            <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
        </div>
       
        </SmurfContainer>
        
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs.smurfs,
        showForm: state.showForm.showForm
    }
}

const mapActionsToProps = {
    updateSmurf: updateSmurf,
    toggleForm: toggleForm,
    deleteSmurf: deleteSmurf
}

export default connect(mapStateToProps, mapActionsToProps)(Smurf);