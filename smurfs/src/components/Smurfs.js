import React from 'react';
import './Smurfs.css';

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

            {props.smurfs.map((smurf, index) => {
                return (
                    <div key={smurf.id} className='smurf-container'>
                        <div className='smurf-content smurf-spacing'>
                            <span className='smurf-span'>{smurf.name}</span>
                            <span className='smurf-span'>{smurf.age}</span>
                            <span className='smurf-span'>{smurf.height}</span>
                        </div> 
                    </div>
                );
            })}
        </div>
    );
};

export default smurfs;