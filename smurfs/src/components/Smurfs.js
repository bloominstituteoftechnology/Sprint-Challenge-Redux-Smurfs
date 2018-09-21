import React, {Component}from 'react';
import { getSmurfs } from '../actions';
import { connect } from "react-redux";

class Smurfs extends Component {
	componentDidMount() {
		this.props.getSmurfs();
  }
  
	render() {
		return (
			<div className="smurfs-list">
				{this.props.smurfs.map(smurf => (
					<div className="smurf" key={smurf.id}>
						<h3>Name: {smurf.name}</h3>
						<p>Age: {smurf.age}</p>
						<p>Age: {smurf.height}</p>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { smurfs: state.smurfs };
};

export default connect(
	mapStateToProps,
	{ getSmurfs }
)(Smurfs);