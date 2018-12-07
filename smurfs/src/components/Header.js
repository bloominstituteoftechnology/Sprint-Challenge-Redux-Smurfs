import React from 'react';
// redux won't load with styled-components
import '../Style.css';
import { Link } from 'react-router-dom';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
// const DivWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   background-color: blue;
//   border-bottom: 5px solid black;
//   margin-bottom: 20px;
//   font-family: 'Indie Flower', cursive;
// `;

// const LinkVillage = styled(Link)`
//   padding: 20px 50px;
//   color: white;
//   text-decoration: none;
//   font-size: 48px;
//   border-left: 2px solid black;

//   &:hover {
//     color: blue;
//     background-color: white;
//     transition: 0.3s all ease-in;
//   }
// `;

// const LinkSmurfForm = styled(Link)`
//   padding: 20px 50px;
//   color: white;
//   text-decoration: none;
//   font-size: 48px;
//   border-left: 2px solid black;
//   &:hover {
//     color: blue;
//     background-color: white;
//     transition: 0.3s all ease-in;
//   }
// `;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Header = props => {
  return (
    <div className='header'>
      <Link className='header-link' to={props.urlLinks.home}>
        Smurf Village
      </Link>
      <Link
        className='header-link'
        to={`${props.urlLinks.home}${props.urlLinks.smurfForm}`}
      >
        Smurf Form
      </Link>
    </div>
  );
};

export default Header;
