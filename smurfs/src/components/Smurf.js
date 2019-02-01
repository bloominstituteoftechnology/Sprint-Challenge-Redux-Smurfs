import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const Smurf = (props) =>{
    return(

        <div className='smurfWrapper'>
            <div className='smurf'><div className='smurfHeader'>Id:</div><div className='smurfText'>{props.data.id}</div></div>
            <div className='smurf'><div className='smurfHeader'>Name:</div><div className='smurfText'>{props.data.name}</div></div>
            <div className='smurf'><div className='smurfHeader'>Age:</div><div className='smurfText'>{props.data.age}</div></div>
            <div className='smurf'><div className='smurfHeader'>Height:</div><div className='smurfText'>{props.data.height}</div></div>
            <br/>
            <br/>
            <button onClick={(event)=>{props.handleDeleteSmurf(event,props.data.id)}}>Delete</button>
            <Link to={`/smurfs/edit/${props.data.id}`}>Edit</Link>
        </div>
    )
}
export default Smurf