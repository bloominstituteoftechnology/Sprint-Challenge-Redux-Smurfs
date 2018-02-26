import React, { Component } from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';

class Smurfs extends Component {
  deleteSmurf = id => {
      this.props.deleteSmurf(id);
  }
    render() {
        console.log('What is this: ', this);
        return (
        <div className="smurfs">
        {this.props.smurfs.map((smurf) => {
          return (
            <div className="smurf" key={smurf.id}>
              <div className="delete-button" onClick={() => {this.deleteSmurf(smurf.id)}}>
                <b>[DELETE]</b>
              </div>
              <div className="smurfName">{smurf.name}</div>
              <div>age: {smurf.age}</div>
              <div>height: {smurf.height}</div>
            </div>
            )}
          )
        }
        </div>
    )
  }
}

 const mapStateToProps = state => {
   return {
     deletingSmurf: state.deletingSmurf,
   }
 }


 export default connect(mapStateToProps, { deleteSmurf })(Smurfs);
