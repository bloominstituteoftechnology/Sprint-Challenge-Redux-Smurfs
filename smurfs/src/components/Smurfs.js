import React, { Component } from 'react';
import SelectedSmurf from './SelectedSmurf';
import { connect } from 'react-redux';
import { deleteSmurf, updateSmurf, toggleShowUpdate } from '../actions';
import UpdateSmurf from './UpdateSmurf';

class Smurfs extends Component {

	handleDeleteSmurf = () => {
		const { id } = this.props.smurfSelected;
		this.props.deleteSmurf(id);
	}

	handleShowSmurf = smurf => {
		this.props.updateSmurf(smurf);
	}

	toggleShowUpdate = () => {
		this.props.toggleShowUpdate();
	}

	render() {
		return (
			<div>
				<ul>
					{this.props.smurfs.map(smurf => {
						return (
							<li onClick={() => this.handleShowSmurf(smurf)} key={smurf.id}>
								{smurf.name}
							</li>
						);
					})}
				</ul>
				{Object.keys(this.props.smurfSelected).length > 0 ? (
					<SelectedSmurf 
						handleShowSmurf={this.handleShowSmurf} 
						toggleShowUpdate={this.toggleShowUpdate} 
						handleDeleteSmurf={this.handleDeleteSmurf} 
						selected={this.props.smurfSelected}
					/>
				) : null} 
				{this.props.showUpdate ? (
					<UpdateSmurf smurf={this.props.smurfSelected}/>
					) : null}
				{this.props.deletingSmurf ? (
					<img src="" alt="" />
					) : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		deletingSmurf: state.smurfsReducer.deletingSmurf,
		error: state.smurfsReducer.error,
		showUpdate: state.smurfReducer.showUpdate,
		smurfSelected: state.smurfSelected.smurfSelected
	};
};

export default connect(mapStateToProps, {
	deleteSmurf,
	updateSmurf,
	toggleShowUpdate
})(Smurfs);