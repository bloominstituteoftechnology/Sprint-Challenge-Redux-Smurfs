import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf } from '../actions';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      smurfForm: {
        name: '',
        age: '',
        height: '',
      }
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  formHandler = (ev) => {
    this.setState({ smurfForm: {...this.state.smurfForm, [ev.target.name]: ev.target.value }})
  }

  addSmurf= (ev) => {
    ev.preventDefault();

    this.props.addSmurf(this.state.smurfForm);
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.addSmurf}>
          <input type="text" name="name" placeholder="name" value={this.state.smurfForm.name} onChange={this.formHandler} required/>
          <input type="text" name="age" placeholder="age" value={this.state.smurfForm.age} onChange={this.formHandler} required/>
          <input type="text" name="height" placeholder="height" value={this.state.smurfForm.height} onChange={this.formHandler} required/>
          <button type="submit">add smurf</button>
        </form>
        {
          this.props.smurfs.map(smurf => {
            return (
              <div>
                <h2>{smurf.name}</h2>
                <h2>{smurf.age}</h2>
                <h2>{smurf.height}</h2>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps , { getSmurfs, addSmurf })(App);
