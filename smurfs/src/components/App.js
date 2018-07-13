import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {fetchingSmurfsAction, addSmurf, deleteSmurf} from "../actions";


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

addSmurfHandler = event => {
        this.props.addSmurf(this.state.name, this.state.age, this.state.height);
        this.setState({name: "", age: "", height: ""});
}

deleteSmurfHandler = smurfId => {
        this.props.deleteSmurf(smurfId);
}


	
render() {
    return (
      <div className="App">
	   <div>{this.props.deleting ? (
          <h1>Deleting Smurf...</h1>
        ) :(null)} 
      </div> 

	  <div>{this.props.fetching ? (
          <h1>Fetching Smurf...</h1>
        ) :( 
      <div>  <ul>
            {this.props.smurfs.map(smurf => {
              return <div key={smurf.id}><li>{smurf.name}, {smurf.age}, {smurf.height}</li>
	<button className="delete-btn" onClick={()=>this.deleteSmurfHandler(smurf.id)}>delete</button></div>;
            })}
          </ul>

 
		<input className="input-field" onChange={this.changeHandler} type="text" name="name" placeholder="Name" value={this.state.name} />
                <input  className="input-field" onChange={this.changeHandler} type="number" name="age" placeholder="Age" value={this.state.age} />
                <input className="input-field" onChange={this.changeHandler} type="number" name="height" placeholder="Height" value={this.state.height} />

                <button className="add-btn" onClick={()=> this.addSmurfHandler()}>Add New Smurf</button>

</div>
	)}</div>
      </div>
	    
    );
}	    
  
}


const mapStateToProps = state => {
  return {
          smurfs: state.smurfs,
          fetching: state.fetchingSmurfs,
	  deleting: state.deletingSmurf
  };
};


export default connect(mapStateToProps, {fetchingSmurfsAction, addSmurf, deleteSmurf})(App);


