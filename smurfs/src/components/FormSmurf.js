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
      selected: false
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    console.log(this.props.selectedSmurf, 'checking selected')
    if(this.props.selectedSmurf) {
      // if(this.state.selected)this.setState({
      //   inputName: this.props.selectedSmurf.name,
      //   inputAge: this.props.selectedSmurf.age,
      //   inputHeight: this.props.selectedSmurf.height,
      //   selected: true,
      // })
      return (
        <React.Fragment>
          <h1>updating {this.props.selectedSmurf.name}</h1>
          <form onSubmit={(e) => this.handleSubmit(e, this.props.selectedSmurf)}>
            <input type='text' onChange={this.handleChange} name={'inputName'} value={this.state.inputName}  placeholder={'Smurf Name'}/>
            <input type='text' onChange={this.handleChange} name={'inputAge'} value={this.state.inputAge} placeholder={'Smurf age'}/>
            <input type='text' onChange={this.handleChange} name={'inputHeight'} value={this.state.inputHeight} placeholder={'Smurf height'}/>
            <button type={'submit'}>Submit</button>
          </form>
        </React.Fragment>
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