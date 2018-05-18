import React from 'react';
import { connect } from 'react-redux';


const Smurfs = (props) => {
  console.log("props on Smurfs", props)
  return(
    <div className="row">
      {props.smurfs.map(smurf => {
        return(
          <div key={smurf.id} className="col-4">
            <ul>
              <li>Name: {smurf.name}</li>
              <li>Age: {smurf.age}</li>
              <li>Height: {smurf.height}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}
 
export default connect(mapStateToProps, {})(Smurfs);