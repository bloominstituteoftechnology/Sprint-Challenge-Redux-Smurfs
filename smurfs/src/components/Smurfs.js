import React from 'react';
import './styling/Smurfs.css';
import Smurf from '../components/Smurf';

const smurfs = props => {
    return (
        <div>
            <div className='smurf-container table-header'>
                <div className='smurf-content'>
                    <span className='smurf-span smurf-name'>NAME</span>
                    <span className='smurf-span smurf-name'>AGE</span>
                    <span className='smurf-span smurf-name'>HEIGHT</span>
                </div> 
            </div>
            <div>
                {props.smurfs.map(smurf => {
                    return <Smurf key={smurf.id} smurfChar={smurf} deletingSmurf={props.deletingSmurfChar} updateSmurf={props.updateSmurfHandler} />;
                })}
                {console.log(props.smurfsArr)}
            </div>
            
        </div>
    );
};

export default smurfs;