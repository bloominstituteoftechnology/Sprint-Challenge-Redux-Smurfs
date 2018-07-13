import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, delSmurf } from '../actions/index'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }

  addSmurf = e => {
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(smurf)
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  delete = e => {
    this.setState({ id: e.target.value })
    this.props.delSmurf(this.state.id);
    this.setState({ id: '' })
  }

  idSet = e => {
    this.setState({ id: e.target.value })
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
          {this.props.fetchingSmurfs ? (
            <h3>loading...</h3>
          ) : (
            <ul>
              {this.props.smurfs.map(smurf => {
                return <li key={smurf.name}>
                  <h4>{smurf.name}</h4>
                  <h6>age: {smurf.age}</h6>
                  <h6>height: {smurf.height}</h6>
                  {(this.state.id === '') ? (<button value={smurf.id} onClick={this.idSet}>delete</button>) : (<button onClick={this.delete}>confirm delete?</button>)}
                </li>
              })}
            </ul>)}
            <div className="add-smurf">
              <form onSubmit={this.addSmurf}>
                <input
                  onChange={this.handleInputChange}
                  placeholder="name"
                  value={this.state.name}
                  name="name"
                />
                <input
                  onChange={this.handleInputChange}
                  placeholder="age"
                  value={this.state.age}
                  name="age"
                />
                <input
                  onChange={this.handleInputChange}
                  placeholder="height"
                  value={this.state.height}
                  name="height"
                />
              <button type="submit">Add to village!</button>
              </form>
            </div>
        </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, {
  getSmurfs,
  addSmurf,
  delSmurf
})(App);
