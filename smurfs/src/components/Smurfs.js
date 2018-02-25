import React, { Component } from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';

class Smurfs extends Component {
    handleDeleteSmurf = id => {
        this.props.deleteSmurf(id);
    }
    render() {
        console.log('What is this: ', this);
        return (
            <div className="smurfs">
        {this.props.smurfs ? this.props.smurfs.map((smurf) => {
          return (
            <div className="smurf" key={smurf.id}>
              <div className="delete-button" onClick={() => {this.handleDeleteSmurf(smurf.id)}}>
                X
              </div>
              <div className="smurf__name">{smurf.name}</div>
                <div>age: {smurf.age}</div>
                <div>height: {smurf.height}</div>
            </div>
            )}
          ) :
        <div></div> }
      </div>
    )
}
 }
 
 const mapStateToProps = state => {
   return {
       deletingSmurf: state.deletingSmurf,
       error: state.error,
   } 
 }
     
 
 export default connect(mapStateToProps, { deleteSmurf })(Smurfs);