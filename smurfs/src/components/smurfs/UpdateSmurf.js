import React from 'react';

const UpdateSmurf = props => {
    return (
        <div>
            <form onSubmit={props.smurfChange} >
                <input
                    className="input"
                    onChange={props.handleInputChange}
                    placeholder="Smurf's Name"
                    value={props.smurfName}
                    name="smurfName"
                />
                <input
                    className="input"
                    onChange={props.handleInputChange}
                    placeholder="Smurf's Age"
                    value={props.smurfAge}
                    name="smurfAge"
                />
                <input
                    className="input"
                    onChange={props.handleInputChange}
                    placeholder="Smurf's Height"
                    value={props.smurfHeight}
                    name="smurfHeight"
                />
                <button className="button button-update" type="submit" > Update Smurf </button>
            </form>
        </div>
    );
};

export default UpdateSmurf;