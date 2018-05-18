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
                <div className="smurf" key={smurf.name + smurf.id}>
                    {smurf.name}
                </div>)}
        </div>
    )
}
  


export default SmurfsList; 