import React from 'react';
import Smurf from './smurf';
import SmurfForm from './smurfForm';

const SmurfList = props => {
    console.log(props);
    return (
        <div className='FormSmurfWrapper'>
            <SmurfForm />
            <div className='smurfWraper'>
                {props.smurfs.map(smurf => {
                    return <Smurf key={smurf.id} smurf={smurf} />
                })}
            </div>
        </div>
    );
};

export default SmurfList;