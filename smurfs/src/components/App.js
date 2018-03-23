import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {getSmurfs, postSmurfs, deleteSmurf} from '../actions/index'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

 
class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    name: '',
    age: 0,
    height: 0
  }
}

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    // console.log(this.state)
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
          return(
            <div className="card" key={smurf.id}>
            <div>
              <h4>{smurf.name}</h4> <button onClick={(event) => {
                event.preventDefault() 
                this.props.deleteSmurf(smurf.id)
              }} 
                type="button">Delete Me</button>
            </div>
          </div>
          )
        })}
    <form>
        <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input>
        <input onChange={this.handleChange}type="number" name="age" value={this.state.age}></input>
        <input onChange={this.handleChange}type="number" name="height" value={this.state.height}></input>
        <input
          onClick={ (event) => {
            event.preventDefault()
            this.props.postSmurfs(this.state)
          }}
          type="submit"
        />
      </form>
    </div>
    );
  }
}


const mapStateToProps = ({smurfs, gettingSmurfs, error}) => {
  return {
    gettingSmurfs,
    smurfs,
    error
  }
}
console.log(this.props);
export default connect(mapStateToProps, {getSmurfs, postSmurfs, deleteSmurf})(App);
