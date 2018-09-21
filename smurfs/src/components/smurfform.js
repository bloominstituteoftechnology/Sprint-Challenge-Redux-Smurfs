import React from 'react';
import PropTypes from 'prop-types';

const SmurfForm = (props) => {
    return(
        <form onSubmit={props.submitHandler}>
            <label htmlFor='name' value='Name' />
            <input name='name' type='text' value={props.tmpSmurf.name} placeholder='Name' onChange={props.inputHandler} />
            <br />
            <label htmlFor='age' value='Age' />
            <input name='age' type='number' value={props.tmpSmurf.age} placeholder='Age' onChange={props.inputHandler} />
            <br />
            <label htmlFor='height' value='Height' />
            <input name='height' type='text' value={props.tmpSmurf.height} placeholder='Height' onChange={props.inputHandler} />
            <br />
            <br />
            <input type='submit' value='Smurf!' />
        </form>
    );
};

SmurfForm.propTypes = {
    tmpSmurf: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        height: PropTypes.string.isRequired, 
        id: PropTypes.number.isRequired
    }).isRequired, 
    inputHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired
};

export default SmurfForm;
