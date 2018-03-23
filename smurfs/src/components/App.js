import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getSmurf, postSmurf, putSmurf, deleteSmurf } from '../actions'

class App extends Component {

  state = {
    name: '',
    age: 0,
    height: '',
  }

  componentDidMount() {
    this.props.getSmurf();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    })
    this.setState({
      name: '',
      age: 0,
      height: '',
    })
    e.target.parentNode.reset();
  }

  handleUpdate = (e) => {
    e.preventDefault();
    console.log(this.state)
    let smurfId = this.props.smurfs.findIndex(smurf => smurf.name === this.state.name);
    if (smurfId > -1) smurfId = this.props.smurfs[smurfId].id;
    console.log(smurfId);
    this.props.putSmurf(smurfId, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      })
    e.target.parentNode.reset();
    this.setState({
      name: '',
      age: 0,
      height: '',
    })
  }

  handleDelete = (e) => {
    this.props.deleteSmurf(e.target.parentNode.id)
  }

  handleChange = (e) => {
    console.log(e.target.placeholder)
    console.log(e.target.value)

    this.setState({ [e.target.placeholder]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your Redux version of Smurfs!</div>
        </div>
        { (this.props.smurfs.length === 0) ? (
                <h1> All the smurfs are gone! </h1>
                ) : (
        <div>{this.props.smurfs.map(((smurf) => {
          return (
            <div key={smurf.id} id={smurf.id}>
              <h1 id={smurf.name}>{smurf.name}</h1>
              <h3>{smurf.age}</h3>
              <h3>{smurf.height}</h3>
              <button onClick={this.handleDelete}>Squish</button>
            </div>
          )
        }))}
        </div>)}
        <form>
          <input onChange={this.handleChange} placeholder="name"/>
          <input onChange={this.handleChange} placeholder="age"/>
          <input onChange={this.handleChange} placeholder="height"/>
          <button onClick={this.handleSubmit} type="submit">Smurf!</button>
          <button onClick={this.handleUpdate} type="submit">Update</button>
        </form>
        {this.props.error ? (<h3 style={{color: 'red'}}>{this.props.error}</h3>) : (<div></div>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect( mapStateToProps,{ getSmurf, postSmurf, putSmurf, deleteSmurf })(App);
