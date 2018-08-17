import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    width:100%;
    display:flex;
    flex-flow:column;
    align-items:center;
`;

const SmurfItem = (props) => {

    return (
        <ItemContainer>
            <div>{props.smurf.name}</div>
        </ItemContainer>
    )
}

export default SmurfItem;