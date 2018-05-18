import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { connect } from 'react-redux'

const SmurfList = props => {
    return (
        <div> 
            {props.smurfs.map(smurf => {console.log(smurf.name)
                return (
                    
                    <Card key={smurf.name + smurf.age}>
                        <CardBody>
                            <CardTitle> {smurf.name} </CardTitle>
                            <CardText> {smurf.age} </CardText>
                            <CardText> {smurf.height} </CardText>
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

export default connect(mapStateToProps)(SmurfList)