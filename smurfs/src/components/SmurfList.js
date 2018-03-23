import React from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { deleteSmurf } from '../actions';
import './SmurfList.css';


const SmurfList = state => {
    return (
            <div>
                <ul>
                    {props.state.smurfs.map((smurf, i) => {
                        return (
                            <Fragment key={i}>
                                <li>
                                    <h3>{smurf.name}</h3>
                                    <h3>{smurf.age}</h3>
                                    <h3>{smurf.height}</h3>
                                    <button onClick={()=>{state.deleteSmurf(smurf.id)}}> DELETE </button>
                                </li>    
                                {console.log(state.smurfs)}
                            </Fragment>
                        )
                    })}
                </ul>    
            </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    };
} ;

export default connect(mapStateToProps, { deleteSmurf })(SmurfList);