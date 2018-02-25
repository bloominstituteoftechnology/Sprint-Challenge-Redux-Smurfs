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
                      x
                    </div>
                    <div className="smurf__name">{smurf.name}</div>
                    <div className="smurf__age">age: {smurf.age}</div>
                    <div className="smurf__height">height: {smurf.height}</div>
                      <div className="edit-button" onClick={() => {}} >
                      edit
                    </div>
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