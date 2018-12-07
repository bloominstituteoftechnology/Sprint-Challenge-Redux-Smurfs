import React from 'react';

import {Div, H2, H3, Button} from '../styles'

const SmurfList = props => {
    return (
        <React.Fragment>
            {props.smurfs.map((smurf, index) => {
                return (
                <Div column key={index}>
                    <H2>{smurf.name}</H2>
                    <H3>Age: {smurf.age}</H3>
                    <H3>Height: {smurf.height}</H3>

                    <Div>
                    <Button onClick={() => props.deleteSmurf(smurf.id)}>X</Button>
                    <Button onClick={() => props.toggleMode(smurf.id, smurf.name)}>{'\u2b8d'}</Button>
                    </Div>
                </Div>
                );
            })}
        </React.Fragment>
    )
}

export default SmurfList