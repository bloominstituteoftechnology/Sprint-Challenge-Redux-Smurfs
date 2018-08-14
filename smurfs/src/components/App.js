import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleSubmit = () => {
    this.props.addSmurf(this.state)
  }

  handleDelete = (id) => {
    this.props.deleteSmurf(id)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    //console.log('this.props', this.props)
    return (
      <div className="App">
        <div className="form">
          <input 
            name="name" 
            type="text" 
            placeholder="Name" 
            onChange={(e) => this.handleChange(e)} /><br />
          <input 
            name="age" 
            type="text" 
            placeholder="Age" 
            onChange={(e) => this.handleChange(e)} /><br />
          <input 
            name="height" 
            type="text" 
            placeholder="Height" 
            onChange={(e) => this.handleChange(e)} /><br />
          <button onClick={() => this.handleSubmit()}> Add </button>
        </div>
      <div className="list">
        {this.props.smurfs.map(smurf => {
          return ( 
            <div key={smurf.id}>
              <div>
                Name: {smurf.name}
              </div>
              <div>
                Age: {smurf.age}
              </div>
              <div>
                Height: {smurf.height}
              </div>
              <button
                onClick={() => this.handleDelete(smurf.id)}
              >
              Remove
              </button>
              <br />
              <br />
            </div>
          ); 
        })}
      </div> 
    </div> 
    );
  }
}
const mapStateToProps = (state) => {
  //console.log('state', state);
  return state
}

export default connect(mapStateToProps, {
  getSmurfs,
  addSmurf,
  deleteSmurf
})(App);
