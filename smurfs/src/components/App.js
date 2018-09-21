import React, { Component } from 'react';
// Components
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
// Styles
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<SmurfList />
				<SmurfForm />
			</div>
		);
	}
}

export default App;
