import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const Smurf = props => {
    return (
        <div>
            <Card className='SmurfCard'>
                <CardBody>
                    <CardTitle>Smurf Name: {props.smurf.name}</CardTitle>
                    <CardText>Smurf Age: {props.smurf.age}</CardText>
                    <CardText>Smurf Height: {props.smurf.height}</CardText>
                    <Button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</Button>
                </CardBody>
            </Card>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        deletingSmurf: state.deletingSmurf,
    }
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf);