import React from 'react';

const Smurf = props => {
    
    return (
    <div className="card" >
        <div>
            <h4 >{props.smurf.name}</h4>
            <div className="info">
                <p >age:  {props.smurf.age}</p>
                <p >height:  {props.smurf.height}</p> 
            </div>
        </div>
        {/* <button onClick={() => props.deleteFriend(props.smurf.id)}> Delete </button> */}
    </div> 
    )
}

export default Smurf;