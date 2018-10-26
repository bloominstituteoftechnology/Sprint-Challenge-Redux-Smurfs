import React from 'react';
import { NavLink } from 'react-router-dom'

import { Container, Navigation } from '../Style';

const Header = () => {
    return (
        <Container>
            <Navigation>
                <NavLink exact to="/"><i className="fas fa-home"></i></NavLink>
                <NavLink exact to="/smurf-form"><i className="fas fa-plus-square"></i></NavLink>
            </Navigation>
        </Container>
    );
}

export default Header;
