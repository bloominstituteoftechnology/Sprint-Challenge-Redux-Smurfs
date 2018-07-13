import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {fetchingSmurfsAction} from "../actions";


class App extends Component {
constructor(props){
        super(props);
        this.state= {
     
        };

}


  componentDidMount() {
    this.props.fetchingSmurfsAction(); 
  }	
	
	
	
render() {
    return (
      <div className="App">
	  <div>{this.props.fetching ? (
          <h1>Fetching Smurfs...</h1>
        ) :( 
        <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.id}>{smurf.name}, {smurf.age}, {smurf.height}</li>;
            })}
          </ul>
	)}</div>
      </div>
	    
    );
}	    
  
}


const mapStateToProps = state => {
  return {
          smurfs: state.smurfs,
          fetching: state.fetchingSmurfs

  };
};


export default connect(mapStateToProps, {fetchingSmurfsAction})(App);


