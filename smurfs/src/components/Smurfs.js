import React from 'react'
import UpdateSmurf from './UpdateSmurf'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

const Smurfs = props => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <div>
                 <UpdateSmurf smurf={smurf} key={smurf.id}/>
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

export default connect(mapStateToProps)(Smurfs)