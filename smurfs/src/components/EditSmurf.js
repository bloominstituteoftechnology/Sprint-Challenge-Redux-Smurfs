import React from 'react';

const EditSmurf = (props) => {

    return (
        <div className='editInput'>
             <form  onSubmit={props.updateSmurf}>
                <input
                    type='text'
                    placeholder={props.smurf.name}
                    onChange={props.editHandler}
                    name='name'
                />
                <input
                    type='number'
                    placeholder={props.smurf.age}
                    onChange={props.editHandler}
                    name='age'
                />
                <input
                    type='text'
                    placeholder={props.smurf.height}
                    onChange={props.editHandler}
                    name='height'
                />                
            </form>
        </div>
    )
}
 
export default EditSmurf;