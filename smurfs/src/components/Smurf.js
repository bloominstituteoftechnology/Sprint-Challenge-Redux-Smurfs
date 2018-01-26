import React, { Component } from 'react';

import EditSmurf from './EditSmurf';

import '../styles/Smurf.css';

class Smurf extends Component {
	state = {
		id: null,
		name: null,
		age: null,
		height: null,
		isEditing: null,
	};

	componentDidMount() {
		this.setState({
			index: this.props.index,
			name: this.props.smurf.name,
			age: this.props.smurf.age,
			height: this.props.smurf.height,
			isEditing: false,
		});
	}

	deleteSmurfButtonClicked = _ => {
		if (
			window.confirm(
				`This will remove ${
					this.state.name
				} as a smurf? This CANNOT be undone. Are you sure you want to continue?`
			)
		)
			// this.props.deleteSmurfHandler(Number(this.state.index));
			console.log(' ');
	};

	editButtonClickedHandler = _ => {
		this.setState({ isEditing: !this.state.isEditing });
	};

	render() {
		return (
			<div className="Smurf">
				<div className="ButtonsHeader">
					<button
						className="DeleteSmurfButton"
						onClick={this.deleteSmurfButtonClicked}
					>
						&#215;
					</button>

					{!this.state.isEditing ? (
						<button
							className="EditButton"
							onClick={this.editButtonClickedHandler}
						>
							edit
						</button>
					) : (
						<div className="IsEditingSmurf">
							<button
								className="CancelEditButton"
								onClick={this.editButtonClickedHandler}
							>
								cancel
							</button>

							<EditSmurf
								name={this.state.name}
								age={this.state.age}
								height={this.state.height}
								submitEditHandler={this.submitEditHandler}
								SmurfKeys={this.props.SmurfKeys}
							/>
						</div>
					)}

					<button className="ButtonHeader__spacer">&hearts;</button>
				</div>

				<div className="SmurfMainContainer">
					{!this.state.isEditing ? (
						<div className="SmurfInfo">
							<li className="Smurf__listItem">
								<h2 className="Smurf__listItem--name">{this.state.name}</h2>
							</li>

							<li className="Smurf__listItem">
								<div className="Smurf__listItem--age">{this.state.age} old</div>
							</li>

							<li className="Smurf__listItem">
								<div className="Smurf__listItem--height">
									{this.state.height}
								</div>
							</li>
						</div>
					) : (
						<div className="IsEditingSmurf">
							<button
								className="CancelEditButton"
								onClick={this.editButtonClickedHandler}
							>
								cancel
							</button>

							<EditSmurf
								name={this.state.name}
								age={this.state.age}
								height={this.state.height}
								submitEditHandler={this.submitEditHandler}
								SmurfKeys={this.props.SmurfKeys}
							/>
						</div>
					)}
				</div>

				<div className="SmurfsDetailedHeader" />
			</div>
		);
	}
}

export default Smurf;
