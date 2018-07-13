import React from 'react';

export default (props) => {
    return (
        <div>
            <form onSubmit={props.createSmurf} >
                <input
                    className="input"
                    onChange={props.handleInputChange}
                    placeholder="Name"
                    value={props.smurfName}
                    name="smurfName"
                />
                <input 
                    className="input"
                    onChange={props.handleInputChange}
                    placeholder="Age"
                    value={props.smurfAge}
                    name="smurfAge"
                />
                <input 
                    className="input"
                    onChange={props.handleInputChange}
                    placeholder="Height"
                    value={props.smurfHeight}
                    name="smurfHeight"
                />
                <button className="button button-add" type="submit">Add New Smurf</button>
            </form>
        </div>
    );
}