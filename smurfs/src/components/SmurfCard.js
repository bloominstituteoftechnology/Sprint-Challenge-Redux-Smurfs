import React from 'react';

import { StyledSmurfCard, SmurfCardInfo } from '../Style';

const SmurfCard = props => {

  return (
      <StyledSmurfCard onClick={props.onClick}>
        <div className="bgImg"></div>
        <SmurfCardInfo>
          <div>
              <span>{props.name}</span>
          </div>
          <div>
              <span>{props.age} smurf years old</span>
          </div>
          <div>
              <span>{props.height} tall</span>
          </div>
        </SmurfCardInfo>
      </StyledSmurfCard>
  );
};

export default SmurfCard;

