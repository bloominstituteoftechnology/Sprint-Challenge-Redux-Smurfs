import React, { Component } from 'react';
import './App.css';
import {getSmurfs, addSmurf} from '../actions';
import { connect } from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      height: '',
    }
  }
 
  componentDidMount() {
    console.log('mounted');
    this.props.getSmurfs();
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
   
  }

  render() {
   const newSmurf = {
     name:this.state.name,
     age: Number(this.state.age),
     height: this.state.height,
    }

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf=> {
            return <li>{smurf.name}</li>
        })}
        <form onSubmit={(event)=>{this.props.addSmurf(event, newSmurf)}}>
        <input onChange={this.onChange} type="text" name='name' placeholder='name'/>
          <input onChange={this.onChange} type="number" name='age' placeholder='age' />
          <input onChange={this.onChange} type="text" name='height' placeholder='height' />
        <button type='submit'>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}


export default connect(mapStateToProps, { getSmurfs, addSmurf }) (App);
