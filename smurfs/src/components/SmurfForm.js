//IMPORT DATA
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createSmurf } from '../actions';
import '../index.css';

//SMURF FORM DATA
class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

  handleFormSubmit({ name, age, height }) {
    this.props.createSmurf({ name, age, height });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Create new smurf:</h2>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <label>Smurf Name: </label>
          <Field name="name" component="input" type="text" />
          <br />
          <br />
          <label>Age: </label>
          <Field name="age" component="input" type="number" />
          <br />
          <br />
          <label>Height: </label>
          <Field name="height" component="input" type="number" />
          <br />
          <br />
          <button className="button" action="submit">Submit Smurf</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'smurfform', fields: ['name', 'age', 'height'] })(connect(null, { createSmurf })(SmurfForm));