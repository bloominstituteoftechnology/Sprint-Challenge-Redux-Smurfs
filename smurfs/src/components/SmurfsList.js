import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SmurfsList.css';
import { deleteSmurf, getSmurfs } from '../actions';



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

    const handleDeleteSmurf = (id) => {
        props.deleteSmurf(id);
        // props.getSmurfs();
    }
    return (
        <div className="list-container">
            {props.smurfs.map(smurf => 
                <p className="smurf" key={smurf.name + smurf.id}>
                    {smurf.name} {smurf.age} {smurf.height}
                    <button className="smurf-btn">Edit</button>
                    <button onClick={(handleDeleteSmurf(smurf.id))} className="smurf-btn">Delete</button>
                </p>)}
        </div>
    )
}
 
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}


export default connect(mapStateToProps, { deleteSmurf, getSmurfs })(SmurfsList); 