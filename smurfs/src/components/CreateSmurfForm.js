import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions'

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
    if (this.state === this.initState) {
      inputProps.value = ''
    }
    return ( 
      <div className="Create-Smurf-Form">
        <form onSubmit={this.handleOnSubmit}>
          <input 
            {...inputProps}
            smurfdata="name"
            value={this.state.name}
            placeholder={'enter smurf name'} 
          />
          <input 
            {...inputProps}
            smurfdata="age"
            value={this.state.age}
            placeholder={'enter smurf age'}
          />
          <input 
            {...inputProps}
            smurfdata="height"
            value={this.state.height}
            placeholder={'enter smurf height'}
          />
          <button 
            type="submit"
          >Submit</button>
        </form> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(
  mapStateToProps,
  {
    createSmurf
  }
)(CreateSmurfForm);