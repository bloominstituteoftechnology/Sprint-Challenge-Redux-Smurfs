import React from 'react';
import './styles.css'
import ListContainer from './ListContainer'
import ActionsContainer from './ActionsContainer'


const Home = () =>{
    return (
        <div className='home'>
          <ActionsContainer></ActionsContainer> 
          <ListContainer></ListContainer>
        </div>
      );
}

export default Home