import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, addSmurf } from '../actions';
import { connect } from 'react-redux';
import { Button, Table, Form, FormGroup, Input, Label } from 'reactstrap';
import Smurf from './Smurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.blankSmurf = {
      name:'',
      age:'',
      height:''
    };
    
    this.state = {
      newSmurf: this.blankSmurf,
    };

  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }
// this corresponds with the this.props.thingThatFetches in my swapi assignment
 
  handleInput = event => {
    this.setState({ newSmurf: {...this.state.newSmurf, ...{[event.target.name]: event.target.value } }});
  };

  handleSubmit = () => {
    this.props.addSmurf(this.state.newSmurf);
    this.setState({ newSmurf: this.blankSmurf });
  }
// this is for accepting input and turning them into new smurfs
 
  render() {
    return (
      <div className="App">
        <h1>SMURFS - with Redux</h1>
	<div>
	  <Table>
	    <thead>
	      <tr>
		<th>ID</th>
		<th>Name</th>
		<th>Age</th>
		<th>Height</th>
	      </tr>
	    </thead>
	    <tbody>
	      {this.props.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
      {/*my Smurf.js import hides here*/}
            </tbody>
          </Table>
	</div>
	<div>
	<Form>
	<FormGroup>
	<Label className="myLabel">Name</Label>
	<Input className="myInput" name='name' onChange={this.handleInput} value={this.state.newSmurf.name} />
	</FormGroup>
	<FormGroup>
	<Label className="myLabel">Age</Label>
	<Input className="myInput" name='age' onChange={this.handleInput} value={this.state.newSmurf.age} />
	</FormGroup>
	<FormGroup>
	<Label className="myLabel">Height</Label>
	<Input className="myInput" name='height' onChange={this.handleInput} value={this.state.newSmurf.height} />
	</FormGroup>
	<Button className="myButton" onClick={this.handleSubmit}>add</Button>
	</Form>
      </div>	
      </div>
    );
  }
}

//I made a table and form so it would look pretty. The table contains the map that generates the smurfs list. It imports some information from the Smurfs.js component, which tells it which data should go in each row and adds delete functionality.
//The form gathers new smurf data.

  const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    };
  };

export default connect(mapStateToProps, {fetchSmurfs, addSmurf })(App);

//This connects the fetch and add actions to this component. In the swapi we added the chars array to the mapStateToProps so I did the same with smurfs here as that is the corresponding array for this project.

