import React from "react";
import "./App.css";
const Smurf = props => {
	let { name, age, height, id } = props.smurf;
	return (
		<div className="card">
			<span
				className="card__btn delete"
				onClick={e => {
					e.preventDefault();
					props.delete(id);
				}}
			>
				Delete
			</span>
			<h2>Name: {name}</h2>
			<h3>Age: {age}</h3>
			<h3>Height: {height}</h3>
		</div>
	);
};

export default Smurf;
