import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf, addSmurf } from '../actions/index';

// import styled from 'styled-components';

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: 0 auto;
//   width: 500px;
// `;

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }
  componentDidMount() {
    this.props.getSmurfs();
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
          { this.props.loading ? <h2>LOADING SMURFS...</h2> : null}
          { this.props.error !== '' ? <h2>{this.props.error}</h2> : null }
          
          <form onSubmit={this.submitHandler}>
                  <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder=" Name" />
                  <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder=" Age" />
                  <input type="text" name="height" value={this.state.height} onChange={this.inputHandler} placeholder=" Height" />
                  <button type="submit">Submit</button>
          </form>

          { this.props.smurfs.map( smurf => {
            return (
              <div key={smurf.id}>
                <h3>{smurf.name}</h3>
                <em>{smurf.age}</em>
                <p>{smurf.height}</p>
                {/* <button className='button button-clear' onClick={this.props.deleteSmurf(smurf.id)}>Delete</button> */}
              </div>
            )
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf, addSmurf })(App);
