import React from 'react';

import { connect } from  'react-redux'
import { deleteSmurf } from '../actions';

import './SmurfList.css';

const SmurfList = (props) =>{ 
    return (
            <div >
                <ul>
                {props.smurfs.map((smurf,index) => {
                   return ( 
                   <div className="divList" key={index}>    
                        <li>{smurf.name}</li>
                        <li>{smurf.age}</li>  
                        <li>{`${smurf.height} cm`}</li>
                        <button onClick={() => props.deleteSmurf(smurf.id)}>X</button>
                        {/* <button>X</button> */}
                    </div> 
                   );
                })}
                </ul>    
            </div>
    )
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetching,
    smurfs: state.smurfs,
    error: state.errorMessage,
  };
};

export default connect(mapStateToProps, { deleteSmurf } )(SmurfList);