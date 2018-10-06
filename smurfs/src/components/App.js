import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurfs, addSmurfs } from "../actions/index";
import Smurf from "./Smurf";
import AddFrom from "./AddForm";
import "./App.css";

class App extends Component {
	state = {
		addFrom: false
	};
	componentDidMount() {
		this.props.getSmurfs();
	}
	handleAdd = e => {
		// console.log(e);
		this.setState({ addFrom: !this.state.addFrom });
	};
	deleteSmurf = id => {
		// console.log(id);
		this.props.deleteSmurfs(id);
	};
	render() {
		console.log(this.props);
		let smurfs = this.props.smurfs.map((item, i) => (
			<Smurf key={item.id} smurf={item} delete={this.deleteSmurf} />
		));
		return this.props.fetch ? (
			<p> waiting</p>
		) : (
			<div className="container">
				{smurfs}
				{this.state.addFrom ? <AddFrom add={this.handleAdd} /> : null}
				<div className="addElement" onClick={this.handleAdd}>
					+
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	smurfs: state.smurfs,
	fetch: state.fetchingSmurfs
});
export default connect(
	mapStateToProps,
	{ getSmurfs, deleteSmurfs, addSmurfs }
)(App);
