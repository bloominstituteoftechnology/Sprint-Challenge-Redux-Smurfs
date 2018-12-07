import React from 'react';

class FormSmurf extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: '',
      inputAge: '',
      inputHeight: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('it works.. IT WORKS!!');
    const {inputName: name, inputAge: age, inputHeight: height} = this.state;
    this.props.addSmurf({name, age, height})
    this.setState({
      inputName: '',
      inputAge: '',
      inputHeight: '',
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type='text' onChange={this.handleChange} name={'inputName'} value={this.state.inputName}  placeholder={'Smurf Name'}/>
        <input type='text' onChange={this.handleChange} name={'inputAge'} value={this.state.inputAge} placeholder={'Smurf age'}/>
        <input type='text' onChange={this.handleChange} name={'inputHeight'} value={this.state.inputHeight} placeholder={'Smurf height'}/>
        <button type={'submit'}>Submit</button>
      </form>
    )
  }
}

export default FormSmurf;