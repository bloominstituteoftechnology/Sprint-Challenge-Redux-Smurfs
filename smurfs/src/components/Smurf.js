import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

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
			id: this.props.smurf.id,
			name: this.props.smurf.name,
			age: this.props.smurf.age,
			height: this.props.smurf.height,
			isEditing: false,
		});
	}

	deleteSmurfButtonClicked = _ => {
		if (
			window.confirm(
				`Are you sure you want to evict ${this.state.name} from the village?`
			)
		)
			this.props.deleteSmurf(this.state.id);
	};

	editButtonClickedHandler = _ => {
		this.setState({ isEditing: !this.state.isEditing });
	};

	render() {
		return (
			<div className="Smurf">
				<div className="ButtonsHeader">
					<div className="DeleteSmurfButtonContainer">
						<button
							className="DeleteSmurfButton"
							onClick={this.deleteSmurfButtonClicked}
						>
							&#215;
						</button>
					</div>

					{!this.state.isEditing ? (
						<div className="EditButtonContainer">
							<button
								className="EditButton"
								onClick={this.editButtonClickedHandler}
							>
								edit
							</button>
						</div>
					) : (
						<div className="IsEditingSmurf">
							<div className="CancelEditButtonContainer">
								<button
									className="CancelEditButton"
									onClick={this.editButtonClickedHandler}
								>
									cancel
								</button>
							</div>

							<EditSmurf
								name={this.state.name}
								age={this.state.age}
								height={this.state.height}
								submitEditHandler={this.submitEditHandler}
								SmurfKeys={this.props.SmurfKeys}
							/>
						</div>
					)}
					<div className="HeartButtonContainer">
						<button className="HeartButton">&hearts;</button>
					</div>
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

const mapStateToProps = state => {
	return {
		//
	};
};

export default connect(mapStateToProps, { deleteSmurf })(Smurf);
