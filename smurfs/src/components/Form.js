import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Form = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit} className="content">
      <span className="input input--nariko">
        <Field className="input__field input__field--nariko" name="name" component="input" type="text" />
        <label className="input__label input__label--nariko"><span className="input__label-content input__label-content--nariko">Name</span></label>
      </span>
      <span className="input input--nariko">
        <Field className="input__field input__field--nariko" name="age" component="input" type="number" />
        <label className="input__label input__label--nariko"><span className="input__label-content input__label-content--nariko">Age</span></label>
      </span>
      <span className="input input--nariko">
        <Field className="input__field input__field--nariko" name="height" component="input" type="number" />
        <label className="input__label input__label--nariko"><span className="input__label-content input__label-content--nariko">Height</span></label>
      </span>
      <span className="input">
        <button className="button button--sacnite" type="submit" disabled={pristine || submitting}>Submit</button>
        <button className="button button--sacnite" type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
      </span>
    </form>
  )
}

export default (Form = reduxForm({ form: 'Smurf' })(Form))
