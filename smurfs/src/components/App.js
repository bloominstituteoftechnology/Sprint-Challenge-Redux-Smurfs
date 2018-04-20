import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurf, postSmurf, putSmurf, deleteSmurf } from '../actions/index.js'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    name: '',
    age: '',
    height: '',
  }
  
  componentDidMount() {
    this.props.getSmurf();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postSmurf({
      name: this.state.name,
      age: Number(this.state.age),
      height: Number(this.state.height),
    })
    this.setState({
    name: '',
    age: '',
    height: '',
    })
  }

  handleUpdate = (event) => {
    event.preventDefault();
    let smurfId = this.props.smurfs.findIndex(smurf => smurf.name === this.state.name);
    if (smurfId > 0) smurfId = this.props.smurfs[smurfId].id;
    this.props.putSmurf(smurfId, {
      name: this.state.name,
      age: Number(this.state.age),
      height: Number(this.state.height),
    })
    this.setState({
    name: '',
    age: '',
    height: '',
    })
  }

  handleDelete = (event) => {
    this.props.deleteSmurf(event.target.parentNode.id)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your Redux version of Smurfs!</div>
          <div>Have fun!</div>
        </div>
        { (this.props.smurfs.length === 0) ? (
                <h1> Smurfs in Redux </h1>
                ) : (
        <div>{this.props.smurfs.map(((smurf) => {
          return (
            <div key={smurf.id} id={smurf.id}>
              <h1 id={smurf.name}>{smurf.name}</h1>
              <h2>{smurf.age}</h2>
              <h3>{smurf.height}</h3>
              <button onClick={this.handleDelete}>NO NOT SMURFETTE</button>
            </div>
          )
        }))}
        </div>)}
        <form>
          <input name="name" onChange={this.handleChange} placeholder="Name" value={this.state.name}/>
          <input name="age" onChange={this.handleChange} placeholder="Age" value={this.state.age}/>
          <input name="height" onChange={this.handleChange} placeholder="Height"value={this.state.height}/>
          <button onClick={this.handleSubmit} type="submit">Give a Smurf Life</button>
          <button onClick={this.handleUpdate} type="submit">Update</button>
        </form>
        {this.props.error ? (<h3 style={{color: 'blue', textDecoration: 'underline overline' }}>{this.props.error}</h3>) : (<div></div>)}
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