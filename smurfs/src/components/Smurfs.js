import React from 'react';
import { connect } from 'react-redux';


const Smurfs = (props) => {
  console.log("props on Smurfs", props)
  return(
    <div>
      {props.smurfs.map(smurf => {
        return(
          <div key={smurf.id}>
            <ul>
              <li>{smurf.name}</li>
              <li>{smurf.age}</li>
              <li>{smurf.height}</li>
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