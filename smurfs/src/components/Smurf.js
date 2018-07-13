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
    margin: 20px;
    padding: 20px;
`;

const Smurf = props => {
    return (
        <SmurfContainer>
       <h2> {props.smurf.name} </h2>
       <p>{props.smurf.age}</p>
       <p>{props.smurf.height}</p>
       {console.log(props.smurfs[props.smurf.id])}
       <UpdateSingleSmurf id={props.smurfs[props.smurf.id-1].id}/>
       {props.showForm ? <UpdateSingleSmurf /> : null}
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
        showForm: state.showForm
    }
}

const mapActionsToProps = {
    updateSmurf: updateSmurf,
    toggleForm: toggleForm,
    deleteSmurf: deleteSmurf
}

export default connect(mapStateToProps, mapActionsToProps)(Smurf);