import React, { Component } from 'react';

class Form extends Component {
  state = {};

  componentDidMount() {
    this.props.fields.forEach(field =>
      this.setState({
        fields: this.props.fields,
        formData: { [field.name]: '' },
      }),
    );
  }

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
        }}
      >
        {this.state.fields &&
          this.state.fields.map(field => (
            <div key={field.name}>
              <input
                onChange={this.handleChange(field.name)}
                value={this.state[field.name]}
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
