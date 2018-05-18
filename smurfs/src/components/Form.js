import React from 'react'
import { Field, reduxForm } from 'redux-form'


let SmurfForm = ({ handleSubmit }) => {

    return <form onSubmit={handleSubmit}>
        <div><label htmlFor="name">Name</label>
            <Field name="name" placeholder="Name" component="input" type="text" />
        </div>
        <div><label htmlFor="age">Age</label>
            <Field name="age" placeholder="Age" component="input" type="age" />
        </div>
        <div><label htmlFor="email">Height</label>
            <Field name="height" placeholder="height" component="input" type="number" />
        </div>
        <button onClick={handleSubmit}>Add</button>
    </form>
}

SmurfForm = reduxForm({
    form: 'smurf',
    initialValues: { name: '', age: '', height: '' },
})(SmurfForm)


export default SmurfForm;