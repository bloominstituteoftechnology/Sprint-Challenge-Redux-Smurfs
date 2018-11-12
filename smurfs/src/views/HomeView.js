import React from 'react';
import HeaderView from './HeaderView';
import SmurfList from '../components/SmurfList';

const HomeView = (props) => {
    return (
        <React.Fragment>
            <HeaderView />
            <SmurfList />
        </React.Fragment>
    )
}

export default HomeView;