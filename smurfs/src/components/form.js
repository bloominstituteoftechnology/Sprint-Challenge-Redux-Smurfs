import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Form = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit} className="content">
      <span className="input">
        <Field className="input__field__name" name="name" component="input" type="text" />
        <label className="input__label__name"><span className="input__label-content">Name</span></label>
      </span>
      <span className="input">
        <Field className="input__field" name="age" component="input" type="number" />
        <label className="input__label"><span className="input__label-content">Age</span></label>
      </span>
      <span className="input">
        <Field className="input__field " name="height" component="input" type="number" />
        <label className="input__label"><span className="input__label-content">Height</span></label>
      </span>
      <span className="input">
        <button className="button-1" type="submit" disabled={pristine || submitting}>Submit</button>
        <button className="button-1" type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
      </span>
    </form>
  )
}

export default (Form = reduxForm({ form: 'Smurf' })(Form))