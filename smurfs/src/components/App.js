import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getSmurf } from '../actions'
import { createSmurf } from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurf()
  }

  state = {
    name: '',
    age: '',
    height: ''
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = e => {
    const { name, age, height } = this.state;
    this.props.createSmurf({ name, age, height })
    this.setState({ name: '', age: '', height: '' });
  }

  render() {
    return (
      <div className="App">

        <form onSubmit={this.addSmurf}>
          <input
            type='text'
            name='name'
            placeholder='enter name'
            value={this.state.name}
            onChange={this.change}
            autoComplete='off'
          />
          <br />
          <input
            type='text'
            name='age'
            placeholder='enter age'
            value={this.state.age}
            onChange={this.change}
            autoComplete='off'
          />
          <br />
          <input
            type='text'
            name='height'
            placeholder='enter height'
            value={this.state.height}
            onChange={this.change}
            autoComplete='off'
          />
          <br />
          <button
            type='button'
            onClick={this.addSmurf}
          > Add smurf
    </button>
        </form>

        <ul>
          {console.log(this.props.smurfs)}
          {this.props.smurfs.map((smurf, index) => {
            return <li key={index}>{smurf.name} <br /> {smurf.age} <br /> {smurf.height} <br /> <hr /></li>;
          })}
        </ul>


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs,
    gotSmurfs: state.gotSmurfs,
    creatingSmurf: state.creatingSmurf,
    createdSmurf: state.createdSmurf,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {
    getSmurf,
    createSmurf
  }
)(App);
