import React from 'react';
import { connect } from 'react-redux';

import './SmurfsList.css';
import { deleteSmurf } from '../actions';
import Smurf from './Smurf';


const SmurfsList = props => {

    // const handleDeleteSmurf = (id) => {
    //     props.deleteSmurf(id);
    // }

    // return (
    //     <div className="list-container">
    //         {props.smurfs.map(smurf => 
    //             <p className="smurf" key={smurf.name + smurf.id}>
    //                 {smurf.name} {smurf.age} {`${smurf.height}cm`}
    //                 <div className="smurf-btn-container">
    //                     <button className="smurf-btn">Edit</button>
    //                     <button onClick={()=>(handleDeleteSmurf(smurf.id))} className="smurf-btn">Delete</button>
    //                 </div>
    //             </p>)}
    //     </div>
    // )


    return (
        <div className="list-container">
            {props.smurfs.map(smurf => 
                <p className="smurf" key={smurf.name + smurf.id}>
                    <Smurf smurf={smurf}
                    
                    />
                    {/* <div className="smurf-btn-container">
                        <button className="smurf-btn">Edit</button>
                        <button onClick={()=>(handleDeleteSmurf(smurf.id))} className="smurf-btn">Delete</button>
                    </div> */}
                   
                </p>)}
        </div>
    )
}
 
// const mapStateToProps = state => {
//     return {
//         smurfs: state.smurfs
//     }
// }


export default connect(null, { deleteSmurf })(SmurfsList); 



// return (
//     <div className="list-container">
//         {props.smurfs.map(smurf => 
//             <p className="smurf" key={smurf.name + smurf.id}>
//                 {smurf.name} {smurf.age} {`${smurf.height}cm`}
//                 <div className="smurf-btn-container">
//                     <button className="smurf-btn">Edit</button>
//                     <button onClick={()=>(handleDeleteSmurf(smurf.id))} className="smurf-btn">Delete</button>
//                 </div>
//             </p>)}
//     </div>
// )