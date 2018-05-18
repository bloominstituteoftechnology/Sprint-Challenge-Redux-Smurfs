import React from 'react';
import { Container, Row, Col,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import {create} from '../actions'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DisplayList from './DisplayList'

class FormIn extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
        };
    }

    handleTaskChange = event => {
      event.preventDefault();
      this.setState({[event.target.name] : event.target.value});
  } 

    handleRequest = () =>{ 
        let pl = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        };
        this.props.create(pl);

        this.setState(() => ({
                name: '',
                age: '',
                height: ''
        }))

        {<DisplayList/>}
    }

  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col xs="3">
                    <Form >
                    <FormGroup>
                        <Input name="name" id="nameID" placeholder="name" onChange={this.handleTaskChange} value= {this.state.name} />
                        <Input name="age" placeholder="age" onChange={this.handleTaskChange} value= {this.state.age} />
                        <Input type="height" name="height" id="height"  onChange={this.handleTaskChange} placeholder="height" value= {this.state.height} />
                    </FormGroup>
                    <Button onClick= {this.handleRequest} >Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}



  
export default connect(null, { create })(FormIn);