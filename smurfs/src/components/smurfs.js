import React, { Fragment } from 'react';
import { connect } from 'react-redux';
//import styled from 'styled-components';

import Smurf from './smurf';
import SmurfForm from './smurfform';

import './smurfs.css';

const Smurfs = (props) => {
    console.log(props)
    return (
        <Fragment>
            <div className="Smurfs">
    {props.smurfs.length === 0 ? (<h3>Please add a smurf!!</h3>) : ("") }
                <Fragment>
                    { props.smurfs.map((smurf) => {
                        return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
                    })}
                </Fragment>
            </div>
            <SmurfForm />
        </Fragment>
    );
};


const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(Smurfs);