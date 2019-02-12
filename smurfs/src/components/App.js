
import './App.css';
import React, { Component, div } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions/index';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

	state = {
		age: '',
		name: '',
		height: ''
	}

	componentDidMount(){
		this.props.getSmurfs();
	}
	
	handleChange = e => {
		this.setState({[e.target.name] : e.target.value})
	}


  render() {
  		const {name,age,height} = this.state;
  		const {addSmurf,smurfs} = this.props;
  		
    return (
      <div className="App">
				<h1> REDUX-SMURFS </h1>
					<div>
						<input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
						<br/>
						<input name="age" type="text" placeholder="Age" value={this.state.age} onChange={this.handleChange}/>
						<br/>
						<input name="height" type="text" placeholder="Height" value={this.state.height} onChange={this.handleChange}/>
						<button onClick={() => addSmurf({name,age,height})}> Add SMURF </button>
					</div>
					
					<div className="smurfContainer">
						{smurfs.map(smurf => (
							<div key={smurf.name} className="eachSmurf">
								<p className="name">{smurf.name}</p>
								<p>{smurf.age}</p>
								<p>{smurf.height}</p>
							</div>
						))}
					</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	smurfs : state.smurfs,
})

export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
