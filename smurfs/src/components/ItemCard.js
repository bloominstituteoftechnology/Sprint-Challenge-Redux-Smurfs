import React, { Component } from "react";
import { connect } from "react-redux";
import {Col, Button} from 'reactstrap';
import {fetchingSmurfs, deletingSmurf} from '../actions';

class ItemCard extends Component {
    handleDelete = (e) => {
        this.props.deletingSmurf(this.props.id);
    }
  render() {
      const {item} = this.props;
    return (
      <Col xs="6" sm="4" >
        <div>{item.name}</div>
        <div>{item.age}</div>
        <div>{item.height}</div>
        <Button onClick={this.handleDelete} >Delete</Button>
      </Col>
    );
  }
}

export default connect(() => {}, {fetchingSmurfs, deletingSmurf})(ItemCard);