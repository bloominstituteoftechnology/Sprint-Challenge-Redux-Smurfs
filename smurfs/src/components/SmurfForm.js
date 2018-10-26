import React from 'react';


export const SmurfForm = props =>{
    return(
        <form onSubmit={props.onSubmit} >
            <input onChange={props.handleInputChange} type="text" name="name" placeholder="name" />
            <input onChange={props.handleInputChange} type="text" name="age" placeholder="age" />
            <input onChange={props.handleInputChange} type="text" name="height" placeholder="height" />
            <input type="submit" />
        </form>
    )
}

export default SmurfForm;
