import React from 'react';
import styled from 'styled-components';
import SmurfItem from './SmurfItem';

const ListContainer = styled.div`
    width:450px;
    display:flex;
    flex-flow:column;
    justify-content:space-around;
    align-items:center;
`;

const SmurfList = (props) => {

    return (
        <ListContainer>
           { props.smurfs.map((smurf)=>{
                return <SmurfItem smurf={smurf}/>
            })}
        </ListContainer>
    )
}

export default SmurfList;