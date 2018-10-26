import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import styled from "styled-components";
import Smurf from "./Smurf";
const StyledSmurfsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width:85%;
  margin: 0 auto;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  h4 {
    text-align: center;
    color: white;
    text-shadow: 15px 15px 20px blue, -15px -15px 20px blue;
  }
`;

class SmurfDisplay extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    if (this.props.fetchingSmurfs) {
      return (
        <StyledSmurfsContainer>
          <h4>wait for smurfs</h4>
        </StyledSmurfsContainer>
      );
    }
 
    return (
      <StyledSmurfsContainer>
        {this.props.smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </StyledSmurfsContainer>
    );
  }
}

const mapStatetoProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};
export default connect(
  mapStatetoProps,
  { fetchSmurfs }
)(SmurfDisplay);
