import React, { Component } from "react";
import styled from "styled-components";

const SmurfCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffffCC;
  padding: 15px;
  border-radius: 5px;
  margin: 15px;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px blue, -1px -1px 15px blue;
  h2, h5 {
    text-align: center;
    padding: 0;
    margin: 5px 0;
    color: white;
    text-shadow: 5px 5px 10px blue, -5px -5px 10px blue;
  }
  img {
    width: 100px;
    height: auto;
  }
`;

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.smurfIMG = ''
    
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

      let imgIDX = this.props.smurf.id
      let length =smurfSRC.length
      if (imgIDX >= length){
          imgIDX -= length
      }

      let img = smurfSRC[imgIDX]
      
    return (
      <SmurfCard>
        <h2>{this.props.smurf.name}</h2>
        <img src={require(`../assets/${img}`)} alt="" /> 
        <h5>age: {this.props.smurf.age}</h5>
        <h5>height: {this.props.smurf.height}</h5>
      </SmurfCard>
    );
  }
}

export default Smurf;
