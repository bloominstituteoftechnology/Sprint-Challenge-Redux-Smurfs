import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteSmurf, fetchSmurfs } from '../actions'


const SmurfList = props => {
    return (
        <div> 
            {props.smurfs.map(smurf => {console.log('Smurf ID', smurf.id)
                return (
                    
                    <Card key={smurf.name + smurf.age}>
                        <CardBody>
                            <CardTitle> {smurf.name} </CardTitle>
                            <CardText> {smurf.age} </CardText>
                            <CardText> {smurf.height} </CardText>
                        <NavLink to={`/smurfs/${smurf.id}`}> <button type="submit" value={smurf.id}> Update {smurf.name}'s information </button></NavLink>
                            <button type="submit" value={smurf.id} onClick={()=>props.deleteSmurf(smurf.id)}> Cast {smurf.name} out of Smurf Village</button>
                        </CardBody>
                    </Card>
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

export default connect(mapStateToProps, { deleteSmurf, fetchSmurfs })(SmurfList)