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

  handleSubmit = (e, smurf) => {
    e.preventDefault();
    console.log('it works.. IT WORKS!!', smurf);
    let {inputName: name, inputAge: age, inputHeight: height} = this.state;
    height = `${height} cm`
    if(!smurf)this.props.addSmurf({name, age, height});
    else this.props.updateSmurf(smurf.id, {name, age, height});
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
    console.log(this.props.seletedSmurf)
    if(this.props.seletedSmurf) {
      return (
        <form onSubmit={(e) => this.handleSubmit(e, this.props.seletedSmurf)}>
          <h1>updating {this.props.seletedSmurf.name}</h1>
          <input type='text' onChange={this.handleChange} name={'inputName'} value={this.state.inputName}  placeholder={'Smurf Name'}/>
          <input type='text' onChange={this.handleChange} name={'inputAge'} value={this.state.inputAge} placeholder={'Smurf age'}/>
          <input type='text' onChange={this.handleChange} name={'inputHeight'} value={this.state.inputHeight} placeholder={'Smurf height'}/>
          <button type={'submit'}>Submit</button>
        </form>
      )
    } else return (
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