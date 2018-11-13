import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Smurf = props => {
    const {smurf} = props


return (
    <div key={smurf.id}>
    <h2>{smurf.name}</h2>
    <h2>{smurf.age}</h2>
    <h2>{smurf.height}</h2>
    </div>
    )
}
const mapStatetoProps = () => ({})
export default connect(mapStatetoProps)(Smurf)