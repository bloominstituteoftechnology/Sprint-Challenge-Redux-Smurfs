import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.css';
import {getSmurfs} from '../actions/smurfActions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: '',
      age: '',
      height: ''
    }

  }

  componentDidMount(){
    this.props.getSmurfs()
  }

  changeHandler = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clickHandler = (e) =>{
    e.preventDefault();

  }

  render() {
    console.log('this.props', this.props);
    console.log(this.props.error);
    return (
      <div className="App">
        {this.props.loading ? <h1>Loading...</h1> : null}

        {this.props.error !== null ? <h1>{this.props.error}</h1> : null}

        <form onSubmit={this.clickHandler}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
          <label htmlFor="age">Age: </label>
          <input type="text" name="age" value={this.state.age} onChange={this.changeHandler}/>
          <label htmlFor="height">Height: </label>
          <input type="text" name="height" value={this.state.height} onChange={this.changeHandler}/>
          <button type="submit">Add Smurf!</button>
        </form>

        {this.props.smurfs.length !== 0 
        ? this.props.smurfs.map(smurf =>{
          return <div className="smurfCard" key={smurf.id}>
            <h1>{smurf.name}</h1>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div> 
        })
        : null}

      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,

  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
