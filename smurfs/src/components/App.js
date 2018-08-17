import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { smurfsFetch,singleSmurf,smurfDelete } from "../actions/index";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
    }
  }
  
  componentDidMount() {
    this.props.smurfsFetch();
  }
  deleteButton = () => {
    
    if (this.props.mode === "EDIT") {
    
      return (
        <button onClick={()=>{this.props.smurfDelete(this.props.whom)
        this.home()}} className="friendSubmitFormInput">
          Delete
        </button>
      );
    }
  };
 home=()=>{
  this.props.singleSmurf({whom:-1,mode:'Input'})
 }
  render() {
    return (
      <div className="App">
            <div onClick={()=>{this.home()}}>Home</div>

        <SmurfForm />
        {this.props.smurfsFetched ? (
         <Smurfs whom={this.props.whom} singleSmurf={this.props.singleSmurf} smurfs={this.props.smurfs} />
        ) : (
          <div> LOADERING  </div>
        )}
              {this.deleteButton()}

      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    smurfsFetched: state.smurfsFetched,
    whom: state.whom,
    mode: state.mode
  };
};
export default connect(
  mapStateToProps,
  { smurfsFetch, singleSmurf,smurfDelete }
)(App);
