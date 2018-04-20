import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs,postSmurfs } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
state={
  name:'',
  age:'',
  height:''
}
componentDidMount(){
  this.props.fetchSmurfs();
}
handleInputChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};

handleAddSmurf = _ => {
  const { name, age, height } = this.state;
  this.props.postSmurfs({ name, age, height });
  this.setState({ name: '', age: '', height: '' });
};
  render() {
    console.log(this.props)
    return (




      <div className="App">
      {this.props.smurfs.map(smurfs =>
       <div key={smurfs.id} className="containgDiv-styles">
      
        <div className="name-styles">{smurfs.name}</div>
        <div className="age-styles">
        {smurfs.age}
        </div>
        <div>
        {smurfs.height}
       
        </div>
      </div>
      )}
         <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.height}
          name="height"
          type="text"
          placeholder="Height"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddSmurf()} type="button">
         add homies
        </button>
      </div>

    );
  }
}

const mapStateToProps = state =>{
  console.log(state)
  return{
  
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurfs: state.deletingSmurfs,
    error: state.error,
    smurfs: state.smurfs,
  }
}
export default connect(mapStateToProps,{fetchSmurfs, postSmurfs})(App);
