import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteSmurf, updateSmurf } from "../actions";
import Form from "./Form";

const SmurfCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffffcc;
  padding: 15px;
  border-radius: 5px;
  margin: 15px;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px blue, -1px -1px 15px blue;
  position: relative;
  h2,
  h5 {
    text-align: center;
    padding: 0;
    margin: 5px 0;
    color: white;
    text-shadow: 5px 5px 10px blue, -5px -5px 10px blue, -5px 5px 10px blue,
      5px -5px 10px blue;
  }

  p {
    color: blue;
    text-shadow: 5px 5px 10px white, -5px -5px 10px white, -5px 5px 10px white,
      5px -5px 10px white;
    font-weight: bold;
    cursor: pointer;
  }

  img {
    width: 100px;
    height: auto;
  }
  div {
    position: absolute;
    top: 1px;
    right: 5px;
    cursor: pointer;
  }
`;

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "",
      height: "",
      age: "",
      displayForm: false
    };
  }
  componentDidMount() {
    this.setState({
      name: this.props.smurf.name,
      height: this.props.smurf.height,
      age: this.props.smurf.age
    });
  }

  changeHandler = e => {
    e.preventDefault();
    const key = e.target.name;
    this.setState({[key]:e.target.value});
  };

  submitHandler = e => {
      e.preventDefault()
      let smurf = {...this.state, id:this.props.smurf.id}
      this.props.updateSmurf(smurf)
      this.toggleForm()
  }

  toggleForm = ()=>{
    this.setState({displayForm: !this.state.displayForm})
  
  }

  render() {
    let smurfSRC = [
      "smurf-angry.png",
      "smurf-chef.png",
      "smurf-clumsy.png",
      "smurf-king.png",
      "smurf-jokey.png",
      "smurf-handy.png",
      "smurf-clumsy-2.png"
    ];

    let imgIDX = this.props.smurf.id;
    let length = smurfSRC.length;
    if (imgIDX >= length) {
      imgIDX -= length;
    }

    let img = smurfSRC[imgIDX];

    return (
      <SmurfCard>
        <h2>{this.props.smurf.name}</h2>
        <img src={require(`../assets/${img}`)} alt="" />
        <h5>age: {this.props.smurf.age}</h5>
        <h5>height: {this.props.smurf.height}</h5>
        <p onClick={this.toggleForm}>Edit Smurf?</p>
        <span className={this.state.displayForm ? "" : "none"}>
          <Form state={this.state} card changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        </span>
        <div onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>
          <h5>X</h5>
        </div>
      </SmurfCard>
    );
  }
}

export default connect(
  null,
  { deleteSmurf, updateSmurf }
)(Smurf);
