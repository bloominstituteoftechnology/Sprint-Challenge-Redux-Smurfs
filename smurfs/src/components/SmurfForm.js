import React from 'react';

const SmurfForm = props => {
    return (
        <div className="SmurfForm">
            <form onSubmit={props.submitHandler}>
                <input
                    onChange={props.changeHandler}
                    placeholder="name"
                    value={props.value}
                    name="name"
                />
                <input
                    onChange={props.changeHandler}
                    placeholder="age (in smurf yrs)"
                    value={props.value}
                    name="age"
                />
                <input
                    onChange={props.changeHandler}
                    placeholder="height (incl. units: cm)"
                    value={props.value}
                    name="height"
                />
                <button type="submit">Add Smurf</button>
            </form>
        </div>
      );
}

export default SmurfForm;