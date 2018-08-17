import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li `
  margin: 20px auto;
`;

const P = styled.p `
  margin: 0 auto;
  padding: 0;
  font-weight: bold;
`;

const SmurfsDiv = styled.div `
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
`;

const StyledUl = styled.ul `
  width: 300px;
  margin: 40px auto;
`;

export default function SmurfsList(props) {
  return (
    <SmurfsDiv>
      <h1>SMURFS!</h1>
      <StyledUl>{props.smurfs.map((smurf, index) =>
        <StyledLi key={index}><P>{smurf.name.toUpperCase()}</P><br/>
        {smurf.age} <br/>
        {smurf.height}</StyledLi>)}
      </StyledUl>
    </SmurfsDiv>
  )
}
