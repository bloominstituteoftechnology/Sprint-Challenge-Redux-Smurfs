import React, { Fragment } from 'react';

function SmurfForm(props) {
    function handleSubmit(event) {
        event.PreventDefault();
    }
    return (
        <Fragment>
            <form>
                <div className="smufBoxes">
                    <input
                        type="text"
                        value={props.smurf.name}
                        name="name"
                        onChange={props.handleChange}
                        placeholder="smurfs name..."
                    />
                </div>
                <div className="smufBoxes">
                    <input
                        type="text"
                        value={props.smurf.age}
                        name="age"
                        onChange={props.handleChange}
                        placeholder="smurfs age..."
                    />
                </div>
                <div className="smufBoxes">
                    <input
                        type="text"
                        value={props.smurf.height}
                        name="height"
                        onChange={props.handleChange}
                        placeholder="smurfs height..."
                    />
                </div>
                <button className="submitButton" onClick={handleSubmit}>Submit Smurf</button>
            </form>
        </Fragment>
    );
}
export default SmurfForm;