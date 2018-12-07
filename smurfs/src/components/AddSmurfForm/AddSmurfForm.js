import React from "react";
import axios from 'axios';

class AddSmurfForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            smurfs: [],
			name: "",
			age: "",
			height: "",
		};
	}

	addSmurf = (event, newSmurf) => {
		event.preventDefault();
		// const newSmurf = [{
		// 	name: this.state.name,
		// 	age: this.state.age,
		// 	height: this.state.height,
		// }];

        axios
            .post("http://localhost:3333/smurfs",
                newSmurf = {
                    name: this.state.name,
                    age: this.state.age,
                    height: this.state.height,}
                )
            .then(res => {
                console.log('PROPS for FORM')
                // this.setState({
                //     smurfs: [newSmurf]
                // });
                console.log("Form Response", res);
                this.setState({
                    name: "",
                    age: "",
                    height: "",
                });
            });
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div>
				<h1>Smurf Form</h1>
				<div>
					<form onSubmit={this.addSmurf}>
						<input
							onChange={this.handleInputChange}
							placeholder="name"
							value={this.state.name}
							name="name"
						/>
						<input
							onChange={this.handleInputChange}
							type="number"
							placeholder="age"
							value={this.state.age}
							name="age"
						/>
						<input
							onChange={this.handleInputChange}
							placeholder="height"
							value={this.state.height}
							name="height"
						/>
						<button type="submit">
							Add to the village
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddSmurfForm;
