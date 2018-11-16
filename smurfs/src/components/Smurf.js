import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions/smurfsActions";

const Smurf = (props) => {
  // const { smurf, deleteSmurf } = props

  return (
    <div className="smurf-card">
      <button onClick={() => props.deleteSmurf(props.id)}>DELETE ME :(</button>
      <h2>{props.name}</h2>
      <h4>{props.age}</h4>
      <p>{props.height}</p>
      <img src={props.img} alt="Smurf" />
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};
export default connect(
  mapStateToProps,
  { deleteSmurf }
)(Smurf);

/*
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions/smurfsActions'

// const Smurf = props => {
//   const { smurf, deleteSmurf } = props

//   const clickHandler = () => {
//     deleteSmurf(smurf.id)
//   }

 // Nov-13
//  const Smurf = (smurf) => {
//  return (
//    <div key={smurf.id} className="smurf-card">
//      <p className="close-button" onClick={clickHandler}>X</p>
//      <h2>{smurf.name}</h2>
//      <h4>{smurf.age}</h4>
//      <p>{smurf.height}</p>
//      <img src={smurf.img} alt="Smurf" />
//      <Link to={`/update/${smurf.id}`}>Update</Link>
//    </div>
//  )
// }
 const Smurf = (props) => {
   return (
     <div className="smurf-card">
      <button onClick={() => props.deleteSmurf(props.id)}>DELETE ME :(</button>
      <h2>{props.name}</h2>
      <h4>{props.age}</h4>
      <p>{props.height}</p>
      <img src={props.img} alt="Smurf" />
     </div>
   )
 }

const mapStateToProps = () => ({})
export default connect(mapStateToProps, { deleteSmurf })(Smurf)
*/