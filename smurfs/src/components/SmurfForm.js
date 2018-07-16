import React from 'react';
import { Field, reduxForm} from 'redux-form'
const SmurfForm = (props) => {
    const { handleSubmit } = props
    return (
        <div>
            <form onSubmit = { handleSubmit }>
                <div>
                    <label htmlFor="Name">Name</label>
                    <Field name="name" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="age">AGE</label>
                    <Field name="age" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="height">height</label>
                    <Field name="height" component="input" type="text" />
                </div>
                <button>Add Smurf</button>
            </form>
        </div>
    );
};

export default reduxForm({form : 'smurfForm'})(SmurfForm);