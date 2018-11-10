import React from "react";
import styled from 'styled-components';

const SmurfCard = styled.div`
    border: 1px solid black;
    width: 250px;
    margin: 10px 10px;
`

function Smurf(props) {
    return <SmurfCard key={props.smurf.name}>
                <h3>Name: {props.smurf.name}</h3>
                <p>Age: {props.smurf.age}</p>
                <p>Height: {props.smurf.height}</p>
                <button className="delete-button" onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>
            </SmurfCard>
}

export default Smurf;