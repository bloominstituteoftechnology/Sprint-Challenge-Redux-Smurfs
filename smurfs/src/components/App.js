import React, { Component } from 'react';
import './App.css';
import {connect } from 'react-redux';
import { getSmurfs, addSmurfs} from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      age:'',
      height:'',
    }
  }
 
  componentDidMount(){
    this.props.getSmurfs();
  }

  updateName = event => {
    event.preventDefault();
    this.setState({name:event.target.value});
  }
  
  updateAge = event => {
    event.preventDefault();
    this.setState({age:event.target.value});
  }

  updateHeight = event => {
    event.preventDefault();
    this.setState({height:event.target.value});
  }

  submitSmurf = event => {
    event.preventDefault();
    this.props.addSmurfs({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    });
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Have fun!</div>
        <div>
        <ul>
          {this.props.smurfs.map(smurf =>{
            return <li key={smurf.name}>
            {smurf.name}, 
            {smurf.age}, 
            {smurf.height}
            </li>;
          })}
        </ul>

         <form onSubmit= {this.submitSmurf}>
      <input
        type='text'
        placeholder="name"
        value={this.state.name}
        onChange={this.updateName}
      />
      <input
        type='text'
        placeholder="age"
        value={this.state.age}
        onChange={this.updateAge}
      />
      <input
        type='text'
        placeholder="height"
        value={this.state.height}
        onChange={this.updateHeight}
      />
      <button type="submit" value='submit'>Add friends</button>
  
    </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    smurfs:state.smurfs,
    error: state.error,
    smurf:state.addSmurf
  }
}

export default connect (mapStateToProps,  {getSmurfs, addSmurfs}) (App);
