import React from "react";
import styled from 'styled-components';

import Smurf from "./Smurf";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
`

function Smurfs(props) {
    return (
        <Row>
            {props.smurfs.map(smurf => (
                <Smurf 
                    smurf={smurf}
                    id={smurf.id}
                    key={smurf.name}
                    deleteSmurf={props.deleteSmurf} />
            ))}
        </Row>
    );
}

export default Smurfs;