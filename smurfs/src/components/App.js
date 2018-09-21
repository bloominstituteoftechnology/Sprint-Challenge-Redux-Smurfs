import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions/index.js';
import './App.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
*/

class App extends Component {
    
    state = {
	name: 'Smurf2000',
	age: 10,
	height: '5cm'
    }

    componentDidMount() {
	this.props.getSmurfs();
    };
    
    handleChange = e => {
	e.preventDefault();
	this.setState ({
	    [e.target.name]: e.target.value
	});
    }
    
    render() {
	const { name, age, height } = this.state;
	const { addSmurf, smurfs } = this.props; 
	
	return (
	    <div className="App">
              <h1>Village</h1>
	      <div>
		{smurfs.map(smurf => (
		    <section>
		      <p>{smurf.name}</p>
		      <p>{smurf.age}</p>
		      <p>{smurf.height}</p>
		    </section>
		))}
	    </div>
                <section>
		<input name="name" type="text" placeholder="name" value={name} onChange={this.handleChange}/>
		<input name="age" type="number" placeholder="age" value={age} onChange={this.handleChange}/>
		<input name="height" type="text" placeholder="height" value={height} onChange={this.handleChange}/>
		<button onClick = {() => {addSmurf({ name, age, height }); window.location.reload()}}>Add Smurf</button>
		</section>
		</div>
	);
    }
}

//export default App;

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
});

 export default connect(mapStateToProps, {getSmurfs, addSmurf})(App); 
