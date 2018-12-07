import React from 'react';
// redux won't load with styled-components
import '../Style.css';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
// const DivSmurf = styled.div`
//   border: 1px solid black;
//   background: blue;
//   color: white;
//   margin: 10px;
//   padding: 0 10px;
//   border-radius: 10px;

//   &:hover {
//     cursor: pointer;
//     background-color: lightblue;
//     color: black;
//     transition: 0.3s all ease-in;
//   }
// `;

// const H3SmurfName = styled.h3`
//   font-family: 'Indie Flower', cursive;
// `;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Smurf = props => {
  return (
    <div className='smurf'>
      <h3 className='smurf-name'>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
