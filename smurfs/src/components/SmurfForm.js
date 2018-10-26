import React from 'react';

const SmurfForm = props =>{
    return(
        <form onSubmit/*props.addNewSmurf*/ >
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="age" placeholder="age" />
            <input type="text" name="height" placeholder="height" />
            <input type="submit" />
        </form>
    )
}

export default SmurfForm;