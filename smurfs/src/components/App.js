import React, { Component } from 'react';
import './App.css';
import {getSmurfs} from '../actions';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        {
          this.props.fetchingSmurfs?
          <h1>Loading...</h1>:
          this.props.smurfs.map((e,i)=>
            <ul key={i}><li>{e.name}</li>
            <li>{e.age}</li>
            <li>{e.height}</li></ul>
          )
        }
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return {
    smurfs:state.smurfs,
    fetchingSmurfs:state.fetchingSmurfs
  }
}
export default connect(mapStateToProps,{getSmurfs})(App);
