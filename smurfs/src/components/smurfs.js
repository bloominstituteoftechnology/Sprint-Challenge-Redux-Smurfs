import React from 'react';
import { connect } from 'react-redux';
//import styled from 'styled-components';

import Smurf from './smurf';
import SmurfForm from './smurfform';
const Smurfs = (props) => {
    console.log(props)
    return (
        <div className="Smurfs">
            <h1>Smurf Village</h1>
            <ul>
                { props.smurfs.map((smurf) => {
                    return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
                })}
            </ul>
            <SmurfForm />
        </div>
    );
};


const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(Smurfs);