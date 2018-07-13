import React, { Component } from 'react';
import SmurfCard from './SmurfCard';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/smurfenter.png';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

class Smurfs extends Component {
  componentDidMount() {
    this.props.fetchData('http://localhost:3333/smurfs');
  }

  render() {
    return (
      <StyledDiv>
        <img src={logo} alt="Title" style={{ 'width': '50%' }} />
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
                <Link key={smurf.name} to={`/smurfs/${smurf.id}`} style={{'textDecoration': 'none', 'color': 'white'}}>
                  <SmurfCard
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                  />
                </Link>
            );
          })}
        </ul>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.fetchingSmurfs
  }
}  

export default connect(mapStateToProps, {fetchData})(Smurfs);
