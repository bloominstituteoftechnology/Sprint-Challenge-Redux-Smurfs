import React, { Component } from 'react';

import './SmurfsList.css';


// class SmurfsList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             newSmurfName: "",
//             newSmurfAge: "", 
//             newSmurfHeight: ""
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.props.smurfs.map(smurf => 
//                     <div key={smurf.name + smurf.id}>
//                         {smurf.name}
//                     </div>)}
//             </div>
//         )
//     }
// }

const SmurfsList = props => {
    return (
        <div className="list-container">
            {props.smurfs.map(smurf => 
                <p className="smurf" key={smurf.name + smurf.id}>
                    {smurf.name} {smurf.age} {smurf.height}
                    <button className="smurf-btn">Edit</button>
                    <button className="smurf-btn">Delete</button>
                </p>)}
        </div>
    )
}
  


export default SmurfsList; 