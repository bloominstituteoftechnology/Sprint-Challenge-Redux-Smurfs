import React from 'react';
import {Main, H2, Section} from '../styles'
import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'

const SmurfVillage = props => {
    return(
        <Main>
            <Section>
            <SmurfForm 
            mode={props.mode}
            handleChange={props.handleChange}
            name={props.name}
            age={props.age}
            height={props.height}
            addSmurf={props.addSmurf}
            updateSmurf={props.updateSmurf}
            />
            <SmurfList 
            toggleMode={props.toggleMode}
            smurfs={props.smurfs}
            deleteSmurf={props.deleteSmurf}
            />
            </Section>
        </Main>
    )
}

export default SmurfVillage