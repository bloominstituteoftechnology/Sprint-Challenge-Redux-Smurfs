import React from 'react' 

function AddNewSmurf(props){
    return (
        <div>
            <label>
                Name <input type="text" name="name" onChange={props.onChange}/>
            </label>
            <label>
                Age <input type="number" name="age" onChange={props.onChange}/>
            </label>
            <label>
                Height <input type="text" name="height" onChange={props.onChange}/>
            </label>
            <button onClick={props.onClick}>Submit</button>
        </div>
    )
}

export default AddNewSmurf