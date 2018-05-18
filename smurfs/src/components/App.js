import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, addSmurf } from '../actions';
import { connect } from 'react-redux';
import { Button, Table } from 'reactstrap';
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

 
  handleInput = event => {
    this.setState({ newSmurf: {...this.state.newSmurf, ...{[event.target.name]: event.target.value } }});
  };

  handleSubmit = () => {
    this.props.addSmurf(this.state.newSmurf);
    this.setState({ newSmurf: this.blankSmurf });
  }

 
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
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
            </tbody>
          </Table>
	</div>
	<input name='name' onChange={this.handleInput} value={this.state.newSmurf.name} />
	<input name='age' onChange={this.handleInput} value={this.state.newSmurf.age} />
	<input name='height' onChange={this.handleInput} value={this.state.newSmurf.height} />
	<Button onClick={this.handleSubmit}>add</Button>
		
      </div>
    );
  }
}

  const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    };
  };

  export default connect(mapStateToProps, {fetchSmurfs, addSmurf })(App);
