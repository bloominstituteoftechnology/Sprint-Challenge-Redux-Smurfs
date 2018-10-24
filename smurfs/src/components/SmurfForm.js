import React from 'react';

const SmurfForm = props => {
    return (
        <div className="SmurfForm">
            {props.editSmurf === null ? null : <p>You are editing {props.editSmurf.name}, who is {props.editSmurf.height} tall and {props.editSmurf.age} years old.</p>}
            <form onSubmit={props.submitHandler}>
                <input
                    onChange={props.changeHandler}
                    placeholder="name"
                    value={props.value}
                    name="name"
                />
                <input
                    onChange={props.changeHandler}
                    placeholder="height (incl. units: cm)"
                    value={props.value}
                    name="height"
                />
                <input
                    onChange={props.changeHandler}
                    placeholder="age (in smurf yrs)"
                    value={props.value}
                    name="age"
                />
                <button type="submit">Add Smurf</button>
            </form>
        </div>
      );
}

export default SmurfForm;