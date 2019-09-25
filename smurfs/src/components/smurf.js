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
            <li>{props.name} is {props.age} years old and {props.height} cm tall.</li>
        </div>
    )
}

export default Smurf