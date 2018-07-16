import React from 'react';

const Smurf = (props) => {
    const { name, age , height } = props.smurf
    return (
        <div>
         <ul>
             <li>{`Name : ${ name }`}</li>
             <li>{`AGE : ${ age }`}</li>
             <li>{`HEIGHT : ${ height }`}</li>
         </ul>
        </div>
    );
};

export default Smurf;