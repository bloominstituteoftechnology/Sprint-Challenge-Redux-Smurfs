import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {fetchSmurf} from '../actions'
import {createSmurf} from '../actions'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {


  componentDidMount() {
    this.props.fetchSmurf();
  }

  state = {
    name: '',
    age: '',
    height: ''
  };



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddSmurf = e => {
    e.preventDefault()
    const { name, age, height } = this.state;
    this.props.createSmurf({ name, age, height })
    this.setState({ name: '', age: '', height: '' });
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <ul>
          {console.log(this.props)}
          {this.props.smurfs.map((smurf, index) => {
            return <li key={index}>{smurf.name} <br /> {smurf.age} <br /> {smurf.height} <br /> <hr /></li>;
          })}
        </ul>

        <form onSubmit={this.handleAddSmurf}>
          <input
            type='text'
            name='name'
            placeholder='enter name'
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type='text'
            name='age'
            placeholder='enter age'
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type='text'
            name='height'
            placeholder='enter height'
            value={this.state.height}
            onChange={this.handleInputChange}
          />
          <br />
          <button
            type='submit'
          > Add smurf
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    createSmurf: state.createSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSmurf,
    createSmurf
  }
)(App);
