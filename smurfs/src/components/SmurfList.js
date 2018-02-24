import React from 'react';
import './smurfList.css';

const SmurfList = (props) => {
  return (
    <ul className="container">
      {props.smurfs.map((smurf, i) => {
        return <li key={smurf.id} className="container__item">
          <div className="container__item-header" >Name</div>
          <div>{smurf.name}</div>
          <div className="container__item-header" >Age</div>
          <div>{smurf.age} smurf-years old</div>
          <div className="container__item-header" >Height</div>
          <div>{smurf.height} cm tall</div>
        </li>
      })}
    </ul>
  );
};

export default SmurfList;