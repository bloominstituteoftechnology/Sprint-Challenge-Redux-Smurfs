import React from 'react';

const SmurfControl = props => {

    return(
        <div className='controls'>
            <button onClick={props.handleDeleteClick}>
                Delete
            </button>
        </div>
    )
}

export default SmurfControl;