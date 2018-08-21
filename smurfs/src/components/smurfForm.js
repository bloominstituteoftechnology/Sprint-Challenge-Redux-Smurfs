import React from 'react';

export default function SmurfForm(props) {
    return (
        <div>
            <form onSubmit={props.addSmurfHandler} >
                <input placeholder='name...' onChange={props.inputChangeHandler} name='name' value={props.inputName} />
                <input placeholder='age...' onChange={props.inputChangeHandler} name='age' value={props.inputAge} />
                <input placeholder='height...' onChange={props.inputChangeHandler} name='height' value={props.inputHeight} />
                <button>Recruit Smurf</button>
            </form>
        </div>
    )
}