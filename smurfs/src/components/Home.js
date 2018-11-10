import React from 'react';
import './App.css';
import village from '../img/smurfVillage.jpg';


const Home = () => {
    return(
        <div>
            <h1>Welcome to the Village!</h1>
            <img src={village} alt='village' className="villageimg"/>
        </div>
    )
}

export default Home;