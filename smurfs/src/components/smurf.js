import React from 'react';

//props 
                        // id={s.id}
                        // name={s.name}
                        // age={s.age}
                        // height={s.height}

const Smurf = props => {
    console.log("SMURF",props)
    return(
         <div>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{props.height}</li>
        </div>   
    )
}

export default Smurf