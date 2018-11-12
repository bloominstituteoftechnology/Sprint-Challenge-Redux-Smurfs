import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderView = props => {
    return (
        <header>            
            <h1>Smurfs!</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Create</NavLink>
            </nav>
        </header>
    )
}

export default HeaderView;