import React from 'react';
import HeaderView from './HeaderView';
import SmurfForm from '../components/SmurfForm';

const HomeView = (props) => {
    return (
        <React.Fragment>
            <HeaderView />
            <SmurfForm />
        </React.Fragment>
    )
}

export default HomeView;