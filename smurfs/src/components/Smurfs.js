import React from 'react';
import Smurf from './Smurf';
import './App.css';

const Smurfs = props => {
    return (
        <div className="smurfs">
            {/* {props.friends.map((friend) => {
                return (
                    <Friend
                        key={friend.id}
                        friend={friend}
                        handleDelete={props.handleDelete}
                        handleUpdate={props.handleUpdate}
                    />
                );
            })} */}
            <Smurf />
        </div>
    );
};

export default Smurfs;