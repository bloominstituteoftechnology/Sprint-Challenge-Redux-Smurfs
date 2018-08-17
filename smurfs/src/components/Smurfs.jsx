import React, { Component } from 'react';
import Smurf from './Smurf';
import axios from "axios";
class Smurfs extends Component {
  constructor(props) {
    super(props);
    
  }
  deleteSmurf=()=>{
    axios
    .delete(`http://127.0.0.1:3333/smurfs/${this.props.match.params.id}`)
    .then(response => {
      this.props.updateParentState(response.data);
      this.props.history.push("/smurfs");

    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.filter((e)=> {if ( this.props.whom === -1 ){return e} else{  return e.id===this.props.whom}}).map(smurf => {
            return(
                <div onClick={()=>{this.props.singleSmurf({whom:smurf.id, mode:'EDIT'})}}  key={smurf.id}>
                
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                />
                </div>
               
            )
            }
          
          )}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;