import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getSmurf, postSmurf, putSmurf, deleteSmurf } from '../actions'

class App extends Component {

  state = {
    name: '',
    age: '',
    height: '',
  }

  componentDidMount() {
    this.props.getSmurf();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postSmurf({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    })
    this.setState({
      name: '',
      age: '',
      height: '',
    })
    
  }

  handleUpdate = (e) => {
    e.preventDefault();
    let smurfId = this.props.smurfs.findIndex(smurf => smurf.name === this.state.name);
    if (smurfId > -1) smurfId = this.props.smurfs[smurfId].id;
    this.props.putSmurf(smurfId, {
        name: this.state.name,
        age: Number(this.state.age),
        height: this.state.height,
      })
    this.setState({
      name: '',
      age: '',
      height: '',
    })
  }

  handleDelete = (e) => {
    this.props.deleteSmurf(e.target.parentNode.id)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
          <input name="name" onChange={this.handleChange} placeholder="name" value={this.state.name}/>
          <input name="age" onChange={this.handleChange} placeholder="age" value={this.state.age}/>
          <input name="height" onChange={this.handleChange} placeholder="height"value={this.state.height}/>
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
