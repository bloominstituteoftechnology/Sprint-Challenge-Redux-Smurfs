import React from 'react';

export default function SelectedSmurf(props) {
    return (
        <div>
            <h4>{props.selected.name}</h4>
            <span onClick={() => props.handleShowSmurf({})}> X </span>
            <div>{props.selected.age}</div>
            <div>{props.selected.height}</div>
            <button onClick={() => props.handleDeleteSmurf()}>{`Delete ${props.selected.name}`}</button>
            <button conClick={() => props.toggleShowUpdate()}>{`Update ${props.selected.name}`}</button>
        </div>
    );
}