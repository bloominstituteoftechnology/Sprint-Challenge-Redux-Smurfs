import React, { Component } from 'react';
import './App.css';
import Village from './Village';
import AddForm from './AddForm';

class App extends Component {
  	render() {
		return (
			<div className="App">
				<AddForm />
				<Village />
			</div>
		);
  	}
}

export default App;
