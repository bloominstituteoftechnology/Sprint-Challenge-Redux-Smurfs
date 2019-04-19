import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const AddSmurfForm = props => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
 
    
    return(
        <div className="smurf-form">
            <form>
                <label>name:</label>
                <input 
                value={name}
                onChange={e => {
                    
                    setName(e.target.value)
                }}
                type="text" />

                <label>age:</label>
                <input 
                value={age}
                onChange={e => {
                    
                    setAge(e.target.value)
                }}
                type="text" />

                <label>height:</label>
                <input 
                value={height}
                onChange={e => {
                    
                    setHeight(e.target.value)
                }}
                type="text" />

                <button 
                onClick={e => {
                    e.preventDefault();
                    const newSmurf = {
                        name: name,
                        age: age,
                        height: height,
                        id: Math.random()
                    }
                    setName("");
                    setAge("");
                    setHeight("");
                    props.addSmurf(newSmurf);
                }}
                type="submit">submit smurf</button>
            </form>
        </div>
    );
}


const mapStateToProps = state => {
    return{
        addingSmurf: state.addingSmurf
    }
}

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);
