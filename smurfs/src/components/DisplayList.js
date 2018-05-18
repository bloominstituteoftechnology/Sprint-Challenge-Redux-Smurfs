import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { CREATING, READING } from '../actions'
import { create, read} from '../actions'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormIn from './FormIn'

import { Container, Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  

class DisplayList extends Component{

componentDidMount() {
    this.props.read();
}



//   refreshFriends = (response) => {
//     this.setState(() => ({ friends: response.data }));
//   }

  render(){

    return(
        <div>
            
            <Container>
                <Row>
                    <Col xs="3">
                        {this.props.smurfs.map(char => {
                        return <Card key={char.name}>
                                    <CardImg top width="100%" src={`https://robohash.org/${char.id}?set=set4`} alt={char.name} />
                                    <CardBody>
                                        <CardTitle>{char.name}</CardTitle>
                                        <CardText>Age: {char.age}</CardText>
                                        <CardText>Height: {char.height}</CardText>
                                        <Button>Update</Button>
                                        <Button>Delete</Button>
                                    </CardBody>
                                </Card>
                        
                        
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
  }

}

const mapStateToProps = state => {
    console.log(state);
    return {
      smurfs: state.smurfs,
      reading: state.reading
    };
  };

  export default connect(mapStateToProps, {
    read 
  })(DisplayList);