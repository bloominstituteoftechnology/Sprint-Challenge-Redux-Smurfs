import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Smurf from './smurf';
const Smurfs = (props) => {
    return (
        <div className="Smurfs">
            <h1>Smurf Village</h1>
            <ul>
                { props.smurfs.map((smurf) => {
                    return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
                })}
            </ul>

        </div>
    );
};


const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(Smurfs);