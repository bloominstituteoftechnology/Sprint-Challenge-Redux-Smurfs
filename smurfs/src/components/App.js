import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {fetchingSmurfsAction} from "../actions";


class App extends Component {
constructor(props){
        super(props);
        this.state= {
    		name: "",
		age: "",
		height: ""
        };

}


  componentDidMount() {
    this.props.fetchingSmurfsAction(); 
  }	
	
changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});

};


	
render() {
    return (
      <div className="App">
	  <div>{this.props.fetching ? (
          <h1>Fetching Smurfs...</h1>
        ) :( 
      <div>  <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.id}>{smurf.name}, {smurf.age}, {smurf.height}</li>;
            })}
          </ul>

 
		<input onChange={this.changeHandler} type="text" name="name" placeholder="Name" value={this.state.name} />
                <input onChange={this.changeHandler} type="number" name="age" placeholder="Age" value={this.state.age} />
                <input onChange={this.changeHandler} type="text" name="height" placeholder="Height" value={this.state.height} />

                <button onClick={()=> this.addSmurfHandler()}>Add New Smurf</button>

</div>
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


