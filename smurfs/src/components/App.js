import React, { Component } from 'react';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { fetchSmurfs, postSmurfs } from '../actions/index';
import './App.css';

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
    this.props.fetchSmurfs();
  }

  handleInputText = (e) => {
    this.setState({ [e.target.name]: [e.target.value] })
  }

  addASmurf = () => {
    const aSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.postSmurfs(aSmurf)
    this.setState({ name: '', age: '', height: ''})
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <input 
        type='text'
        placeholder='Name'
        name='name'
        value={this.state.name}
        onChange= {this.handleInputText}
        />
        <input 
        type='text'
        placeholder='Age'
        name='age'
        value={this.state.age}
        onChange= {this.handleInputText}
        />
        <input 
        type='text'
        placeholder='Height'
        name='height'
        value={this.state.height}
        onChange= {this.handleInputText}
        />
       <button onClick={this.addASmurf}>Add a Smurf</button>
        {this.props.smurfs.map(smurf => {
        return <ul key={smurf.id + 1}> <p>{smurf.name}</p> <p> {smurf.age} </p> <p> {smurf.height} </p> </ul>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs, postSmurfs }) (App);
