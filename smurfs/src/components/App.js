import React, { Component } from 'react';
import './App.css';
import { getSmurf, addSmurf} from '../actions';
import {connect} from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      newName: '',
      newAge: '',
      newHeight: ''
    }
  }
    componentDidMount() {
      this.props.getSmurf();
    }
    newSmurf = () => {
      const smurfE = {
        name: this.state.newName,
        age: this.state.newAge,
        height: this.state.newHeight
      }
      this.props.addSmurf(smurfE);
      this.setState({ newName: '', newAge: '', newHeight: ''});
    }
  render() {
    return (
      <div className="App">
         <input 
          type='text'
          placeholder="name"
          name="newName"
          value={this.state.newName}
          onChange={e => this.setState({ [e.target.name]: e.target.value})}
/>
<input 
          type='number'
          placeholder="height"
          name="newHeight"
          value={this.state.newHeight}
          onChange={e => this.setState({ [e.target.name]: e.target.value})}
/>
<input 
          type='number'
          placeholder="age"
          name="newAge"
          value={this.state.newAge}
          onChange={e => this.setState({ [e.target.name]: e.target.value})}
/>
<button 
onClick={this.newSmurf}>Click Here</button>
{this.props.smurfs.map(smurf => {
  return <ul key={smurf.id}>{smurf.name} <br/> {smurf.height} <br/> {smurf.age}</ul>
})}
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

export default connect (mapStateToProps, { getSmurf, addSmurf })(App);
