import React from 'react';

import { connect } from  'react-redux'
import { deleteFriend } from '../actions';

import './SmurfList.css';

const SmurfList = (props) =>{ 
    return (
            <div >
                <ul>
                {props.friends.map((friend,index) => {
                   return ( 
                   <div className="divList" key={index}>    
                        <li>{friend.name}</li>
                        <li>{friend.age}</li>  
                        <li>{`${friend.height} cm`}</li>
                        <button onClick={() => props.deleteFriend(friend.id)}>X</button>
                    </div> 
                   );
                })}
                </ul>    
            </div>
    )
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    friends: state.friends,
    error: state.errorMessage,
  };
};

export default connect(mapStateToProps, { deleteFriend })(SmurfList);