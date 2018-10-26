import React from 'react';

const SmurfAdd = (props) => {
    return (
        <div>
            <form onSubmit={props.postSmurf}>
                <input name='name' placeholder='NAME' onChange={props.changeHandler}/>
                <input name='age' placeholder='AGE' onChange={props.changeHandler}/>
                <input name='height' placeholder='HEIGHT' onChange={props.changeHandler}/>
                <button onClick={props.postSmurf}>Add Smurf</button>
            </form>
        </div>
    )
}

export default SmurfAdd;