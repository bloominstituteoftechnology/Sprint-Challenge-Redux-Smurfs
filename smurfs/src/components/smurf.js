import React, { Component } from "react";


const Smurf=(props)=> {
        return (
            <div>
                <div> ID: {props.smurf.id}</div>
                <div> Name: {props.smurf.name}</div>
                <div> Age: {props.smurf.age}</div>
                <div> Height: {props.smurf.height}</div>
            </div>
        );
  }
  
 

export default Smurf;