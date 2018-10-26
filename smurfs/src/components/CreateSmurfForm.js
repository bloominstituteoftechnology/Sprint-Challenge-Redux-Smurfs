import React ,{ Component } from 'react';
import { createSmurf } from '../actions';

class CreateSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.initState = {
      name: '',
      age: '',
      height: ''
    }
    this.state = this.initState
  }
  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.createSmurf(this.state)
    console.log('submitted', this.state)
    this.setState({
      name: '',
      age: '',
      height: ''
    })
    this.forceUpdate()
  }
  handleOnChange = (event) => {
    const stateValue = event.target.placeholder.split(' ').pop()
    this.setState({
      [stateValue]: event.target.value
    })
  }
  render() { 
    const inputProps = {
      type: 'input',
      onChange: this.handleOnChange,
    }
    if (this.state == this.initState) {
      inputProps.value = ''
    }
    return ( 
      <div className="Create-Smurf-From">
        <form onSubmit={this.handleOnSubmit}>
          <input 
            {...inputProps}
            smurfdata="name"
            placeholder={'enter smurf name'} 
          />
          <input 
            {...inputProps}
            smurfdata="age"
            placeholder={'enter smurf age'}
          />
          <input 
            {...inputProps}
            smurfdata="height"
            placeholder={'enter smurf height'}
          />
          <button 
            type="submit"
            onClick={this.handleOnSubmit}
          >Submit</button>
        </form> 
      </div>
    );
  }
}
 
export default CreateSmurfForm;