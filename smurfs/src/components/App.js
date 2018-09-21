import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from "../actions";
import Smurfs from "./Smurfs";
import AddNewSmurf from "./AddNewSmurf";
import UpdateSmurf from "./UpdateSmurf";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state={
    addNewSmurf: false,
    name:"",
    age: null,
    height: null,
    updateID: null
  };
  componentDidMount(){
    this.props.getSmurfs();
  }
  handleInputChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onClickAdd= event=>{
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({
      addNewSmurf: false,
      name: "",
      age: null,
      height: null
    });
  };
  newSmurf=()=>{
    if(this.state.addNewSmurf)
    return(
      <div>
        <h4>Add Smurf</h4>
        <AddNewSmurf
        onChange={this.handleInputChange.bind(this)}
        onClick={this.onClickAdd}
        />
      </div>
    );
    else
    return(
      <button
      onClick={()=>
      this.setState({
        addNewSmurf: true
      })}
      >
        +
      </button>
    );
  };
  toggleUpdate=id=>{
    const smurf = this.props.smurfs.filter(x=> x.id === id)[0];
    if(smurf) {
      this.setState({
        updateID: id,
        name: smurf.name,
        age: smurf.age,
        height: smurf.height 
      });
    }
  };
  onClickUpdate=event=>{
    const id=this.state.updateID;
    this.props.updateSmurf({
      name: this.state.name,
      id: id,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({
      addNewSmurf: false,
      name: "",
      age: null,
      height: null,
      updateID: null
    });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1 className="App-title">SMURFIES</h1>      
        </div>
        <div className="Smurfs-list">
          {this.props.smurfs.length === 0 ? (
            <div>No smurfies to display</div>
          ) : this.props.fetchingSmurfs ? (
            <h1>Loading...Loading...</h1>
          ) : (
                <Smurfs {...this.props} update={this.toggleUpdate} />
              )}
        </div>
        <div className="addNewsmurf">
          {this.state.updateID === null ? (
            this.newSmurf()
          ) : (
              <UpdateSmurf
                {...this.state}
                onChange={this.handleInputChange.bind(this)}
                onClick={this.onClickUpdate}
              /> 
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps=state=> {
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
};


export default  connect(
  mapStateToProps,
  {getSmurfs, addSmurf, deleteSmurf, updateSmurf}
)(App);
