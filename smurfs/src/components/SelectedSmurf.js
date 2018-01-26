import React from 'react';

export default function SelectedSmurf(props) {
	return (
		<div>
			<h4>{props.selected.name}</h4>
			<div onClick={() => props.handleShowSmurf({})}> X </div>
			<div>{props.selected.age}</div>
			<div>{props.selected.height}</div>
			<button onClick={() => props.handleDeleteSmurf()}>
				{`Delete ${props.selected.name}`}
			</button>
			<button onClick={() => props.toggleShowUpdate()}>
				{`Update ${props.selected.name}`}
			</button>
		</div>
	);
}