import React from 'react';
import HeaderView from './HeaderView';
import SmurfForm from '../components/SmurfForm';

const FormView = (props) => {
    return (
        <React.Fragment>
            <HeaderView />
            <SmurfForm id={props.match.params.id} />
        </React.Fragment>
    )
}

export default FormView;