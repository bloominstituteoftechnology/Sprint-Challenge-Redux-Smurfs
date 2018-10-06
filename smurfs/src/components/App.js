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
		this.setState({ addFrom: !this.state.addFrom });
	};
	deleteSmurf = id => {
		this.props.deleteSmurfs(id);
	};
	render() {
		let smurfs = this.props.smurfs.map((item, i) => (
			<Smurf key={item.id} smurf={item} delete={this.deleteSmurf} />
		));
		return this.props.fetch ? (
			<p> waiting</p>
		) : (
			<div className="container">
				<div className="flex-wrap">{smurfs}</div>
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
