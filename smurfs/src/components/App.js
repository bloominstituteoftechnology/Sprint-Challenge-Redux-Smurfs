import React, { Component } from 'react';
import {addSmurf,getSmurfs} from '../actions/index'
import {connect} from 'react-redux';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(){
    super();
    this.state = {
      newSmurf : {
        name:'',
        age: '',
        height:''
    }

    }
  }
  componentDidMount(){
    this.props.getSmurfs();
  }

  handleChange = (e) => {
    this.setState({newSmurf:{...this.state.newSmurf,[e.target.name]:e.target.value}})
  }
  handleAdd = () => {
    this.props.addSmurf(this.state.newSmurf)
    this.setState({newSmurf:{name:'',age:'',height:''}})
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <input name = 'name' value = {this.state.newSmurf.name} onChange = {this.handleChange }type = "text" />
        <input name = 'age'  value = {this.state.newSmurf.age} onChange = {this.handleChange} type = "text" />
        <input name = "height" value = {this.state.newSmurf.height}onChange = {this.handleChange} type = "text"/>
        <button onClick = {() => {this.handleAdd()}}>Add Smurf</button>
        {this.props.smurfs.map((item)=>{
          return <div> {item.name} </div>
        })}


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs:state.smurfs
  }
}

export default connect(mapStateToProps,{getSmurfs,addSmurf})(App);
