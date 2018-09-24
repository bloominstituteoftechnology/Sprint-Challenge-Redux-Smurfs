import React, {Fragment} from 'react';

export default function SmurfAdder(props){
    return(
        <Fragment>
            <input
                type='text'
                placeholder='name'
                value={props.name}
                onChange={props.handleChange}
                name='name'
            />
            <input
                type='text'
                placeholder='age'
                value={props.age}
                onChange={props.handleChange}
                name='age'
            />
            <input
                type='text'
                placeholder='height'
                value={props.height}
                onChange={props.handleChange}
                name='height'
            />
            <button type='submit' onClick={props.addSmurf}>Add Smurf</button>
        </Fragment>
    )
}