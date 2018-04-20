import React, { Component } from 'react';


const btnStyle = {
	cursor: 'pointer',
    padding: 8,
    // margin: 20
};
const dbtn = {
	color: 'red',
	cursor: 'pointer',
	padding: 8,
	fontWeight: 'bold',
	margin: 10
}
const abtn = {
	color: 'blue',
	cursor: 'pointer',
	padding: 8,
	fontWeight: 'bold',
	margin: 10
}


class SmurfsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showUpdateNote: false
		};
	}
	showUpdateNote = () => {
		this.setState({ showUpdateNote: !this.state.showUpdateNote });
    };
    handleTextInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
    updateSmurf = (SmurfID) => {
		// window.preventDefault();
        const smurf = { name: this.state.Name, height: this.state.Height, age: this.state.Age };
        console.log('EDIT FORM INPUT: name,height,age, :', smurf, SmurfID);
        this.props.updateSmurf(SmurfID, smurf);
        // this.setState({ showUpdateNote: !this.state.showUpdateNote });
        // this.props.getAJAX()
        // this.setState({ Name: '', Email: '', Age: '' });
		
    };
    deleteSmurf = (SmurfID) => {
	
        this.props.deleteSmurf(SmurfID);
        // this.props.getAJAX()

	};
	render() {
        const { name, age, height, id} = this.props.smurf;
        console.log('ID of smurf: ',id,name)
        console.log('SMURF STRUCTURE,',this.props.smurf)
		return (
			<div>
				{/* <h1>
					name: {this.props.smurf.name} height: {this.props.smurf.height} age: {this.props.smurf.age}
				</h1> */}
				<button onClick={this.showUpdateNote} style={btnStyle}>
					Update Smurf Details
				</button>
                {this.state.showUpdateNote ? (
						<div>
							<input
								type="text"
								onChange={this.handleTextInput}
								placeholder={name}
								name="Name"
								value={this.state.Name}
							/>
							<input
								type="text"
								onChange={this.handleTextInput}
								placeholder={height}
								name="Height"
								value={this.state.Height}
							/>
							<input
								type="text"
								onChange={this.handleTextInput}
								placeholder={age}
								name="Age"
								value={this.state.Age}
							/>
							<button onClick={() => this.updateSmurf(id)} style={abtn}>Save Smurf Details</button>
							<button onClick={() => this.deleteSmurf(id)} style={dbtn}>
								Delete Smurf
							</button>
						</div>
					) : null}
			</div>
		);
	}
}

export default SmurfsList;