import React from 'react';

const DeliverSmurfForm = props => {
    return (
    <div className="add-smurf-container">
    <h2>Have a Stork Deliver a New Smurf!</h2>
        <form className="add-smurf">
            <input onChange={props.inputHandler} type="text" name="name" placeholder="name"/>
            <input onChange={props.inputHandler} type="number" name="age" placeholder="age"/>
            <input onChange={props.inputHandler} type="text" name="height" placeholder="height"/>
            <div className="buttons">
                <div className="button deliver-smurf" onClick={() => props.deliverSmurf(props.smurf)}>Deliver Smurf </div>
            </div>
        </form>
    </div>
    )
}

export default DeliverSmurfForm;