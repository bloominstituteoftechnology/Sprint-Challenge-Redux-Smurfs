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

            {props.smurfs.map((smurf) => {
                return (
                    <div key={smurf.id} className='smurf-container'>
                        <div className='smurf-content smurf-spacing'>
                            <span className='smurf-span'>{smurf.name}</span>
                            <span className='smurf-span'>{smurf.age}</span>
                            <span className='smurf-span'>{smurf.height}</span>
                            <div className='smurf-control-btns-container'>
                                <span onClick={() => props.deletingSmurf(smurf.id)} className='smurf-delete-btn'>[X]</span>
                                <span className='smurf-edit-btn'>[E]</span>
                            </div>
                        </div> 
                    </div>
                );
            })}
        </div>
    );
};

export default smurfs;