import React, { Component } from 'react';

class Form extends Component {
  state = {};

  componentDidMount() {
    const formData = {};

    this.props.fields.forEach(field => (formData[field.name] = ''));
    this.setState({
      fields: this.props.fields,
      formData,
    });
  }

  clearForm = () => {
    const formData = {};

    this.state.fields.forEach(field => (formData[field.name] = ''));
    this.setState({
      formData,
    });
  };

  handleChange = name => ({ target: { value } }) =>
    this.setState(({ formData }) => ({
      formData: { ...formData, [name]: value },
    }));

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(this.state.formData);
          this.clearForm();
        }}
      >
        {this.state.fields &&
          this.state.fields.map(field => (
            <div key={field.name}>
              <input
                onChange={this.handleChange(field.name)}
                value={this.state.formData[field.name]}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
              />
            </div>
          ))}
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
